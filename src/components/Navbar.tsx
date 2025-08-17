"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // reduce-motion
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    try {
      setReduceMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    } catch {}
  }, []);

  // dışarı tık / ESC
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!navRef.current?.contains(t)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // route değişince menü kapansın
  useEffect(() => setOpen(false), [pathname]);

  // akıcı aç/kapa: iç yüksekliği ölçüp max-height veriyoruz
  useEffect(() => {
    const el = contentRef.current;
    const wrap = wrapperRef.current;
    if (!el || !wrap) return;
    const applyHeight = () => {
      const h = el.scrollHeight;
      wrap.style.maxHeight = open ? `${h}px` : "0px";
    };
    applyHeight();
    const ro = new ResizeObserver(applyHeight);
    ro.observe(el);
    window.addEventListener("resize", applyHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", applyHeight);
    };
  }, [open]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Primary"
      className="w-full bg-black/90 supports-[backdrop-filter]:bg-black/80 backdrop-blur relative z-40"
    >
      {/* üst bar */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/90 shadow-sm hover:bg-white/10 transition"
        >
          Baran Çevrim
        </Link>

        <button
          ref={menuBtnRef}
          type="button"
          aria-expanded={open}
          aria-controls="nav-drop"
          onClick={() => {
            const willOpen = !open;
            setOpen(willOpen);
            if (willOpen) setTimeout(() => firstLinkRef.current?.focus(), 10);
          }}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/85 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* dropdown: sayfayı aşağı iter */}
      <div
        ref={wrapperRef}
        id="nav-drop"
        aria-hidden={!open}
        className={`overflow-hidden ${
          reduceMotion ? "" : "transition-[max-height] duration-300 ease-out"
        }`}
        style={{ maxHeight: "0px" }}
      >
        <div ref={contentRef}>
          <div className="border-t border-white/10 bg-neutral-950 text-white shadow-[0_20px_40px_rgba(0,0,0,.35)]">
            {/* başlık satırı */}
            <div className="container mx-auto max-w-7xl px-4 md:px-8 py-3 flex items-center justify-between">
              <div className="text-xs text-neutral-300">Navigate</div>
              <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-2 py-1 text-[11px] text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for consulting
              </div>
            </div>

            {/* linkler */}
            <div className="container mx-auto max-w-7xl px-4 md:px-8 py-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
              {links.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    onClick={() => setOpen(false)}
                    className={`relative block rounded-lg px-3 py-2 text-sm transition focus:outline-none
                      ${
                        active
                          ? "text-white"
                          : "text-neutral-200 hover:bg-neutral-900/80 focus:bg-neutral-900/80"
                      }`}
                  >
                    {l.label}
                    {/* aktif alt çizgi */}
                    <span
                      className={`absolute left-2 right-2 bottom-1 h-[2px] rounded-full bg-orange-500 origin-left ${
                        active
                          ? reduceMotion
                            ? ""
                            : "scale-x-100 transition-transform duration-200"
                          : "scale-x-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}