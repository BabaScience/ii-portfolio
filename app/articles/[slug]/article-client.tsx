"use client";

import { ArticleContent } from "@/components/ArticleContent";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { useEffect, useState } from "react";

interface ArticleClientProps {
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

export default function ArticleClientContent({ 
  title, 
  content, 
  excerpt, 
  image, 
  date,
  slug 
}: ArticleClientProps) {
  const [url, setUrl] = useState<string>('');
  
  useEffect(() => {
    // Set the URL for JSON-LD and sharing
    setUrl(window.location.href);
  }, []);
  
  return (
    <>
      {/* Add JSON-LD for structured data */}
      {url && (
        <ArticleJsonLd
          title={title}
          description={excerpt}
          image={image}
          datePublished={date}
          url={url}
        />
      )}
      
      {/* Article Content */}
      <Card className="bg-card rounded-lg shadow-lg p-8 mb-8">
        <ArticleContent content={content} />
        
        {/* Share Section */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="font-medium">Partager cet article</span>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" onClick={() => window.navigator.clipboard.writeText(url || '')}>
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
} 