import type { Localized } from "@/lib/i18n";

export const site = {
  name: "Julián Kondratavicius",
  role: "Senior Product Designer & Design Lead",
  email: "jjkondratavicius@gmail.com",
  linkedin: "https://www.linkedin.com/in/juli%C3%A1n-kondratavicius-8163b1189/",
  url: "https://juliankondratavicius.com",
  location: { es: "Rosario, Argentina", en: "Rosario, Argentina" },
  /** Poné acá el archivo cuando lo subas a /public/cv/. */
  cv: {
    es: "/cv/julian-kondratavicius-cv-es.pdf",
    en: "/cv/julian-kondratavicius-cv-en.pdf",
  },
} as const;

export const nav: { href: string; label: Localized<string> }[] = [
  { href: "/work", label: { es: "Trabajo", en: "Work" } },
  { href: "/profile", label: { es: "Perfil", en: "Profile" } },
  { href: "/lab", label: { es: "Lab", en: "Lab" } },
];

export const hero = {
  available: {
    es: "Senior Product Designer — Abierto a roles de Product Lead",
    en: "Senior Product Designer — Open to Product Lead roles",
  },
  /** Cada string es una línea con su propia animación de entrada. ** = negrita. */
  headline: {
    es: [
      "Diseño productos",
      "digitales que **escalan**",
      "e impactan **métricas** reales",
    ],
    en: [
      "I design digital",
      "products that **scale**",
      "and move real **business metrics**",
    ],
  },
  bio: {
    es: "+5 años creando productos digitales en entornos startup. Trabajo en la intersección de UX, negocio y datos: defino sistemas que sostienen equipos, no pantallas sueltas. Incorporo herramientas de IA al flujo de diseño para acelerar validación e insights.",
    en: "5+ years building digital products in startup environments. I work at the intersection of UX, business and data: I define systems that hold teams together, not isolated screens. I bring AI tooling into the design workflow to speed up validation and insights.",
  },
} as const;

/** Los principios con los que trabajo. Señal de criterio, no de output. */
export const principles: {
  n: string;
  title: Localized<string>;
  body: Localized<string>;
}[] = [
  {
    n: "01",
    title: { es: "Sistemas antes que pantallas", en: "Systems before screens" },
    body: {
      es: "Una pantalla resuelve un caso; un sistema resuelve los próximos cincuenta. Diseño componentes, reglas y tokens que le dan velocidad al equipo cuando yo ya no estoy en esa reunión.",
      en: "A screen solves one case; a system solves the next fifty. I design components, rules and tokens that keep the team fast long after I have left that meeting.",
    },
  },
  {
    n: "02",
    title: { es: "El dato manda sobre la opinión", en: "Data beats opinion" },
    body: {
      es: "Toda decisión de diseño se apoya en algo: una entrevista, un embudo, un test. Cuando no hay dato, lo digo y diseño el experimento más barato para conseguirlo.",
      en: "Every design decision leans on something: an interview, a funnel, a test. When there is no data, I say so and design the cheapest experiment to get it.",
    },
  },
  {
    n: "03",
    title: {
      es: "Diseñar es decidir qué resignás",
      en: "Designing is choosing what to give up",
    },
    body: {
      es: "No existe la solución sin costo. Mi trabajo es hacer explícito el trade-off para que negocio, tecnología y producto decidan con la misma información.",
      en: "There is no solution without a cost. My job is to make the trade-off explicit so business, engineering and product decide with the same information.",
    },
  },
];

export interface Job {
  company: Localized<string>;
  type: Localized<string>;
  title: Localized<string>;
  period: string;
  points: Localized<string[]>;
}

