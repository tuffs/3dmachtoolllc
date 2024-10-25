import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "3D MACHINE + TOOL LLC",
  description: "Precision design, machining, and tooling services.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Analytics/>
      <SpeedInsights/>
      <html lang="en">
        <body
          className={`antialiased`}
        >
          <Navbar />
          <main role="main">
            {children}
          </main>
        </body>
      </html>
    </>
  );
}
