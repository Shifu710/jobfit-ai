"use client";

import { useState } from "react";

import en from "./en";
import zh from "./zh";

export type Lang = "en" | "zh";

export function useTranslation() {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem("jobfit-lang");
    return stored === "zh" || stored === "en" ? stored : "en";
  });

  function setLang(next: Lang) {
    window.localStorage.setItem("jobfit-lang", next);
    setLangState(next);
  }

  return { t: lang === "zh" ? zh : en, lang, setLang };
}
