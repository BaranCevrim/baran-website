// app/contact/ContactClient.tsx
"use client";

import { useState } from "react";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      // FormSubmit kullanarak hem contact@barancevrim.com hem baran.cevrim@gmail.com'a gönder
      // İki ayrı istek göndererek her iki email adresine de mesaj gitsin
      const formData = {
        name,
        email,
        message,
        _subject: `Contact Form: Message from ${name}`,
        _template: "box",
        _captcha: false,
      };

      // İlk email: contact@barancevrim.com
      const response1 = await fetch("https://formsubmit.co/ajax/contact@barancevrim.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // İkinci email: baran.cevrim@gmail.com
      const response2 = await fetch("https://formsubmit.co/ajax/baran.cevrim@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `[Copy] Contact Form: Message from ${name}`,
        }),
      });

      if (response1.ok && response2.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section py-12 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
          Contact
        </h1>

      {/* info */}
      <div className="mt-8 text-center space-y-2 text-sm">
        <p className="text-neutral-300">
          Looking to automate your workflows, eliminate errors, or boost your company&apos;s productivity? 
          I build custom automation apps and tools for small businesses. Let&apos;s discuss how I can help streamline your operations.
        </p>

        <p className="text-orange-300 font-semibold select-all">
          contact@barancevrim.com
        </p>

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
      <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 space-y-4 sm:space-y-5" noValidate>
        {submitStatus === "success" && (
          <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm text-emerald-300">
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-300">
            Something went wrong. Please try again or email me directly at contact@barancevrim.com
          </div>
        )}
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-neutral-200"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-2.5 sm:py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-neutral-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-2.5 sm:py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-neutral-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-2.5 sm:py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-colors resize-y"
            placeholder="How can I help?"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 sm:px-5 py-3 sm:py-2.5 text-white font-semibold shadow-lg shadow-orange-500/25 hover:bg-orange-600 active:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

        <p className="mt-4 text-xs text-neutral-500 text-center">
          Your message will be sent to contact@barancevrim.com and I&apos;ll respond as soon as possible.
        </p>
      </div>
    </section>
  );
}