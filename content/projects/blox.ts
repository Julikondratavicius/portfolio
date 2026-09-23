import type { Project } from "@/lib/types";

/** Proyecto personal. Fuente: CLAUDE.md y docs/historia-blox.md del repo de Blox. */
export const blox: Project = {
  slug: "blox",
  order: 4,
  published: true,

  name: "Blox",
  client: "Blox",
  industry: { es: "SaaS / Sports-tech", en: "SaaS / Sports-tech" },
  year: "2026 — Hoy",
  accent: "#5AE493",
  url: "https://v0-appblox.vercel.app",
  personal: true,

  role: {
    es: "Founder · Product Designer & Builder",
    en: "Founder · Product Designer & Builder",
  },
  team: { es: "Proyecto personal", en: "Personal project" },
  timeline: { es: "Desde marzo de 2026", en: "Since March 2026" },
  platforms: { es: "Web app · PWA · Mobile", en: "Web app · PWA · Mobile" },
  tags: ["SaaS 0→1", "Product Strategy", "AI-built", "Sports-tech"],

  tagline: {
    es: "El rendimiento empieza por el cuidado",
    en: "Performance starts with care",
  },
  headline: {
    es: "Un SaaS para entrenadores y clubes que reemplaza el caos de Excel y WhatsApp. Lo pensé, diseñé y construí de punta a punta.",
    en: "A SaaS for coaches and clubs that replaces the chaos of spreadsheets and WhatsApp. I conceived, designed and built it end to end.",
  },
  summary: {
    es: "Mi proyecto personal: una plataforma para entrenadores y clubes deportivos que une seguimiento de atletas, rutinas, comunicación y gestión en un solo ecosistema. De la entrevista con usuarios al producto en producción, construido con IA.",
    en: "My personal project: a platform for coaches and sports clubs that brings athlete tracking, programming, communication and management into one ecosystem. From user interviews to a product in production, built with AI.",
  },

  cover: {
    src: "/images/projects/blox-web.webp",
    alt: { es: "Landing de Blox", en: "Blox landing page" },
    width: 1600,
    height: 1000,
  },

  metrics: [],

  chapters: [
    {
      id: "problem",
      eyebrow: { es: "El problema", en: "The problem" },
      title: {
        es: "Entre 8 y 15 clientes, el sistema manual colapsa",
        en: "Between 8 and 15 clients, the manual system breaks",
      },
      body: {
        es: [
          "Lo validé en entrevistas con entrenadores: no les faltan clientes, les falta infraestructura. Excel, WhatsApp y el bloc de notas del celu dejan de alcanzar.",
        ],
        en: [
          "I validated it in interviews with coaches: they don't lack clients, they lack infrastructure. Spreadsheets, WhatsApp and phone notes stop being enough.",
        ],
      },
      bullets: {
        es: [
          "Armar y enviar rutinas lleva demasiado tiempo.",
          "El seguimiento semanal es manual y se pierde.",
          "Los cobros se persiguen por WhatsApp.",
        ],
        en: [
          "Building and sending programs takes too long.",
          "Weekly follow-up is manual and gets lost.",
          "Payments are chased over WhatsApp.",
        ],
      },
    },
    {
      id: "strategy",
      eyebrow: { es: "Estrategia", en: "Strategy" },
      title: {
        es: "Un segmento, jobs claros y lo que Blox no es",
        en: "One segment, clear jobs and what Blox is not",
      },
      body: {
        es: [
          "Definí un beachhead —el entrenador independiente— y lo bajé a jobs to be done concretos. Igual de importante fue decidir qué no hacer: si algo tarda más de 3 taps en el celu, está mal diseñado.",
        ],
        en: [
          "I defined a beachhead —the independent coach— and broke it down into concrete jobs to be done. Just as important was deciding what not to build: if something takes more than 3 taps on a phone, it's badly designed.",
        ],
      },
      bullets: {
        es: [
          "Crear una rutina en menos de 5 minutos, desde el celu.",
          "Que el atleta la vea sin instalar nada.",
          "Alertas proactivas en lugar de descubrir problemas tarde.",
        ],
        en: [
          "Create a program in under 5 minutes, from a phone.",
          "The athlete sees it without installing anything.",
          "Proactive alerts instead of finding problems too late.",
        ],
      },
    },
    {
      id: "pivot",
      eyebrow: { es: "El pivote", en: "The pivot" },
      title: {
        es: "De tres productos a un foco",
        en: "From three products to one focus",
      },
      body: {
        es: [
          "Después de construir en paralelo para entrenadores, atletas y clubes, definí el foco: clubes deportivos, growth primero. El resto pasó a mantenimiento, y la marca se reescribió alrededor del cuidado, no del control.",
        ],
        en: [
          "After building in parallel for coaches, athletes and clubs, I set the focus: sports clubs, growth first. The rest went into maintenance, and the brand was rewritten around care, not control.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "Racha semanal, no diaria",
        en: "Weekly streaks, not daily",
      },
      context: {
        es: "La gamificación tipo Duolingo castiga el descanso planificado.",
        en: "Duolingo-style gamification punishes planned rest.",
      },
      options: { es: [], en: [] },
      choice: { es: "Racha semanal que respeta el deload.", en: "A weekly streak that respects deloads." },
      why: {
        es: "Una racha diaria empuja a entrenar cansado o lesionado. Performance con cuidado, no gamificación barata.",
        en: "A daily streak pushes people to train tired or injured. Performance with care, not cheap gamification.",
      },
      tradeoff: { es: "", en: "" },
    },
    {
      title: {
        es: "Matar lo que no sirve, aunque haya costado",
        en: "Kill what doesn't work, even if it was costly",
      },
      context: {
        es: "Un wizard de planificación de 4 pasos ya estaba construido.",
        en: "A 4-step planning wizard was already built.",
      },
      options: { es: [], en: [] },
      choice: { es: "Reemplazarlo por un editor único.", en: "Replace it with a single editor." },
      why: {
        es: "Menos pasos, cero borradores huérfanos. El costo hundido no es un argumento de producto.",
        en: "Fewer steps, zero orphan drafts. Sunk cost is not a product argument.",
      },
      tradeoff: { es: "", en: "" },
    },
  ],

  learnings: {
    es: [
      "Construir con IA no reemplaza el criterio: acelera la distancia entre una decisión y su validación.",
      "Enfocar es elegir qué productos dejar de construir.",
    ],
    en: [
      "Building with AI doesn't replace judgment: it shortens the distance between a decision and its validation.",
      "Focus means choosing which products to stop building.",
    ],
  },

  ai: {
    title: { es: "Un producto entero construido con IA", en: "A whole product built with AI" },
    body: {
      es: "Blox nació en v0 y creció con Claude Code: el builder de rutinas, la PWA del atleta y la seguridad de datos se construyeron en ciclos de días, no de meses. Yo pongo el criterio de producto; la IA acorta el camino hasta producción.",
      en: "Blox was born in v0 and grew with Claude Code: the program builder, the athlete PWA and data security were built in cycles of days, not months. I bring the product judgment; AI shortens the path to production.",
    },
    tools: ["v0", "Claude Code", "Supabase", "Vercel"],
  },
};
