export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Un valor con su version en cada idioma. */
export type Localized<T> = Record<Locale, T>;

/** Resuelve un valor localizado al idioma activo. */
export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export const localeLabel: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export const htmlLang: Record<Locale, string> = {
  es: "es-AR",
  en: "en-US",
};
