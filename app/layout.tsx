import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollToHash from "@/components/ScrollToHash";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gtcgold.website/"),
  title: "Magic FX Pro | Elite XAU/USD Copy Trading",
  description: "Elite algorithmic copy trading specializing exclusively in Gold (XAU/USD). The Element of Wealth, Mastered with Magic FX Pro.",
  keywords: "Gold Trading, XAU/USD, Copy Trading, Algorithmic Trading, Magic FX Pro, Forex, Automated Trading",
  openGraph: {
    title: "Magic FX Pro | Elite XAU/USD Copy Trading",
    description: "Elite algorithmic copy trading specializing exclusively in Gold (XAU/USD).",
    url: "https://gtcgold.website/",
    images: [{ url: "/hero-bg.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic FX Pro | Elite XAU/USD Copy Trading",
    description: "Elite algorithmic copy trading specializing exclusively in Gold (XAU/USD).",
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
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased scroll-smooth scroll-pt-32`}
    >
      <body className="min-h-full flex flex-col bg-bg-color text-text-color font-sans overflow-x-hidden selection:bg-accent-color selection:text-bg-color">
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
