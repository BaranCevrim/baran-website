// app/experience/page.tsx
export const metadata = { title: "Experience" };
// İstersen geçici olarak prod sorunlarını elemek için açabilirsin:
// export const dynamic = "force-static";

const experiences = [
  {
    title: "Utility Solutions Corporation",
    location: "Toronto, Canada",
    duration: "Oct 2023 – Present",
    description:
      "Electrical Engineer specializing in Hydro One Make Ready (HONI) projects. Responsible for pole replacement designs, framing standard applications, AutoCAD drafting, and GIS integration. Applied SPIDACalc for pole loading analysis and aerial clearance compliance. Built internal tools/automation to accelerate drawing workflows and ensure data integrity.",
  },
  {
    title: "QA Automation Engineer Certification",
    location: "Toronto, Canada",
    duration: "2023",
    description:
      "Bootcamp with Selenium, Java, Python, API testing, CI/CD pipelines, and automation scripting. Hands-on frameworks in agile settings.",
  },
  {
    title: "Project Management Certificate – Humber College",
    location: "Toronto, Canada",
    duration: "2021–2022",
    description:
      "Project initiation, planning, execution, monitoring, and closing. Tools: MS Project, JIRA. Stakeholder comms, budgeting, risk assessment.",
  },
  {
    title: "Renaissance Heavy Industries",
    location: "Algeria & Turkmenistan",
    duration: "2019 – 2021",
    description:
      "QA/QC & Electrical Field Engineer in large-scale power and O&G projects. Ensured IEC/ISO compliance, desert terrain grounding, SCADA integrations, QA inspections. Solved cable misidentification, grounding rod separation, and harmonics via redesign & field modifications.",
  },
  {
    title: "Integrated Health Campus Projects",
    location: "Adana, Elazığ, Kocaeli – Turkey",
    duration: "2016 – 2019",
    description:
      "Electrical & Electronics Engineer / Site Chief across hospital megaprojects.",
    bullets: [
      "Full-scope electrical infra: generators, UPS, SCADA, LV–MV panels, fire detection & suppression, structured cabling.",
      "Addressable emergency lighting (AVEX) with remote testing & automation.",
      "Conduit/cable tray routing with structural/mechanical constraints.",
      "Cable labeling protocol + pre-commissioning inspection (NFI).",
      "Mechanical automation points into panels; dashboards for progress tracking.",
      "Close coordination to avoid clashes with walls/concrete works.",
    ],
  },
  {
    title: "Gama – Türkerler JV (Kocaeli City Hospital)",
    location: "Kocaeli, Turkey",
    duration: "Nov 2018 – Feb 2019",
    description:
      "Electrical Site Chief for FTR & TSB buildings. Unified Excel trackers, coordinated in-wall/ceiling routing, delivery tracking for panels/fixtures, and mech-automation checklists.",
  },
  {
    title: "IC İçtaş Enerji – Tufanbeyli Thermal Power Plant",
    location: "Turkey",
    duration: "2014 – 2016",
    description:
      "I&C Engineer: SCADA & hazardous area installations, HMI improvements, transmitter/manifold fixes, grounding solutions, control logic tuning for ash handling. Pre-commissioning tests incl. leakage control (pressurized air) & PLC grounding diagnostics.",
  },
];

export default function ExperiencePage() {
  return (
    <section className="section py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center">
        Professional Experience
      </h1>

      <div className="mx-auto mt-12 max-w-5xl space-y-6">
        {experiences.map((exp, i) => (
          <article key={i} className="card card-hover p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl md:text-2xl font-semibold text-orange-300">
                {exp.title}
              </h2>
              <div className="text-right">
                <p className="text-xs md:text-sm text-neutral-400">{exp.location}</p>
                <p className="text-xs md:text-sm text-neutral-500 italic">{exp.duration}</p>
              </div>
            </div>

            <p className="mt-4 text-neutral-200 leading-relaxed">{exp.description}</p>

            {exp.bullets && (
              <ul className="mt-4 list-disc list-inside space-y-1 text-neutral-200">
                {exp.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}