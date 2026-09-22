# Publicación y dominio

## Publicación

El sitio está alojado en OpenAI Sites. La versión de producción usa el contenido
de este repositorio y la carpeta estática `out/` generada por Next.js.

- Repositorio de código: `https://github.com/Julikondratavicius/new-portfolio`
- Rama: `main`
- URL de producción de Sites: <https://julian-kondratavicius-portfolio.julian-kondrataviciu.chatgpt.site>
- Dominio principal: <https://juliankondratavicius.com>

Para preparar una versión, ejecutá `npm run build`. El despliegue se completa
desde el flujo de publicación de Sites; subir cambios a GitHub por sí solo no
publica una versión nueva en Sites.

## DNS de `juliankondratavicius.com`

El dominio principal y `www` están asociados al sitio. En el proveedor que
administra la zona DNS, configurá estos registros. Los dos registros `A` del
dominio raíz son necesarios.

| Tipo | Host | Valor |
| --- | --- | --- |
| A | `@` | `162.159.143.30` |
| A | `@` | `172.66.3.26` |
| CNAME | `www` | `custom-domains.chatgpt.site` |

También agregá los cuatro registros de verificación TXT:

| Tipo | Host | Valor |
| --- | --- | --- |
| TXT | `_openai-site-verification` | `openai-site-verification=iM-R1f2Q46OnxHZrsX92yuL1jNENZxCP9HGiKox51ac` |
| TXT | `_cf-custom-hostname` | `110a4e21-d7a2-45eb-9990-beb82d595e9e` |
| TXT | `_openai-site-verification.www` | `openai-site-verification=26z4qbY4kDXih_y_6-M1ZZrjGesNaE_onkyaLxgft6w` |
| TXT | `_cf-custom-hostname.www` | `9b27df6e-b981-4ffc-8918-dddf4e1421a3` |

No borres los registros `MX`, SPF, DKIM o DMARC: mantienen el correo del
dominio. Si ya existe un `A`, `AAAA` o `CNAME` para `@` o `www`, reemplazá sólo
el registro web que entre en conflicto. El estado del dominio y el certificado
HTTPS se actualizan cuando los registros se propaguen.

## Comprobación

- `https://juliankondratavicius.com` abre el portfolio.
- `https://www.juliankondratavicius.com` abre el portfolio.
- `https://juliankondratavicius.com/sitemap.xml` publica el sitemap.
- `https://juliankondratavicius.com/robots.txt` publica las reglas de rastreo.

La carpeta exportada `out/` incluye las páginas en español e inglés.
