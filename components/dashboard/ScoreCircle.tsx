import { scoreLabel } from "@/lib/utils";

export function ScoreCircle({ score }: { score: number }) {
  const color =
    score >= 80
      ? "text-emerald-300"
      : score >= 60
        ? "text-cyan-300"
        : score >= 40
          ? "text-amber-300"
          : "text-red-300";

  return (
    <div className="flex items-center gap-4">
      <div className="grid h-28 w-28 place-items-center rounded-full border-8 border-cyan-400/25 bg-cyan-400/10">
        <div className="text-center">
          <div className={`text-3xl font-bold ${color}`}>{score}</div>
          <div className="text-xs text-muted-foreground">/ 100</div>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">Application readiness</p>
        <p className="text-xl font-semibold">{scoreLabel(score)}</p>
      </div>
    </div>
  );
}
