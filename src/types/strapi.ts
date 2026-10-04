export interface StrapiSiteSettings {
  id: number;
  documentId: string;
  businessName: string;
  tagline?: string;
  phone?: string;
  email?: string;
  address?: string;
  activeTheme?: string;
  animationStyle?: string;
  animationIntensity?: string;
  animationsEnabled?: boolean;
  logo?: {
    id: number;
    documentId: string;
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  } | null;
}

export interface StrapiResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}