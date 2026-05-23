import type { AnalysisResult } from "./types";

export const mockAnalyses: AnalysisResult[] = [
  {
    id: "analysis-strong",
    shareToken: "sample-share",
    title: "AI SaaS Full-Stack Intern",
    overallScore: 82,
    scoreBreakdown: { skills: 86, experience: 78, keywords: 84, education: 76, projects: 88 },
    scoringExplanation:
      "Strong application readiness because the resume shows Next.js, TypeScript, Supabase, Prisma, AI API integration, and relevant AI SaaS projects. The main gap is limited production teamwork evidence.",
    summary:
      "The profile is a strong fit for an AI SaaS internship. It connects full-stack delivery, AI API usage, and product-minded project examples.",
    strengths: ["Next.js and TypeScript are directly relevant", "AI API projects match the role", "Supabase and Prisma align with full-stack requirements"],
    weaknesses: ["Limited testing evidence", "Docker is only basic", "Team collaboration examples could be clearer"],
    missingSkills: ["Automated testing", "CI/CD basics", "Production monitoring"],
    missingKeywords: ["unit tests", "integration tests", "deployment pipeline"],
    recommendedKeywords: ["Next.js App Router", "AI API integration", "Prisma ORM", "Supabase Auth", "Vercel deployment"],
    improvedSummary:
      "AI-focused full-stack developer building Next.js and TypeScript SaaS demos with OpenAI-compatible APIs, Supabase, Prisma, and Vercel deployment.",
    rewrittenBullets: [
      {
        original: "Built AI chatbot.",
        improved: "Built a Next.js AI chatbot with server-side OpenAI-compatible API calls and a structured response workflow.",
        reason: "Adds stack, security boundary, and product context without inventing outcomes.",
      },
      {
        original: "Made resume parser prototype.",
        improved: "Created a resume parser prototype to extract skills and project signals for career matching workflows.",
        reason: "Clarifies the business use case and technical relevance.",
      },
      {
        original: "Used Supabase.",
        improved: "Used Supabase and Prisma to model application data and prepare for production database integration.",
        reason: "Connects tools to architecture decisions.",
      },
    ],
    interviewQuestions: [
      { question: "How would you keep an AI provider key out of the browser?", type: "technical", reason: "Tests backend security understanding." },
      { question: "Which parts of your AI chatbot are reusable for a SaaS workflow?", type: "project", reason: "Checks product thinking." },
      { question: "Tell me about a time you debugged a deployment issue.", type: "behavioral", reason: "Explores persistence and practical delivery." },
      { question: "How would you validate AI output before saving it?", type: "technical", reason: "Tests reliability awareness." },
      { question: "Why do you want an AI SaaS internship?", type: "hr", reason: "Checks motivation." },
    ],
    actionPlan: [
      { priority: "high", task: "Add one testing example to the resume.", reason: "Testing is a common junior role requirement." },
      { priority: "medium", task: "Explain Docker basics with one concrete project sentence.", reason: "The role lists Docker as a plus." },
      { priority: "low", task: "Add one team or review workflow example.", reason: "It reduces concern about solo-only project experience." },
    ],
    createdAt: "2026-05-23",
  },
  {
    id: "analysis-good",
    shareToken: "good-potential",
    title: "React Frontend Intern",
    overallScore: 68,
    scoreBreakdown: { skills: 72, experience: 60, keywords: 70, education: 74, projects: 62 },
    scoringExplanation:
      "Good potential: core React, TypeScript, Tailwind, and API experience are present, but testing and team workflow details are thin.",
    summary: "The resume is credible for a frontend internship but needs clearer impact and testing language.",
    strengths: ["React and TypeScript match", "Tailwind appears in projects", "CS education supports internship fit"],
    weaknesses: ["Few measurable outcomes", "Testing not shown", "REST API experience needs detail"],
    missingSkills: ["Testing Library", "Storybook", "Accessibility basics"],
    missingKeywords: ["REST API", "unit testing", "responsive components"],
    recommendedKeywords: ["React components", "TypeScript props", "responsive UI", "Git workflow"],
    improvedSummary: "Frontend-focused CS student building responsive React and TypeScript interfaces with Tailwind CSS and API integration.",
    rewrittenBullets: [
      { original: "Made portfolio.", improved: "Built a responsive portfolio in React/Next.js to present project case studies and bilingual content.", reason: "Adds product purpose." },
      { original: "Todo app.", improved: "Developed a todo app with Firebase authentication and persistent task state.", reason: "Names architecture pieces." },
      { original: "Weather app.", improved: "Integrated a weather API into a responsive dashboard with current conditions and forecast views.", reason: "Clarifies API work." },
    ],
    interviewQuestions: [
      { question: "How do props and state differ in React?", type: "technical", reason: "Core frontend concept." },
      { question: "How did you structure your portfolio components?", type: "project", reason: "Project architecture discussion." },
      { question: "How would you test a search form?", type: "technical", reason: "Testing gap." },
      { question: "What feedback improved one of your projects?", type: "behavioral", reason: "Growth mindset." },
      { question: "Why this frontend role?", type: "hr", reason: "Motivation." },
    ],
    actionPlan: [
      { priority: "high", task: "Add REST API and testing keywords honestly if you have examples.", reason: "These are role requirements." },
      { priority: "medium", task: "Rewrite project bullets with stack + outcome.", reason: "Current bullets are too plain." },
      { priority: "low", task: "Add accessibility basics to learning plan.", reason: "It improves frontend credibility." },
    ],
    createdAt: "2026-05-21",
  },
];
