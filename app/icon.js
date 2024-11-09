import { ImageResponse } from 'next/server'

export async function GET() {
  const size = { width: 192, height: 192 }
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
    size
  );
}