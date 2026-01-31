// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
// PageTransition şimdilik devre dışı:
// import PageTransition from "@/components/PageTransition";
import BackgroundFormulas from "@/components/BackgroundFormulas";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barancevrim.com"),
  title: {
    default: "Baran Çevrim | Workflow Automation & Tools",
    template: "%s · Baran Çevrim",
  },
  description:
    "Small business automation specialist. Building error-free workflow systems, custom automation apps, and tools that boost company productivity and eliminate operational errors.",
  keywords: [
    "small business automation",
    "error-free workflows",
    "workflow automation",
    "company productivity",
    "automation apps",
    "zero-error systems",
    "internal tools",
    "workflow acceleration",
    "Python automation",
    "TypeScript automation",
    "data pipelines",
    "PDF automation",
    "Excel automation",
    "BOM management",
    "barcode filtering",
    "site inspection apps",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  openGraph: {
    type: "website",
    url: "https://barancevrim.com",
    title: "Baran Çevrim — Workflow Automation & Tools",
    description:
      "Turning messy operations and data-heavy workflows into elegant, reliable automation systems.",
    siteName: "Baran Çevrim",
    images: [
      { url: "/og/og-image.jpg", width: 1200, height: 630, alt: "Baran Çevrim" },
    ],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baran Çevrim — Workflow Automation & Tools",
    description:
      "Workflow automation, internal tools and light SaaS-style apps for technical teams and solo builders.",
    images: ["/og/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
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
        jobTitle: "Workflow Automation & Tools",
        sameAs: [
          "https://www.linkedin.com/in/barancevrim",
          "https://github.com/barancevrim",
        ],
        address: { "@type": "PostalAddress", addressCountry: "CA" },
      }),
    }}
  />
);

import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

function SRLiveRegion() {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      id="route-announcer"
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <MotionGate />
        <SchemaOrg />
      </head>
      <body
        className={`${inter.className} relative min-h-screen bg-[var(--bg)] text-white antialiased`}
      >
        {/* route progress */}
        <NextTopLoader color="#f97316" height={3} showSpinner={false} />

        {/* arka plan katmanları */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-noise" />
          {/* hero tarafını hafifçe parlatan glow */}
          <div className="bg-glow" />
          <BackgroundFormulas />
        </div>

        {/* Skip link */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-black/80 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/* Sticky navbar */}
        <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 py-2 min-h-14 flex items-center">
            <Navbar />
          </div>
        </header>

        {/* Sayfa içerikleri */}
        <main id="content" role="main" className="relative">
          {children}
          {/* Eğer tekrar istersen:
             <PageTransition>{children}</PageTransition>
          */}
        </main>

        <Footer />
        <SRLiveRegion />
        <Analytics />
      </body>
    </html>
  );
}