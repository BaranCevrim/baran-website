// app/contact/page.tsx
"use client";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  // basit mailto gönderimi — backend gerekmez
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    const subject = encodeURIComponent(`Website contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    const mailto = `mailto:barancevrim@gmail.com?subject=${subject}&body=${body}`;

    // güvenli: sadece client'ta çalıştır
    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }
  };

  return (
    <section className="px-6 py-14 mx-auto max-w-3xl">
      <h1 className="text-4xl font-extrabold tracking-tight text-white text-center">
        Contact
      </h1>

      {/* info */}
      <div className="mt-8 text-center space-y-2 text-sm">
        <p className="text-neutral-300">You can reach me at</p>
        <p className="text-orange-300 font-semibold select-all">barancevrim@gmail.com</p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href="https://www.linkedin.com/in/barancevrim"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/barancevrim"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-neutral-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-neutral-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-neutral-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your message"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-xl bg-orange-500 px-5 py-2.5 text-white font-semibold shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Send Message
          </button>
        </div>
      </form>

      <p className="mt-4 text-xs text-neutral-500 text-center">
        Tip: This form opens your email app. For server-side sending, we can add a simple
        <span className="whitespace-nowrap"> /api/contact</span> later (e.g., Resend).
      </p>
    </section>
  );
}