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
  tier: "flagship",
  featured: true,
  published: true,
  nda: true,

  name: "Wehealthy",
  client: "doc24",
  industry: { es: "Healthtech", en: "Healthtech" },
  year: "2023 — Actualidad",
  accent: "#6EE7B7",
  url: "https://doc24.com.ar/bienestar-inteligente-wehealthy/",

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
  tags: ["Experience Design", "B2B2C", "Design System", "Data-driven UX"],

  tagline: {
    es: "Diseñar bienestar para dos clientes con intereses diferentes",
    en: "Designing wellbeing for two clients with different interests",
  },
  headline: {
    es: "Un producto B2B2C donde la empresa paga, el empleado usa y un equipo de bienestar opera. Diseñé la experiencia para que los tres ganen con el mismo producto.",
    en: "A B2B2C product where the company pays, the employee uses and a wellbeing team operates. I designed the experience so all three win with the same product.",
  },
  summary: {
    es: "Plataforma de bienestar corporativo con varios actores y un solo producto: RRHH necesita medir, el empleado necesita confiar y el equipo de bienestar necesita operar. Diseñé la experiencia end-to-end, del onboarding al reporte, y el design system que la sostiene.",
    en: "A corporate wellbeing platform with several actors and one product: HR needs to measure, employees need to trust and the wellbeing team needs to operate. I designed the end-to-end experience, from onboarding to reporting, and the design system that holds it together.",
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
        es: "Dos clientes, dos incentivos",
        en: "Two clients, two incentives",
      },
      body: {
        es: [
          "La empresa contrata; la persona usa. Una quiere evidencia de que la inversión sirve, la otra quiere sentirse mejor sin sentirse vigilada.",
          "En el medio, un equipo de bienestar tiene que operar el programa, y el producto tiene que hacer que todo eso se sienta como una sola experiencia.",
        ],
        en: [
          "The company buys; the person uses. One wants proof the investment works, the other wants to feel better without feeling watched.",
          "In between, a wellbeing team has to run the program, and the product has to make all of it feel like a single experience.",
        ],
      },
    },
    {
      id: "problem",
      eyebrow: { es: "El problema", en: "The problem" },
      title: {
        es: "Un ecosistema, no una app",
        en: "An ecosystem, not an app",
      },
      body: {
        es: [
          "Cada actor necesitaba algo distinto del mismo producto. Si diseñábamos pensando en uno solo, los demás dejaban de funcionar.",
        ],
        en: [
          "Every actor needed something different from the same product. Designing for just one of them broke it for everyone else.",
        ],
      },
      bullets: {
        es: [
          "RRHH necesita medir resultados y justificar la inversión.",
          "El empleado necesita confiar antes de responder con honestidad.",
          "El equipo de bienestar necesita operar contenido y acompañamiento.",
          "Producto tiene que convertir todo eso en una experiencia coherente.",
        ],
        en: [
          "HR needs to measure results and justify the investment.",
          "Employees need to trust the product before answering honestly.",
          "The wellbeing team needs to run content and follow-up.",
          "Product has to turn all of that into one coherent experience.",
        ],
      },
    },
    {
      id: "ecosystem",
      eyebrow: { es: "El ecosistema", en: "The ecosystem" },
      title: {
        es: "Quién da y quién recibe",
        en: "Who gives and who gets",
      },
      body: {
        es: [
          "Mapeé qué entrega y qué recibe cada actor. La plataforma no es el centro por ser la app: es donde se cruzan todas las promesas.",
        ],
        en: [
          "I mapped what each actor gives and gets. The platform isn't the center because it's the app: it's where every promise meets.",
        ],
      },
      ecosystem: [
        {
          actor: { es: "Empresa / RRHH", en: "Company / HR" },
          flows: { es: "Contrata · comunica · recibe insights", en: "Buys · communicates · gets insights" },
        },
        {
          actor: { es: "Plataforma", en: "Platform" },
          flows: { es: "Onboarding · assessment · contenido · recomendaciones", en: "Onboarding · assessment · content · recommendations" },
          center: true,
        },
        {
          actor: { es: "Empleado", en: "Employee" },
          flows: { es: "Responde · recibe valor · vuelve al producto", en: "Answers · gets value · comes back" },
        },
        {
          actor: { es: "Equipo de bienestar", en: "Wellbeing team" },
          flows: { es: "Contenido · intervención · acompañamiento", en: "Content · intervention · follow-up" },
        },
        {
          actor: { es: "Datos / analytics", en: "Data / analytics" },
          flows: { es: "Agregación · privacidad · reporting", en: "Aggregation · privacy · reporting" },
        },
      ],
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
    {
      id: "system",
      eyebrow: { es: "El sistema", en: "The system" },
      title: {
        es: "El design system que lo hizo escalable",
        en: "The design system that made it scale",
      },
      body: {
        es: [
          "Con varios actores y web + mobile, la consistencia no era estética: era confianza. Construí el design system para que cada flujo nuevo hable el mismo idioma sin volver a discutir botones y estados.",
        ],
        en: [
          "With several actors across web and mobile, consistency wasn't aesthetics: it was trust. I built the design system so every new flow speaks the same language without re-arguing buttons and states.",
        ],
      },
      bullets: {
        es: [
          "Tokens: color, tipografía, espaciado, radios y elevación.",
          "7 estados por componente, incluidos vacío y error.",
          "Una sola librería para web y mobile, sin componentes duplicados.",
        ],
        en: [
          "Tokens: color, type, spacing, radii and elevation.",
          "7 states per component, including empty and error.",
          "One library for web and mobile, no duplicated components.",
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
      "En B2B2C, diseñar para quien paga sin perder a quien usa es el verdadero problema de producto.",
      "En salud, la confianza es parte de la usabilidad.",
      "Un Design System se vende con métricas del equipo, no con capturas lindas.",
    ],
    en: [
      "In B2B2C, designing for whoever pays without losing whoever uses is the real product problem.",
      "In healthcare, trust is part of usability.",
      "A Design System is sold with team metrics, not pretty screenshots.",
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
