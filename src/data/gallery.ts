import type { GalleryContent } from "../types/content";

export const galleryContent: GalleryContent = {
  enabled: true,

  eyebrow: {
    en: "Our Gallery",
    hi: "हमारी गैलरी",
    or: "ଆମର ଗ୍ୟାଲେରୀ",
  },

  title: {
    en: "The journey, captured.",
    hi: "यात्रा की कुछ झलकियाँ।",
    or: "ଯାତ୍ରାର କିଛି ମୁହୂର୍ତ୍ତ।",
  },

  description: {
    en: "A glimpse into our buses, journeys and the experiences that make travelling memorable.",
    hi: "हमारी बसों, यात्राओं और उन अनुभवों की एक झलक जो सफ़र को यादगार बनाते हैं।",
    or: "ଆମର ବସ୍, ଯାତ୍ରା ଏବଂ ଯାତ୍ରାକୁ ସ୍ମରଣୀୟ କରୁଥିବା ଅନୁଭୂତିର ଏକ ଝଲକ।",
  },

  items: [
    {
      id: "gallery-01",

      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=90",

      alt: {
        en: "Luxury bus on a road",
        hi: "सड़क पर लक्ज़री बस",
        or: "ରାସ୍ତାରେ ଲକ୍ସୁରୀ ବସ୍",
      },

      title: {
        en: "The open road",
        hi: "खुली सड़क",
        or: "ଖୋଲା ରାସ୍ତା",
      },

      category: {
        en: "Journeys",
        hi: "यात्राएँ",
        or: "ଯାତ୍ରା",
      },

      featured: true,
      enabled: true,
    },

    {
      id: "gallery-02",

      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=85",

      alt: {
        en: "Travel coach",
        hi: "ट्रैवल कोच",
        or: "ଟ୍ରାଭେଲ୍ କୋଚ୍",
      },

      title: {
        en: "Ready for departure",
        hi: "प्रस्थान के लिए तैयार",
        or: "ପ୍ରସ୍ଥାନ ପାଇଁ ପ୍ରସ୍ତୁତ",
      },

      category: {
        en: "Fleet",
        hi: "बेड़ा",
        or: "ଯାନବହର",
      },

      enabled: true,
    },

    {
      id: "gallery-03",

      image:
        "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1200&q=85",

      alt: {
        en: "Bus travelling through a city",
        hi: "शहर से गुजरती बस",
        or: "ସହର ଦେଇ ଯାଉଥିବା ବସ୍",
      },

      title: {
        en: "Moving forward",
        hi: "आगे बढ़ते हुए",
        or: "ଆଗକୁ ବଢ଼ିବା",
      },

      category: {
        en: "Fleet",
        hi: "बेड़ा",
        or: "ଯାନବହର",
      },

      enabled: true,
    },

    {
      id: "gallery-04",

      image:
        "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=1200&q=85",

      alt: {
        en: "Road journey",
        hi: "सड़क यात्रा",
        or: "ସଡ଼କ ଯାତ୍ରା",
      },

      title: {
        en: "Miles ahead",
        hi: "मंज़िल की ओर",
        or: "ଗନ୍ତବ୍ୟ ଆଡ଼କୁ",
      },

      category: {
        en: "Journeys",
        hi: "यात्राएँ",
        or: "ଯାତ୍ରା",
      },

      enabled: true,
    },

    {
      id: "gallery-05",

      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",

      alt: {
        en: "Bus interior",
        hi: "बस का इंटीरियर",
        or: "ବସ୍ ଭିତର",
      },

      title: {
        en: "Inside the experience",
        hi: "अनुभव के अंदर",
        or: "ଅନୁଭୂତି ଭିତରେ",
      },

      category: {
        en: "Experience",
        hi: "अनुभव",
        or: "ଅନୁଭୂତି",
      },

      enabled: true,
    },
  ],
};