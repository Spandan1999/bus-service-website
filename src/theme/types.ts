export type AnimationStyle =
  | "minimal"
  | "smooth"
  | "cinematic"
  | "dynamic";

export type HeroStyle =
  | "classic"
  | "cinematic"
  | "split"
  | "editorial"
  | "bold"
  | "fullscreen";

export type CardStyle =
  | "standard"
  | "glass"
  | "bordered"
  | "elevated"
  | "editorial";

export type ButtonStyle =
  | "solid"
  | "outline"
  | "glass"
  | "pill"
  | "sharp";

export interface Theme {
  name: string;
  description: string;

  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    muted: string;
    border: string;
    overlay: string;
  };

  typography: {
    headingFont: string;
    bodyFont: string;
    headingWeight: string;
    bodyWeight: string;
    headingTracking: string;
  };

  radius: {
    small: string;
    medium: string;
    large: string;
    full: string;
  };

  shadows: {
    small: string;
    medium: string;
    large: string;
    glow: string;
  };

  button: {
    style: ButtonStyle;
    radius: string;
  };

  card: {
    style: CardStyle;
    radius: string;
  };

  navigation: {
    style: "standard" | "floating" | "transparent" | "minimal";
  };

  hero: {
    style: HeroStyle;
    overlay: string;
  };

  animation: {
    style: AnimationStyle;
    intensity: "low" | "medium" | "high";
  };

  effects: {
    glass: boolean;
    gradients: boolean;
    glow: boolean;
    parallax: boolean;
  };
}