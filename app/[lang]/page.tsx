import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { projects } from "@/lib/projects";
import { site } from "@/content/site";

const words = {
  es: {
    role: "Diseñador de producto digital · Rosario, Argentina",
    headline: <>Hago que lo<br />complejo se vuelva<br /><span>claro.</span></>,
    intro: "Soy Julián, diseñador de producto y design lead. Conecto estrategia, experiencia y tecnología para crear productos que sirven a las personas y funcionan para el negocio.",
    work: "Trabajo seleccionado", about: "Cómo trabajo", contact: "Hablemos",
    projects: "Proyectos que hicieron avanzar el producto.",
    approach: "Diseñar también es decidir qué no hacer.",
    approachBody: "Trabajo desde el problema y la oportunidad, junto a producto e ingeniería. Alineo al equipo alrededor de decisiones claras y creo sistemas que hacen más fácil lo que viene después.",
    principles: ["Entender antes de dibujar", "Hacer visible el criterio", "Diseñar para que el equipo avance"],
    experience: "Experiencia", present: "Actualidad", available: "Rosario, Argentina · Trabajo remoto",
    reach: "¿Tenés un problema interesante?", email: "Escribime", next: "Ver caso", back: "Volver al inicio",
  },
  en: {
    role: "Digital product designer · Rosario, Argentina",
    headline: <>I make complex<br />things feel<br /><span>clear.</span></>,
    intro: "I’m Julián, a product designer and design lead. I bring strategy, experience and technology together to make products that work for people and for business.",
    work: "Selected work", about: "How I work", contact: "Get in touch",
    projects: "Projects that moved the product forward.",
    approach: "Design is also deciding what not to do.",
    approachBody: "I work from the problem and opportunity alongside product and engineering. I align teams around clear decisions and build systems that make what comes next easier.",
    principles: ["Understand before drawing", "Make the reasoning visible", "Design so teams can move"],
    experience: "Experience", present: "Now", available: "Rosario, Argentina · Working remotely",
    reach: "Have an interesting problem?", email: "Send me a note", next: "View case study", back: "Back to home",
  },
} as const;

const dates = ["2023 —", "2022 — 2023", "2021 — 2022", "2020 — 2021"];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = words[locale];

  return <div className="portfolio" id="top">
    <header className="topbar shell">
      <Link className="wordmark" href={href("/", locale)} aria-label="Julián Kondratavicius">JK<span>®</span></Link>
      <span className="topbar-role">{c.role}</span>
      <nav aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
        <a href="#work">{c.work}</a><a href="#about">{c.about}</a>
        <a className="nav-contact" href={`mailto:${site.email}`}>{c.contact}<span aria-hidden="true">↗</span></a>
        <Link className="language" href={locale === "es" ? "/en" : "/es"}>{locale === "es" ? "EN" : "ES"}</Link>
      </nav>
    </header>

    <main>
      <section className="hero shell">
        <div className="hero-index"><span>PRODUCT DESIGN</span><span>01 / 04</span></div>
        <div className="hero-copy">
          <h1>{c.headline}</h1>
          <div className="hero-aside"><span className="blue-rule"/><p>{c.intro}</p><a href="#work" className="round-link" aria-label={c.work}>↓</a></div>
        </div>
        <div className="hero-bottom"><span>JULIÁN KONDRATAVICIUS</span><span>{c.available}</span><span>34°36′S 58°23′W</span></div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading"><p className="eyebrow">01 — {c.work}</p><h2>{c.projects}</h2></div>
        <div className="project-list">
          {projects.map((project, index) => {
            const title = project.client === project.name ? project.name : `${project.client} / ${project.name}`;
            return <Link className={`project-row project-tone-${index + 1}`} href={href(`/work/${project.slug}`, locale)} key={project.slug}>
              <span className="project-number">0{index + 1}</span>
              <div className="project-main"><span className="project-client">{project.industry[locale]} <i>·</i> {project.year}</span><h3>{title}</h3><p>{project.summary[locale]}</p></div>
              <div className="project-side"><span>{project.role[locale]}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
            </Link>;
          })}
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="eyebrow">02 — {c.about}</p>
        <div className="about-content"><h2>{c.approach}</h2><div className="about-detail"><p>{c.approachBody}</p><ul>{c.principles.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ul></div></div>
        <div className="experience"><p className="eyebrow">03 — {c.experience}</p>{projects.map((project, i) => <div className="experience-row" key={project.slug}><span className="experience-year">{dates[i] ?? project.year}</span><strong>{project.client}</strong><span>{project.role[locale]}</span><span className="experience-industry">{project.industry[locale]}</span></div>)}</div>
      </section>

      <footer className="contact-band shell" id="contact"><span className="eyebrow">04 — {locale === "es" ? "CONTACTO" : "CONTACT"}</span><div><h2>{c.reach}</h2><a href={`mailto:${site.email}`}>{c.email}<span aria-hidden="true">↗</span></a></div><div className="footer-meta"><span>© {new Date().getFullYear()} Julián Kondratavicius</span><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
    </main>
  </div>;
}
