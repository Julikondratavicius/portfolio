import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { getNextProject, getProject, projects } from "@/lib/projects";
import { isTodo, visible, visibleText } from "@/lib/content";
import { toneFor } from "@/lib/palette";
import { site } from "@/content/site";
import { Vignette } from "@/components/vignettes";
import { ChapterIndex, ReadingProgress } from "@/components/motion";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

const caseUrl = (locale: Locale, slug: string) => `${site.url}/${locale}/work/${slug}`;

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const project = getProject(slug);
  if (!project) return {};
  const name = project.client === project.name ? project.name : `${project.client} — ${project.name}`;
  const title = `${name}: ${project.tagline[locale]}`;
  const description = project.summary[locale];
  const images = project.cover ? [{ url: project.cover.src, width: project.cover.width, height: project.cover.height, alt: project.cover.alt[locale] }] : undefined;
  return {
    title,
    description,
    keywords: [...project.tags, project.industry[locale], "case study", "Product Design", site.name],
    alternates: {
      canonical: caseUrl(locale, slug),
      languages: { "es-AR": caseUrl("es", slug), "en-US": caseUrl("en", slug), "x-default": caseUrl("es", slug) },
    },
    openGraph: { type: "article", url: caseUrl(locale, slug), title, description, images, siteName: site.name, locale: htmlLang[locale].replace("-", "_") },
    twitter: { card: "summary_large_image", title, description, images: images?.map((image) => image.url) },
  };
}

const words = {
  es: { back: "Todos los casos", role: "Rol", team: "Equipo", timeline: "Duración", platforms: "Plataformas", tldr: "En 30 segundos", challenge: "El desafío", did: "Qué hice", focus: "Foco", index: "Índice del caso", decision: "Decisión", learnings: "Lo que me llevo", next: "Siguiente caso", ai: "IA en el proceso", impact: "Impacto", decisions: "Decisiones", view: "Ver proyecto", personal: "Proyecto personal", more: "Más casos", home: "Inicio", work: "Trabajo" },
  en: { back: "All cases", role: "Role", team: "Team", timeline: "Timeline", platforms: "Platforms", tldr: "In 30 seconds", challenge: "The challenge", did: "What I did", focus: "Focus", index: "Case index", decision: "Decision", learnings: "What I took away", next: "Next case", ai: "AI in the process", impact: "Impact", decisions: "Decisions", view: "View project", personal: "Personal project", more: "More cases", home: "Home", work: "Work" },
} as const;

