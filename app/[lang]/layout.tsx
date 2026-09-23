import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, htmlLang, type Locale } from "@/lib/i18n";
import { site } from "@/content/site";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import { Header, FloatingCta } from "@/components/chrome";
import { MotionRoot, Cursor } from "@/components/motion";
import "../globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: `${site.name} — ${site.role}`,
    description: "Diseñador de producto digital y design lead en Rosario, Argentina. Estrategia, experiencia y sistemas para productos que avanzan.",
  },
  en: {
    title: `${site.name} — ${site.role}`,
    description: "Digital product designer and design lead in Rosario, Argentina. Strategy, experience and systems for products that move forward.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const { title, description } = meta[locale];

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s — ${site.name}`,
    },
    description,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    icons: { icon: "/favicon.svg" },
    keywords: [
      "Product Designer",
      "Senior Product Designer",
      "Design Systems",
      "Product Lead",
      "UX Strategy",
      "UX Research",
      site.name,
    ],
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: {
        "es-AR": `${site.url}/es`,
        "en-US": `${site.url}/en`,
        "x-default": `${site.url}/es`,
      },
    },
    openGraph: {
      type: "website",
      url: `${site.url}/${locale}`,
      siteName: site.name,
      title,
      description,
      locale: htmlLang[locale].replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: meta[locale].description,
    email: site.email,
    url: site.url,
    sameAs: [site.linkedin],
    knowsAbout: [
      "Product Design",
      "Design Systems",
      "UX Research",
      "Product Strategy",
      "Figma",
      "AI-driven Design",
      "SaaS",
      "HealthTech",
      "Product Building",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: site.role,
      skills:
        "Product Strategy, Design Systems, UX Research, Prototyping, Design Thinking, Scrum/Agile, Team Leadership",
    },
  };

  return (
    <html lang={htmlLang[locale]} className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="skip-link"
        >
          {locale === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>

        <Header locale={locale} />
        <div id="main">{children}</div>
        <FloatingCta locale={locale} />
        <Cursor />
        <MotionRoot />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
