import { NextResponse } from "next/server";

import { analyzeMatch } from "@/lib/ai/analyze-match";
import { analyzeMatchSchema } from "@/lib/validations/analysis";

export async function POST(request: Request) {
  // TODO: add Upstash Redis rate limiting here.
  const body = await request.json().catch(() => null);
  const parsed = analyzeMatchSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Invalid request." },
      { status: 400 },
    );
  }

  const result = await analyzeMatch(parsed.data);
  return NextResponse.json({ success: true, data: result });
}
