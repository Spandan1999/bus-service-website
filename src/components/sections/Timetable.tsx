import {
  ArrowRight,
  Clock3,
  Route,
} from "lucide-react";

import Animated from "../ui/Animated";
import Container from "../ui/Container";

import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";

import { timetableContent } from "../../data/timetable";

export default function Timetable() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  if (!timetableContent.enabled) {
    return null;
  }

  const routes =
    timetableContent.routes.filter(
      (route) => route.enabled
    );

  return (
    <section
      id="timetable"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <Container>

        {/* HEADER */}

        <div className="max-w-3xl">

          <Animated preset="fadeUp">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em]"
              style={{
                color: theme.colors.accent,
              }}
            >
              {getLocalizedText(
                timetableContent.eyebrow,
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
                timetableContent.title,
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
                timetableContent.description,
                language
              )}
            </p>
          </Animated>

        </div>

        {/* ROUTE TABLE */}

        <Animated
          preset="fadeUp"
          delay={0.3}
          className="mt-14"
        >
          <div
            className="overflow-hidden"
            style={{
              border:
                `1px solid ${theme.colors.border}`,

              borderRadius:
                theme.radius.large,

              background:
                theme.colors.surface,

              boxShadow:
                theme.shadows.small,
            }}
          >

            {/* DESKTOP HEADER */}

            <div
              className="hidden grid-cols-[1.7fr_1fr_1fr_1fr_1fr] gap-6 border-b px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] md:grid lg:px-8"
              style={{
                borderColor:
                  theme.colors.border,

                color:
                  theme.colors.muted,
              }}
            >
              <span>Route</span>
              <span>Departure</span>
              <span>Arrival</span>
              <span>Days</span>
              <span>Type</span>
            </div>

            {/* ROUTES */}

            {routes.map(
              (route) => (
                <div
                  key={route.id}
                  className="group border-b px-5 py-6 last:border-b-0 md:grid md:grid-cols-[1.7fr_1fr_1fr_1fr_1fr] md:items-center md:gap-6 md:px-6 lg:px-8"
                  style={{
                    borderColor:
                      theme.colors.border,
                  }}
                >

                  {/* ROUTE */}

                  <div>

                    <div className="flex items-center gap-3">

                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center"
                        style={{
                          background:
                            theme.colors.surfaceAlt,

                          color:
                            theme.colors.accent,

                          borderRadius:
                            theme.radius.medium,
                        }}
                      >
                        <Route size={17} />
                      </div>

                      <div>
                        <p className="font-semibold">
                          {getLocalizedText(
                            route.from,
                            language
                          )}
                          <span
                            className="mx-2"
                            style={{
                              color:
                                theme.colors.accent,
                            }}
                          >
                            →
                          </span>
                          {getLocalizedText(
                            route.to,
                            language
                          )}
                        </p>

                        <p
                          className="mt-1 text-xs"
                          style={{
                            color:
                              theme.colors.muted,
                          }}
                        >
                          {getLocalizedText(
                            route.routeName,
                            language
                          )}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* MOBILE DETAILS */}

                  <div className="mt-5 grid grid-cols-2 gap-4 md:mt-0 md:contents">

                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] md:hidden"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        Departure
                      </p>

                      <p className="mt-1 font-semibold md:mt-0">
                        {route.departure}
                      </p>
                    </div>

                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] md:hidden"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        Arrival
                      </p>

                      <p className="mt-1 font-semibold md:mt-0">
                        {route.arrival}
                      </p>
                    </div>

                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] md:hidden"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        Days
                      </p>

                      <p
                        className="mt-1 text-sm md:mt-0"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        {getLocalizedText(
                          route.days,
                          language
                        )}
                      </p>
                    </div>

                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] md:hidden"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        Bus
                      </p>

                      <p
                        className="mt-1 text-sm md:mt-0"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        {getLocalizedText(
                          route.busType,
                          language
                        )}
                      </p>
                    </div>

                  </div>

                  {/* STATUS */}

                  <div className="mt-5 md:mt-0">

                    <span
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{
                        background:
                          route.status === "active"
                            ? `${theme.colors.accent}18`
                            : `${theme.colors.muted}18`,

                        color:
                          route.status === "active"
                            ? theme.colors.accent
                            : theme.colors.muted,

                        borderRadius:
                          theme.radius.full,
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background:
                            route.status === "active"
                              ? theme.colors.accent
                              : theme.colors.muted,
                        }}
                      />

                      {route.status === "active"
                        ? "Available"
                        : "Limited"}
                    </span>

                  </div>

                </div>
              )
            )}

          </div>
        </Animated>

        {/* NOTE */}

        <Animated
          preset="fadeUp"
          delay={0.45}
          className="mt-6"
        >
          <div className="flex items-start gap-3">

            <Clock3
              size={16}
              className="mt-1 shrink-0"
              style={{
                color:
                  theme.colors.accent,
              }}
            />

            <p
              className="text-sm leading-6"
              style={{
                color:
                  theme.colors.muted,
              }}
            >
              {getLocalizedText(
                timetableContent.note,
                language
              )}
            </p>

          </div>
        </Animated>

        {/* FUTURE BOOKING HOOK */}

        <Animated
          preset="fadeUp"
          delay={0.55}
          className="mt-10"
        >
          <div
            className="flex flex-col justify-between gap-5 p-6 md:flex-row md:items-center"
            style={{
              background:
                theme.colors.surfaceAlt,

              borderRadius:
                theme.radius.large,
            }}
          >

            <div>
              <p className="font-semibold">
                Looking for more routes?
              </p>

              <p
                className="mt-1 text-sm"
                style={{
                  color:
                    theme.colors.muted,
                }}
              >
                Get in touch with our team for current
                route information.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1"
              style={{
                background:
                  theme.colors.accent,

                color:
                  theme.colors.background,

                borderRadius:
                  theme.button.radius,
              }}
            >
              Contact Us
              <ArrowRight size={17} />
            </a>
          </div>
        </Animated>
      </Container>
    </section>
  );
}