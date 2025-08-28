'use client';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function GoogleAnalyticsComponent({ gaId }: { gaId: string }) {
  if (!gaId) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
