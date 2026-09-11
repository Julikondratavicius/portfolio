import Image from "next/image";
import type { Chapter, Decision, Media, Metric, Project } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { visible, visibleText } from "@/lib/content";
import { publicFileExists } from "@/lib/media";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";
import { ui } from "@/content/site";

/* ── Ficha técnica: rol, equipo, duración, plataformas ─────────── */

export function CaseMeta({
  project,
  lang,
}: {
  project: Project;
  lang: Locale;
}) {
  const rows = [
    { label: ui.role[lang], value: project.role[lang] },
    { label: ui.team[lang], value: project.team[lang] },
    { label: ui.timeline[lang], value: project.timeline[lang] },
    { label: ui.platforms[lang], value: project.platforms[lang] },
    { label: ui.year[lang], value: project.year },
  ];

  return (
    <Reveal
      mode="stagger"
      className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5"
    >
      {rows.map((row) => (
        <div key={row.label} className="bg-bg p-5">
          <div className="t-label mb-2">{row.label}</div>
          <div className="text-[0.9rem] font-light leading-snug text-ink">
            <RichText text={row.value} />
          </div>
        </div>
      ))}
    </Reveal>
  );
}

/* ── Franja de impacto ──────────────────────────────────────────── */

export function CaseMetrics({
  metrics,
  lang,
  accent,
}: {
  metrics: Metric[];
  lang: Locale;
  accent: string;
}) {
  if (metrics.length === 0) return null;

  return (
    <Reveal mode="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, i) => {
        const pending = metric.value === null;
        return (
          <div key={i} className="card p-7">
            <div
              className="t-mono mb-3 text-[clamp(2rem,4vw,2.9rem)] font-light leading-none tracking-tight"
              style={{ color: pending ? undefined : accent }}
            >
              {pending ? (
                <span className="text-[1rem] font-normal text-ink-3">
                  {ui.metricPending[lang]}
                </span>
              ) : (
                metric.value
              )}
            </div>
            <div className="text-[0.92rem] font-normal text-ink">
              {metric.label[lang]}
            </div>
            {metric.note ? (
              <div className="mt-1.5 text-[0.78rem] font-light text-ink-3">
                {metric.note[lang]}
              </div>
            ) : null}
          </div>
        );
      })}
    </Reveal>
  );
}

/* ── Capítulo de la narrativa ───────────────────────────────────── */

export function CaseChapter({
  chapter,
  lang,
  index,
}: {
  chapter: Chapter;
  lang: Locale;
  index: number;
}) {
  const paragraphs = visible(chapter.body[lang]);
  const bullets = chapter.bullets ? visible(chapter.bullets[lang]) : [];
  const asideBody = chapter.aside
    ? visibleText(chapter.aside.body[lang])
    : null;

  // Si en producción todo el capítulo era contenido pendiente, no lo mostramos.
  if (paragraphs.length === 0 && bullets.length === 0 && !asideBody) {
    return null;
  }

  return (
    <Reveal
      as="section"
      id={chapter.id}
      className="grid gap-8 py-[clamp(48px,7vh,88px)] lg:grid-cols-[220px_1fr] lg:gap-16"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="t-label mb-2">
          {String(index + 1).padStart(2, "0")} — {chapter.eyebrow[lang]}
        </div>
      </div>

      <div>
        <h2 className="t-h3 mb-6 text-ink">{chapter.title[lang]}</h2>

        <div className="prose-case max-w-[68ch]">
          {paragraphs.map((p, i) => (
            <p key={i}>
              <RichText text={p} />
            </p>
          ))}
        </div>

        {bullets.length > 0 ? (
          <ul className="mt-7 flex max-w-[68ch] list-none flex-col gap-3">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="relative pl-5 text-[0.92rem] font-light leading-relaxed text-ink-2 before:absolute before:left-0 before:text-ink-3 before:content-['–']"
              >
                <RichText text={b} />
              </li>
            ))}
          </ul>
        ) : null}

        {chapter.media ? (
          <CaseMedia media={chapter.media} lang={lang} />
        ) : null}

        {chapter.aside && asideBody ? (
          <aside className="card mt-8 max-w-[68ch] border-l-2 border-l-ink-3 p-6">
            <div className="t-label mb-2">{chapter.aside.title[lang]}</div>
            <p className="text-[0.9rem] font-light leading-relaxed text-ink-2">
              <RichText text={asideBody} />
            </p>
          </aside>
        ) : null}
      </div>
    </Reveal>
  );
}

