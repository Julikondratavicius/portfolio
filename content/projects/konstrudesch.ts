import type { Project } from "@/lib/types";

/** Proyecto freelance. Completá los TODO con tus datos reales. */
export const konstrudesch: Project = {
  slug: "konstrudesch",
  order: 6,
  published: true,

  name: "Konstrudesch",
  client: "Konstrudesch",
  industry: { es: "Construcción / Ingeniería", en: "Construction / Engineering" },
  year: "2026",
  accent: "#F59E0B",
  url: "https://www.konstrudesch.com.ar/",

  role: {
    es: "Product Designer — Diseño y desarrollo",
    en: "Product Designer — Design & development",
  },
  team: { es: "Proyecto freelance con los fundadores", en: "Freelance project with the founders" },
  timeline: { es: "TODO: ej. 4 semanas", en: "TODO: e.g. 4 weeks" },
  platforms: { es: "Web · ES / EN", en: "Web · ES / EN" },
  tags: ["Brand & Web", "B2B", "Bilingual", "Portfolio"],

  tagline: {
    es: "Una empresa nueva con una larga historia",
    en: "A new company with a long history",
  },
  headline: {
    es: "Una constructora recién fundada tenía que ganar licitaciones contra empresas con décadas de nombre. La experiencia existía; faltaba hacerla visible.",
    en: "A newly founded construction company had to win bids against firms with decades of name recognition. The experience was there; it needed to be visible.",
  },
  summary: {
    es: "Constructora fundada en 2026 en Rosario, con obras viales, industriales y aeroportuarias en 8 provincias. Diseñé y desarrollé su sitio bilingüe para convertir la experiencia de su equipo en credibilidad: servicios, método de trabajo y un portfolio de obras reales.",
    en: "A construction company founded in 2026 in Rosario, with road, industrial and airport works across 8 provinces. I designed and built its bilingual site to turn the team's experience into credibility: services, working method and a portfolio of real projects.",
  },

  cover: {
    src: "/images/projects/konstrudesch-web.webp",
    alt: { es: "Sitio de Konstrudesch", en: "Konstrudesch website" },
    width: 1600,
    height: 1000,
  },

  metrics: [],

  chapters: [
    {
      id: "context",
      eyebrow: { es: "Contexto", en: "Context" },
      title: {
        es: "Somos una empresa nueva. La experiencia detrás, no.",
        en: "We're a new company. The experience behind it isn't.",
      },
      body: {
        es: [
          "Konstrudesch nació en 2026 con un equipo que aprendió los estándares del sector desde adentro, en algunas de las obras más grandes del país. El nombre era nuevo; el oficio no.",
          "En construcción, quien contrata compra confianza antes que precio. El sitio tenía que resolver esa tensión: presentar una marca joven con el peso de todo lo que el equipo ya había construido.",
        ],
        en: [
          "Konstrudesch was founded in 2026 by a team that learned the industry's standards from the inside, on some of the country's largest works. The name was new; the craft wasn't.",
          "In construction, clients buy trust before price. The site had to resolve that tension: present a young brand carrying the weight of everything the team had already built.",
        ],
      },
    },
    {
      id: "product",
      eyebrow: { es: "El sitio", en: "The site" },
      title: {
        es: "Mostrar obras, no promesas",
        en: "Show works, not promises",
      },
      body: {
        es: [
          "Estructuré el sitio para que la prueba aparezca antes que el discurso: obras ejecutadas con ubicación, áreas de especialización concretas y un método de trabajo en cuatro pasos.",
        ],
        en: [
          "I structured the site so proof appears before pitch: completed works with their location, concrete areas of expertise and a four-step working method.",
        ],
      },
      bullets: {
        es: [
          "Portfolio de obras reales: pavimentos, puentes, galpones y obras hidráulicas.",
          "Cuatro áreas de servicio: residencial, industrial, vial y aeroportuaria.",
          "Sitio bilingüe ES / EN para licitaciones y socios fuera del país.",
          "Contacto directo por WhatsApp, el canal que usa el sector.",
        ],
        en: [
          "A portfolio of real works: paving, bridges, warehouses and hydraulic works.",
          "Four service areas: residential, industrial, roads and airports.",
          "Bilingual ES / EN site for bids and partners abroad.",
          "Direct contact via WhatsApp, the channel the industry uses.",
        ],
      },
    },
  ],

  decisions: [],

  learnings: {
    es: [
      "Cuando una marca es nueva, el diseño tiene que transferir la credibilidad del equipo a la empresa: la evidencia pesa más que el adjetivo.",
      "TODO: sumá un aprendizaje propio del proyecto.",
    ],
    en: [
      "When a brand is new, design has to transfer the team's credibility to the company: evidence weighs more than adjectives.",
      "TODO: add a learning of your own from this project.",
    ],
  },
  ai: {
    title: { es: "Diseñado y construido con IA", en: "Designed and built with AI" },
    body: {
      es: "Estructura, contenido bilingüe y código trabajados con IA: definí la arquitectura con Claude, construí con Claude Code y publiqué en Vercel. Menos tiempo en producción, más tiempo en el mensaje.",
      en: "Structure, bilingual content and code built with AI: I defined the architecture with Claude, built with Claude Code and shipped on Vercel. Less time on production, more time on the message.",
    },
    tools: ["Claude", "Claude Code", "Vercel"],
  },
};
