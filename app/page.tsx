"use client";

import Link from "next/link";

export default function Home() {
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
        className="relative mx-auto max-w-[70rem] px-6 lg:px-12 xl:px-16 pt-10 pb-24 lg:pt-20
                   min-h-[88vh] flex flex-col justify-start"
        aria-labelledby="hero-heading"
      >
        <div className="pb-10">
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
                       text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.05] max-w-[20ch]"
          >
            I turn{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              messy operations &amp; data-heavy workflows
            </span>{" "}
            into
            elegant, reliable automation systems.
          </h1>

          <p className="mt-6 text-gray-300 text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed max-w-[62ch]">
            Hi, I&apos;m <strong>Baran Çevrim</strong> — a software developer and workflow
            automation builder. I design tools that streamline operations,
            eliminate repetitive work, and help teams move faster with clarity and
            confidence.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            8+ years of experience across industrial, utilities and technical
            environments • based in GTA.
          </p>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 max-w-[80ch]">
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

          <div className="mt-12 flex flex-wrap items-center gap-4">
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
      </section>
    </main>
  );
}