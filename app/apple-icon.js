import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 180, height: 180 },
      id: 'apple-icon',
    },
  ];
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <img src="/logo_mark.png" alt="Logo" style={{ width: '100%', height: '100%' }} />
      </div>
    ),
    { width: 180, height: 180 }
  );
}