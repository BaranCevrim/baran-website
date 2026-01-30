// app/projects/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Automation tools and projects by Baran Çevrim: barcode filtering, BOM management, site inspection apps, and workflow automation solutions for small businesses.",
  openGraph: {
    title: "Projects · Baran Çevrim",
    description: "Automation tools and projects by Baran Çevrim: barcode filtering, BOM management, site inspection apps, and workflow automation solutions for small businesses.",
  },
};
// Prod’da sürprizleri kesmek için istersen aç:
// export const dynamic = "force-static";

const projects = [
  {
    title: "Barcode Filter Tool",
    date: "2024 – Present",
    description:
      "An automation tool that searches and filters barcodes across two different embedded Excel datasets, each containing over 100,000 rows. The application eliminates manual Excel filtering, processes barcodes individually or in bulk, and automatically generates formatted Excel output with duplicate detection. Designed to replace time-consuming, error-prone manual processes with a single, controlled workflow.",
    tags: ["Python", "Excel Automation", "Data Processing", "Error-Free Systems"],
    video: "/videos/part1.mp4",
  },
  {
    title: "BOM Manager – Bill of Materials System",
    date: "2024 – Present",
    description:
      "A Bill of Materials management tool that converts raw engineering data into structured JSON format, ensuring consistency with engineering standards. Features validation logic that identifies out-of-range or incorrectly formatted values before report generation. Exports clean, formatted Excel files, bridging complex nested data with readable documentation for other departments.",
    tags: ["Python", "JSON", "Excel Export", "Validation Logic"],
    video: "/videos/part2.mp4",
  },
  {
    title: "Site Inspection Mobile App",
    date: "2025",
    description:
      "A tablet-based field inspection application that eliminates manual steps between field work and final documentation. Features dynamic form generation based on order types, configurable input fields, and five predefined photo categories for consistency. Automatically generates structured PDF reports combining all inspection data and photos into a single, professional document ready for review or archiving.",
    tags: ["Flutter", "Dart", "Mobile", "PDF Generation", "Field Tools"],
    video: "/videos/part3.mp4",
  },
];

export default function ProjectsPage() {
  return (
    <section className="section py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center">
        Selected Projects
      </h1>

      <p className="mt-4 text-center text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
        Automation tools and custom apps I&apos;ve built to eliminate errors, accelerate workflows, 
        and boost productivity for small businesses. Each project focuses on zero-defect processes and reliable, maintainable solutions.
      </p>

      <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <article key={i} className="card card-hover p-0 overflow-hidden h-full flex flex-col">
            {p.video && (
              <div className="relative w-full aspect-video bg-black/60">
                <video
                  controls
                  className="w-full h-full object-contain"
                  preload="metadata"
                  aria-label={`${p.title} demo video`}
                >
                  <source src={p.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <header className="flex flex-col sm:flex-row items-start sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-300">
                  {p.title}
                </h2>
                <span className="text-xs sm:text-sm text-neutral-400 whitespace-nowrap">
                  {p.date}
                </span>
              </header>

              <p className="text-neutral-200 leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}