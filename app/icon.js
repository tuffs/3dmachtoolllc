import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 32, height: 32 },
      id: 'favicon',
    },
    {
      contentType: 'image/png',
      size: { width: 192, height: 192 },
      id: 'icon',
    },
  ];
}

export default function Icon({ id }) {
  const size = id === 'favicon' ? 32 : 192;
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
    { width: size, height: size }
  );
}