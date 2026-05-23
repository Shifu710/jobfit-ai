"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = window.localStorage.getItem("jobfit-theme");
    const nextDark = stored ? stored === "dark" : true;
    document.documentElement.classList.toggle("dark", nextDark);
    return nextDark;
  });

  function toggle() {
    const next = !dark;
    setDark(next);
    window.localStorage.setItem("jobfit-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <Button type="button" variant="secondary" size="sm" onClick={toggle}>
      {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      {dark ? "Dark" : "Light"}
    </Button>
  );
}
