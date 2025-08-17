// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import BackgroundFormulas from "@/components/BackgroundFormulas";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://barancevrim.com"),
  title: { default: "Baran Çevrim | Engineering & Automation", template: "%s · Baran Çevrim" },
  description:
    "Power systems & data automation. Utilities ve mühendislik ekipleri için hızlı, güvenilir çözümler.",
  keywords: [
    "power systems",
    "short-circuit",
    "protection coordination",
    "automation",
    "AutoCAD",
    "Python",
    "TypeScript",
    "engineering workflows",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  // viewport yerine theme-color kullanımı (Next 13+ tavsiye)
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  openGraph: {
    type: "website",
    url: "https://barancevrim.com",
    title: "Baran Çevrim — Engineering & Automation",
    description: "Turning complex power & data workflows into elegant, reliable automation.",
    siteName: "Baran Çevrim",
    images: [{ url: "/og/og-image.jpg", width: 1200, height: 630, alt: "Baran Çevrim" }],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baran Çevrim — Engineering & Automation",
    description: "Power systems & data automation for utilities and engineering teams.",
    images: ["/og/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

// reduce-motion işareti (hydrate öncesi)
const MotionGate = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
      try{
        var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        if(mq.matches) document.documentElement.setAttribute("data-reduce-motion","true");
      }catch(e){};`,
    }}
  />
);

// JSON-LD
const SchemaOrg = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Baran Çevrim",
        url: "https://barancevrim.com",
        jobTitle: "Engineering & Automation",
        sameAs: [
          "https://www.linkedin.com/in/barancevrim",
          "https://github.com/barancevrim",
        ],
        address: { "@type": "PostalAddress", addressCountry: "CA" },
      }),
    }}
  />
);

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-8 text-sm text-neutral-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-gray-400">
            © {year} <span className="text-white/80 font-medium">Baran Çevrim</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            {/* örnek sosyal linkler — hazır olunca aç */}
            {/* <a href="mailto:hello@barancevrim.com" className="hover:text-white transition">Email</a>
            <a href="https://github.com/barancevrim" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com/in/barancevrim" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SRLiveRegion() {
  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only" id="route-announcer" />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <MotionGate />
        <SchemaOrg />
      </head>
      <body className={`${inter.className} relative min-h-screen bg-[var(--bg)] text-white antialiased`}>
        {/* route progress */}
        <NextTopLoader color="#f97316" height={3} showSpinner={false} />

        {/* arka plan katmanları */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-noise" />
          <BackgroundFormulas />
        </div>

        {/* Skip link */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-black/80 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/* Sticky navbar — sabit yükseklik YOK => dropdown açılınca sayfa iner */}
        <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 py-2 min-h-14 flex items-center">
            <Navbar />
          </div>
        </header>

        {/* Sayfa içerikleri */}
        <main id="content" role="main" className="relative">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
        <SRLiveRegion />
      </body>
    </html>
  );
}