"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** "stagger" anima los hijos directos en cascada. */
  mode?: "single" | "stagger";
  as?: ElementType;
  className?: string;
  id?: string;
}

/**
 * Revela el contenido al entrar en viewport, una sola vez.
 * El CSS de prefers-reduced-motion ya neutraliza la animación; acá sólo
 * agregamos la clase que dispara la transición.
 */
export function Reveal({
  children,
  mode = "single",
  as: Tag = "div",
  className = "",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si ya está en pantalla al montar (o el navegador no soporta el
    // observer), mostramos sin esperar al scroll.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const attr =
    mode === "stagger"
      ? { "data-reveal-stagger": "" }
      : { "data-reveal": "" };

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={className}
      {...attr}
    >
      {children}
    </Tag>
  );
}
