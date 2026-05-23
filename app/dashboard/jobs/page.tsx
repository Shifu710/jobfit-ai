import { BriefcaseBusiness } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { mockJobs } from "@/lib/data/mock-jobs";

export default function JobsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-3xl font-bold">Job Description Library</h1>
        <p className="mt-2 text-muted-foreground">Realistic job descriptions including English, Chinese, and bilingual roles.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {mockJobs.map((job) => (
          <Card key={job.id}>
            <CardContent>
              <div className="flex items-start gap-3">
                <BriefcaseBusiness className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <CardTitle className="text-base">{job.title}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{job.company} · {job.location}</p>
                </div>
              </div>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">{job.content}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.requiredSkills.slice(0, 5).map((skill) => (
                  <span key={skill} className="badge bg-cyan-300/10 text-cyan-100">{skill}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
