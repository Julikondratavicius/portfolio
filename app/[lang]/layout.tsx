import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale, htmlLang, type Locale } from "@/lib/i18n";
import { site } from "@/content/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: `${site.name} — ${site.role}`,
    description:
      "Senior Product Designer con +5 años de experiencia en productos digitales, Design Systems y estrategia de producto. Disponible para roles de Product Lead.",
  },
  en: {
    title: `${site.name} — ${site.role}`,
    description:
      "Senior Product Designer with 5+ years of experience in digital products, Design Systems and product strategy. Available for Product Lead roles.",
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
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: site.role,
      skills:
        "Product Strategy, Design Systems, UX Research, Prototyping, Design Thinking, Scrum/Agile, Team Leadership",
    },
  };

  return (
    <html lang={htmlLang[locale]} className={outfit.variable}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          {locale === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>

        <Nav lang={locale} />
        <main id="main">{children}</main>
        <Footer lang={locale} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
