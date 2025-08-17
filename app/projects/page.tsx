// app/projects/page.tsx

export const metadata = { title: "Projects" };
// Prod’da sürprizleri kesmek için istersen aç:
// export const dynamic = "force-static";

const projects = [
  {
    title: "BOM-Pro Automation Tool",
    date: "2024 – Present",
    description:
      "A Python-based BOM (Bill of Materials) manager with Excel integration, barcode scanning, and part-number tracking system. It automates QC workflows, updates design databases, and generates filtered reports.",
    tags: ["Python", "Tkinter", "Pandas", "Excel Automation"],
  },
  {
    title: "HONI Make Ready Automation",
    date: "2024 – Present",
    description:
      "Developed a pole replacement program based on Hydro One framing standards. The system dynamically reads JSON data and visualizes pole profiles in a web interface using Streamlit.",
    tags: ["Python", "Streamlit", "AutoCAD Integration", "Hydro One Standards"],
  },
  {
    title: "Site Inspection Android App",
    date: "2025",
    description:
      "Flutter-based mobile app that enables inspectors to fill out multi-step forms, upload photos, and generate structured PDF reports. Designed for offline use in the field.",
    tags: ["Flutter", "Dart", "Android Studio", "PDF Generator"],
  },
  {
    title: "AutoCAD Batch Tool",
    date: "2024",
    description:
      "AutoLISP-based AutoCAD automation tool for opening viewports, zooming to object coordinates, and exporting barcode-tagged drawings. Speeds up QA processes by 60%.",
    tags: ["AutoLISP", "AutoCAD", "Automation"],
  },
  {
    title: "Tailwind Next.js Blog System",
    date: "2025",
    description:
      "A markdown-powered portfolio & blog website built with Tailwind CSS, Next.js, and Contentlayer. Fully responsive and dynamically driven.",
    tags: ["Next.js", "Tailwind CSS", "Contentlayer", "Vercel"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="section py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
        Selected Projects
      </h1>

      <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={i} className="card card-hover p-6 h-full">
            <header className="flex items-start justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-orange-300">
                {p.title}
              </h2>
              <span className="text-xs md:text-sm text-neutral-400 whitespace-nowrap">
                {p.date}
              </span>
            </header>

            <p className="mt-3 text-neutral-200 leading-relaxed">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.tags.map((t, idx) => (
                <span key={idx} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}