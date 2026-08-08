export interface LocalizedText {
  en: string;
  hi: string;
  or: string;
}

export interface HeroContent {
  eyebrow: LocalizedText;
  titleLineOne: LocalizedText;
  titleLineTwo: LocalizedText;
  description: LocalizedText;
  fleetButton: LocalizedText;
  galleryButton: LocalizedText;
  backgroundImage?: string;
}

export interface StatisticItem {
  id: string;
  value: number;
  suffix?: string;
  label: LocalizedText;
  description?: LocalizedText;
}

export interface TrustStatsContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  statistics: StatisticItem[];
}

export interface AboutContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  secondaryDescription: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  highlights: {
    id: string;
    title: LocalizedText;
    description: LocalizedText;
  }[];
  buttonLabel: LocalizedText;
  buttonHref: string;
}

export interface ServiceItem {
  id: string;
  actionLabel: LocalizedText;
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
  featured?: boolean;
}

export interface ServicesContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  services: ServiceItem[];
}

export interface FleetItem {
  id: string;
  name: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  capacity: string;
  features: LocalizedText[];
  featured?: boolean;
  enabled: boolean;
  actionLabel: LocalizedText;
  capacityLabel: LocalizedText;
  featuredLabel: LocalizedText;
}

export interface FleetContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  vehicles: FleetItem[];
  buttonLabel: LocalizedText;
  buttonHref: string;
}

export interface TimetableRoute {
  id: string;
  routeName: LocalizedText;
  from: LocalizedText;
  to: LocalizedText;
  departure: string;
  arrival: string;
  duration: string;
  days: LocalizedText;
  busType: LocalizedText;
  status: "active" | "limited" | "inactive";
  enabled: boolean;
}

export interface TimetableContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  routes: TimetableRoute[];
  note: LocalizedText;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: LocalizedText;
  title: LocalizedText;
  category: LocalizedText;
  featured?: boolean;
  enabled: boolean;
}

export interface GalleryContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  items: GalleryItem[];
}

export interface ContactContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  phone: string;
  email: string;
  address: LocalizedText;
  hours: LocalizedText;
  phoneLabel: LocalizedText;
  emailLabel: LocalizedText;
  addressLabel: LocalizedText;
  hoursLabel: LocalizedText;
  ctaLabel: LocalizedText;
}

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedText;
  message: LocalizedText;
  rating: number;
  image?: string;
  featured?: boolean;
  enabled: boolean;
}

export interface TestimonialsContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  testimonials: Testimonial[];
}

export interface FinalCtaContent {
  enabled: boolean;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  buttonLabel: LocalizedText;
  buttonHref: string;
  backgroundImage: string;
  overlay: string;
}

export interface FooterContent {
  enabled: boolean;

  description: LocalizedText;

  copyright: LocalizedText;

  quickLinksTitle: LocalizedText;

  contactTitle: LocalizedText;

  socialTitle: LocalizedText;

  phone: string;

  email: string;

  address: LocalizedText;

  socialLinks: {
    id: string;
    label: string;
    href: string;
  }[];
}