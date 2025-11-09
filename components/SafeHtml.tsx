/* eslint-disable react/no-danger */
/* eslint-disable-next-line no-danger, jsx-a11y/no-danger, @next/next/no-html-link-for-pages */
"use client";

import { useRef, useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface SafeHtmlProps {
  html: string;
  className?: string;
}

// Dedicated component for safely rendering HTML content
// Uses lazy hydration to prevent SSR issues with isomorphic-dompurify
export const SafeHtml = ({ html, className }: SafeHtmlProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (containerRef.current && isClient) {
      // Sanitize HTML content only on client side
      const sanitizedHtml = DOMPurify.sanitize(html);
      // Update the container's HTML
      containerRef.current.innerHTML = sanitizedHtml;
    }
  }, [html, isClient]);
  
  return <div ref={containerRef} className={className} />;
}; 