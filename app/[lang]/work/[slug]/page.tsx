import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { getNextProject, getProject, projects } from "@/lib/projects";
import { isTodo, visible, visibleText } from "@/lib/content";
import { toneFor } from "@/lib/palette";
import { Vignette } from "@/components/vignettes";
import { ChapterIndex, ReadingProgress } from "@/components/motion";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const project = getProject(slug);
  if (!project) return {};
  const title = project.client === project.name ? project.name : `${project.client} — ${project.name}`;
  return { title, description: project.summary[locale], openGraph: { type: "article", title, description: project.summary[locale] } };
}

const words = {
  es: { back: "Todos los casos", role: "Rol", team: "Equipo", timeline: "Duración", platforms: "Plataformas", tldr: "En 30 segundos", challenge: "El desafío", did: "Qué hice", focus: "Foco", index: "Índice del caso", decision: "Decisión", options: "Opciones sobre la mesa", chose: "Qué elegí", why: "Por qué", tradeoff: "Qué resigné", learnings: "Lo que me llevo", next: "Siguiente caso", process: "Proceso", impact: "Impacto", decisions: "Decisiones" },
  en: { back: "All cases", role: "Role", team: "Team", timeline: "Timeline", platforms: "Platforms", tldr: "In 30 seconds", challenge: "The challenge", did: "What I did", focus: "Focus", index: "Case index", decision: "Decision", options: "Options on the table", chose: "What I chose", why: "Why", tradeoff: "Trade-off", learnings: "What I took away", next: "Next case", process: "Process", impact: "Impact", decisions: "Decisions" },
} as const;

/** La opción que más palabras comparte con lo que se eligió. */
function chosenIndex(options: readonly string[], choice: string) {
  const bag = (text: string) => new Set(text.toLowerCase().split(/[^a-záéíóúñü]+/).filter((word) => word.length > 3));
  const target = bag(choice);
  const scores = options.map((option) => [...bag(option)].filter((word) => target.has(word)).length);
  const best = Math.max(...scores);
  return best > 0 ? scores.indexOf(best) : -1;
}

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
    ...chapters.map((chapter) => ({ id: chapter.id, label: chapter.eyebrow[locale], title: chapter.title[locale] })),
    ...(decisions.length ? [{ id: "decisions", label: w.decisions, title: decisions[0].title[locale] }] : []),
    ...(learnings.length ? [{ id: "learnings", label: w.learnings, title: learnings[0] }] : []),
  ];

  return (
    <main className="case" style={{ ["--bg" as string]: tone.bg, ["--fg" as string]: tone.fg, ["--accent" as string]: tone.accent }}>
      <ReadingProgress />

      <section className="case-hero">
        <div className="case-hero-copy">
          <Link href={`${href("/", locale)}#work`} className="case-back">← {w.back}</Link>
          <p className="label case-kicker">{project.client} · {project.industry[locale]} · {project.year}</p>
          <h1 className="case-title">
            {project.tagline[locale].split(" ").map((word, i) => (
              <span className="word" key={i}><span style={{ ["--d" as string]: `${0.05 + i * 0.04}s` }}>{word}&nbsp;</span></span>
            ))}
          </h1>
          <p className="case-lede" data-reveal>{project.headline[locale]}</p>
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

      <section className="process" aria-label={w.process}>
        <p className="label">{w.process}</p>
        <ol className="process-steps">
          {index.map((step, i) => (
            <li key={step.id} data-reveal style={{ ["--d" as string]: `${i * 0.06}s` }}>
              <a href={`#${step.id}`}>
                <span className="process-n">{String(i + 1).padStart(2, "0")}</span>
                <strong>{step.label}</strong>
                <span className="process-title">{step.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <div className="case-body">
        <ChapterIndex items={index} label={w.index} />
        <article className="case-article">
          {chapters.map((chapter, i) => (
            <section className="chapter" id={chapter.id} key={chapter.id}>
              <p className="label chapter-label" data-reveal><span>{String(i + 1).padStart(2, "0")}</span>{chapter.eyebrow[locale]}</p>
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
              <p className="label chapter-label" data-reveal><span>{String(chapters.length + 1).padStart(2, "0")}</span>{w.decisions}</p>
              <div className="decisions">
                {decisions.map((d, i) => (
                  <article className="decision" key={i} data-reveal>
                    <span className="decision-n">{w.decision} {String(i + 1).padStart(2, "0")}</span>
                    <h3>{d.title[locale]}</h3>
                    <p className="decision-context">{d.context[locale]}</p>
                    <p className="label">{w.options}</p>
                    <ul className="options">
                      {d.options[locale].map((o, j) => <li key={o} className={j === chosenIndex(d.options[locale], d.choice[locale]) ? "chosen" : ""}>{o}</li>)}
                    </ul>
                    <div className="decision-grid">
                      <div className="decision-choice"><span className="label">✓ {w.chose}</span><p>{d.choice[locale]}</p><p className="muted">{d.why[locale]}</p></div>
                      <div className="decision-trade"><span className="label">↯ {w.tradeoff}</span><p>{d.tradeoff[locale]}</p></div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {learnings.length > 0 && (
            <section className="chapter" id="learnings">
              <p className="label chapter-label" data-reveal><span>{String(chapters.length + (decisions.length ? 2 : 1)).padStart(2, "0")}</span>{w.learnings}</p>
              <ol className="learnings">
                {learnings.map((item) => <li key={item} data-reveal>{item}</li>)}
              </ol>
            </section>
          )}
        </article>
      </div>

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
