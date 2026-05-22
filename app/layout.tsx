import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollToHash from "@/components/ScrollToHash";
import { Analytics } from "@vercel/analytics/react";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tr.magicfx.pro/"),
  title: "Magic FX Pro | Elit XAU/USD Kopya İşlem",
  description: "Altın (XAU/USD) üzerine münhasıran uzmanlaşmış elit algoritmik kopya işlem. Zenginliğin Elementi, Magic FX Pro ile Ustalaşıldı.",
  keywords: "Altın İşlem, XAU/USD, Kopya İşlem, Algoritmik İşlem, Magic FX Pro, Forex, Otomatik İşlem",
  openGraph: {
    title: "Magic FX Pro | Elit XAU/USD Kopya İşlem",
    description: "Altın (XAU/USD) üzerine münhasıran uzmanlaşmış elit algoritmik kopya işlem.",
    url: "https://tr.magicfx.pro/",
    images: [{ url: "/hero-bg.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic FX Pro | Elit XAU/USD Kopya İşlem",
    description: "Altın (XAU/USD) üzerine münhasıran uzmanlaşmış elit algoritmik kopya işlem.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased scroll-smooth scroll-pt-32`}
    >
      <body className="min-h-full flex flex-col bg-bg-color text-text-color font-sans overflow-x-hidden selection:bg-accent-color selection:text-bg-color">
        <ScrollToHash />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
