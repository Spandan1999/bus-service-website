import type { Language } from "./types";
import type { LocalizedText } from "../types/content";

export function getLocalizedText(
  value: LocalizedText,
  language: Language
): string {
  return (
    value[language] ||
    value.en ||
    ""
  );
}