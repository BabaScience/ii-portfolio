/* eslint-disable react/no-danger */
/* eslint-disable-next-line no-danger, jsx-a11y/no-danger, @next/next/no-html-link-for-pages */
"use client";

import { useRef, useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface SafeHtmlProps {
  html: string;
  className?: string;
}

// Dedicated component for safely rendering HTML content
export const SafeHtml = ({ html, className }: SafeHtmlProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      // Sanitize HTML content
      const sanitizedHtml = DOMPurify.sanitize(html);
      // Update the container's HTML
      containerRef.current.innerHTML = sanitizedHtml;
    }
  }, [html]);
  
  return <div ref={containerRef} className={className} />;
}; 