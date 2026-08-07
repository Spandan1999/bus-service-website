import type {
  TrustStatsContent,
} from "../types/content";

export const trustStatsContent: TrustStatsContent = {
  enabled: true,

  eyebrow: {
    en: "Trusted on every journey",
    hi: "हर सफ़र में भरोसा",
    or: "ପ୍ରତ୍ୟେକ ଯାତ୍ରାରେ ବିଶ୍ୱାସ",
  },

  title: {
    en: "Built on experience.",
    hi: "अनुभव पर आधारित।",
    or: "ଅଭିଜ୍ଞତା ଉପରେ ନିର୍ମିତ।",
  },

  description: {
    en: "Years of experience, dependable vehicles and a commitment to making every journey comfortable.",
    hi: "वर्षों का अनुभव, भरोसेमंद वाहन और हर यात्रा को आरामदायक बनाने की प्रतिबद्धता।",
    or: "ବର୍ଷ ବର୍ଷର ଅଭିଜ୍ଞତା, ନିର୍ଭରଯୋଗ୍ୟ ଯାନ ଏବଂ ପ୍ରତ୍ୟେକ ଯାତ୍ରାକୁ ଆରାମଦାୟକ କରିବା ପାଇଁ ପ୍ରତିବଦ୍ଧତା।",
  },

  statistics: [
    {
      id: "experience",
      value: 15,
      suffix: "+",

      label: {
        en: "Years of Experience",
        hi: "वर्षों का अनुभव",
        or: "ବର୍ଷର ଅଭିଜ୍ଞତା",
      },

      description: {
        en: "Serving travellers with dedication",
        hi: "समर्पण के साथ यात्रियों की सेवा",
        or: "ସମର୍ପଣ ସହିତ ଯାତ୍ରୀ ସେବା",
      },
    },

    {
      id: "fleet",
      value: 50,
      suffix: "+",

      label: {
        en: "Vehicles",
        hi: "वाहन",
        or: "ଯାନ",
      },

      description: {
        en: "A growing fleet built for comfort",
        hi: "आराम के लिए तैयार बढ़ता हुआ बेड़ा",
        or: "ଆରାମ ପାଇଁ ନିର୍ମିତ ବିକାଶଶୀଳ ଯାନବହର",
      },
    },

    {
      id: "passengers",
      value: 100,
      suffix: "K+",

      label: {
        en: "Passengers",
        hi: "यात्री",
        or: "ଯାତ୍ରୀ",
      },

      description: {
        en: "Journeys made more comfortable",
        hi: "यात्राओं को और आरामदायक बनाया",
        or: "ଯାତ୍ରାକୁ ଅଧିକ ଆରାମଦାୟକ କରାଯାଇଛି",
      },
    },

    {
      id: "routes",
      value: 20,
      suffix: "+",

      label: {
        en: "Routes",
        hi: "मार्ग",
        or: "ମାର୍ଗ",
      },

      description: {
        en: "Connecting people and places",
        hi: "लोगों और स्थानों को जोड़ना",
        or: "ଲୋକ ଏବଂ ସ୍ଥାନଗୁଡ଼ିକୁ ଯୋଡ଼ିବା",
      },
    },
  ],
};