"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

type VideoItem = {
  title: string;
  subtitle?: string;
  src: string;
  poster?: string;
  length?: string;
};

const VIDEOS: VideoItem[] = [
  {
    title: "IO Counter — I/O tracking demo",
    subtitle: "PDF/Excel otomasyonu • 9:14",
    src: "/videos/io_counter.mp4",
    poster: "/videos/io_counter_poster.jpg",
    length: "9:14",
  },
];

export default function Home() {
  const [autoPlayAllowed, setAutoPlayAllowed] = useState(false);

  useEffect(() => {
    try {
      setAutoPlayAllowed(
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches
      );
    } catch {}
  }, []);

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const handlePlay = (idx: number) => {
    videoRefs.current.forEach((v, i) => {
      if (i !== idx && v && !v.paused) v.pause();
    });
  };

  const bullets = [
    "Python/TypeScript automations • data pipelines • PDF/Excel processing",
    "Custom workflow tools • APIs • integrations",
    "Field data apps & CAD-related automation (AutoCAD/AutoLISP tools)",
    "Clean, documented, maintainable code • scalable architectures",
  ];

  return (
    <main className="relative min-h-screen">
      {/* ------- FULL-BLEED BACKGROUND ------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(249,115,22,.55), rgba(249,115,22,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-48 -right-48 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(59,130,246,.45), rgba(59,130,246,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ------- HERO ------- */}
      <section
        className="relative mx-auto max-w-[120rem] px-6 lg:px-12 xl:px-16 pt-10 pb-16 lg:pt-16
                   grid grid-cols-1 lg:grid-cols-[minmax(720px,1fr)_420px] gap-10
                   min-h-[88vh] items-start"
        aria-labelledby="hero-heading"
      >
        {/* LEFT */}
        <div className="pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-300 shadow-sm backdrop-blur">
            <span
              className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden
            />
            Available for consulting • Workflow automation & custom tools
          </div>

          <h1
            id="hero-heading"
            className="mt-6 font-extrabold tracking-tight
                       text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.05] max-w-[24ch]"
          >
            I turn{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              messy operations &amp; data-heavy workflows
            </span>{" "}
            into
            <br />
            elegant, reliable automation systems.
          </h1>

          <p className="mt-5 text-gray-300 text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed max-w-[62ch]">
            Hi, I&apos;m <strong>Baran Çevrim</strong> — a software developer and
            workflow automation builder. I design tools that streamline
            operations, eliminate repetitive work, and help teams move faster
            with clarity and confidence.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            8+ years of experience across industrial, utilities and technical
            environments • based in GTA.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 max-w-[80ch]">
            {bullets.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-none text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  aria-hidden
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              prefetch={false}
              className="inline-block rounded-2xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition
                         focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              prefetch={false}
              className="inline-block rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition
                         focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT — SCROLLABLE VIDEO PANEL (başlıksız) */}
        <aside aria-label="Video demos" className="lg:sticky lg:top-24">
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm ring-1 ring-white/5">
            <h2 className="sr-only">Video demos</h2>

            <div
              className="max-h-[58vh] overflow-y-auto pr-1 space-y-4 scroll-smooth pt-1"
              style={{ scrollbarWidth: "thin" }}
            >
              {VIDEOS.map((v, idx) => (
                <article
                  key={v.title}
                  className="group rounded-2xl border border-white/10 bg-black/35 hover:bg-black/45 transition shadow-md"
                >
                  <div className="flex items-start gap-3 p-3">
                    <div className="relative w-44 flex-none overflow-hidden rounded-xl border border-white/10">
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current[idx] = el;
                        }}
                        className="block w-full aspect-video object-cover"
                        src={v.src}
                        poster={v.poster}
                        controls
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        controlsList="nodownload"
                        aria-label={v.title}
                        autoPlay={autoPlayAllowed ? undefined : false}
                        onPlay={() => handlePlay(idx)}
                      />
                      {v.length && (
                        <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-gray-200">
                          {v.length}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-white">
                        {v.title}
                      </h3>
                      {v.subtitle && (
                        <p className="mt-1 line-clamp-2 text-xs text-gray-400">
                          {v.subtitle}
                        </p>
                      )}
                      <div className="mt-2">
                        <Link
                          href="/projects#demos"
                          prefetch={false}
                          className="text-xs font-medium text-orange-300 hover:text-orange-200"
                        >
                          See details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* İstersen alttaki açıklamayı aktif edebilirsin */}
          {/*
          <p className="mt-3 text-center text-sm text-gray-400">
            Short demos — utilities & engineering workflow automations.
          </p>
          */}
        </aside>
      </section>
    </main>
  );
}