"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { href, switchLocale } from "@/lib/href";
import { site } from "@/content/site";
import { Magnetic } from "./motion";

const copy = {
  es: { work: "Trabajo", approach: "Enfoque", process: "Proceso", experience: "Experiencia", contact: "Hablemos", open: "Abrir menú", close: "Cerrar menú", nav: "Navegación principal" },
  en: { work: "Work", approach: "Approach", process: "Process", experience: "Experience", contact: "Let’s talk", open: "Open menu", close: "Close menu", nav: "Main navigation" },
} as const;

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const c = copy[locale];

  // Cierra el menú al navegar a otra página.
  useEffect(() => { setOpen(false); }, [pathname]);

  // Menú abierto: bloquea el scroll de fondo, cierra con Escape y si se agranda la pantalla.
  useEffect(() => {
    if (!open) return;
    const lenis = (window as unknown as { __lenis?: { stop(): void; start(): void } }).__lenis;
    lenis?.stop();
    document.documentElement.classList.add("menu-open");
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const mq = window.matchMedia("(min-width: 761px)");
    const onMq = () => { if (mq.matches) setOpen(false); };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      lenis?.start();
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 240 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const home = href("/", locale);
  // En la home, el menú se cierra y scrollea al ancla (Lenis está pausado mientras está abierto).
  const goTo = (id: string) => (e: MouseEvent) => {
    setOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      const lenis = (window as unknown as { __lenis?: { scrollTo(t: HTMLElement, o: object): void } }).__lenis;
      if (lenis) lenis.scrollTo(target, { offset: -80, force: true });
      else target.scrollIntoView({ behavior: "smooth" });
    });
  };
  const links = [
    { id: "work", label: c.work },
    { id: "approach", label: c.approach },
    { id: "process", label: c.process },
    { id: "experience", label: c.experience },
  ];
  return (
    <>
    <header className={`site-header ${hidden && !open ? "is-hidden" : ""} ${scrolled || open ? "is-scrolled" : ""}`}>
      <Link href={home} className="brand" aria-label={site.name}>
        <span className="brand-mark">JK</span>
        <span className="brand-name">Julián Kondratavicius</span>
      </Link>
      <nav className="site-nav" aria-label={c.nav}>
        {links.map((l) => <Link key={l.id} href={`${home}#${l.id}`}>{l.label}</Link>)}
        <ThemeToggle locale={locale} />
        <Link className="lang" href={switchLocale(pathname, locale === "es" ? "en" : "es")} hrefLang={locale === "es" ? "en" : "es"}>
          <span className={locale === "es" ? "on" : ""}>ES</span>/<span className={locale === "en" ? "on" : ""}>EN</span>
        </Link>
        <button
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? c.close : c.open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
    </header>
    <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open} inert={!open}>
      <nav aria-label={c.nav}>
        <ol>
          {links.map((l, i) => (
            <li key={l.id} style={{ ["--d" as string]: `${0.06 + i * 0.05}s` }}>
              <Link href={`${home}#${l.id}`} onClick={goTo(l.id)}>
                <span>{String(i + 1).padStart(2, "0")}</span>{l.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mobile-menu-foot">
        <a className="mobile-menu-cta" href={`mailto:${site.email}`}>{c.contact}<span aria-hidden="true">↗</span></a>
        <a className="link-underline" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
    </div>
    </>
  );
}

function ThemeToggle({ locale }: { locale: Locale }) {
  const [dark, setDark] = useState(true);
  useEffect(() => { setDark(document.documentElement.dataset.theme !== "light"); }, []);
  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setDark(!dark);
  };
  const label = locale === "es" ? (dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro") : (dark ? "Switch to light theme" : "Switch to dark theme");
  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>
      )}
    </button>
  );
}

export function FloatingCta({ locale }: { locale: Locale }) {
  return (
    <Magnetic className="floating-cta-wrap" strength={0.45}>
      <a className="floating-cta" href={`mailto:${site.email}`}>
        <span className="pulse" aria-hidden="true" />
        {copy[locale].contact}
        <span className="floating-cta-arrow" aria-hidden="true">↗</span>
      </a>
    </Magnetic>
  );
}
