import { AnalysisResultView } from "@/components/results/AnalysisResultView";
import { mockAnalyses } from "@/lib/data/mock-analyses";

export default async function AnalysisPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = mockAnalyses.find((analysis) => analysis.id === id) ?? mockAnalyses[0];
  return <AnalysisResultView result={result} />;
}
