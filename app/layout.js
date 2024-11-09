import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ScrollToTopButton from "@/components/global/ScrollToTop";

export const metadata = {
  title: "3D MACHINE + TOOL LLC",
  description: "Precision design, machining, and tooling services.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <html lang="en">
        <body className="antialiased">
          <Navbar />
          <main role="main">
            {children}
          </main>
          <ScrollToTopButton />
        </body>
      </html>
    </>
  );
}