import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { mockAnalyses } from "@/lib/data/mock-analyses";

export default function InterviewPrepPage() {
  const questions = mockAnalyses[0].interviewQuestions;
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Interview Prep</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {questions.map((question) => (
          <Card key={question.question}>
            <CardContent>
              <span className="badge bg-indigo-400/15 text-indigo-100">{question.type}</span>
              <CardTitle className="mt-4 text-base">{question.question}</CardTitle>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{question.reason}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
