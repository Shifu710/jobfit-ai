import type { ScoreBreakdown as ScoreBreakdownType } from "@/lib/data/types";

const labels: Record<keyof ScoreBreakdownType, string> = {
  skills: "Skills match",
  experience: "Experience/project match",
  keywords: "Keyword match",
  education: "Education/cert relevance",
  projects: "Resume clarity",
};

export function ScoreBreakdown({ scores }: { scores: ScoreBreakdownType }) {
  return (
    <div className="space-y-3">
      {(Object.keys(scores) as Array<keyof ScoreBreakdownType>).map((key) => (
        <div key={key}>
          <div className="flex justify-between text-sm">
            <span>{labels[key]}</span>
            <span className="font-semibold">{scores[key]}</span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400"
              style={{ width: `${scores[key]}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
