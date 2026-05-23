import { z } from "zod";

export const analyzeMatchSchema = z.object({
  resumeText: z.string().min(80, "Paste at least 80 characters of resume text.").max(8000),
  jobDescription: z.string().min(80, "Paste at least 80 characters of job description.").max(4000),
  targetRole: z.string().max(120).optional(),
  companyName: z.string().max(120).optional(),
  outputLanguage: z.enum(["en", "zh", "bilingual"]).default("en"),
  analysisType: z.enum(["detailed", "skills-gap"]).default("detailed"),
});

export type AnalyzeMatchInput = z.infer<typeof analyzeMatchSchema>;
