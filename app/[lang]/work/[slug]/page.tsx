import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.client} — ${project.name}`;
  return { title, description: project.summary[locale], openGraph: { type: "article", title, description: project.summary[locale] } };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const project = getProject(slug);
  if (!project) notFound();
  const spanish = locale === "es";

  return <main className="case-page">
    <header className="case-top shell"><Link href={href("/", locale)}>← {spanish ? "Julián Kondratavicius" : "Julián Kondratavicius"}</Link><Link href={`mailto:${site.email}`}>{spanish ? "Contacto ↗" : "Get in touch ↗"}</Link></header>
    <section className="case-hero shell">
      <p className="eyebrow">{project.client} · {project.industry[locale]} · {project.year}</p>
      <h1>{project.name}</h1>
      <p className="case-summary">{project.headline[locale]}</p>
      <div className="case-meta">
        {[[spanish ? "Mi rol" : "My role", project.role[locale]], [spanish ? "Equipo" : "Team", project.team[locale]], [spanish ? "Duración" : "Timeline", project.timeline[locale]], [spanish ? "Plataformas" : "Platforms", project.platforms[locale]]].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </div>
    </section>
    <article className="case-content">
      {project.metrics.length > 0 && <section className="case-metrics" aria-label={spanish ? "Impacto" : "Impact"}>{project.metrics.map((metric) => <div className="case-metric" key={metric.label[locale]}><strong>{metric.value ?? "—"}</strong><span>{metric.label[locale]}</span></div>)}</section>}
      {project.chapters.map((chapter) => <section className="case-chapter" key={chapter.id}>
        <span className="case-chapter-label">{chapter.eyebrow[locale]}</span><div><h2>{chapter.title[locale]}</h2>{chapter.body[locale].map((paragraph, index) => <p key={index}>{paragraph}</p>)}{chapter.bullets?.[locale] && <ul>{chapter.bullets[locale].map((item) => <li key={item}>{item}</li>)}</ul>}</div>
      </section>)}
      {project.decisions.map((decision, index) => <section className="case-chapter" key={`decision-${index}`}><span className="case-chapter-label">{spanish ? "Decisión" : "Decision"} 0{index + 1}</span><div><h2>{decision.title[locale]}</h2><p>{decision.context[locale]}</p><ul>{decision.options[locale].map((option) => <li key={option}>{option}</li>)}</ul><p><strong>{decision.choice[locale]}</strong></p><p>{decision.why[locale]}</p><p>{spanish ? "Qué resigné:" : "Trade-off:"} {decision.tradeoff[locale]}</p></div></section>)}
      <section className="case-chapter"><span className="case-chapter-label">{spanish ? "Aprendizajes" : "Learnings"}</span><div><h2>{spanish ? "Lo que me llevo" : "What I learned"}</h2><ul>{project.learnings[locale].map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <Link className="case-back" href={href("/", locale)}>← {spanish ? "Volver al portfolio" : "Back to portfolio"}</Link>
    </article>
  </main>;
}
