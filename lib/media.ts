import fs from "node:fs";
import path from "node:path";

/**
 * ¿El archivo existe dentro de /public?
 *
 * Se evalúa en build (Server Component), así que no cuesta nada en el cliente.
 * Sirve para que el sitio funcione con placeholders hasta que subas las
 * imágenes reales: apenas dejás el archivo en su ruta, la card lo usa sola.
 */
export function publicFileExists(src?: string): boolean {
  if (!src || !src.startsWith("/")) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src.slice(1)));
  } catch {
    return false;
  }
}
