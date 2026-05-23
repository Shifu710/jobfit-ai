import { NextResponse } from "next/server";

import { mockJobs } from "@/lib/data/mock-jobs";

export async function GET() {
  return NextResponse.json({ data: mockJobs });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ data: { id: `job-${Date.now()}`, ...body } }, { status: 201 });
}
