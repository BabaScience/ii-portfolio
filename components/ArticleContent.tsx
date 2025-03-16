"use client";

import { useTheme } from 'next-themes';
import { SafeHtml } from './SafeHtml';

interface ArticleContentProps {
  content: string;
}

// This component renders article content with Medium-like styling
export const ArticleContent = ({ content }: ArticleContentProps) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  
  return (
    <article className="article-content">
      {/* Apply Medium-like styles to the article content */}
      <style jsx global>{`
        .article-content p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2em;
          letter-spacing: -0.003em;
          font-family: var(--font-serif, Georgia, Cambria, "Times New Roman", Times, serif);
          color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.9)' : 'rgba(41, 41, 41, 0.9)'};
        }
        
        .article-content h2 {
          font-size: 1.75rem;
          margin-top: 2.5em;
          margin-bottom: 0.8em;
          font-weight: 700;
          letter-spacing: -0.01em;
          font-family: var(--font-serif, Georgia, Cambria, "Times New Roman", Times, serif);
          color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.95)' : 'rgba(41, 41, 41, 0.95)'};
        }
        
        .article-content h3 {
          font-size: 1.5rem;
          margin-top: 2em;
          margin-bottom: 0.8em;
          font-weight: 600;
          font-family: var(--font-serif, Georgia, Cambria, "Times New Roman", Times, serif);
          color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.95)' : 'rgba(41, 41, 41, 0.95)'};
        }
        
        .article-content ul, .article-content ol {
          margin-bottom: 2em;
          padding-left: 2em;
        }
        
        .article-content li {
          margin-bottom: 0.8em;
          font-size: 1.2rem;
          line-height: 1.6;
          font-family: var(--font-serif, Georgia, Cambria, "Times New Roman", Times, serif);
          color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.8)' : 'rgba(41, 41, 41, 0.8)'};
        }
        
        .article-content strong {
          font-weight: 700;
          color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.95)' : 'rgba(41, 41, 41, 0.95)'};
        }
        
        .article-content blockquote {
          font-style: italic;
          padding-left: 1.5em;
          margin-left: 0;
          border-left: 3px solid ${isDarkTheme ? '#6b7280' : '#6b7280'};
          color: ${isDarkTheme ? '#9ca3af' : '#4b5563'};
          margin: 2em 0;
        }
        
        .article-content blockquote p {
          font-size: 1.3rem;
          line-height: 1.7;
          color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.8)' : 'rgba(41, 41, 41, 0.8)'};
        }
        
        .article-content a {
          color: ${isDarkTheme ? '#60a5fa' : '#3b82f6'};
          text-decoration: underline;
          text-underline-offset: 2px;
          text-decoration-thickness: 1px;
        }
        
        .article-content a:hover {
          text-decoration-thickness: 2px;
        }
        
        /* First paragraph styling - larger and bolder like Medium */
        .article-content > div > p:first-of-type {
          font-size: 1.3rem;
          line-height: 1.7;
          font-weight: 500;
          margin-bottom: 2.5em;
          color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.95)' : 'rgba(41, 41, 41, 0.95)'};
        }
        
        /* Styling for code blocks if needed */
        .article-content pre {
          background-color: ${isDarkTheme ? '#1f2937' : '#f3f4f6'};
          padding: 1.5em;
          border-radius: 0.375rem;
          overflow-x: auto;
          margin: 2em 0;
        }
        
        .article-content code {
          font-family: monospace;
          font-size: 0.9em;
          background-color: ${isDarkTheme ? '#1f2937' : '#f3f4f6'};
          padding: 0.2em 0.4em;
          border-radius: 0.25em;
          color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.9)' : 'rgba(41, 41, 41, 0.9)'};
        }
      `}</style>
      
      <SafeHtml html={content} />
    </article>
  );
};

// For a production application, consider using:
// 1. A proper Markdown renderer (like react-markdown)
// 2. A rich text editor with structured output (like Slate.js or Lexical)
// 3. A CMS integration that provides structured content 