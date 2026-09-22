"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[]; }
}

function emit(event: string, detail: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...detail });
}

export function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    emit("portfolio_view", { page_path: pathname });
    const project = pathname.match(/\/work\/([^/]+)/)?.[1];
    if (project) emit("project_open", { project });

    const sent = new Set<number>();
    let ticking = false;
    const onScroll = () => {
      if (!project || ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const progress = total > 0 ? Math.min(100, Math.round(window.scrollY / total * 100)) : 100;
        for (const milestone of [25, 50, 75, 100]) {
          if (progress >= milestone && !sent.has(milestone)) {
            sent.add(milestone);
            emit(milestone === 100 ? "case_study_complete" : `case_study_${milestone}`, { project, progress: milestone });
          }
        }
        ticking = false;
      });
    };
    const onClick = (event: MouseEvent) => {
      const element = (event.target as HTMLElement | null)?.closest<HTMLElement>("a,button,[data-track]");
      if (!element) return;
      if (element.matches("[data-track='prototype_play']")) emit("prototype_play");
      if (element instanceof HTMLAnchorElement) {
        const href = element.getAttribute("href") || "";
        if (element.hasAttribute("download")) emit("cv_download");
        if (href.includes("linkedin.com")) emit("linkedin_click");
        if (href.startsWith("mailto:")) emit("contact_click");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);
  return null;
}
