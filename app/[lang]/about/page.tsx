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
    label: "Sobre mí",
    heading: "Diseño desde el **problema**, no desde la pantalla",
    body: [
      "Soy Julián, Product Designer. Vengo del Diseño Industrial, y esa formación me dejó una manera de trabajar que todavía uso: entender la restricción antes que la forma. Un producto físico te obliga a decidir con materiales, costos y procesos sobre la mesa. En digital pasa lo mismo, sólo que las restricciones son menos visibles.",
      "Hace más de cinco años que diseño productos digitales en entornos de startup: healthtech, fintech, movilidad. Trabajé sobre todo en equipos chicos, donde el diseñador no recibe un brief cerrado sino que participa en definir qué se construye y por qué.",
      "Mi foco está en la escala. No en hacer una pantalla linda, sino en dejar un sistema —de componentes, de criterios, de decisiones documentadas— que le permita al equipo seguir avanzando rápido cuando yo no esté en la sala.",
      "Hoy incorporo herramientas de IA al flujo de diseño para acelerar validación e insights: sintetizar research, explorar variantes y prototipar funcional en menos tiempo. La herramienta cambió; el criterio para decidir sigue siendo el trabajo.",
    ],
    lookingLabel: "Qué estoy buscando",
    looking:
      "Roles de Product Lead o Senior Product Designer en equipos donde el diseño participe de la definición del producto y no sólo de su ejecución. Me interesan especialmente los productos con complejidad real: muchos tipos de usuario, restricciones regulatorias o decisiones con consecuencias.",
    principlesLabel: "Criterios",
  },
  en: {
    label: "About",
    heading: "I design from the **problem**, not from the screen",
    body: [
      "I'm Julián, a Product Designer. I come from Industrial Design, and that training left me with a way of working I still use: understand the constraint before the form. A physical product forces you to decide with materials, costs and processes on the table. Digital is the same, the constraints are just less visible.",
      "For more than five years I've been designing digital products in startup environments: healthtech, fintech, mobility. Mostly in small teams, where the designer doesn't receive a closed brief but takes part in defining what gets built and why.",
      "My focus is scale. Not making one screen look good, but leaving behind a system — of components, criteria and documented decisions — that lets the team keep moving fast when I'm no longer in the room.",
      "Today I bring AI tooling into the design workflow to speed up validation and insights: synthesizing research, exploring variants and prototyping functionally in less time. The tool changed; the judgement behind the decision is still the job.",
    ],
    lookingLabel: "What I'm looking for",
    looking:
      "Product Lead or Senior Product Designer roles on teams where design takes part in defining the product, not just executing it. I'm especially drawn to products with real complexity: many user types, regulatory constraints, or decisions with consequences.",
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
      canonical: `${site.url}/${locale}/about`,
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
