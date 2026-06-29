import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'ShopKitApps - Lightweight Shopify Apps',
    template: '%s | ShopKitApps',
  },
  description:
    '8 lightweight Shopify apps for speed, conversion, and growth. Each under 20KB. Zero bloat, zero dependencies.',
  metadataBase: new URL('https://shopkitapps.com'),
  openGraph: {
    type: 'website',
    siteName: 'ShopKitApps',
    title: 'ShopKitApps - Lightweight Shopify Apps',
    description: '8 lightweight Shopify apps for speed, conversion, and growth. Each under 20KB.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopKitApps - Lightweight Shopify Apps',
    description: '8 lightweight Shopify apps for speed, conversion, and growth.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ShopKitApps',
  url: 'https://shopkitapps.com',
  description: 'Lightweight Shopify apps for speed, conversion, and growth.',
  email: 'hello@shopkitapps.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
