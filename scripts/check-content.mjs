#!/usr/bin/env node
/**
 * Lista todo el contenido que falta completar.
 *
 *   npm run content:check
 *
 * Busca strings "TODO:" y métricas con `value: null` dentro de content/.
 * En producción ese contenido no se renderiza, así que esto es tu checklist
 * de lo que todavía no está contando nada en el sitio.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const contentDir = join(root, "content");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (full.endsWith(".ts") || full.endsWith(".tsx")) out.push(full);
  }
  return out;
}

const files = walk(contentDir);
let todos = 0;
let nulls = 0;

for (const file of files) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  const hits = [];

  lines.forEach((line, i) => {
    if (line.includes("TODO:")) {
      hits.push({ n: i + 1, kind: "TODO", text: line.trim() });
      todos++;
    } else if (/value:\s*null/.test(line)) {
      hits.push({ n: i + 1, kind: "METRIC", text: line.trim() });
      nulls++;
    }
  });

  if (hits.length > 0) {
    console.log(`\n  ${relative(root, file)}`);
    for (const hit of hits) {
      const label = hit.kind === "TODO" ? "TODO  " : "MÉTRICA";
      const text =
        hit.text.length > 96 ? hit.text.slice(0, 96) + "…" : hit.text;
      console.log(`    ${String(hit.n).padStart(4)}  ${label}  ${text}`);
    }
  }
}

console.log(
  `\n  ${todos} pendientes de texto · ${nulls} métricas sin medir\n` +
    `  Nada de esto se publica: en producción los TODO no se renderizan\n` +
    `  y las métricas sin valor se muestran como "A medir".\n`,
);
