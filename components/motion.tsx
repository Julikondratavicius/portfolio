"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

/**
 * Scroll con inercia (Lenis) + observer global de reveals.
 * Cualquier elemento con [data-reveal] recibe .is-in al entrar en pantalla,
 * así los server components pueden animar sin volverse client components.
 */
export function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    if (reduced()) return;
    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), anchors: { offset: -80 } });
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    if (reduced() || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

/** Cursor que sigue al mouse y se expande con etiqueta sobre [data-cursor]. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!finePointer() || reduced()) return;
    const el = ref.current;
    if (!el) return;
    document.documentElement.classList.add("has-cursor");
    let x = window.innerWidth / 2, y = window.innerHeight / 2, cx = x, cy = y;
    let frame = 0;
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button");
      const text = target?.dataset.cursor ?? "";
      setLabel(text);
      el.dataset.state = text ? "label" : target?.closest(".site-header") ? "nav" : target ? "link" : "";
      el.style.opacity = "1";
    };
    const leave = () => { el.style.opacity = "0"; };
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden="true"><span>{label}</span></div>;
}

/** Botón/link que se “pega” al cursor cuando está cerca. */
export function Magnetic({ children, strength = 0.35, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer() || reduced()) return;
    const move = (event: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = event.clientX - (r.left + r.width / 2);
      const dy = event.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const reset = () => { el.style.transform = ""; };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [strength]);
  return <span ref={ref} className={`magnetic ${className}`}>{children}</span>;
}

/** Número que cuenta hacia arriba cuando entra en pantalla. */
export function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    setShown(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1400);
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{prefix}{shown}{suffix}</span>;
}

/**
 * Párrafo que se “enciende” palabra por palabra a medida que scrolleás.
 */
export function ScrollText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("span"));
    if (reduced()) {
      spans.forEach((s) => s.classList.add("on"));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const lit = Math.round(progress * spans.length);
      spans.forEach((s, i) => s.classList.toggle("on", i < lit));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [text]);
  return <p ref={ref} className={`scroll-text ${className}`}>{words.map((w, i) => <span key={i}>{w} </span>)}</p>;
}

/** Barra de progreso de lectura fija arriba. */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="reading-progress" aria-hidden="true"><div ref={ref} /></div>;
}

/** Índice lateral que marca el capítulo visible. */
export function ChapterIndex({ items, label }: { items: { id: string; label: string }[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);
  return (
    <nav className="chapter-index" aria-label={label}>
      {items.map((item, i) => (
        <a key={item.id} href={`#${item.id}`} className={active === item.id ? "is-active" : ""}>
          <span>{String(i + 1).padStart(2, "0")}</span>{item.label}
        </a>
      ))}
    </nav>
  );
}

/** Copia el email con feedback, en vez de abrir el cliente de correo a ciegas. */
export function CopyEmail({ email, copyLabel, copiedLabel }: { email: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={`copy-email ${copied ? "is-copied" : ""}`}
      data-cursor={copied ? copiedLabel : copyLabel}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
    >
      <span className="copy-email-text">{email}</span>
      <span className="copy-email-state" aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
    </button>
  );
}
