"use client";

import Link from "next/link";

export default function Home() {
  const bullets = [
    "Small business automation • error-free workflow systems • zero-defect processes",
    "Custom automation apps • internal productivity boosters • company-wide efficiency",
    "Python/TypeScript automations • data pipelines • PDF/Excel processing",
    "Workflow acceleration • scalable systems • maintainable, documented code",
  ];

  return (
    <main className="relative min-h-screen">
      {/* ------- FULL-BLEED BACKGROUND ------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem] rounded-full blur-3xl opacity-30 sm:opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(249,115,22,.55), rgba(249,115,22,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 sm:-bottom-48 sm:-right-48 h-[24rem] w-[24rem] sm:h-[32rem] sm:w-[32rem] rounded-full blur-3xl opacity-30 sm:opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(59,130,246,.45), rgba(59,130,246,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] sm:opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ------- HERO ------- */}
      <section
        className="relative mx-auto max-w-[70rem] px-4 sm:px-6 lg:px-12 xl:px-16 pt-8 sm:pt-10 pb-20 sm:pb-24 lg:pt-20
                   min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-start"
        aria-labelledby="hero-heading"
      >
        <div className="pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-300 shadow-sm backdrop-blur">
            <span
              className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden
            />
            Available for small business automation projects • Error-free workflow systems
          </div>

          <h1
            id="hero-heading"
            className="mt-4 sm:mt-6 font-extrabold tracking-tight
                       text-[clamp(2rem,5vw,4.2rem)] sm:text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.05] max-w-[24ch]"
          >
            I build{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              small automation apps
            </span>{" "}
            that eliminate errors and accelerate business workflows.
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-300 text-[clamp(0.95rem,1.2vw,1.125rem)] leading-relaxed max-w-[62ch]">
            Hi, I&apos;m <strong>Baran Çevrim</strong> — I specialize in creating 
            <strong> error-free automation systems</strong> for small businesses. 
            I build custom apps and tools that streamline operations, eliminate repetitive work, 
            and boost company productivity — all while ensuring zero-error workflows your team can trust.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Electrical & Electronics Engineering graduate • 8+ years of experience across industrial and technical environments • 
            P.Eng. license application in progress (2025) • based in the Greater Toronto Area.
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

          <div className="mt-8 sm:mt-12 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
            <Link
              href="/projects"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 sm:px-7 py-3 sm:py-3.5 font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 active:bg-orange-700 transition-colors
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 sm:px-7 py-3 sm:py-3.5 font-semibold text-white hover:bg-white/10 active:bg-white/15 transition-colors
                         focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* ------- DEMO VIDEOS SECTION ------- */}
      <section className="section py-16 sm:py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center">
            See My Tools in Action
          </h2>
          <p className="mt-4 text-center text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Watch these demo videos to see how I build automation tools that eliminate errors and accelerate workflows for small businesses.
          </p>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              { 
                src: "/videos/part1.mp4", 
                title: "Barcode Filter Tool", 
                description: "Automated barcode filtering across two embedded Excel datasets, each containing over 100,000 rows. Processes barcodes individually or in bulk, eliminates manual Excel filtering, and automatically generates formatted output with duplicate detection. Replaces time-consuming, error-prone manual processes with a single, controlled workflow."
              },
              { 
                src: "/videos/part2.mp4", 
                title: "BOM Manager – Bill of Materials System", 
                description: "Converts raw engineering data into structured JSON format, ensuring consistency with engineering standards. Features validation logic that identifies out-of-range or incorrectly formatted values before report generation. Exports clean, formatted Excel files, bridging complex nested data with readable documentation."
              },
              { 
                src: "/videos/part3.mp4", 
                title: "Site Inspection Mobile App", 
                description: "Tablet-based field inspection application that eliminates manual steps between field work and final documentation. Features dynamic form generation based on order types, five predefined photo categories for consistency, and automatically generates structured PDF reports combining all inspection data and photos into a single, professional document."
              },
            ].map((video, i) => (
              <div key={i} className="card p-0 overflow-hidden h-full flex flex-col">
                <div className="relative w-full aspect-video bg-black/60">
                  <video
                    controls
                    className="w-full h-full object-contain"
                    preload="metadata"
                    aria-label={`${video.title} demo video`}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-orange-300 mb-2">{video.title}</h3>
                  <p className="text-sm text-neutral-300 flex-1 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}