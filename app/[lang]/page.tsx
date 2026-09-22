import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { getFeaturedProjects } from "@/lib/projects";
import { site } from "@/content/site";
import { Cta } from "@/components/cta";
import { ProjectCard } from "@/components/project-card";

const copy = {
  es: {
    eyebrow: "Senior Product Designer · Rosario, Argentina",
    title: <>Diseño productos<br />para <em>problemas</em><br />reales.</>,
    description: "Conecto visión de producto, experiencia y sistemas para que equipos ambiciosos puedan convertir complejidad en algo claro, útil y listo para crecer.",
    work: "Explorar proyectos", contact: "Hablemos ↗", scroll: "BAJÁ PARA VER EL TRABAJO",
    workLabel: "SELECCIÓN 2021—HOY", workTitle: <>Diseñar es decidir<br />qué importa.</>,
    workIntro: "Casos donde conecté las necesidades de las personas con las del negocio, y las convertí en productos que un equipo puede sostener.",
    allWork: "Ver todos los proyectos", now: "AHORA · DOC24 / WEHEALTHY",
    nowTitle: <>La salud digital<br />también se diseña<br /><em>con confianza.</em></>,
    nowBody: "Lidero diseño de producto y sistemas para una plataforma de bienestar corporativo. Mi foco: que la experiencia sea clara para las personas y consistente para el equipo que la construye.",
    nowLink: "Conocer mi forma de trabajar", about: "MI ENFOQUE",
    approachTitle: <>De la dirección<br />al detalle que<br /><em>hace la diferencia.</em></>,
    approachBody: "Me involucro desde el problema hasta el producto en uso. Alineo equipos, hago explícitas las decisiones difíciles y construyo sistemas que permiten avanzar sin perder calidad.",
    practices: [
      ["01", "Marcar dirección", "Conectar necesidades de usuario, oportunidad de negocio y capacidad técnica en una apuesta compartida."],
      ["02", "Diseñar el sistema", "Definir patrones y reglas que resuelven hoy y hacen más fácil lo que viene después."],
      ["03", "Elevar al equipo", "Crear claridad en el proceso para que diseño, producto e ingeniería puedan decidir y entregar juntos."],
    ],
    experience: "EXPERIENCIA SELECCIONADA", roles: [
      ["doc24 · Wehealthy", "Senior Product Designer", "Salud digital", "2023 — Hoy"],
      ["Let’sBit", "UX/UI Designer", "Fintech", "2022 — 2023"],
      ["Ualabee", "UX/UI Designer", "Movilidad", "2021 — 2022"],
    ],
    endline: "BUEN DISEÑO, BUENAS PREGUNTAS Y UN EQUIPO QUE QUIERE HACERLO REAL.",
  },
  en: {
    eyebrow: "Senior Product Designer · Rosario, Argentina",
    title: <>I design products<br />for <em>real</em><br />problems.</>,
    description: "I connect product vision, experience and systems so ambitious teams can turn complexity into something clear, useful and ready to grow.",
    work: "Explore selected work", contact: "Let’s talk ↗", scroll: "SCROLL TO EXPLORE THE WORK",
    workLabel: "SELECTED WORK 2021—NOW", workTitle: <>Design is deciding<br />what matters.</>,
    workIntro: "Cases where I connected people's needs with business goals, then turned them into products a team can sustain.",
    allWork: "View all projects", now: "NOW · DOC24 / WEHEALTHY",
    nowTitle: <>Digital health<br />starts with<br /><em>trust.</em></>,
    nowBody: "I lead product design and systems for a corporate wellness platform. My focus: making the experience clear for people and consistent for the team building it.",
    nowLink: "How I work", about: "MY APPROACH",
    approachTitle: <>From setting<br />direction to the<br /><em>details that matter.</em></>,
    approachBody: "I get involved from the problem through to the product in use. I align teams, make hard decisions visible, and build systems that help teams move without losing quality.",
    practices: [
      ["01", "Set direction", "Connect user needs, business opportunity and technical capacity around a shared bet."],
      ["02", "Design the system", "Define patterns and rules that solve today's needs and make what's next easier."],
      ["03", "Help teams excel", "Create clarity so design, product and engineering can decide and deliver together."],
    ],
    experience: "SELECTED EXPERIENCE", roles: [
      ["doc24 · Wehealthy", "Senior Product Designer", "Digital health", "2023 — Now"],
      ["Let’sBit", "UX/UI Designer", "Fintech", "2022 — 2023"],
      ["Ualabee", "UX/UI Designer", "Mobility", "2021 — 2022"],
    ],
    endline: "GOOD DESIGN, GOOD QUESTIONS, AND A TEAM READY TO MAKE IT REAL.",
  },
} as const;

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = copy[locale];
  const featured = getFeaturedProjects(3);

  return <div className="home-redesign">
    <section className="new-hero wrap" id="top">
      <div className="new-hero-top"><span><i className="availability-dot" />{c.eyebrow}</span><span className="hero-index">PRODUCT DESIGN / 01—25</span></div>
      <div className="new-hero-grid">
        <div className="new-hero-copy">
          <h1>{c.title}</h1>
          <div className="new-hero-bottom">
            <p>{c.description}</p>
            <div className="new-hero-actions"><a className="pill-link pill-dark" href="#work">{c.work}<span>↓</span></a><a className="pill-link pill-outline" href={`mailto:${site.email}`}>{c.contact}</a></div>
          </div>
        </div>
        <div className="hero-composition" aria-label={locale === "es" ? "Esquema visual de un sistema de producto" : "Visual sketch of a product system"}>
          <div className="composition-orbit orbit-one"/><div className="composition-orbit orbit-two"/>
          <div className="composition-cross cross-h"/><div className="composition-cross cross-v"/>
          <div className="composition-note note-top">01 / PERSONAS</div><div className="composition-note note-bottom">02 / SISTEMAS</div>
          <div className="composition-core"><span className="core-spark">✳</span><span>PRODUCT<br/>THINKING</span></div>
          <div className="composition-chip chip-one"><span className="chip-mark">↗</span><span>{locale === "es" ? "Oportunidad" : "Opportunity"}</span></div>
          <div className="composition-chip chip-two"><span className="chip-mark">◎</span><span>{locale === "es" ? "Experiencia" : "Experience"}</span></div>
          <div className="composition-chip chip-three"><span className="chip-mark">⌘</span><span>{locale === "es" ? "Dirección" : "Direction"}</span></div>
        </div>
      </div>
      <a className="hero-scroll" href="#work"><span>{c.scroll}</span><i>↓</i></a>
    </section>

    <section className="work-section wrap" id="work">
      <div className="work-intro"><div><span className="section-kicker">{c.workLabel}</span><h2>{c.workTitle}</h2></div><p>{c.workIntro}</p></div>
      <div className="new-project-grid">{featured.map((project, i) => <ProjectCard key={project.slug} project={project} lang={locale} wide={i === 0} priority={i === 0} />)}</div>
      <Link className="all-work-link" href={href("/work", locale)}>{c.allWork}<span>↗</span></Link>
    </section>

    <section className="leadership-section" id="approach">
      <div className="wrap leadership-layout">
        <div className="leadership-art">
          <span className="art-meta art-meta-top">{c.now}</span>
          <div className="health-panel">
            <div className="health-panel-head"><span className="health-mark">w.</span><span className="health-avatar">JK</span></div>
            <div className="health-greeting">{locale === "es" ? "Tu bienestar, a tu ritmo" : "Wellbeing, at your pace"}</div>
            <div className="health-track"><div className="health-track-fill"/><i/></div>
            <div className="health-progress"><strong>04</strong><span>/ 08 {locale === "es" ? "hábitos explorados" : "habits explored"}</span></div>
            <div className="health-cards"><div className="health-card"><i>✳</i><span>{locale === "es" ? "Energía" : "Energy"}</span><b>↗</b></div><div className="health-card"><i>◒</i><span>{locale === "es" ? "Descanso" : "Rest"}</span><b>↗</b></div></div>
          </div>
          <div className="float-stamp"><span>DESIGN<br/>WITH CARE</span><i>✳</i></div>
          <span className="art-meta art-meta-bottom">DOC24 / WEHEALTHY — PRODUCT SYSTEM</span>
        </div>
        <div className="leadership-copy"><span className="section-kicker">{c.now}</span><h2>{c.nowTitle}</h2><p>{c.nowBody}</p><Link href={href("/work/doc24-wehealthy", locale)}>{c.nowLink}<span>↗</span></Link></div>
      </div>
    </section>

    <section className="approach-section-new wrap">
      <div className="approach-top"><div><span className="section-kicker">02 / {c.about}</span><h2>{c.approachTitle}</h2></div><p>{c.approachBody}</p></div>
      <div className="practice-grid">{c.practices.map(([n, title, body]) => <article key={n} className="practice-card"><span className="practice-number">{n}</span><div className="practice-icon">{n === "01" ? "↗" : n === "02" ? "▦" : "✳"}</div><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="experience-new wrap" id="experience"><div className="experience-heading"><span className="section-kicker">03 / {c.experience}</span><span className="experience-years">ROSARIO, ARGENTINA · OPEN TO THE WORLD</span></div>
      {c.roles.map(([company, role, field, period], i) => <div className="experience-line" key={company}><span className="experience-count">0{i + 1}</span><strong>{company}</strong><span>{role}</span><span className="experience-field">{field}</span><time>{period}</time></div>)}
    </section>
    <div className="endline-wrap"><p>{c.endline}</p></div>
    <Cta lang={locale} />
  </div>;
}
