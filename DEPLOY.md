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

Los commits salen con `jjkondratavicius@gmail.com` (config de git local y
global). Ese email tiene que estar agregado y verificado en
GitHub → Settings → Emails de la cuenta `Julikondratavicius`; si no, Vercel
no reconoce al autor y bloquea el deploy.

## Dominio

El sitio usa `jkondratavicius.com` como URL canónica (`content/site.ts`).
Para servirlo desde Vercel: **Project → Settings → Domains**, agregar el dominio
y cargar en el DNS los registros que muestre Vercel. No cambies los registros
de correo (MX, SPF, DKIM o DMARC).

## Variables de entorno

La versión actual del sitio no necesita variables de entorno.
