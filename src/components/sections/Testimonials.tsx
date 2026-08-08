import { Quote, Star } from "lucide-react";

import Animated from "../ui/Animated";
import Container from "../ui/Container";

import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";

import { testimonialsContent } from "../../data/testimonials";

export default function Testimonials() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  if (!testimonialsContent.enabled) {
    return null;
  }

  const testimonials =
    testimonialsContent.testimonials.filter(
      (testimonial) => testimonial.enabled
    );

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{
        background: theme.colors.surface,
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
                testimonialsContent.eyebrow,
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
                testimonialsContent.title,
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
                testimonialsContent.description,
                language
              )}
            </p>
          </Animated>

        </div>

        {/* TESTIMONIAL CARDS */}

        <div className="mt-14 grid gap-5 lg:grid-cols-3">

          {testimonials.map(
            (testimonial, index) => (
              <Animated
                key={testimonial.id}
                preset={
                  index === 1
                    ? "fadeUp"
                    : "fadeLeft"
                }
                delay={0.15 + index * 0.1}
              >
                <article
                  className="group relative flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-2"
                  style={{
                    background:
                      testimonial.featured
                        ? theme.colors.surfaceAlt
                        : theme.colors.background,

                    border:
                      `1px solid ${theme.colors.border}`,

                    borderRadius:
                      theme.radius.large,

                    boxShadow:
                      theme.shadows.small,
                  }}
                >

                  {/* QUOTE ICON */}

                  <div className="flex items-start justify-between">

                    <div
                      className="flex h-11 w-11 items-center justify-center"
                      style={{
                        background:
                          theme.colors.accent,

                        color:
                          theme.colors.background,

                        borderRadius:
                          theme.radius.full,
                      }}
                    >
                      <Quote size={19} />
                    </div>

                    {/* RATING */}

                    <div className="flex gap-1">
                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          fill="currentColor"
                          style={{
                            color:
                              theme.colors.accent,
                          }}
                        />
                      ))}
                    </div>

                  </div>

                  {/* MESSAGE */}

                  <p
                    className="mt-8 flex-1 text-lg leading-8"
                    style={{
                      color:
                        theme.colors.text,
                    }}
                  >
                    “
                    {getLocalizedText(
                      testimonial.message,
                      language
                    )}
                    ”
                  </p>

                  {/* PERSON */}

                  <div
                    className="mt-8 border-t pt-5"
                    style={{
                      borderColor:
                        theme.colors.border,
                    }}
                  >
                    <p className="font-semibold">
                      {testimonial.name}
                    </p>

                    <p
                      className="mt-1 text-sm"
                      style={{
                        color:
                          theme.colors.muted,
                      }}
                    >
                      {getLocalizedText(
                        testimonial.role,
                        language
                      )}
                    </p>
                  </div>

                </article>
              </Animated>
            )
          )}

        </div>

      </Container>
    </section>
  );
}