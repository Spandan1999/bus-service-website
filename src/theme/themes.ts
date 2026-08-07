import type { Theme } from "./types";

export const themes: Record<string, Theme> = {
  // =====================================================
  // 01. STANDARD
  // =====================================================

  standard: {
    name: "Standard",
    description: "Clean, professional and universally suitable.",

    colors: {
      primary: "#1e293b",
      secondary: "#334155",
      accent: "#f97316",
      background: "#f8fafc",
      surface: "#ffffff",
      surfaceAlt: "#f1f5f9",
      text: "#0f172a",
      muted: "#64748b",
      border: "#e2e8f0",
      overlay: "rgba(15, 23, 42, 0.45)",
    },

    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      headingWeight: "700",
      bodyWeight: "400",
      headingTracking: "-0.02em",
    },

    radius: {
      small: "0.5rem",
      medium: "0.75rem",
      large: "1.25rem",
      full: "9999px",
    },

    shadows: {
      small: "0 2px 8px rgba(15, 23, 42, 0.06)",
      medium: "0 10px 30px rgba(15, 23, 42, 0.08)",
      large: "0 20px 50px rgba(15, 23, 42, 0.12)",
      glow: "none",
    },

    button: {
      style: "solid",
      radius: "9999px",
    },

    card: {
      style: "standard",
      radius: "1.25rem",
    },

    navigation: {
      style: "standard",
    },

    hero: {
      style: "classic",
      overlay: "rgba(15, 23, 42, 0.45)",
    },

    animation: {
      style: "minimal",
      intensity: "low",
    },

    effects: {
      glass: false,
      gradients: false,
      glow: false,
      parallax: false,
    },
  },

  // =====================================================
  // 02. MIDNIGHT
  // =====================================================

  midnight: {
    name: "Midnight",
    description: "Dark, luxurious and cinematic.",

    colors: {
      primary: "#0f172a",
      secondary: "#1e293b",
      accent: "#f59e0b",
      background: "#020617",
      surface: "#0f172a",
      surfaceAlt: "#172033",
      text: "#f8fafc",
      muted: "#94a3b8",
      border: "rgba(255,255,255,0.1)",
      overlay: "rgba(2, 6, 23, 0.6)",
    },

    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      headingWeight: "700",
      bodyWeight: "400",
      headingTracking: "-0.035em",
    },

    radius: {
      small: "0.5rem",
      medium: "1rem",
      large: "1.75rem",
      full: "9999px",
    },

    shadows: {
      small: "0 5px 20px rgba(0,0,0,0.25)",
      medium: "0 15px 40px rgba(0,0,0,0.35)",
      large: "0 25px 70px rgba(0,0,0,0.5)",
      glow: "0 0 40px rgba(245,158,11,0.15)",
    },

    button: {
      style: "pill",
      radius: "9999px",
    },

    card: {
      style: "glass",
      radius: "1.5rem",
    },

    navigation: {
      style: "floating",
    },

    hero: {
      style: "cinematic",
      overlay: "rgba(2, 6, 23, 0.6)",
    },

    animation: {
      style: "cinematic",
      intensity: "high",
    },

    effects: {
      glass: true,
      gradients: true,
      glow: true,
      parallax: true,
    },
  },

  // =====================================================
  // 03. EXECUTIVE
  // =====================================================

  executive: {
    name: "Executive",
    description: "Elegant, corporate and trustworthy.",

    colors: {
      primary: "#111827",
      secondary: "#374151",
      accent: "#b08d2c",
      background: "#f8f7f3",
      surface: "#ffffff",
      surfaceAlt: "#f1f0eb",
      text: "#111827",
      muted: "#6b7280",
      border: "#dedbd2",
      overlay: "rgba(17,24,39,0.45)",
    },

    typography: {
      headingFont: "Georgia",
      bodyFont: "Inter",
      headingWeight: "600",
      bodyWeight: "400",
      headingTracking: "-0.025em",
    },

    radius: {
      small: "0.25rem",
      medium: "0.5rem",
      large: "0.875rem",
      full: "9999px",
    },

    shadows: {
      small: "0 2px 6px rgba(17,24,39,0.05)",
      medium: "0 10px 25px rgba(17,24,39,0.07)",
      large: "0 20px 45px rgba(17,24,39,0.1)",
      glow: "none",
    },

    button: {
      style: "sharp",
      radius: "0.35rem",
    },

    card: {
      style: "bordered",
      radius: "0.75rem",
    },

    navigation: {
      style: "minimal",
    },

    hero: {
      style: "editorial",
      overlay: "rgba(17,24,39,0.35)",
    },

    animation: {
      style: "minimal",
      intensity: "low",
    },

    effects: {
      glass: false,
      gradients: false,
      glow: false,
      parallax: false,
    },
  },

  // =====================================================
  // 04. HORIZON
  // =====================================================

  horizon: {
    name: "Horizon",
    description: "Bright, welcoming and modern.",

    colors: {
      primary: "#0369a1",
      secondary: "#0ea5e9",
      accent: "#f97316",
      background: "#f8fafc",
      surface: "#ffffff",
      surfaceAlt: "#e0f2fe",
      text: "#0f172a",
      muted: "#64748b",
      border: "#bae6fd",
      overlay: "rgba(3,105,161,0.35)",
    },

    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      headingWeight: "800",
      bodyWeight: "400",
      headingTracking: "-0.04em",
    },

    radius: {
      small: "0.75rem",
      medium: "1.25rem",
      large: "2rem",
      full: "9999px",
    },

    shadows: {
      small: "0 4px 12px rgba(14,165,233,0.08)",
      medium: "0 12px 35px rgba(14,165,233,0.12)",
      large: "0 25px 60px rgba(14,165,233,0.16)",
      glow: "0 0 35px rgba(14,165,233,0.15)",
    },

    button: {
      style: "pill",
      radius: "9999px",
    },

    card: {
      style: "elevated",
      radius: "1.5rem",
    },

    navigation: {
      style: "floating",
    },

    hero: {
      style: "split",
      overlay: "rgba(3,105,161,0.25)",
    },

    animation: {
      style: "smooth",
      intensity: "medium",
    },

    effects: {
      glass: true,
      gradients: true,
      glow: false,
      parallax: false,
    },
  },

  // =====================================================
  // 05. ROADSTER
  // =====================================================

  roadster: {
    name: "Roadster",
    description: "Bold, energetic and adventurous.",

    colors: {
      primary: "#111111",
      secondary: "#27272a",
      accent: "#ef4444",
      background: "#fafafa",
      surface: "#ffffff",
      surfaceAlt: "#f4f4f5",
      text: "#111111",
      muted: "#71717a",
      border: "#d4d4d8",
      overlay: "rgba(0,0,0,0.5)",
    },

    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      headingWeight: "900",
      bodyWeight: "500",
      headingTracking: "-0.06em",
    },

    radius: {
      small: "0.25rem",
      medium: "0.5rem",
      large: "0.75rem",
      full: "9999px",
    },

    shadows: {
      small: "4px 4px 0 rgba(0,0,0,0.1)",
      medium: "8px 8px 0 rgba(0,0,0,0.12)",
      large: "12px 12px 0 rgba(0,0,0,0.15)",
      glow: "none",
    },

    button: {
      style: "sharp",
      radius: "0.25rem",
    },

    card: {
      style: "bordered",
      radius: "0.5rem",
    },

    navigation: {
      style: "standard",
    },

    hero: {
      style: "bold",
      overlay: "rgba(0,0,0,0.5)",
    },

    animation: {
      style: "dynamic",
      intensity: "high",
    },

    effects: {
      glass: false,
      gradients: true,
      glow: false,
      parallax: true,
    },
  },

  // =====================================================
  // 06. PREMIUM TRAVEL
  // =====================================================

  premiumTravel: {
    name: "Premium Travel",
    description: "Luxury, editorial and cinematic.",

    colors: {
      primary: "#18181b",
      secondary: "#3f3f46",
      accent: "#c9a227",
      background: "#faf9f6",
      surface: "#ffffff",
      surfaceAlt: "#f3f1eb",
      text: "#18181b",
      muted: "#71717a",
      border: "#dedbd2",
      overlay: "rgba(24,24,27,0.48)",
    },

    typography: {
      headingFont: "Georgia",
      bodyFont: "Inter",
      headingWeight: "500",
      bodyWeight: "400",
      headingTracking: "-0.03em",
    },

    radius: {
      small: "0.25rem",
      medium: "0.5rem",
      large: "1rem",
      full: "9999px",
    },

    shadows: {
      small: "0 4px 15px rgba(24,24,27,0.05)",
      medium: "0 15px 35px rgba(24,24,27,0.08)",
      large: "0 30px 70px rgba(24,24,27,0.13)",
      glow: "0 0 35px rgba(201,162,39,0.12)",
    },

    button: {
      style: "outline",
      radius: "9999px",
    },

    card: {
      style: "editorial",
      radius: "0.75rem",
    },

    navigation: {
      style: "transparent",
    },

    hero: {
      style: "fullscreen",
      overlay: "rgba(24,24,27,0.42)",
    },

    animation: {
      style: "cinematic",
      intensity: "high",
    },

    effects: {
      glass: false,
      gradients: true,
      glow: true,
      parallax: true,
    },
  },

  // =====================================================
  // 07. HERITAGE
  // =====================================================

  heritage: {
    name: "Heritage",
    description: "Warm, classic and established.",

    colors: {
      primary: "#173b32",
      secondary: "#315c4e",
      accent: "#b7791f",
      background: "#f7f2e8",
      surface: "#fffdf8",
      surfaceAlt: "#eee7d8",
      text: "#24352e",
      muted: "#6b756f",
      border: "#d8cdb8",
      overlay: "rgba(23,59,50,0.42)",
    },

    typography: {
      headingFont: "Georgia",
      bodyFont: "Georgia",
      headingWeight: "600",
      bodyWeight: "400",
      headingTracking: "-0.02em",
    },

    radius: {
      small: "0.25rem",
      medium: "0.5rem",
      large: "0.75rem",
      full: "9999px",
    },

    shadows: {
      small: "0 3px 8px rgba(23,59,50,0.05)",
      medium: "0 10px 25px rgba(23,59,50,0.08)",
      large: "0 20px 45px rgba(23,59,50,0.12)",
      glow: "none",
    },

    button: {
      style: "outline",
      radius: "0.25rem",
    },

    card: {
      style: "bordered",
      radius: "0.5rem",
    },

    navigation: {
      style: "minimal",
    },

    hero: {
      style: "editorial",
      overlay: "rgba(23,59,50,0.42)",
    },

    animation: {
      style: "minimal",
      intensity: "low",
    },

    effects: {
      glass: false,
      gradients: false,
      glow: false,
      parallax: false,
    },
  },

  // =====================================================
  // 08. AURORA
  // =====================================================

  aurora: {
    name: "Aurora",
    description: "Futuristic, atmospheric and digital.",

    colors: {
      primary: "#312e81",
      secondary: "#7c3aed",
      accent: "#22d3ee",
      background: "#09090b",
      surface: "#18181b",
      surfaceAlt: "#27272a",
      text: "#fafafa",
      muted: "#a1a1aa",
      border: "rgba(255,255,255,0.1)",
      overlay: "rgba(9,9,11,0.55)",
    },

    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      headingWeight: "800",
      bodyWeight: "400",
      headingTracking: "-0.04em",
    },

    radius: {
      small: "0.75rem",
      medium: "1.25rem",
      large: "2rem",
      full: "9999px",
    },

    shadows: {
      small: "0 5px 20px rgba(124,58,237,0.12)",
      medium: "0 15px 45px rgba(124,58,237,0.18)",
      large: "0 30px 80px rgba(34,211,238,0.15)",
      glow: "0 0 50px rgba(34,211,238,0.2)",
    },

    button: {
      style: "glass",
      radius: "9999px",
    },

    card: {
      style: "glass",
      radius: "1.5rem",
    },

    navigation: {
      style: "floating",
    },

    hero: {
      style: "cinematic",
      overlay: "rgba(9,9,11,0.55)",
    },

    animation: {
      style: "cinematic",
      intensity: "high",
    },

    effects: {
      glass: true,
      gradients: true,
      glow: true,
      parallax: true,
    },
  },

  // =====================================================
  // 09. VELOCITY
  // =====================================================

  velocity: {
    name: "Velocity",
    description: "Sporty, powerful and fast.",

    colors: {
      primary: "#0f172a",
      secondary: "#1e293b",
      accent: "#22c55e",
      background: "#f1f5f9",
      surface: "#ffffff",
      surfaceAlt: "#e2e8f0",
      text: "#0f172a",
      muted: "#64748b",
      border: "#cbd5e1",
      overlay: "rgba(15,23,42,0.52)",
    },

    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      headingWeight: "900",
      bodyWeight: "500",
      headingTracking: "-0.055em",
    },

    radius: {
      small: "0.25rem",
      medium: "0.5rem",
      large: "1rem",
      full: "9999px",
    },

    shadows: {
      small: "0 4px 10px rgba(15,23,42,0.08)",
      medium: "0 12px 30px rgba(15,23,42,0.12)",
      large: "0 25px 55px rgba(15,23,42,0.16)",
      glow: "0 0 30px rgba(34,197,94,0.12)",
    },

    button: {
      style: "pill",
      radius: "9999px",
    },

    card: {
      style: "elevated",
      radius: "0.75rem",
    },

    navigation: {
      style: "standard",
    },

    hero: {
      style: "bold",
      overlay: "rgba(15,23,42,0.52)",
    },

    animation: {
      style: "dynamic",
      intensity: "high",
    },

    effects: {
      glass: false,
      gradients: true,
      glow: true,
      parallax: true,
    },
  },
};