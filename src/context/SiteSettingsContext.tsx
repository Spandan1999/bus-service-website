import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

import {
  getSiteSettings,
  getStrapiMediaUrl,
} from "../services/strapi";

import type { StrapiSiteSettings } from "../types/strapi";

interface SiteSettingsContextValue {
  siteSettings: StrapiSiteSettings | null;
  loading: boolean;
  error: string | null;
  refreshSiteSettings: (locale?: string) => Promise<void>;
}

const SiteSettingsContext =
  createContext<SiteSettingsContextValue | undefined>(undefined);

interface SiteSettingsProviderProps {
  children: ReactNode;
}

export function SiteSettingsProvider({
  children,
}: SiteSettingsProviderProps) {
  const [siteSettings, setSiteSettings] =
    useState<StrapiSiteSettings | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshSiteSettings = async (locale = "en") => {
    try {
      setLoading(true);
      setError(null);

      const response = await getSiteSettings(locale);

      setSiteSettings(response.data);
    } catch (err) {
      console.error("Failed to load Site Settings:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to load site settings"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshSiteSettings("en");
  }, []);

  const value: SiteSettingsContextValue = {
    siteSettings,
    loading,
    error,
    refreshSiteSettings,
  };

  return (
    <SiteSettingsContext.Provider value={value}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);

  if (!context) {
    throw new Error(
      "useSiteSettings must be used inside SiteSettingsProvider"
    );
  }

  return context;
}

export { getStrapiMediaUrl };