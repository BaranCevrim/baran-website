// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Baran Çevrim's specialization in small business automation, error-free workflow systems, and engineering background.",
  openGraph: {
    title: "About · Baran Çevrim",
    description: "Learn about Baran Çevrim's specialization in small business automation, error-free workflow systems, and engineering background.",
  },
};

export default function AboutPage() {
  return (
    <section className="section py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight inline-block pb-2 border-b-4 border-white/20">
          About Me
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-neutral-200">
          I&apos;m <span className="font-semibold text-white">Baran Çevrim</span> — a software developer specializing in 
          <strong className="text-white"> small business automation</strong>. I build custom apps and tools that eliminate errors, 
          accelerate workflows, and boost company productivity. With an Electrical & Electronics Engineering background 
          and 8+ years of experience in technical environments, I create systems that help businesses work faster with zero-defect processes.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          My work blends engineering principles, software automation, and structured thinking.
          I&apos;ve built barcode filtering systems, BOM management tools, field inspection apps, data pipelines, 
          and document processors — all designed to remove friction from real business workflows.
        </p>

        {/* Specialization Focus */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">
            My Specialization: Small Business Automation
          </h2>
          <p className="text-neutral-200 leading-relaxed mb-3">
            I focus on building <strong className="text-white">small automation apps and tools</strong> that 
            help small businesses streamline their operations. My core mission is to create systems that 
            <strong className="text-white"> eliminate errors completely</strong> and accelerate workflows, 
            making companies more productive without the complexity of enterprise solutions.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            Every tool I build is designed to be reliable, maintainable, and focused on 
            <strong className="text-white"> zero-error workflows</strong> that your team can trust day in and day out.
          </p>
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-sm text-neutral-400">
              <strong className="text-white">What I deliver:</strong> Custom automation apps, workflow acceleration tools, 
              error-free process systems, and internal productivity solutions tailored to your business needs.
            </p>
          </div>
        </div>

        {/* Education & Credentials */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            Education &amp; Credentials
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-orange-300">
                Bachelor of Science in Electrical and Electronics Engineering
              </h3>
              <p className="text-neutral-300 text-sm mt-1">
                My engineering foundation provides the structured thinking and problem-solving approach 
                I bring to every automation project. This background helps me understand complex systems 
                and design reliable, scalable solutions.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10">
              <p className="text-sm text-neutral-400">
                <span className="text-white font-medium">Professional Engineering (P.Eng.)</span> — 
                License application in progress (2025)
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            Skills &amp; Expertise
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed text-neutral-200">
            <li>
              <strong className="text-white">Automation &amp; Tooling:</strong> 
              Python/TypeScript scripts, PDF/Excel processors, internal dashboards,
              and lightweight SaaS-style utilities.
            </li>
            <li>
              <strong className="text-white">Data Processing:</strong> 
              Large dataset filtering (100,000+ rows), JSON-based data structures, 
              validation logic, and seamless Excel integration.
            </li>
            <li>
              <strong className="text-white">Mobile &amp; Field Tools:</strong> 
              Tablet-based inspection apps, dynamic form generation, photo documentation, 
              and automated PDF report generation.
            </li>
            <li>
              <strong className="text-white">Engineering Foundation:</strong> 
              8+ years of experience solving complex problems in technical and industrial settings —
              now leveraged to design clearer, more reliable software workflows.
            </li>
            <li>
              <strong className="text-white">QA &amp; Testing:</strong> 
              Background with automation frameworks, API testing, and CI/CD practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
