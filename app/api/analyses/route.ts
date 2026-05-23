import { NextResponse } from "next/server";

import { mockAnalyses } from "@/lib/data/mock-analyses";

export async function GET() {
  return NextResponse.json({ data: mockAnalyses });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ data: { id: `analysis-${Date.now()}`, ...body } }, { status: 201 });
}
