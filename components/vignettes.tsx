import type { Locale } from "@/lib/i18n";

/**
 * Recreaciones de UI hechas en código para cada proyecto.
 * No son capturas reales (varias están bajo NDA): muestran el tipo de problema
 * que resolví. Cuando haya capturas reales, se cargan en `cover` del proyecto
 * y reemplazan a la viñeta automáticamente.
 */
export function Vignette({ slug, locale, size = "card" }: { slug: string; locale: Locale; size?: "card" | "hero" }) {
  const es = locale === "es";
  const body = {
    "doc24-wehealthy": <Wellness es={es} />,
    letsbit: <Crypto es={es} />,
    ualabee: <Transit es={es} />,
    braintly: <Site src="/images/projects/braintly-web.webp" domain="braintly.com" alt="Braintly" chips={[es ? "Sitio en Webflow" : "Webflow site", es ? "Editable por el cliente" : "Client-editable"]} />,
    "rosario-fitness-games": <Site src="/images/projects/rfg-web.webp" domain="rosariofitnessgames.com" alt="Rosario Fitness Games" chips={[`380 ${es ? "atletas" : "athletes"} · 6 workouts`, es ? "Leaderboard por categoría" : "Leaderboard by category"]} />,
    konstrudesch: <Site src="/images/projects/konstrudesch-web.webp" domain="konstrudesch.com.ar" alt="Konstrudesch" chips={["ES / EN", es ? "Obras en 8 provincias" : "Works in 8 provinces"]} />,
    blox: <Site src="/images/projects/blox-web.webp" domain="getblox.io" alt="Blox" chips={["SaaS 0→1", es ? "Construido con IA" : "Built with AI"]} />,
  }[slug];
  if (!body) return null;
  return (
    <div className={`vignette vignette-${slug} vignette-${size}`}>
      {body}
    </div>
  );
}

function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}

function Wellness({ es }: { es: boolean }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shot" src="/images/projects/wehealthy-home.png" width={412} height={833} alt={es ? "Home de la app Wehealthy" : "Wehealthy app home"} loading="lazy" />
      <div className="float-chip chip-a"><span className="swatches"><i /><i /><i /><i /></span>tokens / color</div>
      <div className="float-chip chip-b"><span className="btn-states"><i /><i /><i /></span>Button · 7 {es ? "estados" : "states"}</div>
      <div className="float-chip chip-c">🔒 {es ? "Tu empresa sólo ve datos agregados" : "Your company only sees aggregates"}</div>
    </>
  );
}

function Crypto({ es }: { es: boolean }) {
  return (
    <>
      <Phone className="phone-dark">
        <div className="ui-top"><span className="ui-muted">←</span><span className="ui-muted">{es ? "Revisar envío" : "Review transfer"}</span></div>
        <p className="ui-amount">0.0021 <small>BTC</small></p>
        <p className="ui-muted ui-center">≈ USD 142,30</p>
        <div className="ui-list">
          <div><span>{es ? "Red" : "Network"}</span><strong>Bitcoin</strong></div>
          <div><span>{es ? "Dirección" : "Address"}</span><strong>bc1q…8f3k</strong></div>
          <div><span>{es ? "Comisión" : "Fee"}</span><strong>0.00002</strong></div>
        </div>
        <div className="ui-check"><span className="tick" />{es ? "Verifiqué la dirección" : "I checked the address"}</div>
        <div className="slide"><span className="slide-knob">→</span>{es ? "Deslizá para confirmar" : "Slide to confirm"}</div>
      </Phone>
      <div className="float-chip chip-a">⚠︎ {es ? "Las operaciones no se pueden deshacer" : "Transfers can't be undone"}</div>
      <div className="float-chip chip-b"><span className="ui-dot" />{es ? "Prototipo validado" : "Prototype validated"}</div>
    </>
  );
}

function Transit({ es }: { es: boolean }) {
  return (
    <>
      <Phone>
        <div className="map">
          <svg viewBox="0 0 200 150" preserveAspectRatio="none">
            <path d="M-10 120 C 40 110, 60 60, 110 70 S 170 30, 215 20" className="route" />
            <path d="M-10 40 L 210 130" className="street" /><path d="M60 -10 L 90 160" className="street" /><path d="M150 -10 L 130 160" className="street" />
          </svg>
          <span className="bus" /><span className="me" />
        </div>
        <div className="arrival">
          <span className="line-badge">116</span>
          <div><strong>{es ? "Llega en 3 min" : "Arriving in 3 min"}</strong><span className="ui-muted">{es ? "Parada Oroño y Córdoba" : "Oroño & Córdoba stop"}</span></div>
          <span className="live" />
        </div>
        <div className="stops">
          {[es ? "Plaza Pringles" : "Pringles Sq.", "Bv. Oroño", es ? "Terminal" : "Terminal"].map((s, i) => <div key={s}><i className={i === 0 ? "on" : ""} />{s}</div>)}
        </div>
      </Phone>
      <div className="float-chip chip-a">☀︎ {es ? "Alto contraste para usar al sol" : "High contrast for sunlight"}</div>
      <div className="float-chip chip-b">👆 {es ? "Una mano, de pie" : "One hand, standing"}</div>
    </>
  );
}

/** Captura real del sitio, enmarcada en un navegador. */
function Site({ src, domain, alt, chips }: { src: string; domain: string; alt: string; chips: string[] }) {
  return (
    <>
      <figure className="browser browser-shot">
        <div className="browser-bar"><i /><i /><i /><span>{domain}</span></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={1600} height={1000} alt={alt} loading="lazy" decoding="async" />
      </figure>
      <div className="float-chip chip-a">{chips[0]}</div>
      {chips[1] && <div className="float-chip chip-b">{chips[1]}</div>}
    </>
  );
}
