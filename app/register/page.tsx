import Link from "next/link";
import { UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-12">
      <Card className="w-full max-w-md">
        <CardContent>
          <CardTitle className="text-2xl">Create account</CardTitle>
          <p className="mt-2 text-sm text-muted-foreground">Phase 1 uses demo mode; this form shows the production-ready flow.</p>
          <form className="mt-6 space-y-4">
            <Input placeholder="Name" aria-label="Name" />
            <Input type="email" placeholder="you@example.com" aria-label="Email" />
            <Input type="password" placeholder="Password" aria-label="Password" />
            <Input type="password" placeholder="Confirm password" aria-label="Confirm password" />
            <Button asChild className="w-full">
              <Link href="/dashboard">
                <UserPlus className="h-4 w-4" />
                Continue in demo mode
              </Link>
            </Button>
          </form>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Already registered? <Link className="text-cyan-200 underline" href="/login">Sign in</Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
