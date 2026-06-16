import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";

// Brand font for the whole site: Circular Std (Book for text/UI, Black for display).
const circular = localFont({
  src: [
    { path: "./assets/fonts/CircularStd-Book.otf", weight: "400", style: "normal" },
    { path: "./assets/fonts/CircularStd-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-circular",
  display: "swap",
});

// Mono: honest technical voice (small labels, panel).
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-src",
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://www.softdevarts.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SoftDevArts · Software Development Artisans",
    template: "%s · SoftDevArts",
  },
  description:
    "Software Development Artisans. Software consulting and custom development with the precision of a craft. Premià de Mar, Barcelona.",
  keywords: [
    "software development",
    "software consulting",
    "custom software",
    "SoftDevArts",
    "coworking Premià de Mar",
    "BlackBox coworking",
  ],
  authors: [{ name: "SoftDevArts" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SoftDevArts",
    title: "SoftDevArts · Software Development Artisans",
    description:
      "Software consulting and custom development with the precision of a craft. Premià de Mar, Barcelona.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${circular.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-fg">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-accent"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollReveal />
        <SmoothScroll />
      </body>
    </html>
  );
}
