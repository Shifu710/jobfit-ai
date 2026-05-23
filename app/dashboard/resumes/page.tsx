import { FileText } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { mockResumes } from "@/lib/data/mock-resumes";

export default function ResumesPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-3xl font-bold">Resume Library</h1>
        <p className="mt-2 text-muted-foreground">Saved resume profiles for demo analysis flows.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {mockResumes.map((resume) => (
          <Card key={resume.id}>
            <CardContent>
              <FileText className="h-6 w-6 text-cyan-300" />
              <CardTitle className="mt-4 text-base">{resume.title}</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">{resume.targetRole}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {resume.skills.slice(0, 5).map((skill) => (
                  <span key={skill} className="badge bg-muted text-muted-foreground">{skill}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <EmptyState title="PDF/DOCX upload coming soon" description="Phase 1 keeps the experience reliable with paste-text and realistic demo resumes." />
    </div>
  );
}
