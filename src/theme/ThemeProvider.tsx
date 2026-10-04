import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { themes } from "./themes";
import type { Theme } from "./types";
import { getThemeStyles } from "./themeStyles";

import { useSiteSettings } from "../context/SiteSettingsContext";

interface ThemeContextType {
  theme: Theme;
  themeName: string;
  setTheme: (name: string) => void;
  availableThemes: typeof themes;

  animationsEnabled: boolean;
  animationStyle: Theme["animation"]["style"];
  animationIntensity: Theme["animation"]["intensity"];
}

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { siteSettings } = useSiteSettings();

  const [themeName, setThemeName] = useState("standard");

  useEffect(() => {
    const cmsTheme = siteSettings?.activeTheme;

    console.log("🎨 CMS Theme:", cmsTheme);
    console.log(
      "🎨 Available Themes:",
      Object.keys(themes)
    );

    if (
      cmsTheme &&
      Object.prototype.hasOwnProperty.call(themes, cmsTheme)
    ) {
      setThemeName(cmsTheme);
    }
  }, [siteSettings?.activeTheme]);

  const theme =
    themes[themeName] ?? themes.standard;

  const animationsEnabled =
    siteSettings?.animationsEnabled ?? true;

  const animationStyle =
    (siteSettings?.animationStyle as Theme["animation"]["style"]) ??
    theme.animation.style;

  const animationIntensity =
    (siteSettings?.animationIntensity as Theme["animation"]["intensity"]) ??
    theme.animation.intensity;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        setTheme: (name: string) => {
          if (
            Object.prototype.hasOwnProperty.call(
              themes,
              name
            )
          ) {
            setThemeName(name);
          }
        },
        availableThemes: themes,

        animationsEnabled,
        animationStyle,
        animationIntensity,
      }}
    >
      <div
        style={getThemeStyles(theme)}
        className="min-h-screen"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}