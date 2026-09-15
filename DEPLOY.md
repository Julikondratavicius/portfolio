# Deploy: GitHub → Vercel → dominio en Hostinger

Paso a paso, en orden. Cada bloque se puede hacer de una sentada.

---

## 0. Antes de empezar

Verificá que el build pasa en local. Si falla acá, falla en Vercel.

```bash
npm run build
```

---

## 1. Subir el código a GitHub

El repo ya está creado y conectado: `github.com/Julikondratavicius/portfolio`.

```bash
git add -A
git commit -m "Portfolio v2: Next.js, i18n ES/EN y case studies deep-dive"
git push origin main
```

Si `git push` te pide credenciales, usá un Personal Access Token de GitHub
(Settings → Developer settings → Tokens) como contraseña, no tu clave de cuenta.

---

## 2. Importar el proyecto en Vercel

1. Entrá a <https://vercel.com> e iniciá sesión **con tu cuenta de GitHub**
   (así Vercel ve tus repos sin configurar nada).
2. **Add New… → Project**.
3. Buscá `Julikondratavicius/portfolio` y hacé click en **Import**.
4. No cambies nada en la pantalla de configuración. Vercel detecta Next.js solo:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. **Deploy**.

En ~2 minutos tenés el sitio andando en una URL tipo
`portfolio-xxxx.vercel.app`. Abrila y revisá que todo esté bien **antes** de
tocar el dominio.

> A partir de acá, **cada `git push` a `main` publica automáticamente.**
> Y cada rama o Pull Request genera su propia URL de preview para revisar
> cambios sin tocar producción.

---

## 3. Conectar el dominio en Vercel

1. En el proyecto: **Settings → Domains**.
2. Escribí `juliankondratavicius.com` y **Add**.
3. Cuando pregunte cómo tratar el `www`, elegí la opción que redirige
   `www.juliankondratavicius.com` → `juliankondratavicius.com`
   (o al revés, pero **elegí uno solo como principal**: tener el sitio vivo en
   las dos direcciones sin redirección te parte el SEO en dos).
4. Vercel te va a mostrar **los registros DNS exactos que necesita**.
   **Anotá esos valores**: son los que vas a cargar en Hostinger en el paso 4.

> ⚠️ Usá siempre los valores que te muestra **tu** panel de Vercel, no los de
> ningún tutorial (los míos incluidos). Vercel los cambió más de una vez y el
> panel es la única fuente actualizada.

Al momento de escribir esto, lo típico es:

| Tipo | Nombre / Host | Valor |
| --- | --- | --- |
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

---

## 4. Configurar el DNS en Hostinger

1. Entrá a <https://hpanel.hostinger.com>.
2. **Dominios → juliankondratavicius.com → DNS / Nameservers**.
3. Asegurate de estar usando **los nameservers de Hostinger** (si en algún
   momento los apuntaste a otro lado, esta pantalla no va a tener efecto).
4. En la **Zona DNS**:

   **a. Borrá los registros que chocan.** Buscá y eliminá:
   - Cualquier registro `A` con nombre `@` que apunte a una IP de Hostinger.
   - Cualquier registro `CNAME` con nombre `www`.
   - El registro de parking/"coming soon" si el dominio nunca se usó.

   **b. Agregá los de Vercel** (los del paso 3):

   | Tipo | Nombre | Apunta a | TTL |
   | --- | --- | --- | --- |
   | `A` | `@` | `76.76.21.21` | 300 (o el mínimo) |
   | `CNAME` | `www` | `cname.vercel-dns.com` | 300 (o el mínimo) |

   **c. No toques los registros `MX`** si tenés mail en ese dominio.
   El mail va por `MX`, el sitio por `A`/`CNAME`: son independientes.

5. Guardá.

### Cuánto tarda

Entre 10 minutos y unas horas (raramente hasta 48h). Vercel emite el
certificado SSL solo, apenas ve el DNS correcto. En **Settings → Domains** vas a
ver el estado pasar a **Valid Configuration** con el candado.

Para chequear desde tu máquina:

```bash
nslookup juliankondratavicius.com
```

Cuando devuelva la IP de Vercel y no la de Hostinger, ya propagó.

---

## 5. Checklist post-deploy

Con el dominio andando:

- [ ] `https://juliankondratavicius.com` carga y redirige a `/es`.
- [ ] `https://www.juliankondratavicius.com` redirige al dominio principal.
- [ ] El candado de HTTPS está activo.
- [ ] `https://juliankondratavicius.com/sitemap.xml` lista las páginas ES y EN.
- [ ] `https://juliankondratavicius.com/robots.txt` responde.
- [ ] El switch ES/EN cambia la URL (`/es/work` ↔ `/en/work`), no sólo el texto.
- [ ] Probalo en el celular.

### Google Search Console (hacelo el primer día)

1. <https://search.google.com/search-console> → **Agregar propiedad** →
   *Prefijo de URL* → `https://juliankondratavicius.com`.
2. Verificá con el método de **registro DNS TXT** (lo cargás en Hostinger, misma
   pantalla del paso 4) o con el archivo HTML que te dan.
3. **Sitemaps → Agregar sitemap** → `sitemap.xml`.

Sin esto, Google puede tardar semanas en encontrarte. Con esto, días.

---

## 6. El flujo de trabajo de acá en adelante

```bash
# 1. Editás contenido en content/ o imágenes en public/
# 2. Lo mirás en local
npm run dev

# 3. Cuando te gusta, lo publicás
git add -A
git commit -m "Completo las métricas del caso doc24"
git push
```

Vercel hace el resto. Si un deploy rompe algo, en el dashboard de Vercel
podés hacer **Instant Rollback** a la versión anterior con un click.

---

## Problemas típicos

| Síntoma | Causa casi siempre |
| --- | --- |
| El build falla en Vercel pero anda en local | Diferencia de mayúsculas en un import. Windows no distingue `Nav.tsx` de `nav.tsx`, Linux sí. |
| "Invalid Configuration" en Domains | El registro `A` viejo de Hostinger sigue vivo. Borralo. |
| El dominio no propaga | TTL alto en el registro anterior. Esperá el tiempo del TTL viejo. |
| Sale el "coming soon" de Hostinger | Quedó el registro de parking en la zona DNS. |
| Las imágenes no aparecen | El nombre del archivo en `public/` no coincide exactamente con `cover.src`. |
