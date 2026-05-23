import type { ResumeProfile } from "./types";

export const mockResumes: ResumeProfile[] = [
  {
    id: "resume-react-junior",
    title: "Junior React Developer",
    targetRole: "React Frontend Intern",
    language: "en",
    experienceYears: 1,
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Git", "Node.js basics"],
    projects: ["Personal portfolio", "Firebase todo app", "Responsive weather dashboard"],
    content:
      "Computer Science student building React and TypeScript projects. Created a portfolio website, a todo app with Firebase auth, and a responsive weather dashboard. Comfortable with JavaScript, TypeScript, Tailwind CSS, Git, REST APIs, and basic Node.js. Looking for a frontend internship to grow through real product work.",
  },
  {
    id: "resume-ai-fullstack",
    title: "AI-assisted Full-Stack Developer",
    targetRole: "AI SaaS Full-Stack Intern",
    language: "en",
    experienceYears: 1.5,
    skills: ["Next.js", "Python", "OpenAI API", "Supabase", "Prisma", "Docker basics", "TypeScript"],
    projects: ["AI chatbot", "Resume parser prototype", "WeChat mini-program clone"],
    content:
      "Full-stack developer focused on AI-assisted web apps. Built a Next.js AI chatbot, a resume parser prototype, and a WeChat mini-program style commerce demo. Used Supabase, Prisma, TypeScript, Python scripts, OpenAI-compatible APIs, and Vercel deployment. Strong interest in AI SaaS workflows and privacy-aware product design.",
  },
  {
    id: "resume-bilingual-cs",
    title: "CS Student Internship Bilingual",
    targetRole: "Front-End AI Product Intern",
    language: "bilingual",
    experienceYears: 0,
    skills: ["React", "Vue", "Java", "Python", "SQL", "English", "Mandarin Chinese"],
    projects: ["Academic data visualization", "Campus event app"],
    content:
      "Malaysian Computer Science student with English and Mandarin communication skills. Built academic data visualization dashboards and a campus event app. Familiar with React, Vue, Java, Python, SQL, Git, and API integration. Interested in frontend engineering, AI product tools, and international teams.",
  },
];
