import type {
  Language,
  TranslationPack,
} from "./types";

export const translations: Record<
  Language,
  TranslationPack
> = {
  en: {
    navigation: {
      home: "Home",
      fleet: "Fleet",
      timetable: "Timetable",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
    },

    hero: {
      eyebrow:
        "Moving people. Connecting places.",

      titleLineOne:
        "Every journey",

      titleLineTwo:
        "tells a story.",

      description:
        "Discover a transportation experience built around comfort, reliability and the freedom of the open road.",

      fleetButton:
        "Explore Our Fleet",

      galleryButton:
        "View Gallery",

      scroll:
        "Scroll",
    },

    common: {
      language: "Language",
      learnMore: "Learn More",
      viewAll: "View All",
      explore: "Explore",
    },
  },

  hi: {
    navigation: {
      home: "होम",
      fleet: "हमारी बसें",
      timetable: "समय सारणी",
      gallery: "गैलरी",
      about: "हमारे बारे में",
      contact: "संपर्क",
    },

    hero: {
      eyebrow:
        "लोगों को जोड़ना। स्थानों को जोड़ना।",

      titleLineOne:
        "हर सफ़र",

      titleLineTwo:
        "एक कहानी कहता है।",

      description:
        "आराम, विश्वसनीयता और बेहतरीन यात्रा अनुभव के साथ सफ़र का एक नया अनुभव प्राप्त करें।",

      fleetButton:
        "हमारी बसें देखें",

      galleryButton:
        "गैलरी देखें",

      scroll:
        "नीचे जाएँ",
    },

    common: {
      language: "भाषा",
      learnMore: "और जानें",
      viewAll: "सभी देखें",
      explore: "जानें",
    },
  },

  or: {
    navigation: {
      home: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
      fleet: "ଆମ ବସ୍",
      timetable: "ସମୟ ସାରଣୀ",
      gallery: "ଗ୍ୟାଲେରୀ",
      about: "ଆମ ବିଷୟରେ",
      contact: "ଯୋଗାଯୋଗ",
    },

    hero: {
      eyebrow:
        "ଲୋକଙ୍କୁ ଯୋଡ଼ିବା। ସ୍ଥାନଗୁଡ଼ିକୁ ଯୋଡ଼ିବା।",

      titleLineOne:
        "ପ୍ରତ୍ୟେକ ଯାତ୍ରା",

      titleLineTwo:
        "ଏକ କାହାଣୀ କହେ।",

      description:
        "ଆରାମ, ବିଶ୍ୱସନୀୟତା ଏବଂ ଉତ୍ତମ ଯାତ୍ରା ଅନୁଭବ ସହିତ ଏକ ନୂତନ ପରିବହନ ଅନୁଭୂତି ଆବିଷ୍କାର କରନ୍ତୁ।",

      fleetButton:
        "ଆମ ବସ୍ ଦେଖନ୍ତୁ",

      galleryButton:
        "ଗ୍ୟାଲେରୀ ଦେଖନ୍ତୁ",

      scroll:
        "ତଳକୁ ଯାଆନ୍ତୁ",
    },

    common: {
      language: "ଭାଷା",
      learnMore: "ଅଧିକ ଜାଣନ୍ତୁ",
      viewAll: "ସମସ୍ତ ଦେଖନ୍ତୁ",
      explore: "ଅନ୍ୱେଷଣ କରନ୍ତୁ",
    },
  },
};