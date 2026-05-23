import OpenAI from "openai";

import { careerAssistantSystemPrompt, jsonInstruction } from "@/lib/ai/prompts";
import { createMockAnalysis } from "@/lib/ai/mock-ai";
import type { AnalysisResult } from "@/lib/data/types";
import type { AnalyzeMatchInput } from "@/lib/validations/analysis";

function normalizeResult(input: AnalyzeMatchInput, raw: Partial<AnalysisResult>): AnalysisResult {
  const fallback = createMockAnalysis(input);

  return {
    ...fallback,
    ...raw,
    id: fallback.id,
    shareToken: fallback.shareToken,
    title: input.targetRole || raw.title || fallback.title,
    createdAt: fallback.createdAt,
    scoreBreakdown: {
      ...fallback.scoreBreakdown,
      ...raw.scoreBreakdown,
    },
  };
}

export async function analyzeMatch(input: AnalyzeMatchInput) {
  if (!process.env.AI_API_KEY) {
    return createMockAnalysis(input);
  }

  const client = new OpenAI({
    apiKey: process.env.AI_API_KEY,
    baseURL: process.env.AI_BASE_URL || undefined,
  });

  const completion = await client.chat.completions.create({
    model: process.env.AI_MODEL || "gpt-4o-mini",
    response_format: { type: "json_object" },
    temperature: 0.2,
    messages: [
      { role: "system", content: `${careerAssistantSystemPrompt}\n${jsonInstruction}` },
      {
        role: "user",
        content: JSON.stringify({
          resumeText: input.resumeText,
          jobDescription: input.jobDescription,
          targetRole: input.targetRole,
          companyName: input.companyName,
          outputLanguage: input.outputLanguage,
          analysisType: input.analysisType,
        }),
      },
    ],
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    return createMockAnalysis(input);
  }

  try {
    return normalizeResult(input, JSON.parse(content));
  } catch {
    return createMockAnalysis(input);
  }
}
