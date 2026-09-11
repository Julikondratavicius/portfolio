import type { Locale } from "@/lib/i18n";
import { site, ui } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";

export function Cta({ lang }: { lang: Locale }) {
  return (
    <section
      id="contact"
      className="py-[clamp(80px,14vh,180px)] text-center"
    >
      <div className="wrap">
        <Reveal>
          <div className="t-label mb-7">{ui.ctaLabel[lang]}</div>
        </Reveal>

        <Reveal>
          <h2 className="t-display t-display-strong mx-auto mb-10 max-w-[16ch]">
            <RichText text={ui.ctaTitle[lang]} />
          </h2>
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-5">
          <a href={`mailto:${site.email}`} className="btn btn-fill group">
            {ui.ctaMail[lang]}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
