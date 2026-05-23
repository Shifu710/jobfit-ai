import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  FileSearch,
  Languages,
  LockKeyhole,
  MessageSquareText,
  PenLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  ["Resume vs Job Match Score", FileSearch],
  ["Skill Gap Analysis", BarChart3],
  ["ATS Keyword Suggestions", BadgeCheck],
  ["AI Resume Rewrite", PenLine],
  ["Interview Preparation", MessageSquareText],
  ["English/Chinese Output", Languages],
  ["Privacy-first Demo Mode", LockKeyhole],
  ["Saved Analysis History", ShieldCheck],
];

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-slate-950">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold">JobFit AI</p>
            <p className="text-xs text-muted-foreground">职配智选</p>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary">
            <Link href="/case-study/jobfit-ai">Case study</Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-16">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="badge bg-cyan-300/15 text-cyan-100 ring-1 ring-cyan-300/30">
              <BrainCircuit className="h-4 w-4" />
              AI resume matching for honest career improvement
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Match Your Resume to Any Job with AI
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-muted-foreground">
              用 AI 分析你的简历与岗位匹配度。Get transparent application
              readiness scoring, missing skills, ATS keywords, resume rewrites,
              and interview prep in English or Chinese.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/dashboard/analyze">
                  Try Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/case-study/jobfit-ai">View Case Study</Link>
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Application readiness</p>
                  <p className="mt-1 text-5xl font-bold text-cyan-200">82</p>
                </div>
                <span className="badge bg-emerald-400/15 text-emerald-100">Strong Match</span>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  ["Skills match", 86],
                  ["Experience/project match", 78],
                  ["Keyword match", 84],
                  ["Education relevance", 76],
                  ["Resume clarity", 88],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Problem", "Job seekers guess at keywords, struggle with long JDs, and rarely know why a resume feels weak."],
            ["Solution", "JobFit AI shows weighted scoring, missing skills, safe rewrite suggestions, and interview focus areas."],
            ["Privacy", "Demo mode works with sample data. AI keys stay server-side. Users choose whether to save resume text."],
          ].map(([title, text]) => (
            <Card key={title}>
              <CardContent>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Features</p>
          <h2 className="mt-3 text-3xl font-bold">Built like a serious AI SaaS dashboard</h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([label, Icon]) => (
            <Card key={label as string}>
              <CardContent>
                <Icon className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 font-semibold">{label as string}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Card>
          <CardContent className="grid gap-6 md:grid-cols-4">
            {["Paste resume", "Add job description", "Run AI analysis", "Get action plan"].map((step, index) => (
              <div key={step}>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-cyan-300 text-slate-950 font-bold">
                  {index + 1}
                </div>
                <p className="mt-4 font-semibold">{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-cyan-300/25 bg-cyan-300/10 p-8 text-center">
          <h2 className="text-3xl font-bold">Ready to improve your next application?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-muted-foreground">
            The demo is designed for recruiters to test immediately, with mock AI
            fallback and optional OpenAI-powered analysis when configured.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <Link href="/dashboard/analyze">Try Demo</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/result/sample-share">View Shared Result</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
