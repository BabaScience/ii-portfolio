import { ImageResponse } from '@vercel/og';
 
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
    content: `...` // content shortened for brevity
  },
  // Additional articles removed for brevity
] as Article[];

// Route segment config
export const runtime = 'edge';
 
// Image metadata
export const alt = 'Article image';
export const size = {
  width: 1200,
  height: 630,
};
 
// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const article = articlesData.find(a => a.id === params.slug);
  
  if (!article) {
    // Return a default image if article is not found
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(to bottom, #13111C, #201D29)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 48,
            fontWeight: 600,
          }}
        >
          <div style={{ marginBottom: 24 }}>✨</div>
          <div>Article non trouvé</div>
          <div style={{ fontSize: 24, marginTop: 24, opacity: 0.8 }}>Inspiration Illimitée</div>
        </div>
      ),
      { ...size }
    );
  }
 
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #13111C, #201D29)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: 48,
          position: 'relative',
        }}
      >
        {/* Background image with overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${article.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(19,17,28,0.7), rgba(32,29,41,0.9))',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          <div style={{ marginBottom: 24, fontSize: 24 }}>✨ Inspiration Illimitée</div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            {article.title}
          </div>
          <div
            style={{
              fontSize: 24,
              opacity: 0.8,
              maxWidth: '80%',
            }}
          >
            {article.excerpt.length > 100 
              ? `${article.excerpt.substring(0, 100)}...` 
              : article.excerpt}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
} 