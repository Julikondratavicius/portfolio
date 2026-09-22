import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { getFeaturedProjects } from "@/lib/projects";
import { site, ui } from "@/content/site";
import { Cta } from "@/components/cta";
import { ProjectCard } from "@/components/project-card";
import { SectionHead } from "@/components/ui/section-head";
import { ProductMap } from "@/components/product-map";

const copy = {
  es: {
    eyebrow: "Senior Product Designer · Product Builder",
    title: ["Convierto problemas", "complejos en productos", "claros y reales."],
    description: "Trabajo entre estrategia, experiencia, sistemas y tecnología. Hoy diseño productos de salud digital en DOC24 y construyo Blox, una plataforma para el cuidado y el rendimiento del atleta.",
    location: "Rosario, Argentina",
    availability: "Abierto a oportunidades en LATAM",
    work: "Ver trabajo",
    builder: "Producto en construcción",
    bloxTitle: "Blox",
    bloxBody: "Un proyecto propio para explorar el rendimiento y el cuidado del atleta desde el producto. Investigación, decisiones y construcción en curso.",
    bloxStatus: "En desarrollo",
    bloxLink: "Ver en Lab",
    approach: "Una práctica entre",
    approachTitle: "personas, negocio y tecnología.",
    approachBody: "Mi formación en Diseño Industrial me enseñó a pensar en sistemas, restricciones y relaciones entre partes. En producto digital, ese enfoque ayuda a tomar decisiones que funcionan más allá de una pantalla.",
    principles: [
      ["01", "Entender antes de producir", "Aclarar el problema y su contexto antes de convertirlo en entregables."],
      ["02", "Reducir complejidad", "Resolver con menos fricción antes de sumar nuevas capas de interfaz."],
      ["03", "Hacer explícitos los trade-offs", "Alinear producto, negocio y tecnología alrededor de una decisión compartida."],
    ],
    experience: "Experiencia seleccionada",
    roles: [
      ["DOC24 · Wehealthy", "Senior Product Designer", "Salud digital · Actual"],
      ["Let'sBit", "Product / UX Designer", "Fintech"],
      ["Ualabee", "Product / UX Designer", "Movilidad"],
      ["Blox", "Fundador · Product Builder", "Performance & cuidado del atleta"],
    ],
  },
  en: {
    eyebrow: "Senior Product Designer · Product Builder",
    title: ["I turn complex", "problems into clear", "products that ship."],
    description: "I work across strategy, experience, systems and technology. Today I design digital health products at DOC24 and build Blox, a platform for athlete care and performance.",
    location: "Rosario, Argentina",
    availability: "Open to opportunities across LATAM",
    work: "Explore selected work",
    builder: "Product in progress",
    bloxTitle: "Blox",
    bloxBody: "An independent project exploring athlete performance and care through product. Research, decisions and building are ongoing.",
    bloxStatus: "In development",
    bloxLink: "Explore the Lab",
    approach: "A practice across",
    approachTitle: "people, business and technology.",
    approachBody: "My Industrial Design background taught me to think in systems, constraints and relationships between parts. In digital products, that approach helps make decisions that work beyond a single screen.",
    principles: [
      ["01", "Understand before producing", "Clarify the problem and its context before turning it into deliverables."],
      ["02", "Reduce complexity", "Solve for less friction before adding new layers of interface."],
      ["03", "Make trade-offs explicit", "Align product, business and technology around a shared decision."],
    ],
    experience: "Selected experience",
    roles: [
      ["DOC24 · Wehealthy", "Senior Product Designer", "Digital health · Current"],
      ["Let'sBit", "Product / UX Designer", "Fintech"],
      ["Ualabee", "Product / UX Designer", "Mobility"],
      ["Blox", "Founder · Product Builder", "Athlete performance & care"],
    ],
  },
} as const;

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = copy[locale];
  const featured = getFeaturedProjects(3);

  return <>
    <section id="top" className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" />{c.eyebrow}</p>
        <h1>{c.title.map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="hero-description">{c.description}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">{c.work}<span aria-hidden="true">↓</span></a>
          <a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta"><span>{c.location}</span><span>{c.availability}</span></div>
      </div>
      <ProductMap lang={locale} />
    </section>

    <section id="work" className="section wrap">
      <SectionHead n="01" title={ui.selectedWork[locale]} aside={<Link className="text-link" href={href("/work", locale)}>{ui.allWork[locale]} <span aria-hidden="true">↗</span></Link>} />
      <div className="project-grid">
        {featured.map((project, i) => <ProjectCard key={project.slug} project={project} lang={locale} wide={i === 0} priority={i === 0} />)}
      </div>
    </section>

    <section className="builder-section">
      <div className="wrap builder-layout">
        <div className="builder-visual" aria-label="Esquema modular de Blox" role="img">
          <div className="builder-coordinate">B / 01—04</div>
          <div className="blox-mark">b<span>.</span></div>
          <div className="builder-gridline" />
          <div className="builder-caption">PRODUCT / ATHLETE / SYSTEM</div>
        </div>
        <div className="builder-copy">
          <p className="eyebrow">{c.builder}</p>
          <h2>{c.bloxTitle}</h2>
          <p>{c.bloxBody}</p>
          <Link className="text-link" href={href("/lab", locale)}>{c.bloxLink} <span aria-hidden="true">↗</span></Link>
          <div className="project-status"><span className="status-dot" />{c.bloxStatus}</div>
        </div>
      </div>
    </section>

    <section className="section wrap approach-section">
      <div className="approach-intro">
        <p className="eyebrow">02 / {c.approach}</p>
        <h2>{c.approachTitle}</h2>
        <p>{c.approachBody}</p>
      </div>
      <ProductMap lang={locale} compact />
      <div className="principle-list">
        {c.principles.map(([n, title, body]) => <article key={n} className="principle-row"><span className="mono">{n}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>

    <section className="section wrap experience-section" id="experience">
      <SectionHead n="03" title={c.experience} />
      <div className="experience-list">{c.roles.map(([company, role, field]) => <div className="experience-row" key={company}><span className="experience-company">{company}</span><span>{role}</span><span className="experience-field">{field}</span></div>)}</div>
    </section>
    <Cta lang={locale} />
  </>;
}
