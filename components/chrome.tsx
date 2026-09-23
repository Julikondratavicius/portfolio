"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { href, switchLocale } from "@/lib/href";
import { site } from "@/content/site";
import { Magnetic } from "./motion";

const copy = {
  es: { work: "Trabajo", approach: "Enfoque", experience: "Experiencia", contact: "Hablemos", open: "Disponible para roles Senior / Lead" },
  en: { work: "Work", approach: "Approach", experience: "Experience", contact: "Let’s talk", open: "Open to Senior / Lead roles" },
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
        <Link href={`${home}#experience`}>{c.experience}</Link>
        <Link className="lang" href={switchLocale(pathname, locale === "es" ? "en" : "es")} hrefLang={locale === "es" ? "en" : "es"}>
          <span className={locale === "es" ? "on" : ""}>ES</span>/<span className={locale === "en" ? "on" : ""}>EN</span>
        </Link>
      </nav>
    </header>
  );
}

export function FloatingCta({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <Magnetic className="floating-cta-wrap" strength={0.2}>
      <a className="floating-cta" href={`mailto:${site.email}`}>
        <span className="pulse" aria-hidden="true" />
        <span className="floating-cta-open">{c.open}</span>
        <span className="floating-cta-go">{c.contact} <span aria-hidden="true">↗</span></span>
      </a>
    </Magnetic>
  );
}
