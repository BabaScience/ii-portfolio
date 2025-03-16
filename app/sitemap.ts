import { MetadataRoute } from 'next';

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
    id: "la-nature-de-la-conscience",
    title: "La Nature de la Conscience",
    excerpt: "Une exploration profonde de ce qui constitue notre conscience et notre perception de la réalité.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "15 Mars 2025",
    readTime: "7 min",
    content: "..."
  },
  {
    id: "le-temps-et-lexistence",
    title: "Le Temps et l'Existence",
    excerpt: "Réflexions sur la nature du temps et son impact sur notre compréhension de l'existence.",
    image: "https://images.unsplash.com/photo-1502790671504-542ad42d5189?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "10 Mars 2025",
    readTime: "5 min",
    content: "..."
  },
  {
    id: "lart-de-la-pensee",
    title: "L'Art de la Pensée",
    excerpt: "Comment développer une pensée plus profonde et plus significative dans un monde en constante évolution.",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "5 Mars 2025",
    readTime: "8 min",
    content: "..."
  },
  {
    id: "la-philosophie-stoicienne",
    title: "La Philosophie Stoïcienne et la Vie Moderne",
    excerpt: "Comment les principes stoïciens peuvent nous aider à naviguer les défis de la vie contemporaine.",
    image: "https://images.unsplash.com/photo-1599739291060-4578e77dac5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "1 Mars 2025",
    readTime: "10 min",
    content: "..."
  },
  {
    id: "limportance-de-la-meditation",
    title: "L'Importance de la Méditation",
    excerpt: "Les bienfaits de la méditation sur notre bien-être mental et notre capacité à penser clairement.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "25 Février 2025",
    readTime: "6 min",
    content: "..."
  },
  {
    id: "le-pouvoir-des-questions",
    title: "Le Pouvoir des Questions",
    excerpt: "Comment les bonnes questions peuvent transformer notre perception et notre compréhension du monde.",
    image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    date: "20 Février 2025",
    readTime: "9 min",
    content: "..."
  }
];

// Helper function to convert date string to proper date object
function getDateFromString(dateString: string): Date {
  // Example expected format: "15 Mars 2025"
  const months: Record<string, number> = {
    'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
    'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
  };
  
  const parts = dateString.split(' ');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = months[parts[1]];
    const year = parseInt(parts[2], 10);
    
    if (!isNaN(day) && month !== undefined && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }
  
  // Return current date if parsing fails
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://inspiration-illimitee.com';
  
  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ] as MetadataRoute.Sitemap;
  
  // Add all article routes
  const articleRoutes = articlesData.map((article) => {
    return {
      url: `${baseUrl}/articles/${article.id}`,
      lastModified: getDateFromString(article.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    } as const;
  });
  
  return [...routes, ...articleRoutes];
} 