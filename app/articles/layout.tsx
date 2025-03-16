import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Articles | Inspiration Illimitée",
  description: "Explorez nos réflexions philosophiques et insights sur la conscience, l'existence, et la sagesse.",
  openGraph: {
    title: "Articles | Inspiration Illimitée",
    description: "Explorez nos réflexions philosophiques et insights sur la conscience, l'existence, et la sagesse.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        width: 1200,
        height: 630,
        alt: "Articles - Inspiration Illimitée",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Inspiration Illimitée",
    description: "Explorez nos réflexions philosophiques et insights sur la conscience, l'existence, et la sagesse.",
    images: ["https://images.unsplash.com/photo-1519681393784-d120267933ba"],
  },
};

export default function ArticlesLayout({ children }: { children: ReactNode }) {
  return children;
} 