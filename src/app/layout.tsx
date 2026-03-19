import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRIO - AI Learning Companion",
  description: "Travel & Tourism Essentials Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="app-wrapper">
          <main className="container">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
