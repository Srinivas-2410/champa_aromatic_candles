import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Champa Candles | Handcrafted Candles",
  description: "Premium handcrafted candles for your home.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.jpg" />
      </head>
      <body className={inter.className}>
        {children}
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
