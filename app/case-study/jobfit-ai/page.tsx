import Link from "next/link";
import {
  BrainCircuit,
  Database,
  GitBranch,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Project overview and motivation",
    text: "JobFit AI is a portfolio-grade AI SaaS demo for job seekers. I built it to show practical full-stack product thinking: structured AI output, transparent scoring, privacy messaging, bilingual UX, and a demo mode that works without external setup.",
  },
  {
    title: "Problem and target users",
    text: "Students and early-career applicants often paste the same resume into every role. They need honest feedback about relevant skills, missing keywords, project evidence, and interview preparation areas.",
  },
  {
    title: "Solution and key features",
    text: "The app compares resume text with a job description, calculates application readiness, explains the score, lists gaps, rewrites bullets safely, and generates interview questions.",
  },
  {
    title: "AI workflow",
    text: "All AI calls go through server-side API routes. The prompt forbids protected-attribute evaluation and unsupported fabrication. If AI_API_KEY is missing, a realistic mock analysis keeps the demo reliable.",
  },
  {
    title: "Tech stack choices",
    text: "Next.js App Router for routing, TypeScript for safety, Tailwind/shadcn-style components for UI, TanStack Query for server state, Recharts for analytics, Zod for validation, and OpenAI-compatible API support.",
  },
  {
    title: "Privacy and security",
    text: "Resume text is treated as sensitive. API keys never reach the browser. Demo mode avoids storing user input. Production plans include Supabase Auth, Prisma, PostgreSQL, and rate limiting.",
  },
  {
    title: "Bias and fairness",
    text: "The score represents application readiness, not hiring probability. The AI must not infer or score age, gender, race, nationality, religion, health, family status, or political views.",
  },
  {
    title: "Lessons learned",
    text: "The important design challenge was making the AI useful without turning it into a black box or a ghostwriter. Every rewritten bullet includes a reason and avoids adding claims the user cannot defend.",
  },
];

export default function CaseStudyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Portfolio case study</p>
          <h1 className="mt-3 text-4xl font-bold">JobFit AI · 职配智选</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            AI-powered resume matching, skill gap analysis, and bilingual career
            improvement assistant for junior developers and internship applicants.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/dashboard/analyze">Live demo</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="https://github.com/Shifu710/jobfit-ai">GitHub</Link>
          </Button>
        </div>
      </div>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          [BrainCircuit, "AI route", "OpenAI-compatible server route with mock fallback."],
          [LockKeyhole, "Privacy", "No client-side AI key and no protected-attribute scoring."],
          [Scale, "Transparent scoring", "Weighted readiness score with explanation."],
        ].map(([Icon, title, text]) => (
          <Card key={title as string}>
            <CardContent>
              <Icon className="h-6 w-6 text-cyan-300" />
              <CardTitle className="mt-4 text-base">{title as string}</CardTitle>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid gap-5">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardContent>
              <CardTitle>{section.title}</CardTitle>
              <p className="mt-3 leading-7 text-muted-foreground">{section.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <Card>
          <CardContent>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-cyan-300" />
              Architecture diagram
            </CardTitle>
            <div className="mt-5 space-y-3 text-sm">
              {[
                "Landing / Login / Dashboard UI",
                "Analyzer form with Zod validation",
                "POST /api/ai/analyze-match",
                "OpenAI-compatible provider or mock fallback",
                "Analysis result + shareable public page",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-cyan-300 text-slate-950 font-bold">{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-cyan-300" />
              Database design overview
            </CardTitle>
            <div className="mt-5 flex flex-wrap gap-2">
              {["User", "Resume", "JobDescription", "Analysis", "ResumeSuggestion", "InterviewQuestion", "AiGenerationLog"].map((model) => (
                <span key={model} className="badge bg-muted text-muted-foreground">{model}</span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Prisma schema is included for the full-stack upgrade. Phase 1 uses
              mock data to keep the public demo stable and recruiter-friendly.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-8 rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 h-5 w-5 text-emerald-300" />
          <p className="leading-7 text-emerald-50">
            AI-assisted development was used to plan architecture, generate
            component drafts, debug TypeScript issues, and improve bilingual
            documentation. Product direction, fairness rules, architecture, and
            final implementation decisions were reviewed and adjusted manually.
          </p>
        </div>
      </section>
    </main>
  );
}
