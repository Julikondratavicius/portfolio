import { defaultLocale, isLocale, type Locale } from "./i18n";

/**
 * Prefija una ruta interna con el idioma activo.
 *   "/work"        + "en" -> "/en/work"
 *   "/#experience" + "es" -> "/es#experience"
 *   "/"            + "es" -> "/es"
 */
export function href(path: string, locale: Locale): string {
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** Cambia el idioma manteniendo la página actual. */
export function switchLocale(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${next}`;
  if (isLocale(segments[0])) {
    segments[0] = next;
    return `/${segments.join("/")}`;
  }
  return `/${next}/${segments.join("/")}`;
}

/** El idioma que sale de la URL, con fallback al default. */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isLocale(first) ? first : defaultLocale;
}