/* ── Imagen con caption ─────────────────────────────────────────── */

export function CaseMedia({ media, lang }: { media: Media; lang: Locale }) {
  const exists = publicFileExists(media.src);
  const caption = media.caption ? visibleText(media.caption[lang]) : null;

  if (!exists) {
    // Sin archivo todavía: marcamos el hueco sólo en desarrollo.
    if (process.env.NODE_ENV === "production") return null;
    return (
      <div className="mt-8 flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-line-strong bg-bg-alt">
        <span className="todo-mark">Falta la imagen: public{media.src}</span>
      </div>
    );
  }

  return (
    <figure className="mt-8">
      <div className="overflow-hidden rounded-xl border border-line bg-bg-alt">
        <Image
          src={media.src}
          alt={media.alt[lang]}
          width={media.width ?? 2400}
          height={media.height ?? 1350}
          sizes="(max-width: 900px) 100vw, 900px"
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[0.78rem] font-light text-ink-3">
          <RichText text={caption} />
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ── Decisión de diseño: el bloque que muestra criterio ─────────── */

export function CaseDecision({
  decision,
  lang,
  accent,
}: {
  decision: Decision;
  lang: Locale;
  accent: string;
}) {
  const options = visible(decision.options[lang]);
  const choice = visibleText(decision.choice[lang]);
  const why = visibleText(decision.why[lang]);
  const tradeoff = visibleText(decision.tradeoff[lang]);
  const context = visibleText(decision.context[lang]);
  const title = visibleText(decision.title[lang]);

  if (!title && !choice && !why) return null;

  return (
    <Reveal className="card p-7 sm:p-9">
      {title ? (
        <h3 className="t-h3 mb-3 text-[1.15rem] text-ink sm:text-[1.3rem]">
          <RichText text={title} />
        </h3>
      ) : null}

      {context ? (
        <p className="mb-7 max-w-[62ch] text-[0.9rem] font-light leading-relaxed text-ink-2">
          <RichText text={context} />
        </p>
      ) : null}

      {options.length > 0 ? (
        <div className="mb-7">
          <div className="t-label mb-3">{ui.options[lang]}</div>
          <ul className="flex list-none flex-col gap-2">
            {options.map((o, i) => (
              <li
                key={i}
                className="flex gap-3 text-[0.88rem] font-light leading-relaxed text-ink-2"
              >
                <span className="t-mono shrink-0 text-ink-3">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>
                  <RichText text={o} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
        <Cell label={ui.choice[lang]} value={choice} accent={accent} />
        <Cell label={ui.why[lang]} value={why} />
        <Cell label={ui.tradeoff[lang]} value={tradeoff} />
      </div>
    </Reveal>
  );
}

function Cell({
  label,
  value,
  accent,
}: {
  label: string;
  value: string | null;
  accent?: string;
}) {
  if (!value) return null;
  return (
    <div className="bg-surface-2 p-5">
      <div
        className="t-label mb-2"
        style={accent ? { color: accent } : undefined}
      >
        {label}
      </div>
      <p className="text-[0.88rem] font-light leading-relaxed text-ink-2">
        <RichText text={value} />
      </p>
    </div>
  );
}

/* ── Aprendizajes ───────────────────────────────────────────────── */

export function CaseLearnings({
  learnings,
  lang,
}: {
  learnings: string[];
  lang: Locale;
}) {
  const items = visible(learnings);
  if (items.length === 0) return null;

  return (
    <Reveal mode="stagger" className="grid gap-4 md:grid-cols-3">
      {items.map((item, i) => (
        <div key={i} className="card p-7">
          <div className="t-label t-mono mb-4">
            {String(i + 1).padStart(2, "0")}
          </div>
          <p className="text-[0.92rem] font-light leading-relaxed text-ink-2">
            <RichText text={item} />
          </p>
        </div>
      ))}
    </Reveal>
  );
}

/* ── Aviso de NDA ───────────────────────────────────────────────── */

export function NdaNote({ lang }: { lang: Locale }) {
  return (
    <div className="card flex items-start gap-3 border-dashed p-5">
      <span aria-hidden="true" className="mt-0.5 text-ink-3">
        ⌁
      </span>
      <p className="text-[0.85rem] font-light leading-relaxed text-ink-2">
        {ui.nda[lang]}
      </p>
    </div>
  );
}
