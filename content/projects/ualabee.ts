import type { Project } from "@/lib/types";

/** Completá los TODO con tus datos reales antes de publicar. */
export const ualabee: Project = {
  slug: "ualabee",
  order: 3,
  published: true,

  name: "Ualabee",
  client: "Ualabee",
  industry: { es: "MaaS / Movilidad", en: "MaaS / Mobility" },
  year: "2021 — 2022",
  accent: "#FCD34D",

  role: { es: "UX/UI Designer", en: "UX/UI Designer" },
  team: {
    es: "TODO: con quiénes trabajaste y cuántos eran",
    en: "TODO: who you worked with and how many",
  },
  timeline: { es: "TODO: ej. 1 año", en: "TODO: e.g. 1 year" },
  platforms: { es: "iOS · Android · Web", en: "iOS · Android · Web" },
  tags: ["MaaS", "UX Research", "Real-time data", "Usability"],

  tagline: {
    es: "Transporte público en tiempo real, pensado para la parada",
    en: "Real-time public transit, designed for the bus stop",
  },
  headline: {
    es: "La movilidad urbana no se diseña en el escritorio: se diseña parado en la parada, con el celular en la mano y el colectivo llegando.",
    en: "Urban mobility isn't designed at a desk: it's designed standing at the stop, phone in hand, with the bus pulling in.",
  },
  summary: {
    es: "App de movilidad (MaaS) que une recorridos, paradas y la posición de los vehículos en tiempo real para que cada viaje sea predecible. Investigué con pasajeros reales, detecté problemas de usabilidad y diseñé wireframes multiplataforma.",
    en: "A mobility app (MaaS) that brings routes, stops and live vehicle positions together so every trip feels predictable. I researched with real riders, found usability issues and designed cross-platform wireframes.",
  },

  cover: {
    src: "/images/projects/ualabee-cover.jpg",
    alt: { es: "Pantallas de la app Ualabee", en: "Ualabee app screens" },
    width: 2400,
    height: 1350,
  },

  metrics: [
    {
      value: null, // TODO
      label: {
        es: "Problemas de usabilidad detectados",
        en: "Usability issues detected",
      },
    },
    {
      value: null, // TODO
      label: { es: "Usuarios entrevistados", en: "Users interviewed" },
    },
  ],

  chapters: [
    {
      id: "context",
      eyebrow: { es: "Contexto", en: "Context" },
      title: {
        es: "Diseñar para el peor contexto de uso posible",
        en: "Designing for the worst possible usage context",
      },
      body: {
        es: [
          "Una app de movilidad se usa de pie, apurado, con una mano, con sol en la pantalla y a veces sin buena señal. Ese contexto no es un caso borde: es el caso principal.",
          "TODO: contá qué parte del producto trabajaste y qué problema concreto te tocó resolver.",
        ],
        en: [
          "A mobility app is used standing up, in a hurry, one-handed, with sun on the screen and sometimes poor signal. That context isn't an edge case: it's the main case.",
          "TODO: describe which part of the product you worked on and the specific problem you had to solve.",
        ],
      },
    },
    {
      id: "research",
      eyebrow: { es: "Research", en: "Research" },
      title: {
        es: "Entender el viaje real, no el viaje ideal",
        en: "Understanding the real trip, not the ideal one",
      },
      body: {
        es: [
          "Hice investigación con usuarios para entender necesidades y comportamientos reales de viaje, e identifiqué los puntos donde la interfaz asumía cosas que en la calle no pasaban.",
          "TODO: sumá el método (entrevistas, observación, analítica), el tamaño de muestra y el hallazgo principal.",
        ],
        en: [
          "I ran user research to understand real travel needs and behaviors, and identified the points where the interface assumed things that didn't happen on the street.",
          "TODO: add the method (interviews, observation, analytics), sample size and the main finding.",
        ],
      },
      bullets: {
        es: [
          "TODO: hallazgo 1 y qué cambió por él.",
          "TODO: hallazgo 2 y qué cambió por él.",
          "TODO: cómo priorizaste los problemas encontrados.",
        ],
        en: [
          "TODO: finding 1 and what changed because of it.",
          "TODO: finding 2 and what changed because of it.",
          "TODO: how you prioritized the issues you found.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "TODO: la decisión de diseño más difícil del proyecto",
        en: "TODO: the hardest design decision of the project",
      },
      context: {
        es: "TODO: qué restricción te obligaba a elegir.",
        en: "TODO: what constraint forced the choice.",
      },
      options: {
        es: ["TODO: alternativa A", "TODO: alternativa B"],
        en: ["TODO: option A", "TODO: option B"],
      },
      choice: { es: "TODO: qué elegiste.", en: "TODO: what you chose." },
      why: { es: "TODO: por qué.", en: "TODO: why." },
      tradeoff: { es: "TODO: qué resignaste.", en: "TODO: what you gave up." },
    },
  ],

  learnings: {
    es: [
      "TODO: qué aprendiste sobre diseñar para contextos de uso hostiles.",
      "TODO: qué te llevaste sobre investigación con usuarios reales.",
    ],
    en: [
      "TODO: what you learned about designing for hostile usage contexts.",
      "TODO: what you took away about research with real users.",
    ],
  },
};
