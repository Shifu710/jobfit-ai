import { clampScore } from "@/lib/utils";
import type { AnalyzeMatchInput } from "@/lib/validations/analysis";
import type { AnalysisResult } from "@/lib/data/types";

const techTerms = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "Prisma",
  "Python",
  "OpenAI",
  "Docker",
  "Testing",
  "Vue",
  "SQL",
];

function extractTerms(text: string) {
  const normalized = text.toLowerCase();
  return techTerms.filter((term) => normalized.includes(term.toLowerCase()));
}

export function createMockAnalysis(input: AnalyzeMatchInput): AnalysisResult {
  const resumeTerms = extractTerms(input.resumeText);
  const jobTerms = extractTerms(input.jobDescription);
  const overlap = jobTerms.filter((term) => resumeTerms.includes(term));
  const missing = jobTerms.filter((term) => !resumeTerms.includes(term));
  const densityScore = clampScore(42 + overlap.length * 8 + Math.min(input.resumeText.length / 180, 18));
  const score = input.analysisType === "skills-gap" ? Math.min(densityScore, 76) : densityScore;
  const role = input.targetRole || "Target role";
  const bilingual = input.outputLanguage === "bilingual";
  const zh = input.outputLanguage === "zh";

  return {
    id: `analysis-${Date.now()}`,
    shareToken: "sample-share",
    title: role,
    overallScore: score,
    scoreBreakdown: {
      skills: clampScore(score + 4),
      experience: clampScore(score - 5),
      keywords: clampScore(score + overlap.length * 2),
      education: clampScore(score - 2),
      projects: clampScore(score + 1),
    },
    scoringExplanation: zh
      ? `该分数代表申请准备度，不是录用概率。简历与岗位有 ${overlap.length} 个明显技术关键词重合，但仍需要补充 ${missing.slice(0, 3).join("、") || "岗位核心关键词"} 的真实证据。`
      : `This score represents application readiness, not hiring probability. The resume overlaps with ${overlap.length} job-relevant technical signals, but needs clearer evidence for ${missing.slice(0, 3).join(", ") || "several required keywords"}.`,
    summary: bilingual
      ? "EN: The resume has a credible foundation for this role, but should add clearer project evidence and role-specific keywords.\n中文：这份简历具备一定基础，但需要补充更清楚的项目证据和岗位关键词。"
      : zh
        ? "这份简历具备一定基础，但需要更清楚地展示与岗位相关的技能、项目和可验证成果。"
        : "The resume has a credible foundation for this role, but should add clearer project evidence and role-specific keywords.",
    strengths: [
      `${overlap[0] || "Frontend"} experience is relevant to the role.`,
      "Project-based learning is visible and useful for junior applications.",
      "The resume avoids unsupported senior-level claims.",
    ],
    weaknesses: [
      "Some project bullets describe tasks but not impact or technical decisions.",
      "Testing, deployment, or teamwork evidence could be stronger.",
      "The summary can be more specific to the target role.",
    ],
    missingSkills: missing.length ? missing : ["Testing", "CI/CD basics", "Accessibility"],
    missingKeywords: missing.length ? missing.map((term) => `${term} project evidence`) : ["unit testing", "API integration", "deployment workflow"],
    recommendedKeywords: Array.from(new Set([...overlap, "application readiness", "responsive UI", "server-side API route"])).slice(0, 8),
    improvedSummary: zh
      ? `面向 ${role} 的初级开发者，具备 ${resumeTerms.slice(0, 4).join("、") || "前端开发"} 基础，正在通过真实项目提升 API 集成、产品思维和部署能力。`
      : `Early-career developer targeting ${role}, with practical experience in ${resumeTerms.slice(0, 4).join(", ") || "frontend development"} and a focus on real project delivery, API integration, and deployable product demos.`,
    rewrittenBullets: [
      {
        original: "Built web projects.",
        improved: "Built deployable web projects with clear user flows, responsive UI, and documented technical decisions.",
        reason: "Adds delivery quality without inventing metrics.",
      },
      {
        original: "Used AI API.",
        improved: "Integrated an AI API through server-side routes so provider keys stay out of the browser.",
        reason: "Shows security awareness and a real implementation boundary.",
      },
      {
        original: "Made dashboard.",
        improved: "Created a dashboard interface to visualize score trends, missing skills, and recent analysis history.",
        reason: "Connects UI work to user value.",
      },
    ],
    interviewQuestions: [
      { question: "How did you decide which skills were relevant to the job description?", type: "technical", reason: "Checks matching logic and product thinking." },
      { question: "Explain one project where you handled API data from request to UI.", type: "project", reason: "Validates full implementation understanding." },
      { question: "How do you prevent AI suggestions from fabricating resume claims?", type: "technical", reason: "Tests responsible AI awareness." },
      { question: "Tell me about a time you improved a project after feedback.", type: "behavioral", reason: "Assesses learning mindset." },
      { question: "Why are you interested in this role?", type: "hr", reason: "Checks role motivation and communication." },
    ],
    actionPlan: [
      { priority: "high", task: "Add 2 project bullets that mention the target role's required stack.", reason: "This improves keyword and project relevance." },
      { priority: "medium", task: "Add one honest testing or debugging example.", reason: "Junior roles value practical reliability signals." },
      { priority: "low", task: "Prepare short interview stories for each listed project.", reason: "Every resume claim should be explainable." },
    ],
    createdAt: new Date().toISOString(),
  };
}
