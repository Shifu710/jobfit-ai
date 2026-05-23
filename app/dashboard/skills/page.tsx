import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { topMissingSkills } from "@/lib/data/mock-dashboard";

export default function SkillsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-3xl font-bold">Skills Gap Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Prioritized learning list derived from analysis history.</p>
      </div>
      <Card>
        <CardContent>
          <CardTitle>Missing skill priorities</CardTitle>
          <div className="mt-5 space-y-4">
            {topMissingSkills.map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between text-sm">
                  <span>{item.skill}</span>
                  <span>{item.count} mentions</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-muted">
                  <div className="h-3 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400" style={{ width: `${item.count * 12}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
