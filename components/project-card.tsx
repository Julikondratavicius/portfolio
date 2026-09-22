import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { publicFileExists } from "@/lib/media";

export function ProjectCard({ project, lang, priority = false, wide = false }: { project: Project; lang: Locale; wide?: boolean; priority?: boolean }) {
  const hasCover = publicFileExists(project.cover?.src);
  const index = project.slug === "doc24-wehealthy" ? "01" : project.slug === "letsbit" ? "02" : "03";
  return <article className={`new-project-card ${wide ? "project-wide" : ""}`}>
    <Link href={href(`/work/${project.slug}`, lang)} aria-label={`${project.client} — ${project.name}`}>
      <div className={`case-art case-art-${project.slug}`}>
        {hasCover && project.cover ? <Image src={project.cover.src} alt={project.cover.alt[lang]} fill priority={priority} sizes="(max-width: 760px) 100vw, 70vw" className="object-cover" /> : <ProjectArtwork project={project} lang={lang} />}
        <span className="case-index">{index} / {project.year}</span>{!hasCover && <span className="case-concept-label">{lang === "es" ? "VISTA CONCEPTUAL" : "CONCEPT PREVIEW"}</span>}<span className="case-open" aria-hidden="true">↗</span>
      </div>
      <div className="new-project-info"><div><span className="new-project-industry">{project.industry[lang]}</span><h3>{project.client === project.name ? project.name : `${project.client} · ${project.name}`}</h3></div><span className="new-project-role">{project.role[lang]}</span><p>{project.summary[lang]}</p></div>
    </Link>
  </article>;
}

function ProjectArtwork({ project, lang }: { project: Project; lang: Locale }) {
  const slug = project.slug;
  if (slug === "doc24-wehealthy") return <div className="case-art-inner health-artwork" aria-hidden="true">
    <div className="art-ambient-shape"/><div className="art-window health-window"><div className="window-top"><span className="window-brand">wehealthy<span>.</span></span><span className="window-dots">•••</span></div><div className="health-window-body"><div className="health-sidebar"><i/><i/><i/><i/></div><div className="health-dashboard"><span className="tiny-overline">{lang === "es" ? "PANEL DE BIENESTAR" : "WELLBEING OVERVIEW"}</span><strong>{lang === "es" ? "Hola, equipo." : "Hello, team."}</strong><div className="dashboard-row"><div className="dashboard-stat"><span>{lang === "es" ? "Bienestar general" : "Overall wellbeing"}</span><b>↗</b><div className="stat-bars"><i/><i/><i/><i/><i/><i/><i/><i/></div></div><div className="dashboard-stat stat-donut"><span>{lang === "es" ? "Participación" : "Participation"}</span><b>74%</b><i/></div></div><div className="dashboard-list"><i/><span/><b/><i/><span/><b/><i/><span/><b/></div></div></div></div>
    <div className="health-float-card"><i>✳</i><span>{lang === "es" ? "Personas primero" : "People first"}</span></div>
  </div>;
  if (slug === "letsbit") return <div className="case-art-inner crypto-artwork" aria-hidden="true">
    <div className="crypto-glow"/><div className="crypto-phone"><div className="phone-notch"/><div className="crypto-top"><span>lets<span>bit</span></span><i>•••</i></div><span className="crypto-label">{lang === "es" ? "BALANCE TOTAL" : "TOTAL BALANCE"}</span><strong className="crypto-balance">$ 24.850<span>.32</span></strong><div className="crypto-change">↗ 8.4% <span>{lang === "es" ? "esta semana" : "this week"}</span></div><div className="crypto-chart"><svg viewBox="0 0 300 85" preserveAspectRatio="none"><path d="M0 69 C22 63 22 43 44 48 S68 67 88 53 S110 51 129 31 S158 49 174 39 S201 21 219 30 S247 16 264 22 S284 15 300 5"/><path className="chart-fill" d="M0 69 C22 63 22 43 44 48 S68 67 88 53 S110 51 129 31 S158 49 174 39 S201 21 219 30 S247 16 264 22 S284 15 300 5 L300 85 L0 85Z"/></svg></div><div className="crypto-assets"><span className="coin-icon">₿</span><span>Bitcoin<small>BTC</small></span><b>$ 12,420 <i>+4.8%</i></b></div><div className="crypto-assets"><span className="coin-icon coin-eth">◆</span><span>Ethereum<small>ETH</small></span><b>$ 8,230 <i>+2.1%</i></b></div></div><div className="crypto-orbit-label">MONEY, IN MOTION <span>↗</span></div>
  </div>;
  if (slug === "ualabee") return <div className="case-art-inner mobility-artwork" aria-hidden="true">
    <div className="map-lines-art"><i/><i/><i/><i/><i/><i/><i/></div><div className="map-water"/><svg className="transit-route" viewBox="0 0 650 430" preserveAspectRatio="none"><path d="M-10 317 C85 317 98 211 200 211 S315 319 390 273 S440 159 528 159 S588 209 675 209"/><circle cx="200" cy="211" r="7"/><circle cx="390" cy="273" r="7"/><circle cx="528" cy="159" r="7"/></svg><div className="transit-card"><span className="transit-chip">{lang === "es" ? "TU VIAJE" : "YOUR TRIP"}</span><strong>{lang === "es" ? "Hacia el centro" : "To downtown"}</strong><div className="transit-option"><span className="bus-number">142</span><span>{lang === "es" ? "Parada Córdoba" : "Córdoba stop"}<small>{lang === "es" ? "Próximo en 4 min" : "Arriving in 4 min"}</small></span><b>4′</b></div><div className="transit-option transit-muted"><span className="bus-number bus-pale">115</span><span>{lang === "es" ? "Parada Italia" : "Italia stop"}<small>{lang === "es" ? "Próximo en 9 min" : "Arriving in 9 min"}</small></span><b>9′</b></div></div><div className="map-user-dot"><i/></div><div className="map-label map-label-one">PICHINCHA</div><div className="map-label map-label-two">CENTRO</div>
  </div>;
  return <div className="case-art-inner"><div className="art-window"><div className="window-top"><span>{project.client}</span></div><strong>{project.name}</strong></div></div>;
}
