import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import { getHomepage } from "../services/strapi";
import type { StrapiHomepage } from "../types/homepage";

type HomepageContextValue = {
  homepage: StrapiHomepage | null;
  loading: boolean;
  error: string | null;
  refreshHomepage: (locale?: string) => Promise<void>;
};

const HomepageContext =
  createContext<HomepageContextValue | undefined>(
    undefined
  );

export function HomepageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [homepage, setHomepage] =
    useState<StrapiHomepage | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const refreshHomepage = async (
    locale = "en"
  ) => {
    try {
      setLoading(true);
      setError(null);

      const response =
        await getHomepage(locale);

      setHomepage(response.data);
    } catch (err) {
      console.error(
        "Failed to load Homepage:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Failed to load Homepage"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refreshHomepage("en");
  }, []);

  return (
    <HomepageContext.Provider
      value={{
        homepage,
        loading,
        error,
        refreshHomepage,
      }}
    >
      {children}
    </HomepageContext.Provider>
  );
}

export function useHomepage() {
  const context =
    useContext(HomepageContext);

  if (!context) {
    throw new Error(
      "useHomepage must be used inside HomepageProvider"
    );
  }

  return context;
}