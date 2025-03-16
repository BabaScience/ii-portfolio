import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Articles - Inspiration Illimitée';
export const size = {
  width: 1200,
  height: 630,
};

// Image generation
export default async function Image() {
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
          padding: 80,
          position: 'relative',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
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
          }}
        >
          <div style={{ marginBottom: 24, fontSize: 24 }}>✨ Inspiration Illimitée</div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 32,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Articles
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.9,
              maxWidth: '80%',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Explorez nos réflexions philosophiques et insights sur la conscience, l'existence, et la sagesse.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
} 