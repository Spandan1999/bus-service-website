import { ArrowUpRight, Images } from "lucide-react";
import Animated from "../ui/Animated";
import Container from "../ui/Container";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getLocalizedText } from "../../i18n/getLocalizedText";
import { useTheme } from "../../theme/ThemeProvider";
import { galleryContent } from "../../data/gallery";
export default function Gallery() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  if (!galleryContent.enabled) {
    return null;
  }

  const items = galleryContent.items.filter(
    (item) => item.enabled
  );

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{
        background: theme.colors.surface,
        color: theme.colors.text,
      }}
    >
      <Container>

        {/* HEADER */}

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
                  galleryContent.eyebrow,
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
                  galleryContent.title,
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
                  galleryContent.description,
                  language
                )}
              </p>
            </Animated>

          </div>

          <Animated
            preset="fadeLeft"
            delay={0.25}
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center"
              style={{
                background:
                  theme.colors.surfaceAlt,

                color:
                  theme.colors.accent,

                borderRadius:
                  theme.radius.full,
              }}
            >
              <Images size={22} />
            </div>
          </Animated>

        </div>

        {/* GALLERY */}

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px]">

          {items.map(
            (item, index) => {

              const isLarge =
                index === 0;

              const isTall =
                index === 1;

              return (
                <Animated
                  key={item.id}
                  preset={
                    index % 2 === 0
                      ? "fadeUp"
                      : "fadeDown"
                  }
                  delay={0.1 + index * 0.08}
                  className={
                    isLarge
                      ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                      : isTall
                        ? "lg:row-span-2"
                        : ""
                  }
                >
                  <article
                    className="group relative h-full overflow-hidden"
                    style={{
                      borderRadius:
                        theme.radius.large,

                      boxShadow:
                        theme.shadows.small,
                    }}
                  >

                    {/* IMAGE */}

                    <img
                      src={item.image}
                      alt={getLocalizedText(
                        item.alt,
                        language
                      )}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* OVERLAY */}

                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.02) 65%)",
                      }}
                    />

                    {/* CATEGORY */}

                    <div
                      className="absolute left-5 top-5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md"
                      style={{
                        background:
                          "rgba(0,0,0,0.3)",

                        color: "#ffffff",

                        borderRadius:
                          theme.radius.full,
                      }}
                    >
                      {getLocalizedText(
                        item.category,
                        language
                      )}
                    </div>

                    {/* CONTENT */}

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                      <div className="flex items-end justify-between gap-4">

                        <div>

                          <h3 className="text-lg font-semibold text-white sm:text-xl">
                            {getLocalizedText(
                              item.title,
                              language
                            )}
                          </h3>

                        </div>

                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                          style={{
                            background:
                              theme.colors.accent,

                            color:
                              theme.colors.background,

                            borderRadius:
                              theme.radius.full,
                          }}
                        >
                          <ArrowUpRight size={17} />
                        </div>

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