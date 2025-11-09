import type { ReactNode } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';

// Define the Article type for consistency
interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
}

// Mock data for articles (same as in the articles/page.tsx)
const articlesData = [
  {
    id: "comment-cesser-de-trop-penser",
    title: "Comment cesser de trop penser : 5 leçons stoïciennes pour retrouver la paix intérieure",
    excerpt: "Découvrez comment les principes stoïciens peuvent vous aider à calmer l'esprit et rétablir le silence intérieur face aux ruminations incessantes.",
    image: "/thumnails/trop-penser.png",
    date: "20 Mars 2025",
    readTime: "8 min",
    content: "..."
  },
  {
    id: "la-nature-de-la-conscience",
    title: "La Nature de la Conscience",
    excerpt: "Une exploration profonde de ce qui constitue notre conscience et notre perception de la réalité.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "15 Mars 2025",
    readTime: "7 min",
    content: "..."
  },
  // Additional articles removed for brevity
] as Article[];

type Props = {
  params: { slug: string }
  children: ReactNode
}

// Generate dynamic metadata for each article
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = articlesData.find(a => a.id === params.slug);
  
  // If article isn't found, return default metadata
  if (!article) {
    return {
      title: 'Article non trouvé | Inspiration Illimitée',
      description: 'Désolé, cet article n\'existe pas ou a été déplacé.'
    };
  }

  // Generate a clean excerpt for meta description by removing HTML tags
  const cleanExcerpt = article.excerpt.replace(/<[^>]*>?/gm, '');

  // Get the canonical URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://inspirationillimitee.com';
  const articleUrl = `${baseUrl}/articles/${article.id}`;

  return {
    title: `${article.title} | Inspiration Illimitée`,
    description: cleanExcerpt,
    openGraph: {
      type: 'article',
      url: articleUrl,
      title: article.title,
      description: cleanExcerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: cleanExcerpt,
      images: [article.image],
    },
    alternates: {
      canonical: articleUrl,
    }
  };
}

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return children;
} 