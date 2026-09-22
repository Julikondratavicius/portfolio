"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const dimensions = {
  es: [
    { key: "usuario", label: "USUARIO", detail: "Necesidades · comportamientos · contexto", x: 50, y: 8 },
    { key: "negocio", label: "NEGOCIO", detail: "Valor · estrategia · escalabilidad", x: 92, y: 76 },
    { key: "tecnologia", label: "TECNOLOGÍA", detail: "Factibilidad · sistemas · delivery", x: 8, y: 76 },
  ],
  en: [
    { key: "usuario", label: "PEOPLE", detail: "Needs · behaviors · context", x: 50, y: 8 },
    { key: "negocio", label: "BUSINESS", detail: "Value · strategy · scale", x: 92, y: 76 },
    { key: "tecnologia", label: "TECHNOLOGY", detail: "Feasibility · systems · delivery", x: 8, y: 76 },
  ],
} as const;

export function ProductMap({ lang, compact = false }: { lang: Locale; compact?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const current = dimensions[lang].find((item) => item.key === active);
  return <div className={`product-map ${compact ? "product-map-compact" : ""}`}>
    <div className="map-kicker">{lang === "es" ? "UN SISTEMA DE DECISIONES" : "A DECISION SYSTEM"}</div>
    <svg className="map-lines" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 16 L82 72 L18 72 Z" />
      <path className={active ? "line-active" : ""} d={active === "usuario" ? "M50 16 L50 50" : active === "negocio" ? "M82 72 L50 50" : active === "tecnologia" ? "M18 72 L50 50" : "M50 16 L50 50 M82 72 L50 50 M18 72 L50 50"} />
      <circle cx="50" cy="50" r="1.2" />
    </svg>
    <div className="map-center"><strong>PRODUCTO</strong><span>{current?.detail ?? (lang === "es" ? "Decisiones" : "Decisions")}</span></div>
    {dimensions[lang].map((item) => <button key={item.key} type="button" className={`map-node map-node-${item.key} ${active === item.key ? "is-active" : ""}`} onMouseEnter={() => setActive(item.key)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(item.key)} onBlur={() => setActive(null)} aria-label={`${item.label}: ${item.detail}`}>
      <span className="map-node-dot" />{item.label}
    </button>)}
    <span className="map-index">01—03</span>
  </div>;
}
