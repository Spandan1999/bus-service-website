import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { themes } from "./themes";
import type { Theme } from "./types";
import { getThemeStyles } from "./themeStyles";

interface ThemeContextType {
  theme: Theme;
  themeName: string;
  setTheme: (name: string) => void;
  availableThemes: typeof themes;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [themeName, setThemeName] = useState("standard");

  const theme = themes[themeName] ?? themes.standard;

  const setTheme = (name: string) => {
    if (themes[name]) {
      setThemeName(name);
    }
  };

 return (
  <ThemeContext.Provider
    value={{
      theme,
      themeName,
      setTheme,
      availableThemes: themes,
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