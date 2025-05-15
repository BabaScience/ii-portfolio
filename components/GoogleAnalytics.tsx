'use client';

import { GoogleTagManager } from '@next/third-parties/google';

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  if (!gaId) {
    return null;
  }

  return <GoogleTagManager gtmId={gaId} />;
} 