export const experience: Job[] = [
  {
    company: { es: "doc24 — Wehealthy", en: "doc24 — Wehealthy" },
    type: { es: "Healthtech", en: "Healthtech" },
    title: {
      es: "Sr. Product Designer — UX/UI Designer",
      en: "Sr. Product Designer — UX/UI Designer",
    },
    period: "2023 — Actualidad",
    points: {
      es: [
        "Lideré la creación y evolución del Design System completo, estableciendo estándares de consistencia, eficiencia y velocidad de entrega.",
        "Diseñé flujos end-to-end de bienestar basados en cuestionarios de autopercepción y datos reales de usuarios.",
        "Trabajo transversal entre negocio, tecnología y producto bajo Scrum, con cofounders, Product Owners y analistas funcionales.",
        "Participé en la definición estratégica del producto con lógica de sistema, visión de escalabilidad y orientación a métricas.",
      ],
      en: [
        "Led the creation and evolution of the full Design System, setting standards for consistency, efficiency and delivery speed.",
        "Designed end-to-end wellness flows based on self-perception questionnaires and real user data.",
        "Cross-functional work across business, engineering and product under Scrum, with cofounders, Product Owners and functional analysts.",
        "Contributed to strategic product definition with systems thinking, scalability vision and a metrics-driven approach.",
      ],
    },
  },
  {
    company: { es: "LetsBit", en: "LetsBit" },
    type: { es: "Fintech / Cripto", en: "Fintech / Crypto" },
    title: { es: "UX/UI Designer", en: "UX/UI Designer" },
    period: "2022 — 2023",
    points: {
      es: [
        "Prototipos funcionales para validar y perfeccionar flujos de usuario en un producto cripto de alta sensibilidad.",
        "Colaboración con equipos multidisciplinarios, developers y project managers.",
        "Design Thinking y metodologías ágiles para impulsar innovación y eficiencia.",
      ],
      en: [
        "Functional prototypes to validate and refine user flows in a high-stakes crypto product.",
        "Collaboration with cross-functional teams, developers and project managers.",
        "Design Thinking and agile methodologies to drive innovation and efficiency.",
      ],
    },
  },
  {
    company: { es: "Ualabee", en: "Ualabee" },
    type: { es: "MaaS / Movilidad", en: "MaaS / Mobility" },
    title: { es: "UX/UI Designer", en: "UX/UI Designer" },
    period: "2021 — 2022",
    points: {
      es: [
        "Investigaciones de usuario para comprender necesidades y comportamientos reales de viaje.",
        "Identificación de problemas de usabilidad y propuesta de soluciones para optimizar el producto.",
        "Wireframes, historias de usuario y maquetados multi-plataforma.",
      ],
      en: [
        "User research to understand real travel needs and behaviors.",
        "Usability issue identification and solution proposals to optimize the product.",
        "Wireframes, user stories and cross-platform layouts.",
      ],
    },
  },
  {
    company: { es: "Independiente", en: "Independent" },
    type: { es: "Freelance", en: "Freelance" },
    title: {
      es: "UX/UI Designer — Webflow Designer",
      en: "UX/UI Designer — Webflow Designer",
    },
    period: "2020 — 2023",
    points: {
      es: [
        "Gestión de negocio freelance, estrategias de marca personal y desarrollo de relaciones con clientes.",
        "Creación de sitios web variados: portfolios, e-commerce y sitios corporativos.",
        "Comunicación transparente de propuestas de diseño y procesos de decisión.",
      ],
      en: [
        "Freelance business management, personal branding strategies and client relationship development.",
        "Diverse website creation: portfolios, e-commerce and corporate sites.",
        "Transparent communication of design proposals and decision-making processes.",
      ],
    },
  },
];

export const skills: { title: Localized<string>; items: string[] }[] = [
  {
    title: { es: "Diseño & Estrategia", en: "Design & Strategy" },
    items: [
      "Product Strategy",
      "Design Systems",
      "UX Research",
      "Design Thinking",
      "Prototyping",
      "UX Writing",
      "Product Discovery",
    ],
  },
  {
    title: { es: "Liderazgo & Proceso", en: "Leadership & Process" },
    items: [
      "Team Leadership",
      "Stakeholder Management",
      "Scrum / Agile",
      "Cross-functional Collaboration",
      "End-to-End Vision",
      "Design Ops",
    ],
  },
  {
    title: { es: "Herramientas", en: "Tooling" },
    items: [
      "Figma / FigJam",
      "Figma Make",
      "VS Code / Cursor",
      "Claude (Code · Cowork)",
      "Adobe Creative Suite",
      "Webflow",
      "Jira / Notion",
    ],
  },
];

