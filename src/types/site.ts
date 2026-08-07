export interface SiteIdentity {
  businessName: string;
  shortName: string;
  tagline: string;

  logo?: string;
  logoLight?: string;
  logoDark?: string;
  favicon?: string;

  phone?: string;
  email?: string;
  address?: string;

  socialLinks?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
  };
}