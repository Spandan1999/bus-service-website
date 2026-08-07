export type Language = "en" | "hi" | "or";

export interface TranslationPack {
  navigation: {
    home: string;
    fleet: string;
    timetable: string;
    gallery: string;
    about: string;
    contact: string;
  };

  hero: {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    description: string;
    fleetButton: string;
    galleryButton: string;
    scroll: string;
  };

  common: {
    language: string;
    learnMore: string;
    viewAll: string;
    explore: string;
  };
}