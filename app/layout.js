import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "3D MACHINE + TOOL LLC",
  description: "Precision design, machining, and tooling services.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Analytics/>
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
