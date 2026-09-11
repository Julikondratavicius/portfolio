"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { hero, site } from "@/content/site";
import { RichText } from "@/components/rich-text";

export function Hero({ lang }: { lang: Locale }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      className={`flex min-h-[100svh] items-end pb-[clamp(48px,8vh,100px)] pt-32 ${
        entered ? "hero-in" : ""
      }`}
    >
      <div className="wrap w-full">
        <div className="mb-8 overflow-hidden">
          <span
            className={`t-label inline-block transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              entered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {hero.available[lang]}
          </span>
        </div>

        <h1 className="t-display t-display-strong mb-12">
          {hero.headline[lang].map((line, i) => (
            <span key={i} className="line-mask">
              <span>
                <RichText text={line} />
              </span>
            </span>
          ))}
        </h1>

        <div className="flex flex-wrap items-end justify-between gap-10">
          <p className="max-w-[520px] text-base font-light leading-relaxed text-ink-2">
            {hero.bio[lang]}
          </p>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-1.5 text-[0.85rem] text-ink-2 no-underline transition-colors duration-300 hover:text-ink"
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
              className="group flex items-center gap-1.5 text-[0.85rem] text-ink-2 no-underline transition-colors duration-300 hover:text-ink"
            >
              LinkedIn
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
