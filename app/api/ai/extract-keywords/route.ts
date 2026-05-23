import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  text: z.string().min(20).max(6000),
});

export async function POST(request: Request) {
  // TODO: add Upstash Redis rate limiting here.
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid keyword extraction request." }, { status: 400 });
  }

  const keywords = ["React", "TypeScript", "API integration", "Next.js", "Testing"];
  return NextResponse.json({ success: true, data: keywords });
}
