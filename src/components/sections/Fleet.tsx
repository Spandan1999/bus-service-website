import {
  ArrowUpRight,
  Users,
} from "lucide-react";
import Animated from "../ui/Animated";
import Container from "../ui/Container";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";
import { fleetContent } from "../../data/fleet";
export default function Fleet() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  if (!fleetContent.enabled) {
    return null;
  }
  const vehicles =
    fleetContent.vehicles.filter(
      (vehicle) => vehicle.enabled
    );

  return (
    <section
      id="fleet"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{
        background: theme.colors.surface,
        color: theme.colors.text,
      }}
    >
      <Container>

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <Animated preset="fadeUp">
              <p
                className="text-xs font-semibold uppercase tracking-[0.35em]"
                style={{
                  color: theme.colors.accent,
                }}
              >
                {getLocalizedText(
                  fleetContent.eyebrow,
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
                  fleetContent.title,
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
                  fleetContent.description,
                  language
                )}
              </p>
            </Animated>

          </div>

        </div>

        {/* =====================================
            VEHICLE GRID
        ====================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {vehicles.map(
            (vehicle, index) => (
              <Animated
                key={vehicle.id}
                preset="fadeUp"
                delay={0.15 + index * 0.1}
                className="h-full"
              >
                <article
                  className="group h-full overflow-hidden"
                  style={{
                    background:
                      theme.colors.background,

                    border:
                      `1px solid ${theme.colors.border}`,

                    borderRadius:
                      theme.radius.large,

                    boxShadow:
                      theme.shadows.small,
                  }}
                >

                  {/* IMAGE */}

                  <div className="relative h-[280px] overflow-hidden">

                    <img
                      src={vehicle.image}
                      alt={getLocalizedText(
                        vehicle.imageAlt,
                        language
                      )}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%)",
                      }}
                    />

                    {/* Category */}

                    <div
                      className="absolute left-5 top-5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md"
                      style={{
                        background:
                          "rgba(0,0,0,0.35)",

                        color:
                          "#ffffff",

                        borderRadius:
                          theme.radius.full,
                      }}
                    >
                      {getLocalizedText(
                        vehicle.category,
                        language
                      )}
                    </div>

                    {/* Featured */}

                    {vehicle.featured && (
                      <div
                        className="absolute right-5 top-5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                        style={{
                          background:
                            theme.colors.accent,

                          color:
                            theme.colors.background,

                          borderRadius:
                            theme.radius.full,
                        }}
                      >
                        Featured
                      </div>
                    )}

                    {/* Vehicle name */}

                    <div className="absolute bottom-5 left-5 right-5">

                      <h3 className="text-2xl font-bold text-white">
                        {getLocalizedText(
                          vehicle.name,
                          language
                        )}
                      </h3>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-6 sm:p-7">

                    <p
                      className="leading-7"
                      style={{
                        color:
                          theme.colors.muted,
                      }}
                    >
                      {getLocalizedText(
                        vehicle.description,
                        language
                      )}
                    </p>

                    {/* Capacity */}

                    <div
                      className="mt-6 flex items-center gap-3 border-b pb-5"
                      style={{
                        borderColor:
                          theme.colors.border,
                      }}
                    >
                      <Users
                        size={18}
                        style={{
                          color:
                            theme.colors.accent,
                        }}
                      />

                      <span className="text-sm font-medium">
                        {vehicle.capacity} seats
                      </span>
                    </div>

                    {/* Features */}

                    <div className="mt-5 space-y-2.5">

                      {vehicle.features.map(
                        (feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3 text-sm"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{
                                background:
                                  theme.colors.accent,
                              }}
                            />

                            <span
                              style={{
                                color:
                                  theme.colors.muted,
                              }}
                            >
                              {getLocalizedText(
                                feature,
                                language
                              )}
                            </span>
                          </div>
                        )
                      )}

                    </div>

                    {/* Bottom action */}

                    <div
                      className="mt-7 flex items-center justify-between border-t pt-5"
                      style={{
                        borderColor:
                          theme.colors.border,
                      }}
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.2em]"
                        style={{
                          color:
                            theme.colors.muted,
                        }}
                      >
                        Explore
                      </span>

                      <ArrowUpRight
                        size={20}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        style={{
                          color:
                            theme.colors.accent,
                        }}
                      />
                    </div>

                  </div>

                </article>
              </Animated>
            )
          )}
        </div>
        {/* =====================================
            CTA
        ====================================== */}

        <Animated
          preset="fadeUp"
          delay={0.5}
          className="mt-12 text-center"
        >
          <a
            href={fleetContent.buttonHref}
            className="inline-flex items-center gap-3 px-6 py-3.5 font-semibold transition-transform duration-300 hover:-translate-y-1"
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
              fleetContent.buttonLabel,
              language
            )}
            <ArrowUpRight size={18} />
          </a>
        </Animated>
      </Container>
    </section>
  );
}