import { NextResponse } from "next/server";

import { recentAnalyses, scoreTrend, statsData, topMissingSkills } from "@/lib/data/mock-dashboard";

export async function GET() {
  return NextResponse.json({
    data: { statsData, scoreTrend, topMissingSkills, recentAnalyses },
  });
}
