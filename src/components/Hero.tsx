import {
  ArrowRight,
  Play,
} from "lucide-react";

import Animated from "./ui/Animated";
import Container from "./ui/Container";

import { useTheme } from "../theme/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();

  const cinematic =
    theme.animation.style === "cinematic";

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background: theme.colors.background,
      }}
    >
      {/* Background image */}

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2400&q=90"
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

      {/* Decorative gradient */}

      {theme.effects.gradients && (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.12), transparent 45%)",
          }}
        />
      )}

      <Container className="relative z-10 pt-32">
        <div className="max-w-5xl">

          {/* Eyebrow */}

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
              Moving people. Connecting places.
            </p>
          </Animated>

          {/* Main heading */}

          <Animated
            preset={cinematic ? "cinematic" : "fadeUp"}
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
              Every journey
              <br />
              tells a story.
            </h1>
          </Animated>

          {/* Description */}

          <Animated
            preset="fadeUp"
            delay={0.25}
            className="mt-8"
          >
            <p className="max-w-xl text-lg leading-8 text-white/75 md:text-xl">
              Discover a transportation experience
              built around comfort, reliability and
              the freedom of the open road.
            </p>
          </Animated>

          {/* Buttons */}

          <Animated
            preset="fadeUp"
            delay={0.4}
            className="mt-10"
          >
            <div className="flex flex-wrap items-center gap-4">

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
                Explore Our Fleet

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#gallery"
                className="flex items-center gap-3 border border-white/25 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                style={{
                  borderRadius:
                    theme.button.radius,
                }}
              >
                <Play size={16} />

                View Gallery
              </a>

            </div>
          </Animated>

        </div>
      </Container>

      {/* Scroll indicator */}

      <Animated
        preset="fade"
        delay={0.8}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-10 w-px bg-white/30" />
        </div>
      </Animated>

    </section>
  );
}