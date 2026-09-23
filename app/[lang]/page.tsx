import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { projects } from "@/lib/projects";
import { experience, principles, site } from "@/content/site";
import { Vignette } from "@/components/vignettes";
import { toneFor } from "@/lib/palette";
import { CopyEmail, Counter, Magnetic, ScrollText } from "@/components/motion";

const words = {
  es: {
    eyebrow: "Senior Product Designer & Design Lead",
    lines: ["Hago que", "lo complejo", "sea claro."],
    intro: "+5 años llevando productos de healthtech, fintech y movilidad de la idea a un sistema que el equipo puede escalar.",
    scroll: "Scrolleá",
    workLabel: "Trabajo seleccionado",
    workTitle: "Casos donde el diseño movió el producto",
    view: "Ver caso",
    numbers: [
      { n: 5, prefix: "+", label: "años diseñando producto" },
      { n: 6, label: "industrias: salud, finanzas, movilidad, software, deporte y construcción" },
      { n: 3, label: "plataformas: web, iOS y Android" },
      { n: 0, text: "0→1", label: "productos llevados de la idea al mercado junto a negocio" },
    ],
    approachLabel: "Enfoque",
    manifesto: "No diseño pantallas sueltas. Diseño el sistema y las decisiones que hacen que un equipo de producto avance más rápido, con criterio, y sin tener que volver a discutir lo mismo en cada sprint.",
    capabilities: ["Product Strategy", "Product Management", "Business Strategy", "Roadmapping", "Stakeholder Management", "Team Leadership", "Discovery", "Design Systems", "AI-assisted workflows"],
    expLabel: "Experiencia",
    expTitle: "Dónde lo aprendí",
    contactLabel: "Contacto",
    contactTitle: ["¿Construimos algo", "que escale?"],
    copy: "Copiar email", copied: "¡Copiado!",
    write: "Escribime",
    rights: "Diseñado y desarrollado por Julián",
  },
  en: {
    eyebrow: "Senior Product Designer & Design Lead",
    lines: ["I make", "complex things", "feel clear."],
    intro: "5+ years taking healthtech, fintech and mobility products from idea to a system teams can scale.",
    scroll: "Scroll",
    workLabel: "Selected work",
    workTitle: "Cases where design moved the product",
    view: "View case",
    numbers: [
      { n: 5, prefix: "+", label: "years designing products" },
      { n: 6, label: "industries: health, finance, mobility, software, sports and construction" },
      { n: 3, label: "platforms: web, iOS and Android" },
      { n: 0, text: "0→1", label: "products taken from idea to market alongside business" },
    ],
    approachLabel: "Approach",
    manifesto: "I don’t design isolated screens. I design the system and the decisions that help a product team move faster, with clear reasoning, without re-arguing the same things every sprint.",
    capabilities: ["Product Strategy", "Product Management", "Business Strategy", "Roadmapping", "Stakeholder Management", "Team Leadership", "Discovery", "Design Systems", "AI-assisted workflows"],
    expLabel: "Experience",
    expTitle: "Where I learned it",
    contactLabel: "Contact",
    contactTitle: ["Shall we build", "something that scales?"],
    copy: "Copy email", copied: "Copied!",
    write: "Email me",
    rights: "Designed and built by Julián",
  },
} as const;

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = words[locale];
  const marquee = ["Product Design", "Design Systems", "HealthTech", "Fintech", "Crypto", "SaaS", "MaaS", "B2B2C", "0 → 1", "Product Discovery", "Data-driven UX", "Startups"];

  return (
    <main className="home" id="top">
      {/* HERO */}
      <section className="hero">
        <div className="hero-top">
          <p className="label" data-reveal><span className="status-dot" />{c.eyebrow}</p>
        </div>
        <h1 className="hero-title">
          {c.lines.map((line, i) => (
            <span className="line" key={line}><span style={{ ["--d" as string]: `${0.08 + i * 0.1}s` }}>{line}</span></span>
          ))}
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro" data-reveal>{c.intro}</p>
          <a href="#work" className="scroll-cue" data-reveal><span />{c.scroll}</a>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div className="marquee-group" key={k}>
              {marquee.map((item) => <span key={`${k}-${item}`}>{item}<i>✦</i></span>)}
            </div>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="work">
        <div className="section-head">
          <p className="label" data-reveal>01 — {c.workLabel}</p>
          <h2 className="display-2" data-reveal>{c.workTitle}</h2>
        </div>
        <div className="stack">
          {projects.map((project, i) => {
            const tone = toneFor(project.slug);
            return (
              <Link
                key={project.slug}
                href={href(`/work/${project.slug}`, locale)}
                className="panel"
                data-cursor={c.view}
                style={{ ["--bg" as string]: tone.bg, ["--fg" as string]: tone.fg, ["--accent" as string]: tone.accent, ["--i" as string]: i }}
              >
                <div className="panel-media"><Vignette slug={project.slug} locale={locale} /></div>
                <div className="panel-info">
                  <div className="panel-meta"><span>{String(i + 1).padStart(2, "0")}. {project.client}</span><span>{project.year}</span></div>
                  <h3>{project.tagline[locale]}</h3>
                  <p>{project.summary[locale]}</p>
                  <ul className="chips">{project.tags.slice(0, 3).map((t) => <li key={t}>{t}</li>)}</ul>
                  <span className="panel-cta">{c.view}<span aria-hidden="true">→</span></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers">
        {c.numbers.map((item, i) => (
          <div className="number" key={item.label} data-reveal style={{ ["--d" as string]: `${i * 0.08}s` }}>
            <strong>{"text" in item ? item.text : <Counter value={item.n} prefix={"prefix" in item ? item.prefix : ""} />}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      {/* APPROACH */}
      <section id="approach" className="approach">
        <p className="label" data-reveal>02 — {c.approachLabel}</p>
        <ScrollText text={c.manifesto} className="manifesto" />
        <div className="principles">
          {principles.map((p) => (
            <article className="principle" key={p.n} data-reveal>
              <span className="principle-n">{p.n}</span>
              <h3>{p.title[locale]}</h3>
              <p>{p.body[locale]}</p>
            </article>
          ))}
        </div>
        <ul className="capabilities" data-reveal>
          {c.capabilities.map((cap) => <li key={cap}>{cap}</li>)}
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience">
        <div className="section-head">
          <p className="label" data-reveal>03 — {c.expLabel}</p>
          <h2 className="display-2" data-reveal>{c.expTitle}</h2>
        </div>
        <ol className="jobs">
          {experience.map((job) => (
            <li className="job" key={job.company.es} data-reveal>
              <span className="job-period">{job.period.replace("Actualidad", locale === "es" ? "Hoy" : "Now")}</span>
              <strong className="job-company">{job.company[locale]}</strong>
              <span className="job-title">{job.title[locale]}</span>
              <span className="job-type">{job.type[locale]}</span>
              <p className="job-detail">{job.points[locale][0]}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CONTACT */}
      <footer className="contact" id="contact">
        <p className="label">04 — {c.contactLabel}</p>
        <h2 className="contact-title">
          {c.contactTitle.map((line) => <span className="line" key={line} data-reveal><span>{line}</span></span>)}
        </h2>
        <div className="contact-actions">
          <Magnetic><a className="btn-primary" href={`mailto:${site.email}`}>{c.write}<span aria-hidden="true">↗</span></a></Magnetic>
          <CopyEmail email={site.email} copyLabel={c.copy} copiedLabel={c.copied} />
          <a className="link-underline" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="contact-foot">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{c.rights}</span>
          <a href="#top" className="link-underline">↑ Top</a>
        </div>
      </footer>
    </main>
  );
}
