import { BarChart3, BriefcaseBusiness, FileText, SearchCheck } from "lucide-react";

import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { recentAnalyses, statsData } from "@/lib/data/mock-dashboard";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Demo User.</h1>
          <p className="mt-2 text-muted-foreground">
            Ready to improve your next application? 欢迎回来，准备好优化你的下一次求职申请了吗？
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/analyze">Analyze Resume</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={SearchCheck} label="Total Analyses" value={statsData.totalAnalyses} note="Mock + saved demo history" />
        <StatCard icon={BarChart3} label="Average Score" value={statsData.avgScore} note="Application readiness average" />
        <StatCard icon={FileText} label="Saved Resumes" value={statsData.savedResumes} note="Demo resume profiles" />
        <StatCard icon={BriefcaseBusiness} label="Saved Jobs" value={statsData.savedJobs} note="Realistic JD library" />
      </div>

      <DashboardCharts />

      <Card>
        <CardContent>
          <CardTitle>Recent analyses</CardTitle>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="py-3">Role</th>
                  <th className="py-3">Score</th>
                  <th className="py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentAnalyses.map((analysis) => (
                  <tr key={analysis.role} className="border-t border-border">
                    <td className="py-3">{analysis.role}</td>
                    <td className="py-3 font-semibold text-cyan-200">{analysis.score}</td>
                    <td className="py-3 text-muted-foreground">{analysis.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