export default async function CaseStudyPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const project = getProject(slug);
  if (!project) notFound();
  const w = words[locale];
  const tone = toneFor(project.slug);
  const next = getNextProject(project.slug);
  const nextTone = next ? toneFor(next.slug) : tone;
  const others = projects.filter((p) => p.slug !== project.slug && p.slug !== next?.slug);

  const meta = [
    [w.role, project.role[locale]],
    [w.team, project.team[locale]],
    [w.timeline, project.timeline[locale]],
    [w.platforms, project.platforms[locale]],
  ].filter(([, value]) => !isTodo(value));
  const metrics = project.metrics.filter((metric) => metric.value);
  const chapters = project.chapters
    .map((chapter) => ({
      ...chapter,
      paragraphs: visible(chapter.body[locale]),
      items: chapter.bullets ? visible(chapter.bullets[locale]) : [],
      asideBody: chapter.aside ? visibleText(chapter.aside.body[locale]) : null,
    }))
    .filter((chapter) => chapter.paragraphs.length > 0 || chapter.items.length > 0);
  const decisions = project.decisions.filter((d) => !isTodo(d.title[locale]) && !isTodo(d.choice[locale]));
  const learnings = visible(project.learnings[locale]);

  const index = [
    ...chapters.map((chapter) => ({ id: chapter.id, label: chapter.eyebrow[locale] })),
    ...(decisions.length ? [{ id: "decisions", label: w.decisions }] : []),
    ...(project.ai ? [{ id: "ai", label: w.ai }] : []),
    ...(learnings.length ? [{ id: "learnings", label: w.learnings }] : []),
  ];
  const number = (id: string) => String(index.findIndex((item) => item.id === id) + 1).padStart(2, "0");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${caseUrl(locale, project.slug)}#case`,
      name: `${project.name} — ${project.tagline[locale]}`,
      headline: project.tagline[locale],
      description: project.summary[locale],
      url: caseUrl(locale, project.slug),
      inLanguage: htmlLang[locale],
      genre: "Case study",
      keywords: project.tags.join(", "),
      about: project.industry[locale],
      image: project.cover ? `${site.url}${project.cover.src}` : undefined,
      author: { "@id": `${site.url}/#person` },
      creator: { "@id": `${site.url}/#person` },
      ...(project.url ? { mainEntityOfPage: caseUrl(locale, project.slug), sameAs: project.url } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: w.home, item: `${site.url}/${locale}` },
        { "@type": "ListItem", position: 2, name: w.work, item: `${site.url}/${locale}#work` },
        { "@type": "ListItem", position: 3, name: project.name, item: caseUrl(locale, project.slug) },
      ],
    },
  ];

  return (
    <main className="case" style={{ ["--bg" as string]: tone.bg, ["--fg" as string]: tone.fg, ["--accent" as string]: tone.accent }}>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="case-hero">
        <div className="case-hero-copy">
          <nav aria-label="Breadcrumb"><Link href={`${href("/", locale)}#work`} className="case-back">← {w.back}</Link></nav>
          <p className="label case-kicker">
            {project.personal && <span className="case-badge">{w.personal}</span>}
            {project.client} · {project.industry[locale]} · {project.year}
          </p>
          <h1 className="case-title">
            {project.tagline[locale].split(" ").map((word, i) => (
              <span className="word" key={i}><span style={{ ["--d" as string]: `${0.05 + i * 0.04}s` }}>{word}&nbsp;</span></span>
            ))}
          </h1>
          <p className="case-lede" data-reveal>{project.headline[locale]}</p>
          {project.url && (
            <a className="case-cta" href={project.url} target="_blank" rel="noopener" data-reveal>
              {w.view} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <div className="case-hero-media" data-reveal><Vignette slug={project.slug} locale={locale} size="hero" /></div>
      </section>

      <section className="case-meta">
        {meta.map(([label, value]) => (
          <div key={label} data-reveal><span className="label">{label}</span><strong>{value}</strong></div>
        ))}
      </section>

      <section className="tldr" data-reveal>
        <p className="label">{w.tldr}</p>
        <div className="tldr-grid">
          <div><span>{w.challenge}</span><p>{chapters.find((c) => c.id === "problem")?.title[locale] ?? chapters[0]?.title[locale]}</p></div>
          <div><span>{w.did}</span><p>{project.summary[locale]}</p></div>
          <div><span>{w.focus}</span><ul className="chips">{project.tags.map((t) => <li key={t}>{t}</li>)}</ul></div>
        </div>
      </section>

      {metrics.length > 0 && (
        <section className="case-metrics" aria-label={w.impact}>
          {metrics.map((metric) => (
            <div key={metric.label[locale]} data-reveal><strong>{metric.value}</strong><span>{metric.label[locale]}</span></div>
          ))}
        </section>
      )}

      <div className="case-body">
        <ChapterIndex items={index} label={w.index} />
        <article className="case-article">
          {chapters.map((chapter) => (
            <section className="chapter" id={chapter.id} key={chapter.id}>
              <p className="label chapter-label" data-reveal><span>{number(chapter.id)}</span>{chapter.eyebrow[locale]}</p>
              <h2 data-reveal>{chapter.title[locale]}</h2>
              {chapter.paragraphs.map((paragraph, j) => <p key={j} data-reveal>{paragraph}</p>)}
              {chapter.items.length > 0 && (
                <ul className="point-list">
                  {chapter.items.map((item, j) => <li key={item} data-reveal style={{ ["--d" as string]: `${j * 0.06}s` }}><span>{String(j + 1).padStart(2, "0")}</span>{item}</li>)}
                </ul>
              )}
              {chapter.aside && chapter.asideBody && (
                <aside className="callout" data-reveal><strong>{chapter.aside.title[locale]}</strong><p>{chapter.asideBody}</p></aside>
              )}
            </section>
          ))}

          {decisions.length > 0 && (
            <section className="chapter" id="decisions">
              <p className="label chapter-label" data-reveal><span>{number("decisions")}</span>{w.decisions}</p>
              <div className="decisions">
                {decisions.map((d, i) => (
                  <article className="decision" key={i} data-reveal>
                    <span className="decision-n">{w.decision} {String(i + 1).padStart(2, "0")}</span>
                    <h3>{d.title[locale]}</h3>
                    <p className="decision-context">{d.context[locale]}</p>
                    <p className="decision-why">{d.why[locale]}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {project.ai && (
            <section className="chapter" id="ai">
              <p className="label chapter-label" data-reveal><span>{number("ai")}</span>{w.ai}</p>
              <h2 data-reveal>{project.ai.title[locale]}</h2>
              <p data-reveal>{project.ai.body[locale]}</p>
              <ul className="chips chapter-chips" data-reveal>{project.ai.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </section>
          )}

          {learnings.length > 0 && (
            <section className="chapter" id="learnings">
              <p className="label chapter-label" data-reveal><span>{number("learnings")}</span>{w.learnings}</p>
              <ol className="learnings">
                {learnings.map((item) => <li key={item} data-reveal>{item}</li>)}
              </ol>
            </section>
          )}
        </article>
      </div>

      {others.length > 0 && (
        <nav className="more-cases" aria-label={w.more}>
          <p className="label">{w.more}</p>
          <ul>
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={href(`/work/${p.slug}`, locale)} style={{ ["--dot" as string]: toneFor(p.slug).accent }}>
                  <span className="more-dot" aria-hidden="true" />
                  <strong>{p.client}</strong>
                  <span>{p.tagline[locale]}</span>
                  <span className="more-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {next && (
        <Link
          href={href(`/work/${next.slug}`, locale)}
          className="next-case"
          data-cursor={w.next}
          style={{ ["--bg" as string]: nextTone.bg, ["--fg" as string]: nextTone.fg }}
        >
          <span className="label">{w.next} →</span>
          <strong>{next.client}</strong>
          <span className="next-tagline">{next.tagline[locale]}</span>
        </Link>
      )}
    </main>
  );
}
