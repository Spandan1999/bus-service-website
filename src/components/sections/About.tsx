import { ArrowUpRight, Check } from "lucide-react";
import Animated from "../ui/Animated";
import Container from "../ui/Container";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";
import { aboutContent } from "../../data/about";
export default function About() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  if (!aboutContent.enabled) {
    return null;
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{
        background: theme.colors.surface,
        color: theme.colors.text,
      }}
    >
      <Container>

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* =====================================
              IMAGE
          ====================================== */}

          <Animated
            preset="fadeRight"
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: theme.radius.large,
                boxShadow: theme.shadows.large,
              }}
            >
              <img
                src={aboutContent.image}
                alt={getLocalizedText(
                  aboutContent.imageAlt,
                  language
                )}
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[620px]"
              />

              {/* Image overlay */}

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.45), transparent 55%)",
                }}
              />

              {/* Floating label */}

              <div
                className="absolute bottom-6 left-6 right-6 flex items-end justify-between"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Mahapatra Travels
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    The road ahead.
                  </p>
                </div>

                <div
                  className="flex h-12 w-12 items-center justify-center"
                  style={{
                    background:
                      theme.colors.accent,

                    color:
                      theme.colors.background,

                    borderRadius:
                      theme.radius.full,
                  }}
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* Decorative frame */}

            {theme.effects.gradients && (
              <div
                className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-full opacity-20 blur-2xl"
                style={{
                  background:
                    theme.colors.accent,
                }}
              />
            )}
          </Animated>

          {/* =====================================
              CONTENT
          ====================================== */}

          <div>

            <Animated preset="fadeUp">
              <p
                className="text-xs font-semibold uppercase tracking-[0.35em]"
                style={{
                  color: theme.colors.accent,
                }}
              >
                {getLocalizedText(
                  aboutContent.eyebrow,
                  language
                )}
              </p>
            </Animated>

            <Animated
              preset="fadeUp"
              delay={0.1}
            >
              <h2
                className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
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
                  aboutContent.title,
                  language
                )}
              </h2>
            </Animated>

            <Animated
              preset="fadeUp"
              delay={0.2}
            >
              <p
                className="mt-8 max-w-2xl text-lg leading-8"
                style={{
                  color: theme.colors.text,
                }}
              >
                {getLocalizedText(
                  aboutContent.description,
                  language
                )}
              </p>
            </Animated>

            <Animated
              preset="fadeUp"
              delay={0.3}
            >
              <p
                className="mt-5 max-w-2xl leading-7"
                style={{
                  color: theme.colors.muted,
                }}
              >
                {getLocalizedText(
                  aboutContent.secondaryDescription,
                  language
                )}
              </p>
            </Animated>

            {/* =================================
                HIGHLIGHTS
            ================================== */}

            <div className="mt-10 space-y-5">

              {aboutContent.highlights.map(
                (highlight, index) => (
                  <Animated
                    key={highlight.id}
                    preset="fadeUp"
                    delay={0.35 + index * 0.1}
                  >
                    <div className="flex gap-4">

                      <div
                        className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center"
                        style={{
                          background:
                            theme.colors.accent,

                          color:
                            theme.colors.background,

                          borderRadius:
                            theme.radius.full,
                        }}
                      >
                        <Check size={15} />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {getLocalizedText(
                            highlight.title,
                            language
                          )}
                        </h3>

                        <p
                          className="mt-1 text-sm leading-6"
                          style={{
                            color:
                              theme.colors.muted,
                          }}
                        >
                          {getLocalizedText(
                            highlight.description,
                            language
                          )}
                        </p>
                      </div>

                    </div>
                  </Animated>
                )
              )}

            </div>

            {/* =================================
                CTA
            ================================== */}

            <Animated
              preset="fadeUp"
              delay={0.65}
              className="mt-10"
            >
              <a
                href={aboutContent.buttonHref}
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
                  aboutContent.buttonLabel,
                  language
                )}
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Animated>
          </div>
        </div>
      </Container>
    </section>
  );
}