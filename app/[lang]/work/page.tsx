import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { site } from "@/content/site";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/cta";
import { RichText } from "@/components/rich-text";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const copy = {
  es: {
    title: "Proyectos",
    heading: "Productos que **diseñé** y qué cambió después",
    intro:
      "Cada caso cuenta el problema real, las alternativas que evalué, qué decidí y qué resigné al decidirlo. Si querés el detalle de alguno, escribime.",
  },
  en: {
    title: "Work",
    heading: "Products I **designed** and what changed afterwards",
    intro:
      "Each case covers the real problem, the alternatives I weighed, what I decided and what I gave up deciding it. Want the detail on one of them? Drop me a line.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  return {
    title: copy[locale].title,
    description: copy[locale].intro,
    alternates: {
      canonical: `${site.url}/${locale}/work`,
      languages: {
        "es-AR": `${site.url}/es/work`,
        "en-US": `${site.url}/en/work`,
      },
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = copy[locale];

  return (
    <>
      <section className="pb-[clamp(40px,6vh,72px)] pt-40">
        <div className="wrap">
          <Reveal>
            <div className="t-label mb-5">{c.title}</div>
            <h1 className="t-h1 t-display-strong max-w-[18ch]">
              <RichText text={c.heading} />
            </h1>
            <p className="t-lead mt-7 max-w-[58ch]">{c.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(64px,10vh,120px)]">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
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

      <Cta lang={locale} />
    </>
  );
}
