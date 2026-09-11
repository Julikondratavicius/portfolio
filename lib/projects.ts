import type { Project } from "./types";
import { doc24 } from "@/content/projects/doc24";
import { letsbit } from "@/content/projects/letsbit";
import { ualabee } from "@/content/projects/ualabee";
import { braintly } from "@/content/projects/braintly";

/**
 * Registro de proyectos.
 * Para sumar uno nuevo: creá el archivo en content/projects/ (copiá doc24.ts
 * como plantilla), importalo acá y agregalo al array. Nada más.
 */
const all: Project[] = [doc24, letsbit, ualabee, braintly];

/** Sólo los publicados, ordenados. */
export const projects: Project[] = all
  .filter((p) => p.published)
  .sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** El siguiente proyecto en la lista, para el cierre del case study. */
export function getNextProject(slug: string): Project | undefined {
  if (projects.length < 2) return undefined;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return undefined;
  return projects[(i + 1) % projects.length];
}

/** Los destacados para la home. */
export function getFeaturedProjects(limit = 4): Project[] {
  return projects.slice(0, limit);
}
