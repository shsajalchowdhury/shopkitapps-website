import appsData from '@/data/apps.json';
import siteData from '@/data/site.json';

export interface AppData {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  tagline: string;
  category: string;
  color: string;
  icon: string;
  status: string;
  appStoreUrl: string;
  scopes: string;
  size: string;
  sortOrder: number;
  pricing: {
    free?: number;
    pro?: number;
    premium?: number;
    enterprise?: number;
  };
  features: string[];
  copy: {
    heroHeadline: string;
    heroSubHeadline: string;
    painPoint: string;
    solution: string;
    cta: string;
  };
}

export const apps: AppData[] = appsData as AppData[];
export const site = siteData;

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppsByCategory(category: string): AppData[] {
  return apps.filter((app) => app.category === category);
}

export function getRelatedApps(currentSlug: string, limit = 3): AppData[] {
  return apps.filter((app) => app.slug !== currentSlug).slice(0, limit);
}

export function formatPrice(price: number): string {
  if (price === 0) return 'Free';
  return `$${price.toFixed(2)}/mo`;
}
