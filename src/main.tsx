import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { ThemeProvider } from "./theme/ThemeProvider";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { SiteSettingsProvider } from "./context/SiteSettingsContext";
import { HomepageProvider } from "./context/HomepageContext";

import "./index.css";

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <LanguageProvider>
      <SiteSettingsProvider>
        <HomepageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
        </HomepageProvider>
      </SiteSettingsProvider>
    </LanguageProvider>
  </StrictMode>
);