import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

import {
  translations,
} from "./translations";

import type {
  Language,
  TranslationPack,
} from "./types";

interface LanguageContextValue {
  language: Language;

  setLanguage: (
    language: Language
  ) => void;

  t: TranslationPack;
}

const LanguageContext =
  createContext<LanguageContextValue | undefined>(
    undefined
  );

const STORAGE_KEY =
  "mahapatra-travels-language";

function getInitialLanguage(): Language {
  const saved =
    localStorage.getItem(STORAGE_KEY);

  if (
    saved === "en" ||
    saved === "hi" ||
    saved === "or"
  ) {
    return saved;
  }

  return "en";
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>(getInitialLanguage);

  const setLanguage = (
    nextLanguage: Language
  ) => {
    setLanguageState(nextLanguage);

    localStorage.setItem(
      STORAGE_KEY,
      nextLanguage
    );
  };

  useEffect(() => {
    document.documentElement.lang =
      language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}