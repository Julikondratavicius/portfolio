import Link from "next/link";

export default function NotFound() {
  return <main className="not-found shell"><div><p className="eyebrow">404</p><h1>{"Esta página no existe."}</h1><p>This page doesn’t exist.</p><Link href="/es">← Volver al portfolio</Link></div></main>;
}
