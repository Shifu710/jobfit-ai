import type { JobDescription } from "./types";

export const mockJobs: JobDescription[] = [
  {
    id: "job-react-intern",
    title: "React Frontend Intern",
    company: "US Startup",
    location: "Remote",
    workType: "remote",
    language: "en",
    requiredSkills: ["React", "TypeScript", "REST APIs", "Git", "basic testing"],
    niceToHaveSkills: ["Next.js", "Tailwind CSS", "Storybook"],
    content:
      "We are looking for a React Frontend Intern who can build responsive user interfaces, work with REST APIs, use Git, and write basic tests. Experience with TypeScript is required. Next.js, Tailwind CSS, and Storybook are nice to have.",
  },
  {
    id: "job-ai-saas-fullstack",
    title: "AI SaaS Full-Stack Intern",
    company: "International AI SaaS Team",
    location: "Remote",
    workType: "remote",
    language: "en",
    requiredSkills: ["Next.js", "API integration", "TypeScript", "Prisma"],
    niceToHaveSkills: ["AI SDK", "Python", "Docker"],
    content:
      "Join our AI SaaS team to build dashboard workflows, integrate AI APIs, and ship full-stack product features. Requirements include Next.js, TypeScript, API integration, and Prisma or similar ORM. AI SDK experience, Python, and Docker are a plus.",
  },
  {
    id: "job-wechat-mini",
    title: "微信小程序开发实习生",
    company: "杭州本地生活平台",
    location: "杭州 / 远程可沟通",
    workType: "hybrid",
    language: "zh",
    requiredSkills: ["微信小程序", "JavaScript", "CSS", "React 或 Vue 基础"],
    niceToHaveSkills: ["Taro", "TypeScript", "上线项目经验"],
    content:
      "岗位职责：参与微信小程序页面开发、组件封装和接口联调，配合产品和设计完成用户端功能。任职要求：熟悉 JavaScript、CSS，了解微信小程序开发流程，有 React 或 Vue 基础；加分项：使用过 Taro、TypeScript，有个人上线项目或完整 Demo。",
  },
  {
    id: "job-nextjs-remote",
    title: "Junior Next.js Developer",
    company: "Remote Product Studio",
    location: "Remote",
    workType: "remote",
    language: "en",
    requiredSkills: ["Next.js App Router", "TypeScript", "Tailwind CSS", "REST or GraphQL"],
    niceToHaveSkills: ["Supabase", "Vercel", "CI/CD basics"],
    content:
      "We need a junior developer who can build fast Next.js App Router interfaces with TypeScript and Tailwind CSS. You should understand REST or GraphQL APIs. Supabase, Vercel, and CI/CD basics are helpful.",
  },
  {
    id: "job-ai-product-intern",
    title: "Front-End AI Product Intern",
    company: "Bilingual AI Product Team",
    location: "Singapore / Remote",
    workType: "hybrid",
    language: "bilingual",
    requiredSkills: ["React", "API integration", "AI product communication"],
    niceToHaveSkills: ["Python scripting", "Prompt engineering", "Figma"],
    content:
      "We are hiring a bilingual frontend intern to build AI product workflows. Requirements: React, API integration, clear communication with AI product managers, and comfort working in English/Chinese contexts. Nice to have: Python scripting, prompt engineering basics, and Figma.",
  },
];
