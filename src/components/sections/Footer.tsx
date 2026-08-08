import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "../ui/Container";

import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";

import { footerContent } from "../../data/footer";
import { siteIdentity } from "../../data/site";

export default function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  if (!footerContent.enabled) {
    return null;
  }

  const quickLinks = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Fleet",
      href: "#fleet",
    },
    {
      label: "Timetable",
      href: "#timetable",
    },
    {
      label: "Gallery",
      href: "#gallery",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: theme.colors.background,
        borderColor: theme.colors.border,
        color: theme.colors.text,
      }}
    >
      <Container className="py-16 md:py-20">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_1fr_0.8fr]">

          {/* BRAND */}

          <div className="max-w-md">

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              {/* Logo */}

              <div
                className="flex h-11 w-11 items-center justify-center"
                style={{
                  background:
                    theme.colors.accent,

                  color:
                    theme.colors.background,

                  borderRadius:
                    theme.radius.medium,
                }}
              >
                <span className="text-lg font-black">
                  M
                </span>
              </div>

              <div>
                <p
                  className="text-lg font-bold leading-none"
                  style={{
                    fontFamily:
                      theme.typography.headingFont,
                  }}
                >
                    {siteIdentity.businessName}
                </p>

                <p
                  className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em]"
                  style={{
                    color:
                      theme.colors.muted,
                  }}
                >
                  Travels
                </p>
              </div>
            </a>

            <p
              className="mt-6 max-w-sm text-sm leading-7"
              style={{
                color:
                  theme.colors.muted,
              }}
            >
              {getLocalizedText(
                footerContent.description,
                language
              )}
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-sm font-semibold">
              {getLocalizedText(
                footerContent.quickLinksTitle,
                language
              )}
            </h3>

            <nav className="mt-5 flex flex-col gap-3">

              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-1 text-sm transition-colors"
                  style={{
                    color:
                      theme.colors.muted,
                  }}
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </a>
              ))}

            </nav>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-sm font-semibold">
              {getLocalizedText(
                footerContent.contactTitle,
                language
              )}
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              {/* PHONE */}

              <a
                href={`tel:${footerContent.phone}`}
                className="flex gap-3 text-sm"
                style={{
                  color:
                    theme.colors.muted,
                }}
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0"
                  style={{
                    color:
                      theme.colors.accent,
                  }}
                />

                <span>
                  {footerContent.phone}
                </span>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${footerContent.email}`}
                className="flex gap-3 break-all text-sm"
                style={{
                  color:
                    theme.colors.muted,
                }}
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0"
                  style={{
                    color:
                      theme.colors.accent,
                  }}
                />

                <span>
                  {footerContent.email}
                </span>
              </a>

              {/* ADDRESS */}

              <div
                className="flex gap-3 text-sm"
                style={{
                  color:
                    theme.colors.muted,
                }}
              >
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0"
                  style={{
                    color:
                      theme.colors.accent,
                  }}
                />

                <span>
                  {getLocalizedText(
                    footerContent.address,
                    language
                  )}
                </span>
              </div>

            </div>

          </div>

          {/* SOCIAL */}

          <div>

            <h3 className="text-sm font-semibold">
              {getLocalizedText(
                footerContent.socialTitle,
                language
              )}
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {footerContent.socialLinks.map(
                (social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className="group flex items-center gap-2 text-sm"
                    style={{
                      color:
                        theme.colors.muted,
                    }}
                  >
                    {social.label}

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )
              )}

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="mt-14 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor:
              theme.colors.border,
          }}
        >

          <p
            className="text-xs"
            style={{
              color:
                theme.colors.muted,
            }}
          >
            {getLocalizedText(
              footerContent.copyright,
              language
            )}
          </p>

          <div className="flex items-center gap-5">

            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{
                color:
                  theme.colors.muted,
              }}
            >
              {siteIdentity.tagline}
            </span>

            <a
              href="#home"
              className="flex h-9 w-9 items-center justify-center transition-transform duration-300 hover:-translate-y-1"
              aria-label="Back to top"
              style={{
                background:
                  theme.colors.surfaceAlt,

                color:
                  theme.colors.accent,

                borderRadius:
                  theme.radius.full,
              }}
            >
              ↑
            </a>

          </div>

        </div>

      </Container>
    </footer>
  );
}