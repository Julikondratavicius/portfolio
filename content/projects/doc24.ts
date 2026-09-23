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
    src: "/images/projects/doc24-cover.jpg",
    alt: {
      es: "Pantallas del producto Wehealthy de doc24",
      en: "Screens from doc24's Wehealthy product",
    },
    width: 2400,
    height: 1350,
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
        es: "Un producto de salud que atiende a empresas, no a personas sueltas",
        en: "A health product that serves companies, not individuals",
      },
      body: {
        es: [
          "Wehealthy es la plataforma de bienestar corporativo de doc24. Las empresas la contratan para sus equipos y los empleados la usan para entender y mejorar su estado de salud. Eso significa dos usuarios con incentivos distintos: la persona que quiere sentirse mejor sin que la vigilen, y la empresa que necesita evidencia de que su inversión sirve.",
          "Entré cuando el producto ya estaba en el mercado y sumando clientes. El equipo entregaba rápido, pero cada pantalla nueva se resolvía desde cero: los mismos componentes existían en tres versiones distintas, y una decisión tomada en un flujo no llegaba al siguiente.",
        ],
        en: [
          "Wehealthy is doc24's corporate wellness platform. Companies buy it for their teams, and employees use it to understand and improve their health. That means two users with different incentives: the person who wants to feel better without being monitored, and the company that needs evidence its investment is working.",
          "I joined when the product was already in market and adding clients. The team shipped fast, but every new screen was solved from scratch: the same components existed in three different versions, and a decision made in one flow never reached the next one.",
        ],
      },
    },
    {
      id: "problem",
      eyebrow: { es: "El problema", en: "The problem" },
      title: {
        es: "La deuda de diseño no se veía en una pantalla; se veía en el calendario",
        en: "The design debt did not show up on a screen; it showed up on the calendar",
      },
      body: {
        es: [
          "El síntoma que todos notaban era la inconsistencia visual. El problema real era de velocidad: sin un lenguaje común, cada feature volvía a discutir botones, espaciados y estados en lugar de discutir el problema del usuario.",
          "Lo planteé en términos de negocio, no de estética: no estábamos perdiendo prolijidad, estábamos perdiendo ciclos de producto. Ese encuadre fue lo que consiguió el tiempo para construir el sistema.",
        ],
        en: [
          "The symptom everyone noticed was visual inconsistency. The real problem was speed: with no shared language, every feature re-litigated buttons, spacing and states instead of discussing the user's problem.",
          "I framed it in business terms, not aesthetic ones: we weren't losing polish, we were losing product cycles. That framing is what bought the time to build the system.",
        ],
      },
      bullets: {
        es: [
          "Componentes duplicados entre web y mobile, sin una fuente de verdad.",
          "Handoff con ida y vuelta constante: el detalle se definía en desarrollo, no en diseño.",
          "Decisiones de UX que se perdían entre sprints porque no quedaban escritas en ningún lado.",
        ],
        en: [
          "Duplicated components across web and mobile, with no single source of truth.",
          "Handoff with constant back-and-forth: details got defined in engineering, not in design.",
          "UX decisions lost between sprints because they were never written down anywhere.",
        ],
      },
      aside: {
        title: {
          es: "Cómo lo medí antes de empezar",
          en: "How I measured it before starting",
        },
        body: {
          es: "TODO: contá acá cómo cuantificaste el problema (auditoría de componentes, horas de handoff, tickets de inconsistencia). Un número inicial hace creíble cualquier mejora posterior.",
          en: "TODO: describe how you quantified the problem (component audit, handoff hours, inconsistency tickets). A baseline number makes any later improvement credible.",
        },
      },
    },
    {
      id: "research",
      eyebrow: { es: "Research", en: "Research" },
      title: {
        es: "El cuestionario de autopercepción como materia prima",
        en: "The self-perception questionnaire as raw material",
      },
      body: {
        es: [
          "El producto ya recolectaba algo valioso: cuestionarios donde las personas declaran cómo perciben su propio estado de salud. Usé esa información como base de diseño en lugar de arrancar con supuestos.",
          "Crucé lo que la gente declaraba con lo que efectivamente hacía dentro del producto. La brecha entre ambas cosas fue el mapa de dónde intervenir: los momentos donde la intención existía pero el flujo no acompañaba.",
        ],
        en: [
          "The product already collected something valuable: questionnaires where people state how they perceive their own health. I used that as the design input instead of starting from assumptions.",
          "I cross-referenced what people declared against what they actually did inside the product. The gap between the two became the map of where to intervene: the moments where intent existed but the flow didn't support it.",
        ],
      },
      bullets: {
        es: [
          "TODO: cantidad de respuestas analizadas y período.",
          "TODO: los 2 o 3 hallazgos que cambiaron el rumbo del diseño.",
          "TODO: qué método usaste además del cuestionario (entrevistas, analítica, tests de usabilidad).",
        ],
        en: [
          "TODO: number of responses analyzed and the period covered.",
          "TODO: the 2 or 3 findings that changed the design direction.",
          "TODO: what method you used beyond the questionnaire (interviews, analytics, usability tests).",
        ],
      },
    },
    {
      id: "system",
      eyebrow: { es: "El sistema", en: "The system" },
      title: {
        es: "Tokens, componentes y reglas: en ese orden",
        en: "Tokens, components and rules: in that order",
      },
      body: {
        es: [
          "Empecé por los tokens —color, tipografía, espaciado, radios, elevación— porque son la capa que permite cambiar el producto entero sin volver a dibujarlo. Recién después construí los componentes, y al final escribí las reglas de uso.",
          "La regla que sostuvo todo: ningún componente entra a la librería sin sus estados completos (default, hover, focus, disabled, loading, error, vacío). El estado vacío y el de error son los que siempre se olvidan y los que más tickets generan después.",
          "Documenté cada componente con su cuándo sí y su cuándo no. Un sistema sin criterio de uso es sólo una carpeta ordenada de botones.",
        ],
        en: [
          "I started with tokens — color, type, spacing, radii, elevation — because they're the layer that lets you change the whole product without redrawing it. Only then did I build components, and the usage rules came last.",
          "The rule that held everything together: no component enters the library without its full set of states (default, hover, focus, disabled, loading, error, empty). Empty and error states are the ones always forgotten and the ones that generate the most tickets later.",
          "I documented each component with its when-to-use and when-not-to. A system without usage criteria is just a tidy folder of buttons.",
        ],
      },
      media: {
        src: "/images/projects/doc24-system.jpg",
        alt: {
          es: "Librería de componentes del Design System de Wehealthy",
          en: "Wehealthy Design System component library",
        },
        caption: {
          es: "TODO: reemplazar por una captura real de la librería en Figma.",
          en: "TODO: replace with a real screenshot of the Figma library.",
        },
      },
    },
    {
      id: "flows",
      eyebrow: { es: "Los flujos", en: "The flows" },
      title: {
        es: "Bienestar end-to-end, sin que se sienta una auditoría",
        en: "End-to-end wellness, without it feeling like an audit",
      },
      body: {
        es: [
          "El desafío central del flujo no era usabilidad, era confianza. Una persona no comparte información sobre su salud con una herramienta que le pagó su empleador si no entiende qué se hace con ese dato.",
          "Diseñé el recorrido de modo que cada pregunta devuelva algo antes de pedir la siguiente: el usuario ve un avance propio, no una planilla que se llena para otro. La transparencia sobre qué ve la empresa y qué no dejó de ser letra chica y pasó a ser parte del flujo.",
        ],
        en: [
          "The core challenge in the flow wasn't usability, it was trust. People don't share health information with a tool their employer paid for unless they understand what happens to that data.",
          "I designed the journey so each question gives something back before asking the next one: the user sees their own progress, not a form being filled in for someone else. Transparency about what the company can and cannot see stopped being fine print and became part of the flow.",
        ],
      },
    },
    {
      id: "impact",
      eyebrow: { es: "Resultado", en: "Outcome" },
      title: {
        es: "Qué cambió para el equipo y para el usuario",
        en: "What changed for the team and for the user",
      },
      body: {
        es: [
          "TODO: acá va el cierre con números reales. Contá qué pasó con la velocidad de entrega, la consistencia y las métricas de producto. Si un dato no lo tenés medido, decilo: 'no lo instrumentamos' es una respuesta profesional y honesta en una entrevista.",
          "TODO: sumá qué quedó vivo después de que te fuiste. Un sistema que el equipo sigue usando es la mejor prueba de que estaba bien diseñado.",
        ],
        en: [
          "TODO: this is the closing section with real numbers. Cover what happened to delivery speed, consistency and product metrics. If you don't have a figure measured, say so: 'we never instrumented it' is a professional, honest answer in an interview.",
          "TODO: add what outlived your departure. A system the team keeps using is the strongest proof it was well designed.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "Construir el sistema en paralelo a las features, no antes",
        en: "Build the system alongside features, not before them",
      },
      context: {
        es: "El roadmap no se podía frenar dos meses para construir una librería.",
        en: "The roadmap couldn't stop for two months to build a library.",
      },
      options: {
        es: [
          "Frenar el roadmap y construir el sistema completo primero.",
          "Construirlo de a pedazos, tomando cada feature nueva como excusa para sistematizar esa parte.",
          "Adoptar una librería externa y adaptarla.",
        ],
        en: [
          "Freeze the roadmap and build the whole system first.",
          "Build it in slices, using each new feature as the excuse to systematize that area.",
          "Adopt an external library and adapt it.",
        ],
      },
      choice: {
        es: "Construirlo de a pedazos, atado a features reales del roadmap.",
        en: "Build it in slices, tied to real roadmap features.",
      },
      why: {
        es: "Cada componente nacía con un caso de uso real detrás, así que ninguno se diseñó para un escenario hipotético. Además el sistema fue mostrando valor desde la primera semana, lo que hizo que nadie tuviera que defender la inversión.",
        en: "Every component was born with a real use case behind it, so none were designed for a hypothetical scenario. The system also showed value from week one, which meant nobody had to defend the investment.",
      },
      tradeoff: {
        es: "El sistema tardó más en estar completo y hubo que refactorizar componentes tempranos cuando aparecieron casos que no habíamos visto. Asumí ese retrabajo a cambio de no pelear por presupuesto.",
        en: "The system took longer to feel complete, and early components had to be refactored once unseen cases appeared. I accepted that rework in exchange for never fighting for budget.",
      },
    },
    {
      title: {
        es: "Mostrar resultados parciales antes de terminar el cuestionario",
        en: "Show partial results before the questionnaire is finished",
      },
      context: {
        es: "El cuestionario de autopercepción es largo y la gente lo abandonaba a mitad de camino.",
        en: "The self-perception questionnaire is long and people abandoned it halfway through.",
      },
      options: {
        es: [
          "Acortar el cuestionario y perder profundidad en el diagnóstico.",
          "Dividirlo en sesiones y pedir que vuelvan otro día.",
          "Devolver valor parcial a medida que avanza, manteniendo el largo.",
        ],
        en: [
          "Shorten the questionnaire and lose diagnostic depth.",
          "Split it into sessions and ask people to come back another day.",
          "Give partial value as they progress, keeping the full length.",
        ],
      },
      choice: {
        es: "Devolver valor parcial en cada tramo completado.",
        en: "Return partial value at each completed stage.",
      },
      why: {
        es: "El abandono no venía del largo sino de la falta de reciprocidad: la persona daba información y no recibía nada hasta el final. Devolver algo temprano convierte el esfuerzo en intercambio.",
        en: "Drop-off wasn't about length, it was about reciprocity: people gave information and got nothing back until the very end. Returning something early turns effort into an exchange.",
      },
      tradeoff: {
        es: "Un resultado parcial puede leerse como diagnóstico definitivo. Hubo que trabajar el copy con mucho cuidado para no dar una lectura de salud incompleta como si fuera cerrada.",
        en: "A partial result can be read as a final diagnosis. The copy needed careful work so an incomplete health reading never looked conclusive.",
      },
    },
    {
      title: {
        es: "Priorizar la privacidad del empleado sobre el detalle del reporte a la empresa",
        en: "Prioritize employee privacy over reporting detail for the company",
      },
      context: {
        es: "La empresa paga y quiere ver resultados; el empleado usa y quiere que no lo identifiquen.",
        en: "The company pays and wants to see results; the employee uses it and wants not to be identified.",
      },
      options: {
        es: [
          "Reportes con corte por equipo pequeño, más accionables para RR.HH.",
          "Reportes sólo agregados, con un mínimo de personas por corte.",
        ],
        en: [
          "Reports broken down by small team, more actionable for HR.",
          "Aggregate-only reports, with a minimum group size per cut.",
        ],
      },
      choice: {
        es: "Reportes agregados con umbral mínimo de personas por corte.",
        en: "Aggregate reports with a minimum group size per cut.",
      },
      why: {
        es: "Si el empleado sospecha que su jefe puede identificarlo, deja de responder con honestidad y el dato pierde todo valor, también para la empresa. La privacidad no era un costo del producto: era la condición para que el producto funcionara.",
        en: "If employees suspect their manager can identify them, they stop answering honestly and the data loses all value — for the company too. Privacy wasn't a cost of the product: it was the condition for the product to work at all.",
      },
      tradeoff: {
        es: "Perdimos granularidad en una función que el área comercial usaba como argumento de venta. Hubo que reconstruir ese argumento alrededor de la calidad del dato en lugar del detalle.",
        en: "We lost granularity in a feature sales used as a selling point. That pitch had to be rebuilt around data quality instead of data detail.",
      },
    },
  ],

  learnings: {
    es: [
      "Un Design System se vende con la métrica del equipo, no con capturas bonitas. Cuando lo planteé como ciclos de producto perdidos, la conversación con negocio cambió por completo.",
      "En salud, la confianza es parte de la usabilidad. Un flujo perfectamente claro igual falla si la persona no entiende quién va a ver su respuesta.",
      "Documentar el porqué de cada componente vale más que dibujarlo bien. El dibujo se copia; el criterio es lo que sobrevive a la rotación del equipo.",
    ],
    en: [
      "A Design System is sold with the team's own metrics, not with pretty screenshots. Once I framed it as lost product cycles, the conversation with business changed entirely.",
      "In healthcare, trust is part of usability. A perfectly clear flow still fails if people don't understand who will see their answer.",
      "Documenting why a component exists is worth more than drawing it well. The drawing gets copied; the reasoning is what survives team turnover.",
    ],
  },
};
