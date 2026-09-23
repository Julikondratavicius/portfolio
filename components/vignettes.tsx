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
    braintly: <Cms es={es} />,
    "rosario-fitness-games": <Leaderboard es={es} />,
    konstrudesch: <Builder es={es} />,
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

function Cms({ es }: { es: boolean }) {
  return (
    <>
      <div className="browser">
        <div className="browser-bar"><i /><i /><i /><span>braintly.com</span></div>
        <div className="browser-body">
          <aside>
            <p className="ui-muted">{es ? "Páginas" : "Pages"}</p>
            {["Home", es ? "Servicios" : "Services", "Cases", "Blog", es ? "Contacto" : "Contact"].map((p, i) => <div key={p} className={i === 1 ? "on" : ""}>{p}</div>)}
          </aside>
          <div className="canvas">
            <div className="blk blk-hero"><span /><span /><span className="blk-btn" /></div>
            <div className="blk-row"><div className="blk" /><div className="blk" /><div className="blk" /></div>
            <div className="blk blk-wide" />
          </div>
        </div>
      </div>
      <div className="float-chip chip-a"><span className="toggle" />{es ? "Publicado por el cliente" : "Published by the client"}</div>
      <div className="float-chip chip-b">Webflow CMS · {es ? "sin depender de dev" : "no dev needed"}</div>
    </>
  );
}

function Leaderboard({ es }: { es: boolean }) {
  const rows = [["1", "MR", "486"], ["2", "LG", "471"], ["3", "SP", "455"], ["4", "TC", "440"], ["5", "AV", "432"]];
  return (
    <>
      <Phone className="phone-dark phone-rfg">
        <div className="ui-top"><span className="rfg-logo">RFG<small>2026</small></span><span className="ui-muted">≡</span></div>
        <p className="ui-title">Leaderboard</p>
        <div className="rfg-tabs"><span className="on">RX</span><span>Scaled</span><span>Masters</span></div>
        <div className="rfg-rows">
          {rows.map(([pos, name, pts]) => (
            <div key={pos} className="rfg-row"><span className="rfg-pos">{pos}</span><span className="rfg-av">{name}</span><span className="rfg-bar"><i /></span><strong>{pts}</strong></div>
          ))}
        </div>
        <div className="ui-button rfg-cta">{es ? "Ver workouts" : "See workouts"}</div>
      </Phone>
      <div className="float-chip chip-a">🏋️ 380 {es ? "atletas" : "athletes"} · 6 workouts</div>
      <div className="float-chip chip-b"><span className="ui-dot" />{es ? "Sumate como sponsor" : "Become a sponsor"}</div>
    </>
  );
}

function Builder({ es }: { es: boolean }) {
  return (
    <>
      <div className="browser browser-dark">
        <div className="browser-bar"><i /><i /><i /><span>konstrudesch.com.ar</span></div>
        <div className="kd-body">
          <div className="kd-nav"><b>K<em>DESCH</em></b><span /><span /><span className="kd-btn" /></div>
          <p className="kd-title">{es ? "Construimos" : "Building"}<br />{es ? "el " : "the "}<em>{es ? "futuro" : "future"}</em><br />{es ? "hoy" : "today"}</p>
          <span className="kd-big">20+</span>
          <div className="kd-cards">{[0, 1, 2].map((i) => <div key={i} className="kd-card"><i /><span /></div>)}</div>
        </div>
      </div>
      <div className="float-chip chip-a">ES / EN</div>
      <div className="float-chip chip-b">🏗️ {es ? "Obras en 8 provincias" : "Works in 8 provinces"}</div>
    </>
  );
}
