# Cuaderno de ópera · Temporada 2026–2027

Sitio estático en español construido con Eleventy 3 y Nunjucks. Ocho guías, calendario, exportación ICS, búsqueda sin tildes y notas locales. Diseño original con ilustraciones geométricas en CSS, sin fotografías de producciones que puedan confundirse con las funciones del abono.

## Desarrollo

Requiere Node.js 20 o posterior.

```sh
npm ci
npm run dev
```

## Producción

```sh
npm run build
```

La salida está en `dist/`; puede alojarse en cualquier servidor estático. Los datos y fuentes de cada obra están en `src/_data/operas.json`. No se necesitan claves ni servicios de pago. Las fuentes de Google Fonts son opcionales y tienen alternativas locales. Los vídeos se abren en YouTube; no se instalan cookies de vídeo desde este sitio.

Las fechas de asistencia son las aportadas por el propietario, en Europe/Madrid. El recinto y los repartos se documentan en la sección Funciones del Teatro Real; la versión y la duración se indican cuando están publicadas. Los archivos ICS usan instantes UTC correctos para horario de verano/invierno y no incluyen hora final desconocida. Las notas se conservan exclusivamente en localStorage, sin sincronización.

Fuentes de argumento, contexto, grabaciones y vídeos enlazadas en cada guía. Investigación: 11 de noviembre de 2026. Selecciones editoriales, no rankings absolutos. En Katia se enlaza un tráiler (no se promete una función completa fuera de derechos). En Fedora se identifica la captación de La Scala 1993 y sus formatos; no se confunde con la del Metropolitan.

## Libretos bilingües

La biblioteca `/libretos/` organiza las ocho ediciones por 25 actos/secciones (incluido el prólogo de Simon Boccanegra), con enlaces verificados a Kareol. No se copian ni redistribuyen sus traducciones modernas. Cada ficha conserva los créditos de la digitalización o traducción de origen.

Kareol solo responde correctamente por HTTP y su certificado HTTPS no coincide con el dominio. No se desactiva la validación del certificado ni se usa un proxy: las lecturas se abren externamente. Algunas páginas agrupan varios actos; se informa de ello y se usan fragmentos de texto como ayuda progresiva. El barbero añade la continuación del acto I.

Seis fichas ofrecen además un visor bajo demanda de las ediciones bilingües HTTPS de El Atril. El iframe es externo, sin proxy ni copia local; se carga solo tras pulsar el botón. Incluye enlace de salida si no está disponible. Fedora y Katia se consultan externamente, sin prometer un visor integrado inexistente. Las fechas y las fuentes anteriores no cambian. Los nuevos datos están en `src/_data/librettos.json`.

## Funciones del Teatro Real

Las ocho fechas y horas se contrastaron con la tabla de funciones oficial el 11/11/2026: todas corresponden a la Sala Principal y al abono D. `operas.json` incluye ahora `performance` con reparto por fecha, perfiles oficiales, equipo artístico, formato de presentación, duración cuando está publicada y programas de mano disponibles.

Se aplican las excepciones de batuta: Luisotti el 3/1 en Boccanegra (Montané solo el 9/1); Lanzillotta el 27/4 en Norma (Fiore está anunciado para 20, 23, 26 y 29/4). Fedora figura como versión de concierto. Manon del 5/10 recoge Carolina López Moreno y Michael Fabiano según la ficha actualizada. Se excluyen los elencos alternativos de otras fechas. Las biografías breves proceden de perfiles del teatro o fuentes primarias enlazadas individualmente.

Los ICS conservan los UID y horarios e incorporan recinto, enlace oficial y datos básicos de cada sesión. No se añade una hora final a partir de duraciones aproximadas. El contenido es una instantánea de consulta, sin actualización automática del reparto.

## GitHub Pages

Esta copia contiene el sitio completo sin los metadatos de alojamiento de Sites. La rama `main` guarda el código. `.github/workflows/pages.yml` compila con Eleventy y publica mediante GitHub Actions en el entorno `github-pages`; no hace falta una rama con los archivos generados.

Activa Pages con GitHub Actions como origen. Cada push a `main` publica una nueva versión. `SITE_PATH_PREFIX` se obtiene de `actions/configure-pages`, para que CSS, JavaScript, enlaces, calendarios y la próxima función funcionen también bajo `/<repositorio>/`. En local se mantiene `/`.

```sh
npm ci
npm run dev
# Comprobar la compilación con una subruta:
SITE_PATH_PREFIX=/cuaderno-opera/ npm run build
```
