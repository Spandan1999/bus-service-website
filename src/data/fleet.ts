import type { FleetContent } from "../types/content";

export const fleetContent: FleetContent = {
  enabled: true,

  eyebrow: {
    en: "Our Fleet",
    hi: "हमारा बेड़ा",
    or: "ଆମର ଯାନବହର",
  },

  title: {
    en: "Built for the journey ahead.",
    hi: "आने वाले सफ़र के लिए तैयार।",
    or: "ଆଗାମୀ ଯାତ୍ରା ପାଇଁ ପ୍ରସ୍ତୁତ।",
  },

  description: {
    en: "Explore a selection of vehicles designed around comfort, practicality and dependable travel.",
    hi: "आराम, सुविधा और भरोसेमंद यात्रा को ध्यान में रखकर तैयार किए गए वाहनों को देखें।",
    or: "ଆରାମ, ବ୍ୟବହାରିକତା ଏବଂ ନିର୍ଭରଯୋଗ୍ୟ ଯାତ୍ରାକୁ ଧ୍ୟାନରେ ରଖି ପ୍ରସ୍ତୁତ ଯାନଗୁଡ଼ିକୁ ଦେଖନ୍ତୁ।",
  },

  vehicles: [
    {
      id: "premium-coach",

      name: {
        en: "Premium Coach",
        hi: "प्रीमियम कोच",
        or: "ପ୍ରିମିୟମ କୋଚ୍",
      },

      category: {
        en: "Luxury Travel",
        hi: "लक्ज़री यात्रा",
        or: "ବିଳାସପୂର୍ଣ୍ଣ ଯାତ୍ରା",
      },
      actionLabel: {
  en: "Explore",
  hi: "जानें",
  or: "ଜାଣନ୍ତୁ",
},

capacityLabel: {
  en: "seats",
  hi: "सीटें",
  or: "ସିଟ୍",
},

featuredLabel: {
  en: "Featured",
  hi: "विशेष",
  or: "ବିଶେଷ",
},

      description: {
        en: "A spacious coach designed for comfortable long-distance journeys.",
        hi: "आरामदायक लंबी दूरी की यात्राओं के लिए तैयार एक विशाल कोच।",
        or: "ଆରାମଦାୟକ ଦୀର୍ଘ ଦୂରତା ଯାତ୍ରା ପାଇଁ ପ୍ରସ୍ତୁତ ଏକ ବିଶାଳ କୋଚ୍।",
      },

      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=85",

      imageAlt: {
        en: "Premium travel coach",
        hi: "प्रीमियम ट्रैवल कोच",
        or: "ପ୍ରିମିୟମ ଟ୍ରାଭେଲ୍ କୋଚ୍",
      },

      capacity: "45",

      features: [
        {
          en: "Comfortable seating",
          hi: "आरामदायक सीटें",
          or: "ଆରାମଦାୟକ ସିଟ୍",
        },
        {
          en: "Air conditioning",
          hi: "एयर कंडीशनिंग",
          or: "ଏୟାର କଣ୍ଡିସନିଂ",
        },
        {
          en: "Ample luggage space",
          hi: "पर्याप्त सामान रखने की जगह",
          or: "ପର୍ଯ୍ୟାପ୍ତ ଲଗେଜ୍ ସ୍ଥାନ",
        },
      ],

      featured: true,
      enabled: true,
    },

    {
      id: "executive-coach",

      name: {
        en: "Executive Coach",
        hi: "एग्जीक्यूटिव कोच",
        or: "ଏକ୍ଜିକ୍ୟୁଟିଭ୍ କୋଚ୍",
      },

      category: {
        en: "Executive Travel",
        hi: "एग्जीक्यूटिव यात्रा",
        or: "ଏକ୍ଜିକ୍ୟୁଟିଭ୍ ଯାତ୍ରା",
      },

      description: {
        en: "A refined travel option for business and premium group journeys.",
        hi: "व्यावसायिक और प्रीमियम समूह यात्राओं के लिए एक बेहतर विकल्प।",
        or: "ବ୍ୟବସାୟିକ ଏବଂ ପ୍ରିମିୟମ୍ ଗୋଷ୍ଠୀ ଯାତ୍ରା ପାଇଁ ଏକ ଉତ୍ତମ ବିକଳ୍ପ।",
      },

      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1600&q=85",

      imageAlt: {
        en: "Executive bus",
        hi: "एग्जीक्यूटिव बस",
        or: "ଏକ୍ଜିକ୍ୟୁଟିଭ୍ ବସ୍",
      },
      actionLabel: {
  en: "Explore",
  hi: "जानें",
  or: "ଜାଣନ୍ତୁ",
},

capacityLabel: {
  en: "seats",
  hi: "सीटें",
  or: "ସିଟ୍",
},

featuredLabel: {
  en: "Featured",
  hi: "विशेष",
  or: "ବିଶେଷ",
},
      capacity: "40",

      features: [
        {
          en: "Premium interiors",
          hi: "प्रीमियम इंटीरियर",
          or: "ପ୍ରିମିୟମ୍ ଇଣ୍ଟେରିୟର",
        },
        {
          en: "Air conditioning",
          hi: "एयर कंडीशनिंग",
          or: "ଏୟାର କଣ୍ଡିସନିଂ",
        },
        {
          en: "Spacious seating",
          hi: "विशाल सीटिंग",
          or: "ବିଶାଳ ସିଟିଂ",
        },
      ],

      enabled: true,
    },

    {
      id: "group-coach",

      name: {
        en: "Group Coach",
        hi: "ग्रुप कोच",
        or: "ଗ୍ରୁପ୍ କୋଚ୍",
      },
      actionLabel: {
  en: "Explore",
  hi: "जानें",
  or: "ଜାଣନ୍ତୁ",
},

capacityLabel: {
  en: "seats",
  hi: "सीटें",
  or: "ସିଟ୍",
},

featuredLabel: {
  en: "Featured",
  hi: "विशेष",
  or: "ବିଶେଷ",
},

      category: {
        en: "Group Travel",
        hi: "समूह यात्रा",
        or: "ଗୋଷ୍ଠୀ ଯାତ୍ରା",
      },

      description: {
        en: "A practical and comfortable choice for schools, organisations and larger groups.",
        hi: "स्कूलों, संगठनों और बड़े समूहों के लिए एक व्यावहारिक और आरामदायक विकल्प।",
        or: "ସ୍କୁଲ, ସଂଗଠନ ଏବଂ ବଡ଼ ଗୋଷ୍ଠୀ ପାଇଁ ଏକ ବ୍ୟବହାରିକ ଏବଂ ଆରାମଦାୟକ ବିକଳ୍ପ।",
      },

      image:
        "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1600&q=85",

      imageAlt: {
        en: "Group travel bus",
        hi: "ग्रुप ट्रैवल बस",
        or: "ଗ୍ରୁପ୍ ଟ୍ରାଭେଲ୍ ବସ୍",
      },

      capacity: "50",

      features: [
        {
          en: "Large capacity",
          hi: "बड़ी क्षमता",
          or: "ବଡ଼ କ୍ଷମତା",
        },
        {
          en: "Comfortable seating",
          hi: "आरामदायक सीटें",
          or: "ଆରାମଦାୟକ ସିଟ୍",
        },
        {
          en: "Luggage storage",
          hi: "सामान रखने की जगह",
          or: "ଲଗେଜ୍ ସ୍ଥାନ",
        },
      ],

      enabled: true,
    },
  ],

  buttonLabel: {
    en: "View Full Fleet",
    hi: "पूरा बेड़ा देखें",
    or: "ସମ୍ପୂର୍ଣ୍ଣ ଯାନବହର ଦେଖନ୍ତୁ",
  },

  buttonHref: "#contact",
};