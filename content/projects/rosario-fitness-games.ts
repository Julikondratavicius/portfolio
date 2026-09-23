import type { Project } from "@/lib/types";

/** Proyecto freelance. Completá los TODO con tus datos reales. */
export const rosarioFitnessGames: Project = {
  slug: "rosario-fitness-games",
  order: 4,
  published: true,

  name: "Rosario Fitness Games",
  client: "Rosario Fitness Games",
  industry: { es: "Deporte / Eventos", en: "Sports / Events" },
  year: "2026",
  accent: "#3B8BFF",

  role: {
    es: "Product Designer — Diseño y desarrollo",
    en: "Product Designer — Design & development",
  },
  team: { es: "Proyecto freelance con la organización del evento", en: "Freelance project with the event organizers" },
  timeline: { es: "TODO: ej. 6 semanas", en: "TODO: e.g. 6 weeks" },
  platforms: { es: "Web · Mobile first", en: "Web · Mobile first" },
  tags: ["Product Design", "Events", "Mobile first", "Community"],

  tagline: {
    es: "La competencia de CrossFit que Rosario necesitaba",
    en: "The CrossFit competition Rosario needed",
  },
  headline: {
    es: "Una competencia nueva necesitaba verse de primer nivel desde el día uno: atraer atletas, conseguir sponsors y mostrar resultados sin fricción.",
    en: "A brand-new competition needed to look top-tier from day one: attract athletes, win sponsors and show results without friction.",
  },
  summary: {
    es: "Plataforma de la primera competencia de CrossFit de Rosario: 380 atletas y 6 workouts en su edición 2026. Diseñé y desarrollé el producto completo: leaderboard por categoría, workouts, galería, ediciones y un flujo para sumar sponsors.",
    en: "The platform for Rosario's first CrossFit competition: 380 athletes and 6 workouts in its 2026 edition. I designed and built the whole product: leaderboard by category, workouts, gallery, editions and a sponsor sign-up flow.",
  },

  cover: {
    src: "/images/projects/rosario-fitness-games-cover.jpg",
    alt: { es: "Sitio de Rosario Fitness Games", en: "Rosario Fitness Games website" },
    width: 2400,
    height: 1350,
  },

  metrics: [
    { value: "380", label: { es: "Atletas en la primera edición", en: "Athletes in the first edition" } },
    { value: "6", label: { es: "Workouts con resultados publicados", en: "Workouts with published results" } },
  ],

  chapters: [
    {
      id: "context",
      eyebrow: { es: "Contexto", en: "Context" },
      title: {
        es: "Un evento nuevo que tenía que parecer establecido",
        en: "A new event that had to feel established",
      },
      body: {
        es: [
          "Rosario Fitness Games nació como la competencia de CrossFit de la ciudad: competir, disfrutar y hacer crecer la comunidad. La primera edición fue el 19 de abril de 2026 en Puerto Joven.",
          "Un evento sin historia compite por atención contra torneos con años de trayectoria. El sitio tenía que hacer ese trabajo: transmitir un nivel profesional antes de que existiera una sola foto del evento.",
        ],
        en: [
          "Rosario Fitness Games was born as the city's CrossFit competition: compete, enjoy and grow the community. The first edition took place on April 19, 2026 at Puerto Joven.",
          "An event with no history competes for attention against tournaments with years behind them. The site had to do that job: convey a professional level before a single photo of the event existed.",
        ],
      },
    },
    {
      id: "product",
      eyebrow: { es: "El producto", en: "The product" },
      title: {
        es: "Tres públicos, un mismo sitio",
        en: "Three audiences, one site",
      },
      body: {
        es: [
          "Atletas, público y marcas llegan buscando cosas distintas. Organicé el producto alrededor de cada edición para que cada uno encuentre lo suyo en un toque, desde el celular y en medio del evento.",
        ],
        en: [
          "Athletes, spectators and brands arrive looking for different things. I organized the product around each edition so everyone finds what they need in one tap, on their phone, in the middle of the event.",
        ],
      },
      bullets: {
        es: [
          "Leaderboard por categoría para que cada atleta encuentre su resultado sin buscar en una planilla.",
          "Workouts, resumen y galería por edición: el archivo del evento crece año a año.",
          "Partners y un flujo para sumarse como sponsor: el sitio también es una herramienta comercial.",
          "Novedades por WhatsApp, el canal donde ya vive la comunidad.",
        ],
        en: [
          "Leaderboard by category so every athlete finds their result without digging through a spreadsheet.",
          "Workouts, summary and gallery per edition: the event's archive grows year after year.",
          "Partners and a sponsor sign-up flow: the site is also a sales tool.",
          "Updates via WhatsApp, the channel where the community already lives.",
        ],
      },
    },
  ],

  decisions: [],

  learnings: {
    es: [
      "En un evento, el producto se usa de pie, con el celular y apurado: mobile first no es una preferencia, es el contexto real.",
      "TODO: sumá un aprendizaje propio del proyecto.",
    ],
    en: [
      "At an event, the product is used standing up, on a phone, in a hurry: mobile first isn't a preference, it's the real context.",
      "TODO: add a learning of your own from this project.",
    ],
  },
};
