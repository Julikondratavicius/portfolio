import type { Project } from "@/lib/types";

/** Completá los TODO con tus datos reales antes de publicar. */
export const braintly: Project = {
  slug: "braintly",
  order: 7,
  published: true,

  name: "Braintly",
  client: "Braintly",
  industry: { es: "Software / Tech", en: "Software / Tech" },
  year: "2022",
  accent: "#F9A8D4",
  url: "https://www.braintly.com/",

  role: {
    es: "Web Designer — Webflow Developer",
    en: "Web Designer — Webflow Developer",
  },
  team: {
    es: "TODO: con quién trabajaste del lado del cliente",
    en: "TODO: who you worked with on the client side",
  },
  timeline: { es: "TODO: ej. 6 semanas", en: "TODO: e.g. 6 weeks" },
  platforms: { es: "Web · Webflow", en: "Web · Webflow" },
  tags: ["Webflow", "B2B", "No-Code", "Information Architecture"],

  tagline: {
    es: "Un sitio que el cliente actualiza solo",
    en: "A website the client runs on its own",
  },
  headline: {
    es: "Una empresa con doce años de trayectoria que necesitaba contar un modelo de negocio nuevo sin depender de nadie para actualizarlo.",
    en: "A company with twelve years of history that needed to tell a new business model without depending on anyone to update it.",
  },
  summary: {
    es: "Empresa de software que arma equipos y squads de desarrollo para startups de todo el mundo. Diseñé su sitio en Webflow para contar un modelo de negocio nuevo y que el equipo lo actualice sin depender de desarrollo.",
    en: "A software company that builds development teams and squads for startups worldwide. I designed their Webflow site to tell a new business model and let the team update it without depending on engineering.",
  },

  cover: {
    src: "/images/projects/braintly-web.webp",
    alt: { es: "Sitio web de Braintly", en: "Braintly website" },
    width: 1600,
    height: 1000,
  },

  metrics: [
    {
      value: null, // TODO
      label: {
        es: "Autonomía de edición del cliente",
        en: "Client editing autonomy",
      },
      note: {
        es: "Páginas que el equipo actualiza solo",
        en: "Pages the team updates on their own",
      },
    },
    {
      value: null, // TODO
      label: { es: "Tiempo de publicación", en: "Time to publish" },
      note: { es: "Antes vs. después", en: "Before vs. after" },
    },
  ],

  chapters: [
    {
      id: "context",
      eyebrow: { es: "Contexto", en: "Context" },
      title: {
        es: "El problema no era el sitio: era quién podía tocarlo",
        en: "The problem wasn't the site: it was who could touch it",
      },
      body: {
        es: [
          "Braintly tenía trayectoria y clientes, pero cada cambio en su web pasaba por un desarrollador. Eso convertía cualquier actualización de mensaje comercial en un ticket, y el sitio terminaba siempre desfasado respecto de lo que la empresa realmente vendía.",
          "Elegir Webflow no fue una decisión estética: fue elegir que el equipo comercial pudiera mover su propio mensaje sin pedir permiso.",
        ],
        en: [
          "Braintly had track record and clients, but every change to their site went through a developer. That turned any commercial message update into a ticket, and the site was always out of step with what the company actually sold.",
          "Choosing Webflow wasn't an aesthetic decision: it was choosing to let the commercial team move their own message without asking permission.",
        ],
      },
    },
    {
      id: "process",
      eyebrow: { es: "Proceso", en: "Process" },
      title: {
        es: "Estructura de contenido primero, visual después",
        en: "Content structure first, visuals second",
      },
      body: {
        es: [
          "Antes de diseñar pantallas armé la estructura de contenido: qué tenía que entender un visitante, en qué orden y con qué nivel de detalle. El nuevo modelo de negocios era la pieza más difícil de comunicar y no podía quedar escondida en una sección secundaria.",
          "TODO: contá cómo definiste la arquitectura de información y con quién la validaste del lado del cliente.",
        ],
        en: [
          "Before designing screens I built the content structure: what a visitor needed to understand, in what order and at what level of detail. The new business model was the hardest piece to communicate and couldn't be buried in a secondary section.",
          "TODO: describe how you defined the information architecture and who you validated it with on the client side.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "Webflow por sobre un desarrollo a medida",
        en: "Webflow over a custom build",
      },
      context: {
        es: "El cliente quería un sitio propio pero no tenía equipo interno para mantenerlo.",
        en: "The client wanted their own site but had no internal team to maintain it.",
      },
      options: {
        es: [
          "Desarrollo a medida: máximo control, dependencia permanente de un dev.",
          "Webflow: autonomía de edición, menos libertad técnica.",
          "Plantilla de WordPress: barata y rápida, difícil de diferenciar.",
        ],
        en: [
          "Custom build: maximum control, permanent dependency on a developer.",
          "Webflow: editing autonomy, less technical freedom.",
          "WordPress template: cheap and fast, hard to differentiate.",
        ],
      },
      choice: { es: "Webflow.", en: "Webflow." },
      why: {
        es: "El objetivo declarado del cliente era autonomía. Un sitio técnicamente superior que igual los dejaba dependiendo de un tercero no resolvía el problema por el que me contrataron.",
        en: "The client's stated goal was autonomy. A technically superior site that still left them depending on a third party wouldn't have solved the problem I was hired for.",
      },
      tradeoff: {
        es: "Quedamos atados a las limitaciones de la plataforma y a su costo mensual. Fue el precio de que el equipo pudiera publicar sin intermediarios.",
        en: "We were tied to the platform's limits and its monthly cost. That was the price of letting the team publish without intermediaries.",
      },
    },
  ],

  learnings: {
    es: [
      "La mejor solución técnica no siempre es la mejor solución de producto. Lo que importa es quién va a mantener esto dentro de un año.",
      "TODO: sumá un aprendizaje propio del proyecto.",
    ],
    en: [
      "The best technical solution isn't always the best product solution. What matters is who will maintain this a year from now.",
      "TODO: add a learning of your own from this project.",
    ],
  },
};
