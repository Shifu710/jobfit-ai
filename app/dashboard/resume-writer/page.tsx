import { PenLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ResumeWriterPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <Card>
        <CardContent className="space-y-4">
          <CardTitle>AI Resume Writer</CardTitle>
          <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
            Do not add skills or experience you cannot honestly explain in an interview.
            <br />
            不要添加你无法在面试中解释清楚的技能或经历。
          </div>
          <Input placeholder="Target role" defaultValue="AI SaaS Full-Stack Intern" />
          <Textarea rows={9} defaultValue="Built AI chatbot and resume parser prototype." />
          <Button>
            <PenLine className="h-4 w-4" />
            Improve text
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardTitle>Improved version</CardTitle>
          <p className="mt-4 rounded-xl bg-muted p-4 leading-7">
            Built a Next.js AI chatbot and resume parser prototype with server-side
            OpenAI-compatible API calls, structured validation, and deployable
            product workflows.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Explanation: this improves clarity and stack relevance without inventing unsupported claims.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
