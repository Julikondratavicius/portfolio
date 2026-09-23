import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { projects } from "@/lib/projects";
import { experience, principles, site } from "@/content/site";
import { faq } from "@/content/faq";
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
    aiLabel: "IA en el proceso",
    aiTitle: "Diseño y construyo producto con IA",
    aiIntro: "Uso IA en cada etapa para investigar, prototipar y lanzar más rápido, sin perder el criterio de producto. Este portfolio lo diseñé y construí así.",
    aiSteps: [
      { n: "01", title: "Discovery", body: "Sintetizo entrevistas, research y datos para llegar antes a los insights y a las preguntas correctas.", tools: ["Claude", "ChatGPT"] },
      { n: "02", title: "Prototipado", body: "De la idea a un prototipo funcional en horas, no semanas, para validar con usuarios reales.", tools: ["v0", "Figma Make", "Claude"] },
      { n: "03", title: "Diseño y build", body: "Diseño y construyo producto real junto al código: del design system al deploy.", tools: ["Claude Code", "Codex", "Cursor"] },
      { n: "04", title: "Validación", body: "Testeo, itero y mido antes de escalar, con ciclos cortos entre diseño, negocio y desarrollo.", tools: ["Claude Code", "Vercel"] },
    ],
    faqLabel: "Preguntas frecuentes",
    faqTitle: "Lo que suelen preguntarme",
    expLabel: "Experiencia",
    expTitle: "Dónde lo aprendí",
    contactLabel: "Contacto",
    contactTitle: ["¿Construimos algo", "que escale?"],
    copy: "Copiar email", copied: "¡Copiado!",
    write: "Escribime",
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
    aiLabel: "AI in the process",
    aiTitle: "I design and build product with AI",
    aiIntro: "I use AI at every stage to research, prototype and ship faster, without losing product judgment. This portfolio was designed and built that way.",
    aiSteps: [
      { n: "01", title: "Discovery", body: "I synthesize interviews, research and data to reach insights — and the right questions — sooner.", tools: ["Claude", "ChatGPT"] },
      { n: "02", title: "Prototyping", body: "From idea to a working prototype in hours, not weeks, to validate with real users.", tools: ["v0", "Figma Make", "Claude"] },
      { n: "03", title: "Design & build", body: "I design and build real product alongside the code: from design system to deploy.", tools: ["Claude Code", "Codex", "Cursor"] },
      { n: "04", title: "Validation", body: "I test, iterate and measure before scaling, with short loops between design, business and engineering.", tools: ["Claude Code", "Vercel"] },
    ],
    faqLabel: "FAQ",
    faqTitle: "What people usually ask",
    expLabel: "Experience",
    expTitle: "Where I learned it",
    contactLabel: "Contact",
    contactTitle: ["Shall we build", "something that scales?"],
    copy: "Copy email", copied: "Copied!",
    write: "Email me",
  },
} as const;

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = words[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/${locale}#profile`,
        url: `${site.url}/${locale}`,
        inLanguage: locale === "es" ? "es-AR" : "en-US",
        mainEntity: { "@id": `${site.url}/#person` },
        isPartOf: { "@id": `${site.url}/#website` },
      },
      {
        "@type": "ItemList",
        name: c.workLabel,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${site.url}/${locale}/work/${project.slug}`,
          name: `${project.name} — ${project.tagline[locale]}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q[locale],
          acceptedAnswer: { "@type": "Answer", text: item.a[locale] },
        })),
      },
    ],
  };
  const marquee = ["AI Product Design", "Product Design", "AI-driven Discovery", "Design Systems", "Prototyping with AI", "HealthTech", "Fintech", "Crypto", "SaaS", "MaaS", "B2B2C", "0 → 1", "AI-native Product", "Data-driven UX", "Startups"];

  return (
    <main className="home" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                  <div className="panel-meta"><span>{String(i + 1).padStart(2, "0")}. {project.client}{project.personal && <em className="panel-badge">{locale === "es" ? "Proyecto personal" : "Personal project"}</em>}</span><span>{project.year}</span></div>
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

      {/* AI */}
      <section id="ai" className="ai">
        <div className="section-head">
          <p className="label" data-reveal>03 — {c.aiLabel}</p>
          <div>
            <h2 className="display-2" data-reveal>{c.aiTitle}</h2>
            <p className="ai-intro" data-reveal>{c.aiIntro}</p>
          </div>
        </div>
        <ol className="ai-steps">
          {c.aiSteps.map((step, i) => (
            <li key={step.n} className="ai-step" data-reveal style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <span className="ai-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <ul className="ai-tools">{step.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </li>
          ))}
        </ol>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience">
        <div className="section-head">
          <p className="label" data-reveal>04 — {c.expLabel}</p>
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

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="section-head">
          <p className="label" data-reveal>05 — {c.faqLabel}</p>
          <h2 className="display-2" data-reveal>{c.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {faq.map((item, i) => (
            <details key={item.q.es} className="faq-item" data-reveal open={i === 0}>
              <summary><span>{item.q[locale]}</span><i aria-hidden="true" /></summary>
              <p>{item.a[locale]}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer className="contact" id="contact">
        <p className="label">06 — {c.contactLabel}</p>
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
          <a href="#top" className="link-underline">↑ Top</a>
        </div>
      </footer>
    </main>
  );
}
