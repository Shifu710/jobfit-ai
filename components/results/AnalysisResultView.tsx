import { AlertTriangle, CheckCircle2, ListChecks, MessageSquareText } from "lucide-react";

import { ScoreCircle } from "@/components/dashboard/ScoreCircle";
import { ScoreBreakdown } from "@/components/results/ScoreBreakdown";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { AnalysisResult } from "@/lib/data/types";

function ListPanel({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent>
        <CardTitle className="flex items-center gap-2 text-base">
          {icon}
          {title}
        </CardTitle>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="rounded-lg bg-muted px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function AnalysisResultView({ result }: { result: AnalysisResult }) {
  return (
    <div className="space-y-5">
      <Card>
        <CardContent className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <ScoreCircle score={result.overallScore} />
          <div>
            <CardTitle>{result.title}</CardTitle>
            <p className="mt-3 leading-7 text-muted-foreground">{result.scoringExplanation}</p>
            <div className="mt-5 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-6 text-amber-100">
              AI suggestions are for career guidance only. Review and edit all recommendations before using them in real applications.
              <br />
              AI 建议仅用于求职参考，用户在正式投递前应自行检查和修改内容。
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardContent>
            <CardTitle>Scoring formula</CardTitle>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Application Readiness Score = skills 35%, experience/projects 25%,
              keywords 20%, education 10%, resume clarity 10%. It is not hiring
              probability.
            </p>
            <div className="mt-5">
              <ScoreBreakdown scores={result.scoreBreakdown} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>AI summary</CardTitle>
            <p className="mt-3 whitespace-pre-line leading-7 text-muted-foreground">{result.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {result.recommendedKeywords.map((keyword) => (
                <Badge key={keyword} variant="cyan">{keyword}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <ListPanel title="Strengths" items={result.strengths} icon={<CheckCircle2 className="h-4 w-4 text-emerald-300" />} />
        <ListPanel title="Weaknesses" items={result.weaknesses} icon={<AlertTriangle className="h-4 w-4 text-amber-300" />} />
        <ListPanel title="Missing skills" items={result.missingSkills} icon={<ListChecks className="h-4 w-4 text-red-300" />} />
        <ListPanel title="Missing keywords" items={result.missingKeywords} icon={<MessageSquareText className="h-4 w-4 text-cyan-300" />} />
      </div>

      <Card>
        <CardContent>
          <CardTitle>Resume rewrite suggestions</CardTitle>
          <div className="mt-4 grid gap-4">
            {result.rewrittenBullets.map((bullet) => (
              <div key={bullet.original} className="rounded-xl border border-border bg-muted p-4">
                <p className="text-sm text-muted-foreground">Original: {bullet.original}</p>
                <p className="mt-2 font-medium">{bullet.improved}</p>
                <p className="mt-2 text-sm text-cyan-200">Reason: {bullet.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardContent>
            <CardTitle>Interview questions</CardTitle>
            <div className="mt-4 space-y-3">
              {result.interviewQuestions.map((question) => (
                <div key={question.question} className="rounded-xl border border-border bg-muted p-4">
                  <Badge variant="indigo">{question.type}</Badge>
                  <p className="mt-3 font-medium">{question.question}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{question.reason}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Action plan</CardTitle>
            <div className="mt-4 space-y-3">
              {result.actionPlan.map((item) => (
                <div key={item.task} className="rounded-xl border border-border bg-muted p-4">
                  <Badge variant={item.priority === "high" ? "red" : item.priority === "medium" ? "amber" : "green"}>
                    {item.priority}
                  </Badge>
                  <p className="mt-3 font-medium">{item.task}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.reason}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
