import { ShieldCheck } from "lucide-react";

export function PrivacyNotice() {
  return (
    <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
      <div className="mb-1 flex items-center gap-2 font-semibold">
        <ShieldCheck className="h-4 w-4" />
        Privacy notice
      </div>
      Your resume text is sent to the AI only for analysis. It is not stored
      unless you choose to save it. AI suggestions are for career guidance only;
      review and edit everything before real applications.
    </div>
  );
}
