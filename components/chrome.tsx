"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { href, switchLocale } from "@/lib/href";
import { site } from "@/content/site";
import { Magnetic } from "./motion";

const copy = {
  es: { work: "Trabajo", approach: "Enfoque", ai: "IA", experience: "Experiencia", contact: "Hablemos", },
  en: { work: "Work", approach: "Approach", ai: "AI", experience: "Experience", contact: "Let’s talk", },
} as const;

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const c = copy[locale];

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
  return (
    <header className={`site-header ${hidden ? "is-hidden" : ""} ${scrolled ? "is-scrolled" : ""}`}>
      <Link href={home} className="brand" aria-label={site.name}>
        <span className="brand-mark">JK</span>
        <span className="brand-name">Julián Kondratavicius</span>
      </Link>
      <nav className="site-nav" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
        <Link href={`${home}#work`}>{c.work}</Link>
        <Link href={`${home}#approach`}>{c.approach}</Link>
        <Link href={`${home}#ai`}>{c.ai}</Link>
        <Link href={`${home}#experience`}>{c.experience}</Link>
        <ThemeToggle locale={locale} />
        <Link className="lang" href={switchLocale(pathname, locale === "es" ? "en" : "es")} hrefLang={locale === "es" ? "en" : "es"}>
          <span className={locale === "es" ? "on" : ""}>ES</span>/<span className={locale === "en" ? "on" : ""}>EN</span>
        </Link>
      </nav>
    </header>
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
