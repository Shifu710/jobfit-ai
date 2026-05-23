import { cn } from "@/lib/utils";

const variants = {
  cyan: "bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-400/30",
  indigo: "bg-indigo-400/15 text-indigo-200 ring-1 ring-indigo-400/30",
  green: "bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-400/30",
  amber: "bg-amber-400/15 text-amber-200 ring-1 ring-amber-400/30",
  red: "bg-red-400/15 text-red-200 ring-1 ring-red-400/30",
  neutral: "bg-muted text-muted-foreground ring-1 ring-border",
};

export function Badge({
  children,
  variant = "neutral",
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return <span className={cn("badge", variants[variant], className)}>{children}</span>;
}
