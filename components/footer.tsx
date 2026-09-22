import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/href";
import { site, nav as navItems } from "@/content/site";

export function Footer({ lang }: { lang: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>
          © {year} {site.name} — {site.location[lang]}
        </span>

        <nav className="footer-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={href(item.href, lang)}
              className="transition-colors duration-[250ms] hover:text-ink"
            >
              {item.label[lang]}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="transition-colors duration-[250ms] hover:text-ink"
          >
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-[250ms] hover:text-ink"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
