"use client";

import React from "react";

interface ArticleContentProps {
  content: string;
}

// This component serves as a container for the article content
// It still uses dangerouslySetInnerHTML but encapsulates it in a component
// In a production app, you would want to use a markdown renderer or rich text editor instead
export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

// For a production application, consider using:
// 1. A proper Markdown renderer (like react-markdown)
// 2. A rich text editor with structured output (like Slate.js or Lexical)
// 3. A CMS integration that provides structured content 