import type { Localized } from "./i18n";

export interface Media {
  src: string;
  alt: Localized<string>;
  /** Ancho/alto reales del archivo, para evitar layout shift. */
  width?: number;
  height?: number;
  caption?: Localized<string>;
}

/**
 * Un numero de impacto. `value` va crudo ("+38%", "4x", "-2.5s").
 * Si todavia no tenes el dato medido, dejalo como null y el bloque
 * se renderiza como pendiente en vez de inventar una cifra.
 */
export interface Metric {
  value: string | null;
  label: Localized<string>;
  note?: Localized<string>;
}

/** Un capitulo de la narrativa del case study. */
export interface Chapter {
  id: string;
  eyebrow: Localized<string>;
  title: Localized<string>;
  /** Parrafos. Cada string es un <p>. */
  body: Localized<string[]>;
  bullets?: Localized<string[]>;
  media?: Media;
  aside?: {
    title: Localized<string>;
    body: Localized<string>;
  };
}

/**
 * El bloque que diferencia a un Lead de un Senior: que alternativas
 * habia, cual elegiste, por que, y que resignaste al elegirla.
 */
export interface Decision {
  title: Localized<string>;
  context: Localized<string>;
  options: Localized<string[]>;
  choice: Localized<string>;
  why: Localized<string>;
  tradeoff: Localized<string>;
}

export interface Project {
  slug: string;
  /** Orden en la grilla. Menor = mas arriba. */
  order: number;
  /** El primero ocupa el ancho completo de la grilla. */
  featured?: boolean;
  /** Si es true, se muestra el aviso de contenido bajo NDA. */
  nda?: boolean;
  /** Si es false, no se publica todavia (ni en la grilla ni en el sitemap). */
  published: boolean;

  name: string;
  client: string;
  industry: Localized<string>;
  year: string;
  accent: string;
  /** Sitio o producto en vivo: se muestra como "Ver proyecto". */
  url?: string;
  /** Proyecto propio, no de un cliente. */
  personal?: boolean;

  role: Localized<string>;
  team: Localized<string>;
  timeline: Localized<string>;
  platforms: Localized<string>;
  tags: string[];

  /** Titular corto para la home: se escanea, no se lee. */
  tagline: Localized<string>;
  /** Una linea de impacto, va en el hero del case study. */
  headline: Localized<string>;
  /** Parrafo corto para la tarjeta de la grilla. */
  summary: Localized<string>;

  cover?: Media;
  metrics: Metric[];
  chapters: Chapter[];
  decisions: Decision[];
  learnings: Localized<string[]>;
  /** Cómo usé IA en este proyecto: se muestra como paso del proceso. */
  ai?: {
    title: Localized<string>;
    body: Localized<string>;
    tools: string[];
  };
}
