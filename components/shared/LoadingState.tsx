import { Loader2 } from "lucide-react";

export function LoadingState({ label = "Analyzing..." }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-muted p-4 text-sm text-muted-foreground">
      <Loader2 className="h-4 w-4 animate-spin text-cyan-300" />
      {label}
    </div>
  );
}
