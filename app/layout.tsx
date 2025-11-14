import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProviderClient } from "./theme-provider";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://inspirationillimitee.com'),
  
  // SEO Base
  title: {
    default: 'Inspiration Illimitée - Philosophie & Développement Personnel',
    template: '%s | Inspiration Illimitée',
  },
  description: 'Découvrez des réflexions philosophiques profondes, des enseignements stoïciens et des contenus inspirants pour nourrir votre esprit.',
  
  // Geographic & Language Targeting
  other: {
    'language': 'French',
    'geo.region': 'FR',
    'geo.placename': 'France',
    'content-language': 'fr-FR',
  },
  
  // Open Graph with Locale
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://inspirationillimitee.com',
    siteName: 'Inspiration Illimitée',
    title: 'Inspiration Illimitée - Philosophie & Développement Personnel',
    description: 'Découvrez des réflexions philosophiques profondes, des enseignements stoïciens et des contenus inspirants pour nourrir votre esprit.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Inspiration Illimitée',
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Inspiration Illimitée',
    description: 'Philosophie & Développement Personnel',
    images: ['/og-image.webp'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ThemeProviderClient>
          {children}
          <Toaster />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        </ThemeProviderClient>
      </body>
    </html>
  );
}
