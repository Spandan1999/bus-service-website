import { ArrowUpRight } from "lucide-react";

import Animated from "../ui/Animated";
import Container from "../ui/Container";

import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";

import { finalCtaContent } from "../../data/finalCTA";

export default function FinalCta() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  if (!finalCtaContent.enabled) {
    return null;
  }

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden"
      style={{
        background: theme.colors.background,
      }}
    >
      {/* Background image */}

      <div className="absolute inset-0">
        <img
          src={finalCtaContent.backgroundImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              finalCtaContent.overlay,
          }}
        />
      </div>

      {/* Theme gradient */}

      {theme.effects.gradients && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.18), transparent 35%)",
          }}
        />
      )}

      <Container className="relative z-10 py-24 md:py-32 lg:py-40">

        <div className="max-w-4xl">

          {/* Eyebrow */}

          <Animated preset="fadeUp">
            <p
              className="text-xs font-semibold uppercase tracking-[0.4em]"
              style={{
                color: theme.colors.accent,
              }}
            >
              {getLocalizedText(
                finalCtaContent.eyebrow,
                language
              )}
            </p>
          </Animated>

          {/* Heading */}

          <Animated
            preset={
              theme.animation.style === "cinematic"
                ? "cinematic"
                : "fadeUp"
            }
            delay={0.1}
          >
            <h2
              className="mt-6 max-w-4xl text-4xl font-bold leading-[0.98] text-white sm:text-6xl lg:text-8xl"
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
                finalCtaContent.title,
                language
              )}
            </h2>
          </Animated>

          {/* Description */}

          <Animated
            preset="fadeUp"
            delay={0.25}
          >
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              {getLocalizedText(
                finalCtaContent.description,
                language
              )}
            </p>
          </Animated>

          {/* Button */}

          <Animated
            preset="fadeUp"
            delay={0.4}
            className="mt-10"
          >
            <a
              href={finalCtaContent.buttonHref}
              className="group inline-flex items-center gap-3 px-7 py-4 font-semibold transition-transform duration-300 hover:-translate-y-1"
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
                    : theme.shadows.medium,
              }}
            >
              {getLocalizedText(
                finalCtaContent.buttonLabel,
                language
              )}

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </Animated>

        </div>

      </Container>
    </section>
  );
}