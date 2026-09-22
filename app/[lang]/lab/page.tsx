import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { site } from "@/content/site";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  return { title: locale === "es" ? "Lab" : "Lab", description: locale === "es" ? "Productos y experimentos en construcción de Julián Kondratavicius." : "Products and experiments in progress by Julián Kondratavicius.", alternates: { canonical: `${site.url}/${locale}/lab` } };
}

export default async function LabPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const es = lang === "es";
  return <>
    <section className="wrap page-hero">
      <p className="eyebrow">04 / LAB · {es ? "EN PROCESO" : "IN PROGRESS"}</p>
      <h1>{es ? "Construir también es parte del trabajo." : "Building is part of the work."}</h1>
      <p>{es ? "Un espacio para productos propios, pruebas y preguntas que siguen abiertas." : "A space for independent products, experiments and questions still in progress."}</p>
    </section>
    <section className="wrap" style={{ paddingBottom: "clamp(80px, 11vw, 150px)" }}>
      <div className="lab-list">
        <article className="lab-row">
          <div><h2>Blox</h2><p>{es ? "Plataforma en construcción para explorar performance y cuidado del atleta desde una mirada de producto." : "A product in progress exploring athlete performance and care."}</p></div>
          <span className="lab-state">WIP · {es ? "EN DESARROLLO" : "IN DEVELOPMENT"}</span>
          <div><span className="t-label">{es ? "Qué" : "What"}</span><p>{es ? "Un producto propio en el que investigar el problema, definir una propuesta y construir con tecnología." : "An independent product to investigate a problem, define a proposition and build with technology."}</p></div>
        </article>
      </div>
    </section>
  </>;
}
