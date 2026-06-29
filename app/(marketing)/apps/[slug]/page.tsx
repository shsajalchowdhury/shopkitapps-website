export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { apps, getAppBySlug } from '@/lib/apps';
import { AppDetailClient } from './AppDetailClient';

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = getAppBySlug(params.slug);
  if (!app) return { title: 'App Not Found' };

  return {
    title: `${app.name} - ${app.tagline}`,
    description: app.copy.heroSubHeadline,
    openGraph: {
      title: `${app.name} - ${app.tagline}`,
      description: app.copy.heroSubHeadline,
    },
  };
}

export default function AppDetailPage({ params }: { params: { slug: string } }) {
  const app = getAppBySlug(params.slug);
  if (!app) return notFound();
  return <AppDetailClient app={app} />;
}
