import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";

/**
 * Encabezado de sección: número + título con acento en negrita.
 * El título acepta **negritas** para el contraste de peso.
 */
export function SectionHead({
  n,
  title,
  intro,
  aside,
}: {
  n: string;
  title: string;
  intro?: string;
  aside?: ReactNode;
}) {
  return (
    <Reveal className="mb-[clamp(40px,6vh,80px)] flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <div className="t-label mb-3">{n}</div>
        <h2 className="t-h2 t-display-strong">
          <RichText text={title} />
        </h2>
        {intro ? <p className="t-lead mt-5">{intro}</p> : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </Reveal>
  );
}
