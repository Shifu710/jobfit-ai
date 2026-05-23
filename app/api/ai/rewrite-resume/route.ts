import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  originalText: z.string().min(10).max(2000),
  targetRole: z.string().max(120).optional(),
  tone: z.string().max(80).optional(),
});

export async function POST(request: Request) {
  // TODO: add Upstash Redis rate limiting here.
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid rewrite request." }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    data: {
      improved:
        "Improved bullet: Built a deployable feature with clear user flow, typed validation, and documented technical decisions.",
      explanation:
        "The rewrite improves clarity and impact without adding unsupported claims.",
    },
  });
}
