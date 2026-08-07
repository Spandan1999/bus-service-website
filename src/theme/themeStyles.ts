import type { CSSProperties } from "react";
import type { Theme } from "./types";

type ThemeCSSProperties = CSSProperties & {
  [key: `--${string}`]: string;
};

export function getThemeStyles(theme: Theme): ThemeCSSProperties {
  return {
    "--theme-primary": theme.colors.primary,
    "--theme-secondary": theme.colors.secondary,
    "--theme-accent": theme.colors.accent,
    "--theme-background": theme.colors.background,
    "--theme-surface": theme.colors.surface,
    "--theme-surface-alt": theme.colors.surfaceAlt,
    "--theme-text": theme.colors.text,
    "--theme-muted": theme.colors.muted,
    "--theme-border": theme.colors.border,

    "--theme-radius-sm": theme.radius.small,
    "--theme-radius-md": theme.radius.medium,
    "--theme-radius-lg": theme.radius.large,
    "--theme-radius-full": theme.radius.full,

    "--theme-shadow-sm": theme.shadows.small,
    "--theme-shadow-md": theme.shadows.medium,
    "--theme-shadow-lg": theme.shadows.large,
    "--theme-shadow-glow": theme.shadows.glow,
  };
}