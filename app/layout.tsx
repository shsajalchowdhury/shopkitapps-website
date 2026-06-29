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
    description: '8 lightweight Shopify apps for speed, conversion, and growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopKitApps - Lightweight Shopify Apps',
    description: '8 lightweight Shopify apps for speed, conversion, and growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="vars">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
