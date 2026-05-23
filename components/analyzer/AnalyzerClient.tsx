"use client";

import { useMutation } from "@tanstack/react-query";
import { ClipboardPaste, FileText, RotateCcw, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { AnalysisResultView } from "@/components/results/AnalysisResultView";
import { LoadingState } from "@/components/shared/LoadingState";
import { PrivacyNotice } from "@/components/shared/PrivacyNotice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mockJobs } from "@/lib/data/mock-jobs";
import { mockResumes } from "@/lib/data/mock-resumes";
import type { AnalysisResult, AnalysisType, OutputLanguage } from "@/lib/data/types";

const steps = ["Resume", "Job", "Analysis type", "Results"];

export function AnalyzerClient() {
  const [step, setStep] = useState(0);
  const [resumeTitle, setResumeTitle] = useState("AI-assisted Full-Stack Developer");
  const [targetRole, setTargetRole] = useState("AI SaaS Full-Stack Intern");
  const [companyName, setCompanyName] = useState("International AI SaaS Team");
  const [resumeText, setResumeText] = useState(mockResumes[1].content);
  const [jobDescription, setJobDescription] = useState(mockJobs[1].content);
  const [outputLanguage, setOutputLanguage] = useState<OutputLanguage>("bilingual");
  const [analysisType, setAnalysisType] = useState<AnalysisType>("detailed");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/ai/analyze-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeText,
          jobDescription,
          targetRole,
          companyName,
          outputLanguage,
          analysisType,
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Analysis failed");
      return payload.data as AnalysisResult;
    },
    onSuccess: (data) => {
      setResult(data);
      setStep(3);
    },
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <CardTitle>Resume Analyzer</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                Four-step flow: resume, job description, analysis mode, result.
              </p>
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setResult(null);
                setStep(0);
              }}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
          <div className="mt-6 h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-4">
            {steps.map((label, index) => (
              <span key={label} className={index === step ? "text-cyan-200" : ""}>
                {index + 1}. {label}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {step === 0 && (
        <Card>
          <CardContent className="space-y-5">
            <CardTitle>Add Resume</CardTitle>
            <div className="grid gap-4 md:grid-cols-2">
              <Input value={resumeTitle} onChange={(event) => setResumeTitle(event.target.value)} aria-label="Resume title" />
              <Input value={targetRole} onChange={(event) => setTargetRole(event.target.value)} aria-label="Target role" />
            </div>
            <div className="rounded-xl border border-dashed border-border bg-muted p-5 text-sm text-muted-foreground">
              <FileText className="mb-2 h-5 w-5 text-cyan-300" />
              PDF/DOCX upload coming soon. Paste your resume text below for Phase 1.
            </div>
            <Textarea value={resumeText} onChange={(event) => setResumeText(event.target.value)} rows={10} />
            <PrivacyNotice />
            <div className="flex justify-between gap-3">
              <Button type="button" variant="secondary" onClick={() => setResumeText(mockResumes[1].content)}>
                <ClipboardPaste className="h-4 w-4" />
                Use sample
              </Button>
              <Button type="button" onClick={() => setStep(1)}>Next</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 1 && (
        <Card>
          <CardContent className="space-y-5">
            <CardTitle>Add Job Description</CardTitle>
            <div className="grid gap-4 md:grid-cols-3">
              <Input value={targetRole} onChange={(event) => setTargetRole(event.target.value)} aria-label="Job title" />
              <Input value={companyName} onChange={(event) => setCompanyName(event.target.value)} aria-label="Company" />
              <Input defaultValue="Remote" aria-label="Location" />
            </div>
            <Textarea value={jobDescription} onChange={(event) => setJobDescription(event.target.value)} rows={10} />
            <div className="flex justify-between gap-3">
              <Button type="button" variant="secondary" onClick={() => setStep(0)}>Back</Button>
              <div className="flex gap-3">
                <Button type="button" variant="secondary" onClick={() => setJobDescription(mockJobs[1].content)}>
                  Use sample JD
                </Button>
                <Button type="button" onClick={() => setStep(2)}>Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardContent className="space-y-5">
            <CardTitle>Analysis Type</CardTitle>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["detailed", "Detailed Analysis", "Full report with score, skills, keywords, rewrites, interview questions."],
                ["skills-gap", "Skills Gap", "Focused report on missing technical requirements and learning priorities."],
              ].map(([value, title, description]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAnalysisType(value as AnalysisType)}
                  className={`rounded-2xl border p-5 text-left transition ${analysisType === value ? "border-cyan-300 bg-cyan-300/10" : "border-border bg-card"}`}
                >
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                </button>
              ))}
            </div>
            <div>
              <label className="text-sm font-semibold">Output language</label>
              <select
                value={outputLanguage}
                onChange={(event) => setOutputLanguage(event.target.value as OutputLanguage)}
                className="mt-2 min-h-10 w-full rounded-lg border border-border bg-background px-3 text-sm"
              >
                <option value="en">English</option>
                <option value="zh">Chinese</option>
                <option value="bilingual">Bilingual</option>
              </select>
            </div>
            <div className="rounded-xl border border-border bg-muted p-4 text-sm leading-6 text-muted-foreground">
              Score means application readiness, not hiring probability. The AI
              never evaluates protected attributes and must not fabricate skills.
            </div>
            <div className="flex justify-between gap-3">
              <Button type="button" variant="secondary" onClick={() => setStep(1)}>Back</Button>
              <Button type="button" disabled={mutation.isPending} onClick={() => mutation.mutate()}>
                <Sparkles className="h-4 w-4" />
                Analyze
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {mutation.isPending && <LoadingState label="AI is comparing your resume with the job requirements..." />}
      {mutation.error && (
        <div className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100">
          {mutation.error.message}
        </div>
      )}
      {result && <AnalysisResultView result={result} />}
    </div>
  );
}
