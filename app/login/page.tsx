import Link from "next/link";
import { LogIn, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-12">
      <Card className="w-full max-w-md">
        <CardContent>
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300 text-slate-950">
            <Sparkles className="h-6 w-6" />
          </div>
          <CardTitle className="mt-5 text-2xl">Sign in to JobFit AI</CardTitle>
          <p className="mt-2 text-sm text-muted-foreground">Demo mode works without Supabase.</p>
          <form className="mt-6 space-y-4">
            <Input type="email" defaultValue="demo@jobfit.ai" aria-label="Email" />
            <Input type="password" defaultValue="demo123456" aria-label="Password" />
            <Button asChild className="w-full">
              <Link href="/dashboard">
                <LogIn className="h-4 w-4" />
                Demo login
              </Link>
            </Button>
          </form>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            New here? <Link className="text-cyan-200 underline" href="/register">Create an account</Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
