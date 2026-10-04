import { ArrowRight, Play } from "lucide-react";

import { heroContent } from "../../data/home";

import Animated from "../ui/Animated";
import Container from "../ui/Container";

import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";
import { useSiteSettings } from "../../context/SiteSettingsContext";

export default function Hero() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const { siteSettings } = useSiteSettings();

  const businessName =
    siteSettings?.businessName ?? "Mahapatra Travels";

  const tagline =
    siteSettings?.tagline ?? "Every Journey Tells a Story";

  const cinematic =
    theme.animation.style === "cinematic";

  const backgroundImage =
    heroContent.backgroundImage ||
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2400&q=90";

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background: theme.colors.background,
      }}
    >
      {/* ================================
          BACKGROUND
      ================================= */}

      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Luxury bus travelling on the road"
          className="h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background: theme.hero.overlay,
          }}
        />
      </div>

      {/* ================================
          THEME GRADIENT
      ================================= */}

      {theme.effects.gradients && (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.12), transparent 45%)",
          }}
        />
      )}

      {/* ================================
          CONTENT
      ================================= */}

      <Container className="relative z-10 pt-32">
        <div className="max-w-5xl">

          {/* ==============================
              EYEBROW / TAGLINE
          =============================== */}

          <Animated
            preset="fadeUp"
            className="mb-6"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.4em]"
              style={{
                color: theme.colors.accent,
              }}
            >
              {tagline}
            </p>
          </Animated>

          {/* ==============================
              MAIN HEADING
          =============================== */}

          <Animated
            preset={
              cinematic
                ? "cinematic"
                : "fadeUp"
            }
            delay={0.1}
          >
            <h1
              className="max-w-5xl text-6xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-9xl"
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
                heroContent.titleLineOne,
                language
              )}

              <br />

              {getLocalizedText(
                heroContent.titleLineTwo,
                language
              )}
            </h1>
          </Animated>

          {/* ==============================
              DESCRIPTION
          =============================== */}

          <Animated
            preset="fadeUp"
            delay={0.25}
            className="mt-8"
          >
            <p className="max-w-xl text-lg leading-8 text-white/75 md:text-xl">
              {getLocalizedText(
                heroContent.description,
                language
              )}
            </p>
          </Animated>

          {/* ==============================
              BUSINESS NAME
          =============================== */}

          <Animated
            preset="fadeUp"
            delay={0.32}
          >
            <p className="mt-4 text-sm font-medium text-white/60">
              {businessName}
            </p>
          </Animated>

          {/* ==============================
              CTA BUTTONS
          =============================== */}

          <Animated
            preset="fadeUp"
            delay={0.4}
            className="mt-10"
          >
            <div className="flex flex-wrap items-center gap-4">

              {/* Fleet Button */}

              <a
                href="#fleet"
                className="group flex items-center gap-3 px-6 py-3.5 font-semibold transition-transform duration-300 hover:-translate-y-1"
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
                  heroContent.fleetButton,
                  language
                )}

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Gallery Button */}

              <a
                href="#gallery"
                className="flex items-center gap-3 border border-white/25 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                style={{
                  borderRadius:
                    theme.button.radius,
                }}
              >
                <Play size={16} />

                {getLocalizedText(
                  heroContent.galleryButton,
                  language
                )}
              </a>

            </div>
          </Animated>

        </div>
      </Container>

      {/* ================================
          SCROLL INDICATOR
      ================================= */}

      <Animated
        preset="fade"
        delay={0.8}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-white/50">

          <span className="text-[10px] uppercase tracking-[0.3em]">
            {t.hero.scroll}
          </span>

          <div className="h-10 w-px bg-white/30" />

        </div>
      </Animated>
    </section>
  );
}