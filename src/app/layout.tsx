import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";

// Body / UI: neutral, legible text grotesque.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans-src",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Display: idiosyncratic, crafted grotesque for headlines.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-src",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Mono: honest technical voice (code window, small labels).
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
      className={`${hanken.variable} ${bricolage.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-fg">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
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
