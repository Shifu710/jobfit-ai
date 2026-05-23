import Link from "next/link";
import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  History,
  LayoutDashboard,
  MessageSquareText,
  PenLine,
  SearchCheck,
  Settings,
  Sparkles,
} from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/analyze", label: "Analyzer", icon: SearchCheck },
  { href: "/dashboard/resumes", label: "Resumes", icon: FileText },
  { href: "/dashboard/jobs", label: "Jobs", icon: BriefcaseBusiness },
  { href: "/dashboard/history", label: "History", icon: History },
  { href: "/dashboard/skills", label: "Skills Gap", icon: BarChart3 },
  { href: "/dashboard/resume-writer", label: "Resume Writer", icon: PenLine },
  { href: "/dashboard/interview-prep", label: "Interview Prep", icon: MessageSquareText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-border bg-card/80 p-5 lg:block">
      <Link href="/" className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 text-slate-950">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="font-bold">JobFit AI</p>
          <p className="text-xs text-muted-foreground">职配智选</p>
        </div>
      </Link>
      <nav className="mt-8 space-y-1">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100">
        Demo mode is always available. OpenAI is used only when a server-side
        key is configured.
      </div>
    </aside>
  );
}
