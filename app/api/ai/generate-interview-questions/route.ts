import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  resumeText: z.string().min(20).max(8000),
  jobDescription: z.string().min(20).max(4000),
  type: z.string().optional(),
});

export async function POST(request: Request) {
  // TODO: add Upstash Redis rate limiting here.
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid interview prep request." }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    data: [
      {
        question: "Explain one project where you handled data from API request to UI rendering.",
        type: "technical",
        reason: "This checks practical implementation depth.",
      },
      {
        question: "How would you improve your resume for this role this week?",
        type: "behavioral",
        reason: "This checks self-awareness and action planning.",
      },
    ],
  });
}