export const testimonials: {
  quote: Localized<string>;
  author: string;
  role: Localized<string>;
}[] = [
  {
    quote: {
      es: "Describiría la experiencia como excelente: súper rápido, atento y organizado, cumplió con mis expectativas al 100%. Lo que más destaco, además de la velocidad para entregar, es la respuesta inmediata cuando necesito modificar algo.",
      en: "I would describe the experience as excellent — super fast, attentive and organized, meeting my expectations 100%. What stands out most, beyond delivery speed, is the immediate response whenever I need to change something.",
    },
    author: "Lucas Cáceres",
    role: { es: "Fitness & Training", en: "Fitness & Training" },
  },
  {
    quote: {
      es: "Excelente, muy buena predisposición siempre, contándome los detalles del proceso en cada momento y cumpliendo con los tiempos pactados. Me gustó mucho cómo pudo plasmar toda la información que le brindé en la primera entrevista.",
      en: "Excellent — always with great willingness, walking me through the details of the process at every step and meeting the agreed deadlines. I really liked how he captured all the information I gave him in the first interview.",
    },
    author: "Agustina Prieto",
    role: { es: "Cliente", en: "Client" },
  },
];

export const education: {
  label: Localized<string>;
  title: Localized<string>;
  sub?: Localized<string>;
}[] = [
  {
    label: { es: "Grado", en: "Degree" },
    title: {
      es: "Lic. en Diseño Industrial y de Productos",
      en: "BA in Industrial & Product Design",
    },
  },
  {
    label: { es: "Especialización", en: "Specialization" },
    title: { es: "Diseñador UX/UI", en: "UX/UI Designer" },
  },
  {
    label: { es: "Webflow", en: "Webflow" },
    title: { es: "101 Certification Exam", en: "101 Certification Exam" },
    sub: { es: "Layouts Level 1 & 2", en: "Layouts Level 1 & 2" },
  },
];

/** Microcopy reutilizable de la interfaz. */
export const ui = {
  work: { es: "Proyectos", en: "Work" },
  selectedWork: { es: "Trabajo seleccionado", en: "Selected work" },
  allWork: { es: "Ver todos los proyectos", en: "View all projects" },
  readCase: { es: "Ver el caso", en: "Read the case study" },
  backToWork: { es: "Volver a proyectos", en: "Back to work" },
  nextProject: { es: "Siguiente proyecto", en: "Next project" },
  role: { es: "Rol", en: "Role" },
  team: { es: "Equipo", en: "Team" },
  timeline: { es: "Duración", en: "Timeline" },
  platforms: { es: "Plataformas", en: "Platforms" },
  year: { es: "Año", en: "Year" },
  impact: { es: "Impacto", en: "Impact" },
  decisions: { es: "Decisiones de diseño", en: "Design decisions" },
  decisionsIntro: {
    es: "Las alternativas que había sobre la mesa, qué elegí y qué resigné al elegirlo.",
    en: "The alternatives on the table, what I chose, and what I gave up by choosing it.",
  },
  context: { es: "Contexto", en: "Context" },
  options: { es: "Alternativas evaluadas", en: "Options evaluated" },
  choice: { es: "Qué elegí", en: "What I chose" },
  why: { es: "Por qué", en: "Why" },
  tradeoff: { es: "Qué resigné", en: "Trade-off" },
  learnings: { es: "Aprendizajes", en: "Learnings" },
  nda: {
    es: "Algunas pantallas y cifras de este proyecto están bajo NDA. Puedo contar el proceso completo en una conversación.",
    en: "Some screens and figures from this project are under NDA. I am happy to walk through the full process in a conversation.",
  },
  metricPending: { es: "A medir", en: "To be measured" },
  ctaLabel: { es: "¿Tenés un proyecto en mente?", en: "Have a project in mind?" },
  ctaTitle: {
    es: "Convirtamos ideas en **productos**",
    en: "Let's turn ideas into **products**",
  },
  ctaMail: { es: "Escribime", en: "Get in touch" },
  downloadCv: { es: "Descargar CV", en: "Download CV" },
  menu: { es: "Menú", en: "Menu" },
  close: { es: "Cerrar", en: "Close" },
} as const;
