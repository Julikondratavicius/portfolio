import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { site, nav as navItems } from "@/content/site";

export function Footer({ lang }: { lang: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline py-8">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <span className="text-[0.78rem] font-light text-ink-3">
          © {year} {site.name} — {site.location[lang]}
        </span>

        <nav className="flex flex-wrap gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={href(item.href, lang)}
              className="text-[0.78rem] text-ink-3 no-underline transition-colors duration-[250ms] hover:text-ink"
            >
              {item.label[lang]}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="text-[0.78rem] text-ink-3 no-underline transition-colors duration-[250ms] hover:text-ink"
          >
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] text-ink-3 no-underline transition-colors duration-[250ms] hover:text-ink"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
