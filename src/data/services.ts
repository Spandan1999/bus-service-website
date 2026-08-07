import type { ServicesContent } from "../types/content";

export const servicesContent: ServicesContent = {
  enabled: true,

  eyebrow: {
    en: "What we offer",
    hi: "हमारी सेवाएँ",
    or: "ଆମର ସେବା",
  },

  title: {
    en: "Travel designed around you.",
    hi: "आपको ध्यान में रखकर बनाई गई यात्रा।",
    or: "ଆପଣଙ୍କୁ ଧ୍ୟାନରେ ରଖି ପରିକଳ୍ପିତ ଯାତ୍ରା।",
  },

  description: {
    en: "From everyday transportation to group journeys, our services are built around comfort, reliability and convenience.",
    hi: "दैनिक परिवहन से लेकर समूह यात्राओं तक, हमारी सेवाएँ आराम, विश्वसनीयता और सुविधा को ध्यान में रखकर तैयार की गई हैं।",
    or: "ଦୈନନ୍ଦିନ ପରିବହନଠାରୁ ଗୋଷ୍ଠୀ ଯାତ୍ରା ପର୍ଯ୍ୟନ୍ତ, ଆମର ସେବା ଆରାମ, ବିଶ୍ୱସନୀୟତା ଏବଂ ସୁବିଧାକୁ ଧ୍ୟାନରେ ରଖି ପ୍ରସ୍ତୁତ।",
  },

  services: [
    {
      id: "scheduled",
      icon: "bus",

      title: {
        en: "Scheduled Bus Services",
        hi: "नियमित बस सेवाएँ",
        or: "ନିୟମିତ ବସ୍ ସେବା",
      },
      actionLabel: {
        en: "Discover",
        hi: "जानें",
        or: "ଜାଣନ୍ତୁ",
    },
      description: {
        en: "Reliable scheduled services designed to keep your journey comfortable and convenient.",
        hi: "आपकी यात्रा को आरामदायक और सुविधाजनक बनाने के लिए विश्वसनीय नियमित सेवाएँ।",
        or: "ଆପଣଙ୍କ ଯାତ୍ରାକୁ ଆରାମଦାୟକ ଏବଂ ସୁବିଧାଜନକ କରିବା ପାଇଁ ନିର୍ଭରଯୋଗ୍ୟ ନିୟମିତ ସେବା।",
      },

      featured: true,
    },

    {
      id: "group",
      icon: "users",

      title: {
        en: "Group Travel",
        hi: "समूह यात्रा",
        or: "ଗୋଷ୍ଠୀ ଯାତ୍ରା",
      },
      actionLabel: {
      en: "Discover",
      hi: "जानें",
      or: "ଜାଣନ୍ତୁ",
    },
      description: {
        en: "Comfortable transportation solutions for schools, organisations, events and groups.",
        hi: "स्कूलों, संगठनों, कार्यक्रमों और समूहों के लिए आरामदायक परिवहन समाधान।",
        or: "ସ୍କୁଲ, ସଂଗଠନ, କାର୍ଯ୍ୟକ୍ରମ ଏବଂ ଗୋଷ୍ଠୀ ପାଇଁ ଆରାମଦାୟକ ପରିବହନ ସମାଧାନ।",
      },
    },

    {
      id: "charter",
      icon: "route",

      title: {
        en: "Charter Services",
        hi: "चार्टर सेवाएँ",
        or: "ଚାର୍ଟର ସେବା",
      },
      actionLabel: {
  en: "Discover",
  hi: "जानें",
  or: "ଜାଣନ୍ତୁ",
},

      description: {
        en: "Flexible vehicle arrangements for special journeys and planned travel requirements.",
        hi: "विशेष यात्राओं और नियोजित यात्रा आवश्यकताओं के लिए लचीली वाहन व्यवस्था।",
        or: "ବିଶେଷ ଯାତ୍ରା ଏବଂ ଯୋଜନାବଦ୍ଧ ଯାତ୍ରା ଆବଶ୍ୟକତା ପାଇଁ ନମନୀୟ ଯାନ ବ୍ୟବସ୍ଥା।",
      },
    },

    {
      id: "corporate",
      icon: "briefcase",

      title: {
        en: "Corporate Travel",
        hi: "कॉर्पोरेट यात्रा",
        or: "କର୍ପୋରେଟ୍ ଯାତ୍ରା",
      },

      actionLabel: {
  en: "Discover",
  hi: "जानें",
  or: "ଜାଣନ୍ତୁ",
},

      description: {
        en: "Professional transportation solutions for businesses, teams and corporate requirements.",
        hi: "व्यवसायों, टीमों और कॉर्पोरेट आवश्यकताओं के लिए पेशेवर परिवहन समाधान।",
        or: "ବ୍ୟବସାୟ, ଟିମ୍ ଏବଂ କର୍ପୋରେଟ୍ ଆବଶ୍ୟକତା ପାଇଁ ବୃତ୍ତିଗତ ପରିବହନ ସମାଧାନ।",
      },
    },
  ],
};