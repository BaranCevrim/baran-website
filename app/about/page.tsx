// app/about/page.tsx

export const metadata = { title: "About" };
// İstersen geçici olarak tamamen statik derleyebiliriz:
// export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <section className="section py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight inline-block pb-2 border-b-4 border-white/20">
          About Me
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-neutral-200">
          I&apos;m <span className="font-semibold text-white">Baran Çevrim</span>, an Electrical Engineer
          with over a decade of experience blending engineering, automation, and software development.
          Based in Toronto, I create smart infrastructure systems with precision and innovation.
        </p>

        <ul className="mt-8 list-disc pl-6 space-y-4 text-base leading-relaxed text-neutral-200">
          <li>
            <strong className="text-white">Utility Design Specialist:</strong> Extensive work on Hydro One
            Make Ready projects, pole replacement planning, and framing standards.
          </li>
          <li>
            <strong className="text-white">Automation &amp; GIS Integration:</strong> Developed tools
            connecting AutoCAD, GIS, and Excel workflows to streamline field operations.
          </li>
          <li>
            <strong className="text-white">Software &amp; Engineering Synergy:</strong> Built BOM generators,
            PDF automation, and mobile inspection apps using Python and Flutter.
          </li>
          <li>
            <strong className="text-white">Global Engineering Footprint:</strong> Project roles in Algeria,
            Turkmenistan, and Turkey, including hospital megaprojects and thermal power plants.
          </li>
          <li>
            <strong className="text-white">Certified Project Manager:</strong> Humber College graduate with
            skills in planning, risk management, and execution.
          </li>
          <li>
            <strong className="text-white">Automation QA Skills:</strong> Background in test automation with
            Java, Selenium, and CI/CD pipelines.
          </li>
          <li>
            <strong className="text-white">Vision:</strong> To build AI-driven, field-ready solutions that
            enhance utility design and empower engineering workflows.
          </li>
        </ul>
      </div>
    </section>
  );
}