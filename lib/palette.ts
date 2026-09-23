/** Color de cada proyecto: fondo del panel, texto y acento. */
export const palette: Record<string, { bg: string; fg: string; accent: string }> = {
  "doc24-wehealthy": { bg: "#0f3b33", fg: "#e9f7f1", accent: "#6ee7b7" },
  letsbit: { bg: "#15152e", fg: "#ecebff", accent: "#a5b4fc" },
  ualabee: { bg: "#f4c430", fg: "#1c1a12", accent: "#1c1a12" },
  braintly: { bg: "#f3d3e0", fg: "#2a1420", accent: "#b0306a" },
};

export function toneFor(slug: string) {
  return palette[slug] ?? palette.braintly;
}
