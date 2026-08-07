import {
  ArrowUpRight,
  BriefcaseBusiness,
  Bus,
  Route,
  Users,
} from "lucide-react";

import Animated from "../ui/Animated";
import Container from "../ui/Container";

import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";

import { servicesContent } from "../../data/services";

const iconMap = {
  bus: Bus,
  users: Users,
  route: Route,
  briefcase: BriefcaseBusiness,
};

export default function Services() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  if (!servicesContent.enabled) {
    return null;
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <Container>

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="max-w-3xl">

          <Animated preset="fadeUp">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em]"
              style={{
                color: theme.colors.accent,
              }}
            >
              {getLocalizedText(
                servicesContent.eyebrow,
                language
              )}
            </p>
          </Animated>

          <Animated
            preset="fadeUp"
            delay={0.1}
          >
            <h2
              className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
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
                servicesContent.title,
                language
              )}
            </h2>
          </Animated>

          <Animated
            preset="fadeUp"
            delay={0.2}
          >
            <p
              className="mt-6 max-w-2xl text-lg leading-8"
              style={{
                color: theme.colors.muted,
              }}
            >
              {getLocalizedText(
                servicesContent.description,
                language
              )}
            </p>
          </Animated>

        </div>

        {/* =====================================
            SERVICE GRID
        ====================================== */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {servicesContent.services.map(
            (service, index) => {
              const Icon =
                iconMap[
                  service.icon as keyof typeof iconMap
                ] || Bus;

              return (
                <Animated
                  key={service.id}
                  preset={
                    index % 2 === 0
                      ? "fadeUp"
                      : "fadeDown"
                  }
                  delay={0.15 + index * 0.1}
                  className="h-full"
                >
                  <article
                    className="group relative flex h-full min-h-[330px] flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-2 sm:p-8"
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
                    {/* Featured glow */}

                    {service.featured &&
                      theme.effects.gradients && (
                        <div
                          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                          style={{
                            background:
                              theme.colors.accent,
                          }}
                        />
                      )}

                    {/* Number */}

                    <div className="flex items-center justify-between">

                      <span
                        className="text-xs font-semibold tracking-[0.25em]"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        0
                        {index + 1}
                      </span>

                      <div
                        className="flex h-11 w-11 items-center justify-center transition-transform duration-500 group-hover:rotate-6"
                        style={{
                          background:
                            service.featured
                              ? theme.colors.accent
                              : theme.colors.surfaceAlt,

                          color:
                            service.featured
                              ? theme.colors.background
                              : theme.colors.text,

                          borderRadius:
                            theme.radius.medium,
                        }}
                      >
                        <Icon size={20} />
                      </div>

                    </div>

                    {/* Content */}

                    <div className="mt-auto">

                      <h3
                        className="text-xl font-semibold"
                        style={{
                          fontFamily:
                            theme.typography.headingFont,
                        }}
                      >
                        {getLocalizedText(
                          service.title,
                          language
                        )}
                      </h3>

                      <p
                        className="mt-3 text-sm leading-6"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        {getLocalizedText(
                          service.description,
                          language
                        )}
                      </p>

                    </div>

                    {/* Bottom arrow */}

                    <div
                      className="mt-7 flex items-center justify-between border-t pt-5"
                      style={{
                        borderColor:
                          theme.colors.border,
                      }}
                    >
                      <span
                        className="text-xs font-medium uppercase tracking-[0.2em]"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        Discover
                      </span>

                      <div
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{
                          color:
                            theme.colors.accent,
                        }}
                      >
                        <ArrowUpRight size={19} />
                      </div>
                    </div>

                  </article>
                </Animated>
              );
            }
          )}

        </div>
      </Container>
    </section>
  );
}