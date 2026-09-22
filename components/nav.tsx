"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { site } from "@/content/site";

export function Nav({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const links = [
    ["/work", lang === "es" ? "Trabajo" : "Work"],
    ["/profile", lang === "es" ? "Perfil" : "Profile"],
    ["/lab", "Lab"],
  ] as const;
  return <header className="site-header">
    <div className="wrap site-header-inner">
      <Link href={href("/", lang)} className="brand-link">Julián Kondratavicius</Link>
      <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? "Cerrar" : "Menú"}</button>
      <nav id="primary-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}>
        {links.map(([path, label]) => <Link key={path} href={href(path, lang)}>{label}</Link>)}
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="nav-contact" href={`mailto:${site.email}`}>{lang === "es" ? "Hablemos" : "Get in touch"} ↗</a>
      </nav>
    </div>
  </header>;
}
