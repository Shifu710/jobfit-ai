import Link from "next/link";

import { AnalysisResultView } from "@/components/results/AnalysisResultView";
import { Button } from "@/components/ui/button";
import { mockAnalyses } from "@/lib/data/mock-analyses";

export default async function SharedResultPage({
  params,
}: {
  params: Promise<{ shareToken: string }>;
}) {
  const { shareToken } = await params;
  const result = mockAnalyses.find((analysis) => analysis.shareToken === shareToken) ?? mockAnalyses[0];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-200">Public read-only shared result</p>
          <h1 className="mt-2 text-3xl font-bold">JobFit AI Analysis</h1>
        </div>
        <Button asChild>
          <Link href="/dashboard/analyze">Create your own analysis</Link>
        </Button>
      </div>
      <AnalysisResultView result={result} />
    </main>
  );
}
