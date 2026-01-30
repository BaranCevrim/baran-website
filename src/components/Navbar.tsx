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
    } catch {
      // ignore
    }
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
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Primary"
      className="w-full relative z-40"
    >
        {/* ÜST BAR */}
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-8 h-14 flex items-center justify-between gap-2 sm:gap-4">
        {/* LOGO / BRAND */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white/90 shadow-sm hover:bg-white/10 active:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Home - Baran Çevrim"
        >
          <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 via-amber-300 to-yellow-400 text-[10px] sm:text-xs font-bold text-black shadow-elev-1 flex-shrink-0">
            BC
          </span>
          <span className="leading-none hidden xs:block">
            <span className="block">Baran Çevrim</span>
            <span className="block text-[9px] sm:text-[10px] font-normal text-neutral-300">
              Workflow Automation & Tools
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <ul className="flex items-center gap-2 lg:gap-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative inline-flex items-center rounded-lg px-2.5 py-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black ${
                    isActive(l.href)
                      ? "text-white"
                      : "text-neutral-200 hover:text-white/90"
                  }`}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  {l.label}
                  <span
                    className={`absolute left-1 right-1 -bottom-0.5 h-[2px] rounded-full bg-orange-500 origin-left ${
                      isActive(l.href)
                        ? reduceMotion
                          ? ""
                          : "scale-x-100 transition-transform duration-200"
                        : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Sağ tarafta küçük status chip */}
          <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>Open to collaborations & tooling work</span>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
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
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/85 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE DROPDOWN – SADECE md ALTINDA */}
      <div
        ref={wrapperRef}
        id="nav-drop"
        aria-hidden={!open}
        className={`md:hidden overflow-hidden border-t border-white/10 bg-neutral-950 text-white shadow-[0_20px_40px_rgba(0,0,0,.35)] ${
          reduceMotion ? "" : "transition-[max-height] duration-300 ease-out"
        }`}
        style={{ maxHeight: "0px" }}
      >
        <div ref={contentRef}>
          {/* üst satır */}
          <div className="container mx-auto max-w-7xl px-4 md:px-8 py-3 flex items-center justify-between">
            <div className="text-xs text-neutral-300">Navigate</div>
            <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-2 py-1 text-[11px] text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to collaborations
            </div>
          </div>

          {/* linkler */}
          <div className="container mx-auto max-w-7xl px-4 md:px-8 pb-3 grid grid-cols-2 gap-1.5 sm:gap-1">
            {links.map((l, i) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                  className={`relative block rounded-lg px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-neutral-950 ${
                    active
                      ? "text-white bg-neutral-900/80"
                      : "text-neutral-200 hover:bg-neutral-900/80 focus:bg-neutral-900/80"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
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
    </nav>
  );
}