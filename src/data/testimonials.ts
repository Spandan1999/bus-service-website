import type { TestimonialsContent } from "../types/content";

export const testimonialsContent: TestimonialsContent = {
  enabled: true,

  eyebrow: {
    en: "Passenger Stories",
    hi: "यात्रियों की राय",
    or: "ଯାତ୍ରୀଙ୍କ ମତାମତ",
  },

  title: {
    en: "Good journeys leave a lasting impression.",
    hi: "अच्छी यात्राएँ हमेशा याद रहती हैं।",
    or: "ଭଲ ଯାତ୍ରା ସବୁବେଳେ ମନେ ରହିଯାଏ।",
  },

  description: {
    en: "A few words from the people who have travelled with us.",
    hi: "उन यात्रियों के कुछ शब्द जिन्होंने हमारे साथ सफ़र किया है।",
    or: "ଆମ ସହିତ ଯାତ୍ରା କରିଥିବା ଲୋକମାନଙ୍କ କିଛି କଥା।",
  },

  testimonials: [
    {
      id: "review-01",

      name: "Rahul Sharma",

      role: {
        en: "Regular Passenger",
        hi: "नियमित यात्री",
        or: "ନିୟମିତ ଯାତ୍ରୀ",
      },

      message: {
        en: "A comfortable and dependable travel experience. The buses are well maintained and the overall journey feels very smooth.",
        hi: "आरामदायक और भरोसेमंद यात्रा का अनुभव। बसें अच्छी तरह से रखी जाती हैं और पूरी यात्रा बहुत सुविधाजनक लगती है।",
        or: "ଏକ ଆରାମଦାୟକ ଏବଂ ଭରସାଯୋଗ୍ୟ ଯାତ୍ରା ଅନୁଭୂତି। ବସ୍‌ଗୁଡ଼ିକ ଭଲ ଭାବରେ ରକ୍ଷଣାବେକ୍ଷଣ କରାଯାଏ।",
      },

      rating: 5,
      featured: true,
      enabled: true,
    },

    {
      id: "review-02",

      name: "Priya Das",

      role: {
        en: "Family Traveller",
        hi: "पारिवारिक यात्री",
        or: "ପରିବାର ସହ ଯାତ୍ରୀ",
      },

      message: {
        en: "The journey was comfortable from start to finish. The service felt professional and the staff were helpful.",
        hi: "शुरू से अंत तक यात्रा आरामदायक रही। सेवा पेशेवर लगी और स्टाफ मददगार था।",
        or: "ଆରମ୍ଭରୁ ଶେଷ ପର୍ଯ୍ୟନ୍ତ ଯାତ୍ରା ଆରାମଦାୟକ ଥିଲା। ସେବା ବୃତ୍ତିଗତ ଏବଂ କର୍ମଚାରୀମାନେ ସହାୟକ ଥିଲେ।",
      },

      rating: 5,
      enabled: true,
    },

    {
      id: "review-03",

      name: "Amit Mohanty",

      role: {
        en: "Frequent Traveller",
        hi: "अक्सर यात्रा करने वाले यात्री",
        or: "ବାରମ୍ବାର ଯାତ୍ରା କରୁଥିବା ଯାତ୍ରୀ",
      },

      message: {
        en: "What I appreciate most is the consistency. The service is reliable and the buses provide a pleasant travelling environment.",
        hi: "मुझे सबसे अच्छी बात इसकी निरंतरता लगती है। सेवा भरोसेमंद है और बसों में यात्रा का वातावरण अच्छा है।",
        or: "ମୋତେ ସବୁଠାରୁ ଭଲ ଲାଗେ ଏହାର ନିରନ୍ତରତା। ସେବା ଭରସାଯୋଗ୍ୟ ଏବଂ ବସ୍‌ରେ ଯାତ୍ରା ଆରାମଦାୟକ।",
      },

      rating: 5,
      enabled: true,
    },
  ],
};