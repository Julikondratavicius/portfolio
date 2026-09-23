import type { Project } from "@/lib/types";

/**
 * PLANTILLA DE REFERENCIA.
 * Este archivo es el modelo del formato deep-dive: copialo para cada proyecto
 * nuevo y reemplazá el contenido.
 *
 * Todo lo que diga TODO: es un dato que tenés que completar vos.
 * No inventes cifras: si no medís algo, dejá `value: null` y el bloque se
 * muestra como "A medir" en lugar de afirmar un número falso.
 */
export const doc24: Project = {
  slug: "doc24-wehealthy",
  order: 1,
  featured: true,
  published: true,
  nda: true,

  name: "Wehealthy",
  client: "doc24",
  industry: { es: "Healthtech", en: "Healthtech" },
  year: "2023 — Actualidad",
  accent: "#6EE7B7",

  role: {
    es: "Senior Product Designer",
    en: "Senior Product Designer",
  },
  team: {
    es: "Cofounders, Product Owner, analistas funcionales, equipo de desarrollo",
    en: "Cofounders, Product Owner, functional analysts, engineering team",
  },
  timeline: { es: "2 años", en: "2 years" },
  platforms: { es: "Web app · iOS · Android", en: "Web app · iOS · Android" },
  tags: ["Design System", "HealthTech B2B2C", "Data-driven UX", "Scrum"],

  tagline: {
    es: "El design system detrás del bienestar inteligente",
    en: "The design system behind smart wellbeing",
  },
  headline: {
    es: "Un producto de bienestar corporativo que crecía más rápido de lo que el diseño podía sostener. Construí el sistema que lo ordenó.",
    en: "A corporate wellness product growing faster than design could sustain. I built the system that brought it back under control.",
  },
  summary: {
    es: "Plataforma de bienestar de doble impacto: acompaña a cada persona con una experiencia de salud personalizada y le da a las organizaciones indicadores para anticiparse y decidir. Lideré el Design System y diseñé los flujos end-to-end a partir de cuestionarios de autopercepción y datos reales.",
    en: "A dual-impact wellbeing platform: it guides each person through a personalized health experience and gives organizations indicators to anticipate and decide. I led the Design System and designed the end-to-end flows from self-perception questionnaires and real data.",
  },

  cover: {
    src: "/images/projects/wehealthy-home.png",
    alt: {
      es: "Pantallas del producto Wehealthy de doc24",
      en: "Screens from doc24's Wehealthy product",
    },
    width: 412,
    height: 833,
  },

  metrics: [
    {
      value: null, // TODO: ej. "-40%" tiempo de entrega de una feature nueva
      label: {
        es: "Tiempo de diseño por feature",
        en: "Design time per feature",
      },
      note: {
        es: "Antes vs. después del Design System",
        en: "Before vs. after the Design System",
      },
    },
    {
      value: null, // TODO: ej. "+62" componentes publicados
      label: { es: "Componentes en producción", en: "Components in production" },
      note: {
        es: "Librería documentada y versionada",
        en: "Documented, versioned library",
      },
    },
    {
      value: null, // TODO: ej. "+18%" completitud del cuestionario
      label: {
        es: "Completitud del onboarding",
        en: "Onboarding completion",
      },
      note: {
        es: "Cuestionario de autopercepción",
        en: "Self-perception questionnaire",
      },
    },
  ],

  chapters: [
    {
      id: "context",
      eyebrow: { es: "Contexto", en: "Context" },
      title: {
        es: "Dos usuarios, dos incentivos",
        en: "Two users, two incentives",
      },
      body: {
        es: [
          "La empresa contrata; la persona usa. Una quiere evidencia de que la inversión sirve, la otra quiere sentirse mejor sin sentirse vigilada.",
        ],
        en: [
          "The company buys; the person uses. One wants proof the investment works, the other wants to feel better without feeling watched.",
        ],
      },
    },
    {
      id: "problem",
      eyebrow: { es: "El problema", en: "The problem" },
      title: {
        es: "La deuda de diseño se veía en el calendario",
        en: "The design debt showed up on the calendar",
      },
      body: {
        es: [
          "Cada feature volvía a discutir botones y estados en lugar del problema del usuario. No perdíamos prolijidad: perdíamos ciclos de producto.",
        ],
        en: [
          "Every feature re-argued buttons and states instead of the user's problem. We weren't losing polish: we were losing product cycles.",
        ],
      },
      bullets: {
        es: [
          "Componentes duplicados entre web y mobile.",
          "El detalle se definía en desarrollo, no en diseño.",
          "Decisiones que se perdían entre sprints.",
        ],
        en: [
          "Duplicated components across web and mobile.",
          "Details got defined in engineering, not design.",
          "Decisions lost between sprints.",
        ],
      },
    },
    {
      id: "research",
      eyebrow: { es: "Research", en: "Research" },
      title: {
        es: "Lo que la gente dice vs. lo que hace",
        en: "What people say vs. what they do",
      },
      body: {
        es: [
          "Crucé los cuestionarios de autopercepción con el uso real del producto. La brecha entre ambos marcó dónde intervenir.",
        ],
        en: [
          "I cross-referenced self-perception questionnaires with real product usage. The gap between them showed where to intervene.",
        ],
      },
    },
    {
      id: "system",
      eyebrow: { es: "El sistema", en: "The system" },
      title: {
        es: "Tokens, componentes y reglas",
        en: "Tokens, components and rules",
      },
      body: {
        es: [
          "En ese orden. Ningún componente entra a la librería sin todos sus estados, y cada uno se documenta con su cuándo sí y su cuándo no.",
        ],
        en: [
          "In that order. No component enters the library without all its states, and each one is documented with when to use it and when not to.",
        ],
      },
      bullets: {
        es: [
          "Tokens: color, tipografía, espaciado, radios y elevación.",
          "7 estados por componente, incluidos vacío y error.",
          "Guías de uso para que el criterio sobreviva a la rotación del equipo.",
        ],
        en: [
          "Tokens: color, type, spacing, radii and elevation.",
          "7 states per component, including empty and error.",
          "Usage guidelines so the reasoning survives team turnover.",
        ],
      },
    },
    {
      id: "flows",
      eyebrow: { es: "Los flujos", en: "The flows" },
      title: {
        es: "Bienestar sin sentirse auditado",
        en: "Wellbeing without feeling audited",
      },
      body: {
        es: [
          "El desafío no era usabilidad, era confianza. Cada pregunta devuelve algo antes de pedir la siguiente, y queda claro qué ve la empresa y qué no.",
        ],
        en: [
          "The challenge wasn't usability, it was trust. Every question gives something back before asking the next, and it's clear what the company can and can't see.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "Construir el sistema junto a las features, no antes",
        en: "Build the system alongside features, not before",
      },
      context: {
        es: "El roadmap no podía frenarse dos meses.",
        en: "The roadmap couldn't stop for two months.",
      },
      options: {
        es: [
          "Frenar el roadmap y construir todo primero.",
          "Construirlo de a pedazos, con cada feature nueva.",
          "Adaptar una librería externa.",
        ],
        en: [
          "Freeze the roadmap and build everything first.",
          "Build it in slices, with each new feature.",
          "Adapt an external library.",
        ],
      },
      choice: {
        es: "Construirlo de a pedazos, con cada feature nueva.",
        en: "Build it in slices, with each new feature.",
      },
      why: {
        es: "Cada componente nació con un caso real, y el sistema mostró valor desde la primera semana.",
        en: "Every component was born from a real case, and the system showed value from week one.",
      },
      tradeoff: {
        es: "Tardó más en estar completo y hubo que refactorizar componentes tempranos.",
        en: "It took longer to feel complete and early components needed refactoring.",
      },
    },
    {
      title: {
        es: "Privacidad del empleado por sobre el detalle del reporte",
        en: "Employee privacy over reporting detail",
      },
      context: {
        es: "La empresa quiere ver resultados; el empleado, no ser identificado.",
        en: "The company wants results; the employee wants not to be identified.",
      },
      options: {
        es: [
          "Reportes por equipo pequeño, más accionables.",
          "Reportes agregados con un mínimo de personas por corte.",
        ],
        en: [
          "Reports by small team, more actionable.",
          "Aggregate reports with a minimum group size per cut.",
        ],
      },
      choice: {
        es: "Reportes agregados con un mínimo de personas por corte.",
        en: "Aggregate reports with a minimum group size per cut.",
      },
      why: {
        es: "Si el empleado sospecha que lo identifican, deja de responder con honestidad y el dato pierde valor para todos.",
        en: "If employees suspect they can be identified, they stop answering honestly and the data loses value for everyone.",
      },
      tradeoff: {
        es: "Perdimos granularidad que el área comercial usaba como argumento de venta.",
        en: "We lost granularity that sales used as a selling point.",
      },
    },
  ],

  learnings: {
    es: [
      "Un Design System se vende con métricas del equipo, no con capturas lindas.",
      "En salud, la confianza es parte de la usabilidad.",
      "El dibujo se copia; el criterio documentado es lo que perdura.",
    ],
    en: [
      "A Design System is sold with team metrics, not pretty screenshots.",
      "In healthcare, trust is part of usability.",
      "Drawings get copied; documented reasoning is what lasts.",
    ],
  },
  ai: {
    title: { es: "IA para decidir más rápido", en: "AI to decide faster" },
    body: {
      es: "Uso IA para sintetizar cuestionarios y research, y para pasar de una idea a un prototipo navegable en horas. Así validamos flujos con usuarios antes de comprometer desarrollo.",
      en: "I use AI to synthesize questionnaires and research, and to go from an idea to a clickable prototype in hours. That lets us validate flows with users before committing engineering.",
    },
    tools: ["Claude", "Figma Make", "v0"],
  },
};
