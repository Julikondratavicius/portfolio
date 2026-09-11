/**
 * Manejo del contenido pendiente.
 *
 * En desarrollo, cualquier string que empiece con "TODO:" se muestra resaltado
 * en amarillo para que veas exactamente qué falta completar.
 * En producción esos strings NO se renderizan: preferimos una sección más corta
 * antes que publicar un placeholder delante de un recruiter.
 *
 * Corré `npm run content:check` para listar todo lo que queda pendiente.
 */
export const SHOW_TODOS = process.env.NODE_ENV !== "production";

export function isTodo(text: string): boolean {
  return text.trimStart().startsWith("TODO:");
}

/** Filtra los pendientes en producción. */
export function visible(list: readonly string[]): string[] {
  return SHOW_TODOS ? [...list] : list.filter((s) => !isTodo(s));
}

/** Para un string suelto: devuelve null si es pendiente y estamos en producción. */
export function visibleText(text: string | undefined): string | null {
  if (!text) return null;
  if (isTodo(text) && !SHOW_TODOS) return null;
  return text;
}
