export default function manifest() {
  return {
    name: '3D MACHINE + TOOL LLC',
    short_name: '3D MACHINE + TOOL',
    description: 'Precision design, machining, and tooling services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#fff',
    icons: [
      {
        src: '/icon?id=icon',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon?id=icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}