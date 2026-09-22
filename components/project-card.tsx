import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { publicFileExists } from "@/lib/media";

export function ProjectCard({ project, lang, priority = false }: { project: Project; lang: Locale; wide?: boolean; priority?: boolean }) {
  const hasCover = publicFileExists(project.cover?.src);
  return <article className="project-card">
    <Link href={href(`/work/${project.slug}`, lang)} aria-label={`${project.client} — ${project.name}`}>
      <div className={`project-art art-project-${project.slug}`}>
        {hasCover && project.cover ? <Image src={project.cover.src} alt={project.cover.alt[lang]} fill priority={priority} sizes="(max-width: 620px) 100vw, 60vw" className="object-cover" /> : <ProjectArtwork project={project} />}
      </div>
      <div className="project-info">
        <h3 className="project-name">{project.client === project.name ? project.name : `${project.client} · ${project.name}`}</h3>
        <span className="project-industry">{project.industry[lang]}</span>
        <p className="project-summary">{project.summary[lang]}</p>
        <span className="project-meta">{project.role[lang]}　·　{project.year}</span>
      </div>
    </Link>
  </article>;
}

function ProjectArtwork({ project }: { project: Project }) {
  return <div className="project-art-inner" role="img" aria-label={`${project.name} — abstract product system illustration`}>
    <div className="art-frame">
      <div className="art-topbar"><i/><i/><i/></div>
      <div className="art-content">
        <div className="art-copy">
          <span className="art-kicker">{project.client.toUpperCase()} / PRODUCT</span>
          <strong className="art-title">{project.name}</strong>
          <span className="art-line"/><span className="art-line short"/>
          <span className="art-button">{project.industry.es}</span>
        </div>
        <div className="art-panel"><span className="art-orbit"/></div>
      </div>
    </div>
  </div>;
}
