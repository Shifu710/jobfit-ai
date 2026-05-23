export type OutputLanguage = "en" | "zh" | "bilingual";
export type AnalysisType = "detailed" | "skills-gap";

export type ScoreBreakdown = {
  skills: number;
  experience: number;
  keywords: number;
  education: number;
  projects: number;
};

export type RewrittenBullet = {
  original: string;
  improved: string;
  reason: string;
};

export type InterviewQuestion = {
  question: string;
  type: "technical" | "project" | "hr" | "behavioral";
  reason: string;
  answerTips?: string;
};

export type ActionPlanItem = {
  priority: "high" | "medium" | "low";
  task: string;
  reason: string;
};

export type AnalysisResult = {
  id: string;
  shareToken: string;
  title: string;
  overallScore: number;
  scoreBreakdown: ScoreBreakdown;
  scoringExplanation: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  missingSkills: string[];
  missingKeywords: string[];
  recommendedKeywords: string[];
  improvedSummary: string;
  rewrittenBullets: RewrittenBullet[];
  interviewQuestions: InterviewQuestion[];
  actionPlan: ActionPlanItem[];
  createdAt: string;
};

export type ResumeProfile = {
  id: string;
  title: string;
  targetRole: string;
  language: "en" | "zh" | "bilingual";
  content: string;
  skills: string[];
  projects: string[];
  experienceYears: number;
};

export type JobDescription = {
  id: string;
  title: string;
  company: string;
  location: string;
  workType: "remote" | "hybrid" | "onsite";
  language: "en" | "zh" | "bilingual";
  content: string;
  requiredSkills: string[];
  niceToHaveSkills: string[];
};
