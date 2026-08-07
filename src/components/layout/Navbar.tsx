import { Menu, X } from "lucide-react";
import { useState } from "react";

import { siteIdentity } from "../../data/site";

import {
  useLanguage,
} from "../../i18n/LanguageProvider";

import {
  useTheme,
} from "../../theme/ThemeProvider";

import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Navbar() {
  const { theme } = useTheme();

  const { t } = useLanguage();

  const [open, setOpen] = useState(false);

  const links = [
    {
      label: t.navigation.home,
      href: "#",
    },
    {
      label: t.navigation.fleet,
      href: "#fleet",
    },
    {
      label: t.navigation.timetable,
      href: "#timetable",
    },
    {
      label: t.navigation.gallery,
      href: "#gallery",
    },
    {
      label: t.navigation.about,
      href: "#about",
    },
    {
      label: t.navigation.contact,
      href: "#contact",
    },
  ];

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full"
      style={{
        color: theme.colors.text,
      }}
    >
      <div className="mx-auto mt-4 max-w-7xl px-5">
        <nav
          className="flex items-center justify-between px-5 py-4"
          style={{
            background:
              theme.navigation.style === "transparent"
                ? "transparent"
                : theme.colors.surface,

            border:
              theme.navigation.style === "transparent"
                ? "none"
                : `1px solid ${theme.colors.border}`,

            borderRadius:
              theme.navigation.style === "floating"
                ? theme.radius.full
                : theme.radius.medium,

            boxShadow:
              theme.navigation.style === "floating"
                ? theme.shadows.medium
                : "none",

            backdropFilter: theme.effects.glass
              ? "blur(20px)"
              : undefined,
          }}
        >
          {/* Brand */}

          <a
            href="#"
            className="flex items-center gap-3"
          >
            {siteIdentity.logo ? (
              <img
                src={siteIdentity.logo}
                alt={siteIdentity.businessName}
                className="h-10 w-auto max-w-[150px] object-contain"
              />
            ) : (
              <div
                className="flex h-10 w-10 items-center justify-center font-black"
                style={{
                  background:
                    theme.colors.accent,

                  color:
                    theme.colors.background,

                  borderRadius:
                    theme.radius.small,
                }}
              >
                {siteIdentity.shortName.charAt(0)}
              </div>
            )}

            <span className="hidden text-lg font-bold tracking-tight sm:block">
              {siteIdentity.businessName}
            </span>
          </a>

          {/* Desktop navigation */}

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium opacity-75 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}

            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}

          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>

        {/* Mobile navigation */}

        {open && (
          <div
            className="mt-2 p-5 md:hidden"
            style={{
              background:
                theme.colors.surface,

              border:
                `1px solid ${theme.colors.border}`,

              borderRadius:
                theme.radius.medium,
            }}
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-medium"
                >
                  {link.label}
                </a>
              ))}

              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}