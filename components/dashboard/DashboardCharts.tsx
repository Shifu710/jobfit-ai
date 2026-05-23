"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { scoreTrend, topMissingSkills } from "@/lib/data/mock-dashboard";

export function DashboardCharts() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Card>
        <CardContent>
          <CardTitle>Score trend</CardTitle>
          <div className="mt-5 overflow-x-auto">
              <LineChart width={560} height={260} data={scoreTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{ background: "#0f172a", border: "1px solid #334155" }}
                />
                <Line type="monotone" dataKey="score" stroke="#22d3ee" strokeWidth={3} />
              </LineChart>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardTitle>Top missing skills</CardTitle>
          <div className="mt-5 overflow-x-auto">
              <BarChart width={560} height={260} data={topMissingSkills}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="skill" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{ background: "#0f172a", border: "1px solid #334155" }}
                />
                <Bar dataKey="count" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
              </BarChart>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
