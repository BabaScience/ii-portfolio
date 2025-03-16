'use client';

import { useEffect } from 'react';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  url: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
}

/**
 * Component that adds structured data (JSON-LD) for articles
 * This approach ensures search engines can interpret the content correctly
 */
export const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({
  title,
  description,
  image,
  datePublished,
  url,
  authorName = "Inspiration Illimitée",
  publisherName = "Inspiration Illimitée",
  publisherLogo = "/logo.png",
}) => {
  useEffect(() => {
    // Create the JSON-LD script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-jsonld';
    
    // Prepare the JSON-LD data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      image,
      datePublished,
      author: {
        '@type': 'Organization',
        name: authorName,
      },
      publisher: {
        '@type': 'Organization',
        name: publisherName,
        logo: {
          '@type': 'ImageObject',
          url: publisherLogo
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      }
    };
    
    // Set the script content
    script.innerHTML = JSON.stringify(jsonLd);
    
    // Add script to head
    document.head.appendChild(script);
    
    // Clean up function to remove the script when component unmounts
    return () => {
      const existingScript = document.getElementById('article-jsonld');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [title, description, image, datePublished, url, authorName, publisherName, publisherLogo]);
  
  // This component doesn't render anything visual
  return null;
}; 