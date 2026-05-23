import { NextResponse } from "next/server";

import { mockResumes } from "@/lib/data/mock-resumes";

export async function GET() {
  return NextResponse.json({ data: mockResumes });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ data: { id: `resume-${Date.now()}`, ...body } }, { status: 201 });
}
