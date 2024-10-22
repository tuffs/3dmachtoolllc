import "./globals.css";
import Navbar from "@/components/global/Navbar";

export const metadata = {
  title: "3D MACHINE + TOOL LLC",
  description: "Precision design, machining, and tooling services.",
};

export default function RootLayout({ children }) {
  return (
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
  );
}
