import type { ReactNode } from "react";

import { useTheme } from "../../theme/ThemeProvider";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const { theme } = useTheme();

  const isPrimary = variant === "primary";

  return (
    <button
      onClick={onClick}
      className="px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: isPrimary
          ? theme.colors.accent
          : "transparent",

        color: isPrimary
          ? theme.colors.background
          : theme.colors.text,

        border: isPrimary
          ? "none"
          : `1px solid ${theme.colors.border}`,

        borderRadius: theme.button.radius,

        boxShadow: isPrimary
          ? theme.shadows.small
          : "none",
      }}
    >
      {children}
    </button>
  );
}