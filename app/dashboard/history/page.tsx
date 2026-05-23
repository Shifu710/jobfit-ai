import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { mockAnalyses } from "@/lib/data/mock-analyses";

export default function HistoryPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Analysis History</h1>
      <Card>
        <CardContent>
          <CardTitle>Recent saved analyses</CardTitle>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="py-3">Role</th>
                  <th className="py-3">Score</th>
                  <th className="py-3">Shared result</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockAnalyses.map((analysis) => (
                  <tr key={analysis.id} className="border-t border-border">
                    <td className="py-3">{analysis.title}</td>
                    <td className="py-3 text-cyan-200">{analysis.overallScore}</td>
                    <td className="py-3 text-muted-foreground">/result/{analysis.shareToken}</td>
                    <td className="py-3">
                      <Button asChild variant="secondary" size="sm">
                        <Link href={`/dashboard/analysis/${analysis.id}`}>Open</Link>
                      </Button>
                    </td>
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
