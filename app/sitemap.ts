import { MetadataRoute } from 'next';
import { apps } from '@/lib/apps';

const BASE_URL = 'https://shopkitapps.com';

type SitemapEntry = {
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: SitemapEntry[] = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/apps`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/pricing`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/docs`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/docs/getting-started`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/docs/faq`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/docs/changelog`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: 'yearly' },
  ];

  const appPages: SitemapEntry[] = apps.map((app) => ({
    url: `${BASE_URL}/apps/${app.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly',
  }));

  const docPages: SitemapEntry[] = apps.map((app) => ({
    url: `${BASE_URL}/docs/${app.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly',
  }));

  return [...staticPages, ...appPages, ...docPages].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
