import type {
  StrapiResponse,
  StrapiSiteSettings,
} from "../types/strapi";
import type {
  // StrapiHomepage,
  StrapiHomepageResponse,
} from "../types/homepage";
const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

export async function getHomepage(
  locale = "en"
): Promise<StrapiHomepageResponse> {
  return strapiFetch<StrapiHomepageResponse>(
    `/api/homepage?locale=${encodeURIComponent(locale)}`
  );
}

export async function strapiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${STRAPI_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(
      `Strapi request failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function getSiteSettings(
  locale = "en"
): Promise<StrapiResponse<StrapiSiteSettings>> {
  return strapiFetch<StrapiResponse<StrapiSiteSettings>>(
    `/api/site-setting?populate=*&locale=${encodeURIComponent(locale)}`
  );
}

export function getStrapiMediaUrl(
  url?: string | null
): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `${STRAPI_URL}${url}`;
}
