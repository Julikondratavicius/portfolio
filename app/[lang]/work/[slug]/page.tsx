import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { getNextProject, getProject, projects } from "@/lib/projects";
import { site, ui } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";
import {
  CaseChapter,
  CaseDecision,
  CaseLearnings,
  CaseMedia,
  CaseMeta,
  CaseMetrics,
  NdaNote,
} from "@/components/case/blocks";
import { Cta } from "@/components/cta";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((project) => ({ lang, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.client} — ${project.name}`;

  return {
    title,
    description: project.summary[locale],
    alternates: {
      canonical: `${site.url}/${locale}/work/${project.slug}`,
      languages: {
        "es-AR": `${site.url}/es/work/${project.slug}`,
        "en-US": `${site.url}/en/work/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      title,
      description: project.summary[locale],
      url: `${site.url}/${locale}/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);

  return (
    <>
      {/* ── Hero del caso ───────────────────────────────────── */}
      <section className="pb-[clamp(40px,6vh,64px)] pt-36">
        <div className="wrap">
          <Link
            href={href("/work", locale)}
            className="group mb-10 inline-flex items-center gap-1.5 text-[0.82rem] text-ink-3 no-underline transition-colors hover:text-ink"
          >
            <span aria-hidden="true">←</span>
            {ui.backToWork[locale]}
          </Link>

          <Reveal>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: project.accent }}
                aria-hidden="true"
              />
              <span className="t-label">
                {project.client} · {project.industry[locale]} · {project.year}
              </span>
            </div>

            <h1 className="t-h1 t-display-strong max-w-[20ch]">
              {project.name}
            </h1>

            <p className="t-lead mt-7 max-w-[62ch]">
              <RichText text={project.headline[locale]} />
            </p>
          </Reveal>
        </div>
      </section>

      {project.cover ? (
        <section className="pb-[clamp(40px,6vh,64px)]">
          <div className="wrap">
            <CaseMedia media={project.cover} lang={locale} />
          </div>
        </section>
      ) : null}

      {/* ── Ficha técnica ───────────────────────────────────── */}
      <section className="pb-[clamp(48px,7vh,80px)]">
        <div className="wrap">
          <CaseMeta project={project} lang={locale} />
          {project.nda ? (
            <div className="mt-4">
              <NdaNote lang={locale} />
            </div>
          ) : null}
        </div>
      </section>

      {/* ── Impacto ─────────────────────────────────────────── */}
      {project.metrics.length > 0 ? (
        <section className="pb-[clamp(48px,7vh,80px)]">
          <div className="wrap">
            <Reveal>
              <div className="t-label mb-6">{ui.impact[locale]}</div>
            </Reveal>
            <CaseMetrics
              metrics={project.metrics}
              lang={locale}
              accent={project.accent}
            />
          </div>
        </section>
      ) : null}

      <hr className="wrap hairline border-0" />

      {/* ── Narrativa ───────────────────────────────────────── */}
      <div className="wrap divide-y divide-white/[0.07]">
        {project.chapters.map((chapter, i) => (
          <CaseChapter
            key={chapter.id}
            chapter={chapter}
            lang={locale}
            index={i}
          />
        ))}
      </div>

      {/* ── Decisiones ──────────────────────────────────────── */}
      {project.decisions.length > 0 ? (
        <section className="section-y border-t border-line">
          <div className="wrap">
            <Reveal className="mb-10 max-w-2xl">
              <div className="t-label mb-3">07</div>
              <h2 className="t-h2 t-display-strong">
                {ui.decisions[locale]}
              </h2>
              <p className="t-lead mt-5">{ui.decisionsIntro[locale]}</p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {project.decisions.map((decision, i) => (
                <CaseDecision
                  key={i}
                  decision={decision}
                  lang={locale}
                  accent={project.accent}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── Aprendizajes ────────────────────────────────────── */}
      <section className="section-y border-t border-line">
        <div className="wrap">
          <Reveal className="mb-10">
            <h2 className="t-h2 t-display-strong">{ui.learnings[locale]}</h2>
          </Reveal>
          <CaseLearnings
            learnings={project.learnings[locale]}
            lang={locale}
          />
        </div>
      </section>

      {/* ── Siguiente proyecto ──────────────────────────────── */}
      {next ? (
        <section className="border-t border-line">
          <Link
            href={href(`/work/${next.slug}`, locale)}
            className="group block py-[clamp(48px,8vh,96px)] no-underline transition-colors duration-500 hover:bg-bg-alt"
          >
            <div className="wrap flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="t-label mb-3">{ui.nextProject[locale]}</div>
                <h2 className="t-h2 t-display-strong text-ink">
                  {next.client === next.name
                    ? next.name
                    : `${next.client} — ${next.name}`}
                </h2>
              </div>
              <span
                className="arrow text-3xl text-ink-3 transition-colors group-hover:text-ink"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </Link>
        </section>
      ) : null}

      <Cta lang={locale} />
    </>
  );
}
