'use client';

export default function EnvDebug() {
  if (process.env.NODE_ENV === 'production') {
    return null; // Don't show in production
  }

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: 10, 
      left: 10, 
      background: 'black', 
      color: 'white', 
      padding: '10px',
      fontSize: '10px',
      zIndex: 9999,
      maxWidth: '300px',
      wordBreak: 'break-all'
    }}>
      <div>Token present: {token ? 'YES' : 'NO'}</div>
      <div>Token length: {token.length}</div>
      <div>First 20 chars: {token.substring(0, 20)}</div>
    </div>
  );
}
