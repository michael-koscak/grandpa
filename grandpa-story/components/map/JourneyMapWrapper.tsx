'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const JourneyMap = dynamic(
  () => import('./JourneyMap'),
  { 
    ssr: false,
    loading: () => <MapLoadingState />,
  }
);

function MapLoadingState() {
  return (
    <div className="w-full h-full bg-paper flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-ink-light font-[family-name:var(--font-source-sans)]">
          Loading map...
        </p>
      </div>
    </div>
  );
}

export default function JourneyMapWrapper() {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
      <Suspense fallback={<MapLoadingState />}>
        <JourneyMap />
      </Suspense>
    </div>
  );
}
