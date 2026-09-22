import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { principles, site, ui } from "@/content/site";
import { publicFileExists } from "@/lib/media";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";
import { Cta } from "@/components/cta";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const copy = {
  es: {
    label: "Perfil",
    heading: "Diseñador de formación. **Product builder** por evolución.",
    body: [
      "Soy Julián, Product Designer en Rosario, Argentina. Me formé en Diseño Industrial y de Productos: una disciplina que conecta función, materiales, restricciones y sistemas. Esa manera de pensar sigue presente en cómo abordo productos digitales.",
      "Hace más de cinco años trabajo en productos digitales, startups y SaaS. Hoy soy Senior Product Designer en DOC24, dentro del equipo de Producto de Wehealthy, una solución de salud y bienestar corporativo.",
      "En mi trabajo colaboro con Product Owners, cofounders, analistas funcionales, ingeniería y negocio. Participo en definición y priorización, estrategia de UX, flujos end-to-end, documentación, sistemas de diseño y acompañamiento a desarrollo.",
      "También fundé Blox, una plataforma orientada al rendimiento y cuidado del atleta. Es el espacio donde llevo el trabajo más allá del diseño: investigar, definir el producto, experimentar y construir con tecnología y usuarios.",
    ],
    lookingLabel: "Hacia dónde voy",
    looking:
      "Seguir ampliando mi ownership de producto: desde el diseño senior hacia roles de Product Manager y Product Lead, en equipos donde estrategia, experiencia y tecnología se definan en conjunto.",
    principlesLabel: "Criterios",
  },
  en: {
    label: "Profile",
    heading: "Designer by training. **Product builder** by evolution.",
    body: [
      "I'm Julián, a Product Designer based in Rosario, Argentina. I trained in Industrial and Product Design: a discipline connecting function, materials, constraints and systems. That way of thinking still shapes how I approach digital products.",
      "For more than five years I've worked across digital products, startups and SaaS. Today I'm a Senior Product Designer at DOC24, on the Product team for Wehealthy, a corporate health and wellbeing solution.",
      "I work with Product Owners, co-founders, functional analysts, engineering and business stakeholders. My work spans feature definition and prioritization, UX strategy, end-to-end flows, documentation, design systems and delivery support.",
      "I also founded Blox, a platform for athlete performance and care. It's where I take the work beyond design: researching, shaping the product, experimenting and building with technology and users.",
    ],
    lookingLabel: "Where I'm heading",
    looking:
      "Continue growing my product ownership: from senior design toward Product Manager and Product Lead roles, on teams where strategy, experience and technology are shaped together.",
    principlesLabel: "Criteria",
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
    title: copy[locale].label,
    description: copy[locale].body[0],
    alternates: {
      canonical: `${site.url}/${locale}/profile`,
      languages: {
        "es-AR": `${site.url}/es/about`,
        "en-US": `${site.url}/en/about`,
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = copy[locale];
  const hasCv = publicFileExists(site.cv[locale]);

  return (
    <>
      <section className="pb-[clamp(48px,7vh,80px)] pt-40">
        <div className="wrap">
          <Reveal>
            <div className="t-label mb-5">{c.label}</div>
            <h1 className="t-h1 t-display-strong max-w-[16ch]">
              <RichText text={c.heading} />
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(48px,7vh,80px)]">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
          <Reveal className="prose-case max-w-[68ch]">
            {c.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <div className="t-label mb-3">{c.lookingLabel}</div>
              <p className="text-[0.9rem] font-light leading-relaxed text-ink-2">
                {c.looking}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-1.5 text-[0.88rem] text-ink-2 no-underline transition-colors hover:text-ink"
              >
                {site.email}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-[0.88rem] text-ink-2 no-underline transition-colors hover:text-ink"
              >
                LinkedIn
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              {hasCv ? (
                <a
                  href={site.cv[locale]}
                  download
                  className="group flex items-center gap-1.5 text-[0.88rem] text-ink-2 no-underline transition-colors hover:text-ink"
                >
                  {ui.downloadCv[locale]}
                  <span className="arrow" aria-hidden="true">
                    ↓
                  </span>
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="wrap hairline border-0" />

      <section className="section-y">
        <div className="wrap">
          <Reveal>
            <div className="t-label mb-8">{c.principlesLabel}</div>
          </Reveal>
          <Reveal mode="stagger" className="grid gap-4 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.n} className="card p-8">
                <div className="t-label t-mono mb-5">{p.n}</div>
                <h2 className="mb-3 text-[1.05rem] font-medium leading-snug text-ink">
                  {p.title[locale]}
                </h2>
                <p className="text-[0.9rem] font-light leading-relaxed text-ink-2">
                  {p.body[locale]}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Cta lang={locale} />
    </>
  );
}
