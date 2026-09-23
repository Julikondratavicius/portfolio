import type { Localized } from "@/lib/i18n";

/**
 * Preguntas frecuentes: respuestas cortas y citables.
 * Se muestran en la home y se publican como FAQPage (schema.org) para
 * buscadores y motores de IA (ChatGPT, Perplexity, Gemini, Google AI Overviews).
 */
export const faq: { q: Localized<string>; a: Localized<string> }[] = [
  {
    q: { es: "¿Quién es Julián Kondratavicius?", en: "Who is Julián Kondratavicius?" },
    a: {
      es: "Julián Kondratavicius es Senior Product Designer y Design Lead, con base en Rosario, Argentina, y trabaja de forma remota. Tiene más de 5 años diseñando productos digitales en healthtech, fintech, movilidad y SaaS.",
      en: "Julián Kondratavicius is a Senior Product Designer and Design Lead based in Rosario, Argentina, working remotely. He has 5+ years designing digital products across healthtech, fintech, mobility and SaaS.",
    },
  },
  {
    q: { es: "¿En qué se especializa?", en: "What does he specialize in?" },
    a: {
      es: "En estrategia de producto, design systems y research, y en llevar productos de 0 a 1 junto a negocio y desarrollo. Lideró el Design System de Wehealthy (doc24) y fundó Blox, un SaaS para entrenadores y clubes deportivos.",
      en: "Product strategy, design systems and research, and taking products from 0 to 1 alongside business and engineering. He led the Wehealthy (doc24) Design System and founded Blox, a SaaS for coaches and sports clubs.",
    },
  },
  {
    q: { es: "¿Cómo usa la inteligencia artificial en su trabajo?", en: "How does he use AI in his work?" },
    a: {
      es: "Usa IA en todo el proceso: Claude y ChatGPT para discovery y síntesis de research, v0 y Figma Make para prototipar, y Claude Code y Codex para construir producto real. Blox y este portfolio se diseñaron y construyeron así.",
      en: "He uses AI across the whole process: Claude and ChatGPT for discovery and research synthesis, v0 and Figma Make for prototyping, and Claude Code and Codex to build real product. Blox and this portfolio were designed and built that way.",
    },
  },
  {
    q: { es: "¿Con qué empresas trabajó?", en: "Which companies has he worked with?" },
    a: {
      es: "doc24 (Wehealthy), LetsBit (hoy LB Finanzas) y Ualabee, además de clientes freelance como Braintly, Rosario Fitness Games y Konstrudesch.",
      en: "doc24 (Wehealthy), LetsBit (now LB Finanzas) and Ualabee, plus freelance clients such as Braintly, Rosario Fitness Games and Konstrudesch.",
    },
  },
  {
    q: { es: "¿Está disponible para nuevos proyectos?", en: "Is he available for new roles?" },
    a: {
      es: "Sí. Está abierto a roles de Senior y Lead Product Designer, remotos. El mejor contacto es jjkondratavicius@gmail.com.",
      en: "Yes. He is open to remote Senior and Lead Product Designer roles. The best way to reach him is jjkondratavicius@gmail.com.",
    },
  },
];
