import Animated from "../ui/Animated";
import Container from "../ui/Container";
import AnimatedCounter from "../ui/AnimatedCounter";

import {
  useLanguage,
} from "../../i18n/LanguageProvider";

import {
  getLocalizedText,
} from "../../i18n/getLocalizedText";

import {
  useTheme,
} from "../../theme/ThemeProvider";

import {
  trustStatsContent,
} from "../../data/trustStats";

export default function TrustStats() {
  const {
    language,
  } = useLanguage();

  const {
    theme,
  } = useTheme();

  if (!trustStatsContent.enabled) {
    return null;
  }

  return (
    <section
      id="stats"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          theme.colors.background,

        color:
          theme.colors.text,
      }}
    >
      {/* Decorative background */}

      {theme.effects.gradients && (
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              theme.colors.accent,
          }}
        />
      )}

      <Container className="relative z-10">

        {/* =====================================
            INTRODUCTION
        ====================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <Animated
            preset="fadeUp"
          >
            <p
              className="mb-5 text-xs font-semibold uppercase tracking-[0.35em]"
              style={{
                color:
                  theme.colors.accent,
              }}
            >
              {getLocalizedText(
                trustStatsContent.eyebrow,
                language
              )}
            </p>
          </Animated>

          <Animated
            preset="fadeUp"
            delay={0.1}
          >
            <h2
              className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
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
                trustStatsContent.title,
                language
              )}
            </h2>
          </Animated>

          <Animated
            preset="fadeUp"
            delay={0.2}
          >
            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-7 md:text-lg"
              style={{
                color:
                  theme.colors.muted,
              }}
            >
              {getLocalizedText(
                trustStatsContent.description,
                language
              )}
            </p>
          </Animated>

        </div>

        {/* =====================================
            STATISTICS
        ====================================== */}

        <div
          className="mt-16 grid grid-cols-2 overflow-hidden md:grid-cols-4"
          style={{
            border:
              `1px solid ${theme.colors.border}`,

            borderRadius:
              theme.radius.large,

            background:
              theme.colors.surface,

            boxShadow:
              theme.shadows.medium,
          }}
        >
          {trustStatsContent.statistics.map(
            (stat, index) => (
              <Animated
                key={stat.id}
                preset={
                  index % 2 === 0
                    ? "fadeUp"
                    : "fadeDown"
                }
                delay={
                  0.1 +
                  index * 0.1
                }
                className={`
                  relative p-7 sm:p-9 md:p-10
                  ${
                    index < 2
                      ? "border-b"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "border-r"
                      : ""
                  }
                  md:border-b-0
                  ${
                    index !== 3
                      ? "md:border-r"
                      : ""
                  }
                `}
                style={{
                  borderColor:
                    theme.colors.border,
                }}
              >
                {/* Number */}

                <div
                  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                  style={{
                    color:
                      theme.colors.accent,

                    fontFamily:
                      theme.typography.headingFont,
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                  />

                  {stat.suffix && (
                    <span>
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}

                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider sm:text-base">
                  {getLocalizedText(
                    stat.label,
                    language
                  )}
                </h3>

                {/* Description */}

                {stat.description && (
                  <p
                    className="mt-2 text-sm leading-6"
                    style={{
                      color:
                        theme.colors.muted,
                    }}
                  >
                    {getLocalizedText(
                      stat.description,
                      language
                    )}
                  </p>
                )}
              </Animated>
            )
          )}
        </div>

      </Container>
    </section>
  );
}