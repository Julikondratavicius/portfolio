# juliankondratavicius.com

Portfolio de Julián Kondratavicius — Senior Product Designer.
Next.js 15 (App Router) · TypeScript · Tailwind v4 · estático, desplegado en Vercel.

---

## Arrancar

```bash
npm install
npm run dev
```

Abre en <http://localhost:3000> y redirige a `/es`.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (el mismo que corre Vercel) |
| `npm run typecheck` | Chequea tipos sin compilar |
| `npm run content:check` | **Lista todo el contenido que falta completar** |

---

## Dónde se edita cada cosa

Todo el contenido vive en `content/`. **No hace falta tocar componentes para actualizar el sitio.**

```
content/
├── site.ts              Copy global: hero, principios, experiencia,
│                        skills, testimonios, formación, microcopy
└── projects/
    ├── doc24.ts         ← plantilla de referencia del formato deep-dive
    ├── letsbit.ts
    ├── ualabee.ts
    └── braintly.ts
```

| Quiero cambiar… | Archivo |
| --- | --- |
| Mi bio, el titular del hero | `content/site.ts` → `hero` |
| Cómo trabajo / principios | `content/site.ts` → `principles` |
| Experiencia laboral | `content/site.ts` → `experience` |
| Skills y herramientas | `content/site.ts` → `skills` |
| Testimonios | `content/site.ts` → `testimonials` |
| Textos de la interfaz (botones, labels) | `content/site.ts` → `ui` |
| Un proyecto | `content/projects/<slug>.ts` |
| Colores, tipografía, espaciados | `app/globals.css` → bloque `@theme` |
| Texto de la página "Sobre mí" | `app/[lang]/about/page.tsx` → `copy` |

---

## Sumar un proyecto nuevo

1. Copiá `content/projects/doc24.ts` a `content/projects/mi-proyecto.ts`.
2. Cambiá el `slug` (es la URL: `/es/work/mi-proyecto`) y completá el contenido.
3. Importalo y agregalo al array en `lib/projects.ts`.
4. Poné las imágenes en `public/images/projects/` con el nombre que declaraste en `cover.src`.

Listo. Sitemap, rutas ES/EN, metadatos y navegación "siguiente proyecto" se generan solos.

Mientras no quieras publicarlo todavía, dejá `published: false` y desaparece del
sitio y del sitemap sin borrar nada.

### La estructura del case study

Cada caso sigue la misma narrativa, y eso es deliberado: la consistencia es
parte de la señal.

```
headline      Una línea de impacto
metrics       Los números (o "A medir" si no los tenés)
chapters      Contexto → Problema → Research → Proceso → Resultado
decisions     Alternativas → Qué elegí → Por qué → Qué resigné
learnings     Qué te llevaste
```

El bloque `decisions` es el que diferencia un portfolio Senior de uno Lead.
Un caso sin trade-offs explícitos es un caso que no muestra criterio.

---

## Contenido pendiente

El contenido que todavía no completaste está marcado con `TODO:` en los
archivos de `content/`.

```bash
npm run content:check
```

Comportamiento:

- **En desarrollo** los `TODO:` se ven resaltados en amarillo, para que sepas qué falta.
- **En producción no se renderizan.** Preferimos una sección más corta antes que
  publicar un placeholder delante de un recruiter.
- Las métricas con `value: null` se muestran como **"A medir"** en lugar de
  inventar una cifra. Si nunca la mediste, eso es lo honesto — y es una respuesta
  perfectamente profesional en una entrevista.

---

## Imágenes

Poné los archivos en `public/images/projects/`.

- El sitio detecta solo si el archivo existe. Mientras no esté, la tarjeta usa
  un placeholder con el color de acento del proyecto (se ve intencional, no roto).
- Formato: JPG o WebP, ~2400px de ancho, comprimido. Next genera AVIF/WebP solo.
- El CV va en `public/cv/` con el nombre declarado en `content/site.ts` → `site.cv`.
  El botón de descarga aparece solo cuando el archivo existe.

---

## Idiomas

Rutas reales por idioma: `/es/...` y `/en/...`, con `hreflang` y canonical
correctos. No es un toggle de JavaScript: Google indexa las dos versiones
por separado, que es lo que querés si aplicás a roles afuera.

Para agregar un idioma: sumalo a `locales` en `lib/i18n.ts` y completá ese
idioma en todos los objetos de `content/`. TypeScript te va a marcar cada
lugar que falte.

---

## Deploy

Ver [DEPLOY.md](./DEPLOY.md) — el paso a paso completo de Vercel + el DNS en Hostinger.
