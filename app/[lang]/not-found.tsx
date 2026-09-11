import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="wrap">
        <div className="t-label mb-5">404</div>
        <h1 className="t-h1 t-display-strong mb-6 max-w-[16ch]">
          Esta página no <strong>existe</strong>
        </h1>
        <p className="t-lead mb-10 max-w-[46ch]">
          El enlace puede estar mal escrito o el contenido ya no está acá.
          <br />
          <span className="text-ink-3">
            This page doesn&apos;t exist. The link may be wrong or the content
            has moved.
          </span>
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/es" className="btn btn-fill">
            Ir al inicio
          </Link>
          <Link href="/en" className="btn btn-outline">
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
