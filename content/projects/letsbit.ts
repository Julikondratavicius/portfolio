import type { Project } from "@/lib/types";

/** Completá los TODO con tus datos reales antes de publicar. */
export const letsbit: Project = {
  slug: "letsbit",
  order: 2,
  published: true,

  name: "LetsBit",
  client: "LetsBit",
  industry: { es: "Fintech / Cripto", en: "Fintech / Crypto" },
  year: "2022 — 2023",
  accent: "#A5B4FC",

  role: { es: "UX/UI Designer", en: "UX/UI Designer" },
  team: {
    es: "Equipo multidisciplinario: developers, project managers, producto",
    en: "Cross-functional team: developers, project managers, product",
  },
  timeline: { es: "TODO: ej. 8 meses", en: "TODO: e.g. 8 months" },
  platforms: { es: "iOS · Android", en: "iOS · Android" },
  tags: ["UX/UI", "Prototyping", "Design Thinking", "Fintech"],

  headline: {
    es: "Diseñar para cripto es diseñar para el miedo: una operación mal entendida no se deshace.",
    en: "Designing for crypto means designing for fear: a misunderstood transaction cannot be undone.",
  },
  summary: {
    es: "Prototipos funcionales para validar flujos de usuario en el ecosistema cripto, con Design Thinking y metodologías ágiles junto a equipos multidisciplinarios.",
    en: "Functional prototypes to validate user flows in the crypto ecosystem, using Design Thinking and agile methods alongside cross-functional teams.",
  },

  cover: {
    src: "/images/projects/letsbit-cover.jpg",
    alt: { es: "Pantallas de la app LetsBit", en: "LetsBit app screens" },
    width: 2400,
    height: 1350,
  },

  metrics: [
    {
      value: null, // TODO
      label: {
        es: "Flujos validados en prototipo",
        en: "Flows validated in prototype",
      },
    },
    {
      value: null, // TODO
      label: { es: "Errores en operación", en: "Transaction errors" },
      note: { es: "Antes vs. después", en: "Before vs. after" },
    },
  ],

  chapters: [
    {
      id: "context",
      eyebrow: { es: "Contexto", en: "Context" },
      title: {
        es: "Un producto financiero donde el error no tiene botón de deshacer",
        en: "A financial product where mistakes have no undo button",
      },
      body: {
        es: [
          "LetsBit opera con criptomonedas en un mercado donde conviven usuarios muy expertos con gente que nunca hizo una transferencia digital. Ese rango de conocimiento dentro de un mismo producto es el verdadero problema de diseño.",
          "TODO: agregá el contexto específico — qué parte del producto tocaste, en qué momento de la compañía entraste y qué te pidieron cuando llegaste.",
        ],
        en: [
          "LetsBit deals in cryptocurrency, in a market where highly expert users coexist with people who have never made a digital transfer. That spread of knowledge inside one product is the real design problem.",
          "TODO: add the specific context — which part of the product you worked on, at what stage of the company you joined, and what you were asked to do.",
        ],
      },
    },
    {
      id: "process",
      eyebrow: { es: "Proceso", en: "Process" },
      title: {
        es: "Prototipar antes de escribir una línea de código",
        en: "Prototyping before a single line of code",
      },
      body: {
        es: [
          "Construí prototipos funcionales para poner los flujos frente a usuarios reales antes de comprometer tiempo de desarrollo. En un producto financiero, una validación tardía no sólo cuesta sprints: cuesta confianza.",
          "TODO: contá cómo testeaste — con cuántas personas, qué tareas les diste, qué se rompió. El hallazgo que te sorprendió es lo que mejor funciona en una entrevista.",
        ],
        en: [
          "I built functional prototypes to put flows in front of real users before committing engineering time. In a financial product, late validation doesn't just cost sprints: it costs trust.",
          "TODO: describe how you tested — how many people, what tasks, what broke. The finding that surprised you is what lands best in an interview.",
        ],
      },
      bullets: {
        es: [
          "TODO: método de validación usado y por qué ese y no otro.",
          "TODO: el hallazgo que cambió una decisión de producto.",
          "TODO: cómo llevaste ese hallazgo al equipo de desarrollo.",
        ],
        en: [
          "TODO: validation method used and why that one.",
          "TODO: the finding that changed a product decision.",
          "TODO: how you carried that finding to the engineering team.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "TODO: la decisión de diseño más discutida del proyecto",
        en: "TODO: the most debated design decision of the project",
      },
      context: {
        es: "TODO: qué estaba en juego cuando hubo que decidir.",
        en: "TODO: what was at stake when the call had to be made.",
      },
      options: {
        es: ["TODO: alternativa A", "TODO: alternativa B"],
        en: ["TODO: option A", "TODO: option B"],
      },
      choice: { es: "TODO: qué elegiste.", en: "TODO: what you chose." },
      why: {
        es: "TODO: en qué te apoyaste para elegir (dato, test, restricción técnica).",
        en: "TODO: what you based the choice on (data, test, technical constraint).",
      },
      tradeoff: {
        es: "TODO: qué perdiste al elegir eso. Si no perdiste nada, no era una decisión.",
        en: "TODO: what you lost by choosing it. If you lost nothing, it wasn't a decision.",
      },
    },
  ],

  learnings: {
    es: [
      "TODO: qué te llevaste de trabajar en un producto de alto riesgo financiero.",
      "TODO: qué harías distinto hoy con la experiencia que tenés ahora.",
    ],
    en: [
      "TODO: what you took away from working on a high-financial-risk product.",
      "TODO: what you would do differently today with the experience you have now.",
    ],
  },
};
