import type { Metadata, Viewport } from "next";
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
    title: `${site.name} — Senior Product Designer & Design Lead`,
    description: "Senior Product Designer y Design Lead en Rosario, Argentina (remoto). +5 años llevando productos SaaS de healthtech, fintech y movilidad de 0 a 1, con design systems e IA en todo el proceso.",
  },
  en: {
    title: `${site.name} — Senior Product Designer & Design Lead`,
    description: "Senior Product Designer and Design Lead based in Rosario, Argentina (remote). 5+ years taking healthtech, fintech and mobility SaaS products from 0 to 1, with design systems and AI across the process.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
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
    applicationName: site.name,
    category: "design",
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    keywords: [
      "Senior Product Designer",
      "Lead Product Designer",
      "Design Lead",
      "Product Designer Argentina",
      "Product Designer Rosario",
      "Design Systems",
      "AI Product Design",
      "UX Strategy",
      "SaaS",
      "HealthTech",
      "Fintech",
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
      alternateLocale: [htmlLang[locale === "es" ? "en" : "es"].replace("-", "_")],
      images: [{ url: `/og-${locale}.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/og-${locale}.png`],
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
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        alternateName: "Julian Kondratavicius",
        jobTitle: "Senior Product Designer & Design Lead",
        description: meta[locale].description,
        email: `mailto:${site.email}`,
        url: `${site.url}/${locale}`,
        image: `${site.url}/og-${locale}.png`,
        address: { "@type": "PostalAddress", addressLocality: "Rosario", addressRegion: "Santa Fe", addressCountry: "AR" },
        nationality: { "@type": "Country", name: "Argentina" },
        sameAs: [site.linkedin, "https://github.com/Julikondratavicius"],
        knowsLanguage: ["es", "en"],
        knowsAbout: [
          "Product Design", "Product Strategy", "Design Systems", "UX Research", "Product Discovery",
          "AI-assisted product design", "Prototyping", "SaaS", "HealthTech", "Fintech", "Mobility as a Service",
          "Figma", "Claude Code", "v0", "Design Leadership",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Product Designer",
          occupationLocation: { "@type": "Country", name: "Argentina" },
          skills: "Product Strategy, Design Systems, UX Research, Prototyping, AI-assisted design, Stakeholder Management, Team Leadership",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: meta[locale].description,
        inLanguage: ["es-AR", "en-US"],
        publisher: { "@id": `${site.url}/#person` },
      },
    ],
  };

  return (
    <html lang={htmlLang[locale]} className={`${sans.variable} ${mono.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Aplica el tema guardado antes de pintar, sin parpadeo. Oscuro por defecto. */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}` }} />
      </head>
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
