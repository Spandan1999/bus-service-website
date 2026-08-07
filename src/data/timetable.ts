import type { TimetableContent } from "../types/content";

export const timetableContent: TimetableContent = {
  enabled: true,

  eyebrow: {
    en: "Routes & Timings",
    hi: "मार्ग और समय",
    or: "ମାର୍ଗ ଏବଂ ସମୟ",
  },

  title: {
    en: "Plan your journey.",
    hi: "अपनी यात्रा की योजना बनाएं।",
    or: "ଆପଣଙ୍କ ଯାତ୍ରା ଯୋଜନା କରନ୍ତୁ।",
  },

  description: {
    en: "Explore our current routes and scheduled departure times. Timings may vary, so please confirm before travelling.",
    hi: "हमारे वर्तमान मार्ग और निर्धारित प्रस्थान समय देखें। समय में बदलाव हो सकता है, इसलिए यात्रा से पहले पुष्टि करें।",
    or: "ଆମର ବର୍ତ୍ତମାନର ମାର୍ଗ ଏବଂ ନିର୍ଦ୍ଧାରିତ ପ୍ରସ୍ଥାନ ସମୟ ଦେଖନ୍ତୁ। ସମୟ ପରିବର୍ତ୍ତନ ହୋଇପାରେ, ତେଣୁ ଯାତ୍ରା ପୂର୍ବରୁ ନିଶ୍ଚିତ କରନ୍ତୁ।",
  },

  routes: [
    {
      id: "route-01",

      routeName: {
        en: "Bhubaneswar → Puri",
        hi: "भुवनेश्वर → पुरी",
        or: "ଭୁବନେଶ୍ୱର → ପୁରୀ",
      },

      from: {
        en: "Bhubaneswar",
        hi: "भुवनेश्वर",
        or: "ଭୁବନେଶ୍ୱର",
      },

      to: {
        en: "Puri",
        hi: "पुरी",
        or: "ପୁରୀ",
      },

      departure: "06:30 AM",
      arrival: "08:00 AM",
      duration: "1h 30m",

      days: {
        en: "Every day",
        hi: "हर दिन",
        or: "ପ୍ରତିଦିନ",
      },

      busType: {
        en: "Premium Coach",
        hi: "प्रीमियम कोच",
        or: "ପ୍ରିମିୟମ କୋଚ୍",
      },

      status: "active",
      enabled: true,
    },

    {
      id: "route-02",

      routeName: {
        en: "Puri → Bhubaneswar",
        hi: "पुरी → भुवनेश्वर",
        or: "ପୁରୀ → ଭୁବନେଶ୍ୱର",
      },

      from: {
        en: "Puri",
        hi: "पुरी",
        or: "ପୁରୀ",
      },

      to: {
        en: "Bhubaneswar",
        hi: "भुवनेश्वर",
        or: "ଭୁବନେଶ୍ୱର",
      },

      departure: "05:00 PM",
      arrival: "06:30 PM",
      duration: "1h 30m",

      days: {
        en: "Every day",
        hi: "हर दिन",
        or: "ପ୍ରତିଦିନ",
      },

      busType: {
        en: "Executive Coach",
        hi: "एग्जीक्यूटिव कोच",
        or: "ଏକ୍ଜିକ୍ୟୁଟିଭ୍ କୋଚ୍",
      },

      status: "active",
      enabled: true,
    },

    {
      id: "route-03",

      routeName: {
        en: "Bhubaneswar → Cuttack",
        hi: "भुवनेश्वर → कटक",
        or: "ଭୁବନେଶ୍ୱର → କଟକ",
      },

      from: {
        en: "Bhubaneswar",
        hi: "भुवनेश्वर",
        or: "ଭୁବନେଶ୍ୱର",
      },

      to: {
        en: "Cuttack",
        hi: "कटक",
        or: "କଟକ",
      },

      departure: "09:00 AM",
      arrival: "10:00 AM",
      duration: "1h",

      days: {
        en: "Mon – Sat",
        hi: "सोम – शनि",
        or: "ସୋମ – ଶନି",
      },

      busType: {
        en: "Standard Coach",
        hi: "स्टैंडर्ड कोच",
        or: "ଷ୍ଟାଣ୍ଡାର୍ଡ କୋଚ୍",
      },

      status: "active",
      enabled: true,
    },

    {
      id: "route-04",

      routeName: {
        en: "Cuttack → Bhubaneswar",
        hi: "कटक → भुवनेश्वर",
        or: "କଟକ → ଭୁବନେଶ୍ୱର",
      },

      from: {
        en: "Cuttack",
        hi: "कटक",
        or: "କଟକ",
      },

      to: {
        en: "Bhubaneswar",
        hi: "भुवनेश्वर",
        or: "ଭୁବନେଶ୍ୱର",
      },

      departure: "07:00 PM",
      arrival: "08:00 PM",
      duration: "1h",

      days: {
        en: "Mon – Sat",
        hi: "सोम – शनि",
        or: "ସୋମ – ଶନି",
      },

      busType: {
        en: "Standard Coach",
        hi: "स्टैंडर्ड कोच",
        or: "ଷ୍ଟାଣ୍ଡାର୍ଡ କୋଚ୍",
      },

      status: "limited",
      enabled: true,
    },
  ],

  note: {
    en: "Timings shown are for demonstration purposes. Please contact Mahapatra Travels for the latest schedule.",
    hi: "दिखाए गए समय केवल प्रदर्शन के लिए हैं। नवीनतम समय-सारणी के लिए महापात्रा ट्रैवल्स से संपर्क करें।",
    or: "ଦର୍ଶାଯାଇଥିବା ସମୟ କେବଳ ଡେମୋ ପାଇଁ। ସର୍ବଶେଷ ସମୟସୂଚୀ ପାଇଁ ମହାପାତ୍ରା ଟ୍ରାଭେଲ୍ସ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
  },
};