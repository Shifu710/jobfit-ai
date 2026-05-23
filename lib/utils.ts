import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scoreLabel(score: number) {
  if (score >= 80) return "Strong Match";
  if (score >= 60) return "Good Potential";
  if (score >= 40) return "Needs Improvement";
  return "Low Match";
}

export function clampScore(score: number) {
  return Math.max(0, Math.min(100, Math.round(score)));
}
