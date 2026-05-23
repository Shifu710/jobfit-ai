import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "min-h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-cyan-400/30 transition placeholder:text-muted-foreground focus:ring-4",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";
