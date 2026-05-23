import * as React from "react";

import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-32 w-full resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm leading-6 outline-none ring-cyan-400/30 transition placeholder:text-muted-foreground focus:ring-4",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
