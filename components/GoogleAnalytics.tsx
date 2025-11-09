'use client';
import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  if (!gaId) {
    return null;
  }

  return <NextGoogleAnalytics gaId={gaId} />;
}
