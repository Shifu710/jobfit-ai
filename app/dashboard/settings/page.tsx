import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {[
        ["Profile", "Demo User", "demo@jobfit.ai"],
        ["Language", "English / Chinese", "Stored in local browser state"],
        ["Theme", "Dark / Light", "Toggle from dashboard header"],
        ["AI Provider", "OpenAI-compatible", "Server-side AI_API_KEY only"],
        ["Privacy", "Save history toggle", "Off by default in demo mode"],
        ["Data", "Delete all my data", "Confirmation modal planned"],
      ].map(([title, first, second]) => (
        <Card key={title}>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <div className="mt-4 space-y-3">
              <Input value={first} readOnly />
              <Input value={second} readOnly />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
