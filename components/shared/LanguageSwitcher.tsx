"use client";

import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={() => setLang(lang === "en" ? "zh" : "en")}
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      {lang === "en" ? "中文" : "EN"}
    </Button>
  );
}
