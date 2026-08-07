import {
  Check,
  ChevronDown,
} from "lucide-react";

import {
  useState,
} from "react";

import {
  useLanguage,
} from "../../i18n/LanguageProvider";

import type {
  Language,
} from "../../i18n/types";

const languages: {
  code: Language;
  label: string;
  nativeLabel: string;
}[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
  },
  {
    code: "or",
    label: "Odia",
    nativeLabel: "ଓଡ଼ିଆ",
  },
];

export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
    t,
  } = useLanguage();

  const [open, setOpen] =
    useState(false);

  const currentLanguage =
    languages.find(
      (item) =>
        item.code === language
    );

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium"
        aria-label={t.common.language}
        aria-expanded={open}
      >
        <span>
          {currentLanguage?.code.toUpperCase()}
        </span>

        <ChevronDown
          size={15}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-3 min-w-[150px] overflow-hidden p-1"
          style={{
            background:
              "var(--theme-surface)",

            border:
              "1px solid var(--theme-border)",

            borderRadius:
              "var(--theme-radius-md)",

            boxShadow:
              "var(--theme-shadow-md)",
          }}
        >
          {languages.map(
            (item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLanguage(
                    item.code
                  );

                  setOpen(false);
                }}
                className="flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left text-sm transition-opacity hover:opacity-70"
              >
                <span>
                  {item.nativeLabel}
                </span>

                {language ===
                  item.code && (
                  <Check size={15} />
                )}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}