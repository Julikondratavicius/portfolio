import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { publicFileExists } from "@/lib/media";
import { ui } from "@/content/site";

export function ProjectCard({
  project,
  lang,
  wide = false,
  priority = false,
}: {
  project: Project;
  lang: Locale;
  wide?: boolean;
  priority?: boolean;
}) {
  const hasCover = publicFileExists(project.cover?.src);

  return (
    <article className="card group relative overflow-hidden hover:-translate-y-1 hover:border-line-strong">
      <Link
        href={href(`/work/${project.slug}`, lang)}
        className="block no-underline"
        aria-label={`${project.name} — ${ui.readCase[lang]}`}
      >
        <div
          className={`relative overflow-hidden bg-bg-alt ${
            wide ? "aspect-[2.4/1]" : "aspect-[16/10]"
          }`}
        >
          {hasCover && project.cover ? (
            <Image
              src={project.cover.src}
              alt={project.cover.alt[lang]}
              fill
              priority={priority}
              sizes={wide ? "100vw" : "(max-width: 900px) 100vw, 50vw"}
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
            />
          ) : (
            <CoverPlaceholder project={project} />
          )}
        </div>

        <div className="p-6 sm:px-7 sm:py-6">
          <div className="mb-2.5 flex items-center justify-between gap-4">
            <h3 className="text-[1.15rem] font-medium tracking-[-0.01em] text-ink">
              {project.client === project.name
                ? project.name
                : `${project.client} — ${project.name}`}
            </h3>
            <span className="shrink-0 text-[0.7rem] tracking-[0.04em] text-ink-3">
              {project.industry[lang]}
            </span>
          </div>

          <p className="max-w-2xl text-[0.88rem] font-light leading-relaxed text-ink-2">
            {project.summary[lang]}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-ink">
            {ui.readCase[lang]}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

/**
 * Placeholder mientras no haya imagen real: un halo del color de acento
 * del proyecto. Se ve intencional, no roto.
 */
function CoverPlaceholder({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] transition-opacity duration-700 group-hover:opacity-25"
        style={{
          background: `radial-gradient(60% 80% at 50% 100%, ${project.accent} 0%, transparent 70%)`,
        }}
      />
      <div className="relative flex flex-col items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-line text-[0.9rem] font-medium"
          style={{ color: project.accent, background: "rgba(255,255,255,0.03)" }}
        >
          {project.name.slice(0, 2).toUpperCase()}
        </div>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink-3">
          {project.name}
        </span>
      </div>
    </div>
  );
}
