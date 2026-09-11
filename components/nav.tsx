"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { locales, localeLabel, type Locale } from "@/lib/i18n";
import { href, switchLocale } from "@/lib/href";
import { nav as navItems, site, ui } from "@/content/site";

export function Nav({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al navegar.
  useEffect(() => setOpen(false), [pathname]);

  // Bloquear el scroll del fondo mientras el menú está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-5 transition-[background-color,backdrop-filter] duration-[400ms] ${
        scrolled ? "bg-bg/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <Link
          href={href("/", lang)}
          className="text-[0.95rem] font-medium tracking-[-0.01em] text-ink no-underline"
        >
          {site.name}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={ui[open ? "close" : "menu"][lang]}
          aria-expanded={open}
          className="relative z-50 block h-5 w-7 md:hidden"
        >
          <span
            className={`absolute left-0 block h-[1.5px] w-full bg-ink transition-all duration-[350ms] ${
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-[1.5px] w-full bg-ink transition-all duration-[350ms] ${
              open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex list-none gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={href(item.href, lang)}
                  className="text-[0.82rem] font-normal text-ink-2 no-underline transition-colors duration-300 hover:text-ink"
                >
                  {item.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitch lang={lang} pathname={pathname} />
        </div>
      </div>

      {/* Menú mobile */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-bg transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav>
          <ul className="flex list-none flex-col items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={href(item.href, lang)}
                  className="text-[1.35rem] font-light text-ink no-underline"
                >
                  {item.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4">
          <LangSwitch lang={lang} pathname={pathname} />
        </div>
      </div>
    </header>
  );
}

function LangSwitch({ lang, pathname }: { lang: Locale; pathname: string }) {
  return (
    <div className="flex overflow-hidden rounded-md border border-line">
      {locales.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={switchLocale(pathname, l)}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={`px-3 py-1.5 text-[0.72rem] font-medium tracking-wider no-underline transition-colors duration-[250ms] ${
              active
                ? "bg-ink text-bg"
                : "text-ink-3 hover:text-ink"
            }`}
          >
            {localeLabel[l]}
          </Link>
        );
      })}
    </div>
  );
}
