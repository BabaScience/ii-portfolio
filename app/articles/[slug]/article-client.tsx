"use client";

import { ArticleContent } from "@/components/ArticleContent";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { Button } from "@/components/ui/button";
import { Link, Share2, Twitter, Facebook, Bookmark, LinkedinIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useTheme } from 'next-themes';

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasBookmarked, setHasBookmarked] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    // Set the URL for JSON-LD and sharing
    setUrl(window.location.href);
    
    // Track scroll progress
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const contentElement = contentRef.current;
      const windowHeight = window.innerHeight;
      const contentBox = contentElement.getBoundingClientRect();
      const contentHeight = contentBox.height;
      const scrollTop = window.scrollY;
      const scrollableDistance = contentHeight - windowHeight + contentBox.top;
      
      const progress = Math.min(scrollTop / (scrollableDistance > 0 ? scrollableDistance : 1), 1);
      setScrollProgress(progress * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async (platform?: string) => {
    if (platform) {
      let shareUrl = '';
      
      // Create share URLs for social platforms
      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
          break;
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
          break;
      }
      
      // Open share URL in new window
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    } else {
      // Copy to clipboard if no platform specified
      try {
        await navigator.clipboard.writeText(url);
        // Show simple toast notification
        alert("Lien copié dans le presse-papier!");
      } catch (err) {
        alert("Erreur lors de la copie du lien.");
      }
    }
  };
  
  const toggleBookmark = () => {
    setHasBookmarked(!hasBookmarked);
    // Show simple notification
    alert(hasBookmarked ? "Article retiré des favoris" : "Article ajouté aux favoris");
  };
  
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
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Floating Share Bar */}
      <div className="hidden md:flex fixed left-6 top-1/3 flex-col gap-3 z-40">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-10 h-10 bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10"
          onClick={() => handleShare('twitter')}
        >
          <Twitter className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-10 h-10 bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10"
          onClick={() => handleShare('facebook')}
        >
          <Facebook className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-10 h-10 bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10"
          onClick={() => handleShare('linkedin')}
        >
          <LinkedinIcon className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-10 h-10 bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10"
          onClick={() => handleShare()}
        >
          <Link className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button 
          variant={hasBookmarked ? "default" : "outline"} 
          size="icon" 
          className={`rounded-full w-10 h-10 ${hasBookmarked 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10 text-muted-foreground'}`}
          onClick={toggleBookmark}
        >
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Article Content */}
      <div ref={contentRef} className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-h2:text-2xl md:prose-h2:text-3xl prose-headings:text-foreground">
        <ArticleContent content={content} />
      </div>
      
      {/* Mobile Share Bar */}
      <div className="flex md:hidden justify-between items-center mt-10 pt-5 border-t border-border">
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full w-9 h-9 bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10"
            onClick={() => handleShare('twitter')}
          >
            <Twitter className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full w-9 h-9 bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10"
            onClick={() => handleShare('facebook')}
          >
            <Facebook className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full w-9 h-9 bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10"
            onClick={() => handleShare()}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        <Button 
          variant={hasBookmarked ? "default" : "outline"} 
          size="icon" 
          className={`rounded-full w-9 h-9 ${hasBookmarked 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-background/80 dark:bg-background/30 backdrop-blur-sm hover:bg-primary/10'}`}
          onClick={toggleBookmark}
        >
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
} 