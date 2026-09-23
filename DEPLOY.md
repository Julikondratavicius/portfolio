# Publicación en Vercel

## Identidad del proyecto

- Repositorio: `https://github.com/Julikondratavicius/portfolio`
- Rama de producción: `main`
- Framework: Next.js (export estático, `output: "export"` en `next.config.ts`)
- Comando de build: `npm run build`
- En Vercel dejá el Framework Preset en **Next.js** y no toques el Output Directory.

## Deploys bloqueados ("Blocked")

Vercel (plan Hobby) sólo despliega commits cuyo autor es un usuario de GitHub
que tiene acceso al proyecto. Asocia el autor por el **email del commit**.

- `julian.kondratavicius@doc24.com.ar` → vinculado al usuario `Julikondratavicius`. ✅
- `jjkondratavicius@gmail.com` → no está vinculado a ninguna cuenta de GitHub. ❌ Bloqueado.

Este repo tiene fijado el email correcto en su config local de git
(`git config --local user.email`). Si alguna herramienta lo cambia, los deploys
vuelven a bloquearse. Alternativa permanente: agregar el gmail en
GitHub → Settings → Emails.

## Dominio

El sitio usa `juliankondratavicius.com` como URL canónica (`content/site.ts`).
Para servirlo desde Vercel: **Project → Settings → Domains**, agregar el dominio
y cargar en el DNS los registros que muestre Vercel. No cambies los registros
de correo (MX, SPF, DKIM o DMARC).

## Variables de entorno

La versión actual del sitio no necesita variables de entorno.
