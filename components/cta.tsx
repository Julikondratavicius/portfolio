import type { Locale } from "@/lib/i18n";
import { site } from "@/content/site";

export function Cta({ lang }: { lang: Locale }) {
  return <section id="contact" className="section wrap" style={{ textAlign: "center" }}>
    <p className="eyebrow" style={{ justifyContent: "center" }}>{lang === "es" ? "Contacto" : "Contact"}</p>
    <h2 style={{ maxWidth: "13ch", margin: "0 auto 28px", fontSize: "clamp(2.8rem,7vw,6rem)", fontWeight: 350, lineHeight: 1, letterSpacing: "-.07em" }}>{lang === "es" ? "Hablemos de lo que sigue." : "Let’s talk about what comes next."}</h2>
    <a className="button-primary" href={`mailto:${site.email}`}>{site.email}<span aria-hidden="true">↗</span></a>
  </section>;
}
