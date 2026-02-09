import { Metadata } from 'next';
import JourneyMapWrapper from '@/components/map/JourneyMapWrapper';

export const metadata: Metadata = {
  title: 'The Journey | My Life Story',
  description: 'Interactive map showing the journey from Slovenia to America — Mark F. Koscak\'s life story.',
};

export default function MapPage() {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 64px)', position: 'relative' }}>
      <JourneyMapWrapper />
    </div>
  );
}
