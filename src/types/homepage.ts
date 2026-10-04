export interface StrapiHomepage {
  id: number;
  documentId: string;

  showHero?: boolean;
  showStats?: boolean;
  showAbout?: boolean;
  showServices?: boolean;
  showFleet?: boolean;
  showTimetable?: boolean;
  showGallery?: boolean;
  showTestimonials?: boolean;
  showContact?: boolean;
  showCta?: boolean;

  sectionOrder?: string[] | null;
}

export interface StrapiHomepageResponse {
  data: StrapiHomepage | null;
  meta: Record<string, unknown>;
}