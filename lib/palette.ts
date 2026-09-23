/**
 * Colores de marca de cada proyecto, tomados de sus sitios oficiales:
 * fondo del panel, texto y acento.
 */
export const palette: Record<string, { bg: string; fg: string; accent: string }> = {
  // wehealthy (doc24): índigo + degradé rosa → naranja
  "doc24-wehealthy": { bg: "#2a2673", fg: "#eef3fb", accent: "#ff91ff" },
  // LB Finanzas (ex LetsBit): violeta + lavanda
  letsbit: { bg: "#522398", fg: "#fbfaff", accent: "#f4e9fe" },
  // Ualabee: azul + celeste
  ualabee: { bg: "#1b6afe", fg: "#ffffff", accent: "#e2ecff" },
  // Rosario Fitness Games: navy + azul eléctrico
  "rosario-fitness-games": { bg: "#0a1a38", fg: "#f7fbff", accent: "#2c92f1" },
  // Konstrudesch: navy + naranja
  konstrudesch: { bg: "#1c2535", fg: "#f8f6f2", accent: "#e8850a" },
  // Braintly: negro + menta
  braintly: { bg: "#0f0f0f", fg: "#ffffff", accent: "#47ffcb" },
};

export function toneFor(slug: string) {
  return palette[slug] ?? palette.braintly;
}
