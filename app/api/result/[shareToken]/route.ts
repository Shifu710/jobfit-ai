import { NextResponse } from "next/server";

import { mockAnalyses } from "@/lib/data/mock-analyses";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ shareToken: string }> },
) {
  const { shareToken } = await params;
  const result = mockAnalyses.find((analysis) => analysis.shareToken === shareToken) ?? mockAnalyses[0];
  return NextResponse.json({ data: result });
}
