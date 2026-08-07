import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Animated from "../ui/Animated";
import Container from "../ui/Container";

import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";

import { contactContent } from "../../data/contact";

export default function Contact() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  /*
   * Section visibility can later be controlled
   * directly from Strapi.
   */
  if (!contactContent.enabled) {
    return null;
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      {/* Decorative background */}

      {theme.effects.gradients && (
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: theme.colors.accent,
          }}
        />
      )}

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div>
            {/* Eyebrow */}

            <Animated preset="fadeUp">
              <p
                className="text-xs font-semibold uppercase tracking-[0.35em]"
                style={{
                  color: theme.colors.accent,
                }}
              >
                {getLocalizedText(
                  contactContent.eyebrow,
                  language
                )}
              </p>
            </Animated>

            {/* Heading */}

            <Animated
              preset="fadeUp"
              delay={0.1}
            >
              <h2
                className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl"
                style={{
                  fontFamily:
                    theme.typography.headingFont,

                  fontWeight:
                    theme.typography.headingWeight,

                  letterSpacing:
                    theme.typography.headingTracking,
                }}
              >
                {getLocalizedText(
                  contactContent.title,
                  language
                )}
              </h2>
            </Animated>

            {/* Description */}

            <Animated
              preset="fadeUp"
              delay={0.2}
            >
              <p
                className="mt-7 max-w-xl text-lg leading-8"
                style={{
                  color: theme.colors.muted,
                }}
              >
                {getLocalizedText(
                  contactContent.description,
                  language
                )}
              </p>
            </Animated>

            {/* Email CTA */}

            <Animated
              preset="fadeUp"
              delay={0.3}
              className="mt-9"
            >
              <a
                href={`mailto:${contactContent.email}`}
                className="group inline-flex items-center gap-3 px-6 py-3.5 font-semibold transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background:
                    theme.colors.accent,

                  color:
                    theme.colors.background,

                  borderRadius:
                    theme.button.radius,

                  boxShadow:
                    theme.effects.glow
                      ? theme.shadows.glow
                      : theme.shadows.small,
                }}
              >
                {getLocalizedText(
                  contactContent.ctaLabel,
                  language
                )}

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </Animated>
          </div>

          {/* =====================================================
              RIGHT SIDE — CONTACT INFORMATION
          ====================================================== */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            {/* PHONE */}

            <Animated
              preset="fadeLeft"
              delay={0.15}
            >
              <a
                href={`tel:${contactContent.phone}`}
                className="group flex gap-5 p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background:
                    theme.colors.surface,

                  border:
                    `1px solid ${theme.colors.border}`,

                  borderRadius:
                    theme.radius.large,

                  boxShadow:
                    theme.shadows.small,
                }}
              >
                <ContactIcon>
                  <Phone size={20} />
                </ContactIcon>

                <div className="min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color:
                        theme.colors.muted,
                    }}
                  >
                    {getLocalizedText(
                      contactContent.phoneLabel,
                      language
                    )}
                  </p>

                  <p className="mt-2 break-words text-lg font-semibold">
                    {contactContent.phone}
                  </p>
                </div>
              </a>
            </Animated>

            {/* EMAIL */}

            <Animated
              preset="fadeLeft"
              delay={0.25}
            >
              <a
                href={`mailto:${contactContent.email}`}
                className="group flex gap-5 p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background:
                    theme.colors.surface,

                  border:
                    `1px solid ${theme.colors.border}`,

                  borderRadius:
                    theme.radius.large,

                  boxShadow:
                    theme.shadows.small,
                }}
              >
                <ContactIcon>
                  <Mail size={20} />
                </ContactIcon>

                <div className="min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color:
                        theme.colors.muted,
                    }}
                  >
                    {getLocalizedText(
                      contactContent.emailLabel,
                      language
                    )}
                  </p>

                  <p className="mt-2 break-all text-lg font-semibold">
                    {contactContent.email}
                  </p>
                </div>
              </a>
            </Animated>

            {/* ADDRESS */}

            <Animated
              preset="fadeLeft"
              delay={0.35}
            >
              <div
                className="flex gap-5 p-6"
                style={{
                  background:
                    theme.colors.surface,

                  border:
                    `1px solid ${theme.colors.border}`,

                  borderRadius:
                    theme.radius.large,

                  boxShadow:
                    theme.shadows.small,
                }}
              >
                <ContactIcon>
                  <MapPin size={20} />
                </ContactIcon>

                <div className="min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color:
                        theme.colors.muted,
                    }}
                  >
                    {getLocalizedText(
                      contactContent.addressLabel,
                      language
                    )}
                  </p>

                  <p
                    className="mt-2 text-lg font-semibold"
                    style={{
                      color:
                        theme.colors.text,
                    }}
                  >
                    {getLocalizedText(
                      contactContent.address,
                      language
                    )}
                  </p>
                </div>
              </div>
            </Animated>

            {/* OFFICE HOURS */}

            <Animated
              preset="fadeLeft"
              delay={0.45}
            >
              <div
                className="flex gap-5 p-6"
                style={{
                  background:
                    theme.colors.surface,

                  border:
                    `1px solid ${theme.colors.border}`,

                  borderRadius:
                    theme.radius.large,

                  boxShadow:
                    theme.shadows.small,
                }}
              >
                <ContactIcon>
                  <Clock3 size={20} />
                </ContactIcon>

                <div className="min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color:
                        theme.colors.muted,
                    }}
                  >
                    {getLocalizedText(
                      contactContent.hoursLabel,
                      language
                    )}
                  </p>

                  <p
                    className="mt-2 text-lg font-semibold"
                    style={{
                      color:
                        theme.colors.text,
                    }}
                  >
                    {getLocalizedText(
                      contactContent.hours,
                      language
                    )}
                  </p>
                </div>
              </div>
            </Animated>

          </div>
        </div>
      </Container>
    </section>
  );
}


/* ============================================================
   REUSABLE CONTACT ICON
============================================================ */

function ContactIcon({
  children,
}: {
  children: ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center"
      style={{
        background:
          theme.colors.surfaceAlt,

        color:
          theme.colors.accent,

        borderRadius:
          theme.radius.medium,
      }}
    >
      {children}
    </div>
  );
}

