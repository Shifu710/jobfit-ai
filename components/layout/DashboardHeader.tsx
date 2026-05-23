import Link from "next/link";
import { ArrowUpRight, UserCircle } from "lucide-react";

import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 px-5 py-4 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Demo user</p>
          <p className="font-semibold">demo@jobfit.ai</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" size="sm">
            <Link href="/case-study/jobfit-ai">
              Case study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <LanguageSwitcher />
          <ThemeToggle />
          <UserCircle className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
