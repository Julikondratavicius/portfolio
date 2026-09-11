import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { getFeaturedProjects } from "@/lib/projects";
import {
  education,
  experience,
  principles,
  skills,
  testimonials,
  ui,
} from "@/content/site";
import { Hero } from "@/components/hero";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHead } from "@/components/ui/section-head";

const copy = {
  es: {
    workTitle: "Proyectos **destacados**",
    principlesTitle: "Cómo **trabajo**",
    principlesIntro:
      "Tres criterios que aplico en cualquier producto, sin importar la industria.",
    expTitle: "Experiencia **profesional**",
    skillsTitle: "Skills & **herramientas**",
    testTitle: "Lo que **dicen**",
    eduTitle: "Formación & **certificaciones**",
  },
  en: {
    workTitle: "Selected **work**",
    principlesTitle: "How I **work**",
    principlesIntro:
      "Three criteria I apply to any product, whatever the industry.",
    expTitle: "Professional **experience**",
    skillsTitle: "Skills & **tools**",
    testTitle: "What they **say**",
    eduTitle: "Education & **certifications**",
  },
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = copy[locale];
  const featured = getFeaturedProjects(3);

  return (
    <>
      <Hero lang={locale} />

      <hr className="wrap hairline border-0" />

      {/* ── Proyectos ───────────────────────────────────────── */}
      <section id="work" className="section-y">
        <div className="wrap">
          <SectionHead
            n="01"
            title={c.workTitle}
            aside={
              <Link
                href={href("/work", locale)}
                className="group inline-flex items-center gap-1.5 text-[0.85rem] text-ink-2 no-underline transition-colors hover:text-ink"
              >
                {ui.allWork[locale]}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            }
          />

          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((project, i) => (
              <div key={project.slug} className={i === 0 ? "md:col-span-2" : ""}>
                <ProjectCard
                  project={project}
                  lang={locale}
                  wide={i === 0}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="wrap hairline border-0" />

      {/* ── Cómo trabajo ────────────────────────────────────── */}
      <section id="principles" className="section-y">
        <div className="wrap">
          <SectionHead
            n="02"
            title={c.principlesTitle}
            intro={c.principlesIntro}
          />

          <Reveal mode="stagger" className="grid gap-4 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.n} className="card p-8">
                <div className="t-label t-mono mb-5">{p.n}</div>
                <h3 className="mb-3 text-[1.05rem] font-medium leading-snug text-ink">
                  {p.title[locale]}
                </h3>
                <p className="text-[0.9rem] font-light leading-relaxed text-ink-2">
                  {p.body[locale]}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <hr className="wrap hairline border-0" />

      {/* ── Experiencia ─────────────────────────────────────── */}
      <section id="experience" className="section-y">
        <div className="wrap">
          <SectionHead n="03" title={c.expTitle} />

          <div className="flex flex-col">
            {experience.map((job) => (
              <Reveal
                key={job.company[locale] + job.period}
                className="hairline grid gap-4 py-10 lg:grid-cols-[1fr_2fr] lg:gap-10"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-base font-medium text-ink">
                    {job.company[locale]}
                  </span>
                  <span className="text-[0.78rem] text-ink-3">
                    {job.type[locale]}
                  </span>
                  <span className="t-mono mt-1 text-[0.78rem] text-ink-3">
                    {job.period}
                  </span>
                </div>

                <div>
                  <h3 className="mb-4 text-[0.95rem] font-medium text-ink">
                    {job.title[locale]}
                  </h3>
                  <ul className="flex list-none flex-col gap-2.5">
                    {job.points[locale].map((point, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-[0.88rem] font-light leading-relaxed text-ink-2 before:absolute before:left-0 before:text-ink-3 before:content-['–']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <div className="hairline" />
          </div>
        </div>
      </section>

      <hr className="wrap hairline border-0" />

      {/* ── Skills ──────────────────────────────────────────── */}
      <section id="skills" className="section-y">
        <div className="wrap">
          <SectionHead n="04" title={c.skillsTitle} />

          <Reveal mode="stagger" className="grid gap-12 md:grid-cols-3">
            {skills.map((col) => (
              <div key={col.title.en}>
                <div className="t-label mb-5 border-b border-line pb-3">
                  {col.title[locale]}
                </div>
                <div className="flex flex-col gap-2">
                  {col.items.map((item) => (
                    <span
                      key={item}
                      className="text-[0.9rem] font-light text-ink-2 transition-colors duration-[250ms] hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <hr className="wrap hairline border-0" />

      {/* ── Testimonios ─────────────────────────────────────── */}
      <section id="testimonials" className="section-y">
        <div className="wrap">
          <SectionHead n="05" title={c.testTitle} />

          <Reveal mode="stagger" className="grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.author} className="card p-[clamp(28px,3vw,44px)]">
                <blockquote className="mb-6 text-[0.95rem] font-light italic leading-relaxed text-ink-2">
                  “{t.quote[locale]}”
                </blockquote>
                <figcaption>
                  <div className="text-[0.85rem] font-medium text-ink">
                    {t.author}
                  </div>
                  <div className="text-[0.78rem] font-light text-ink-3">
                    {t.role[locale]}
                  </div>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <hr className="wrap hairline border-0" />

      {/* ── Formación ───────────────────────────────────────── */}
      <section id="education" className="section-y">
        <div className="wrap">
          <SectionHead n="06" title={c.eduTitle} />

          <Reveal mode="stagger" className="grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <div key={item.title.en} className="card p-7">
                <div className="t-label mb-3">{item.label[locale]}</div>
                <div className="mb-1 text-base font-medium text-ink">
                  {item.title[locale]}
                </div>
                {item.sub ? (
                  <div className="text-[0.82rem] font-light text-ink-2">
                    {item.sub[locale]}
                  </div>
                ) : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Cta lang={locale} />
    </>
  );
}
