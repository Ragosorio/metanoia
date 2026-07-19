# Metanoia — Consejo Estudiantil 2024

Sitio de presentación de la planilla **Metanoia**, candidata al Consejo Estudiantil 2024. Muestra a las integrantes, sus propuestas, y la misión y visión del grupo.

🔗 **En vivo:** https://ragosorio.github.io/metanoia/

## Sobre el proyecto

Es una página de una sola vista, con navegación por secciones, un carrusel de integrantes y un panel que cambia la información según la integrante seleccionada.

Fue mi primera página web.

## Tecnologías

- [Vite](https://vitejs.dev/) como servidor de desarrollo y build
- [Bootstrap 5](https://getbootstrap.com/) para la grilla del panel de integrantes
- jQuery para el carrusel
- CSS propio en `style.css` para todo el diseño

## Correr el proyecto

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build      # genera dist/
npm run preview    # sirve dist/ localmente
```

## Estructura

```
index.html      # toda la página
style.css       # estilos propios
main.js         # carrusel, navegación y panel de integrantes
img/            # fotos de las integrantes y fondos
```

## Despliegue

El sitio está publicado en dos lados:

- **GitHub Pages**, desde la rama `gh-pages`, servido en `/metanoia/`
- **Vercel**, desde `main`

Una diferencia importante entre los dos: Vercel corre `npm run build` y publica `dist/`, mientras que GitHub Pages sirve los archivos del repo tal cual, **sin build**. Por eso el proyecto está armado para que `index.html` funcione directamente en el navegador:

- `style.css` se carga con un `<link>` en el HTML, no con un `import` desde `main.js` (un `import` de CSS solo lo resuelve Vite, y en el navegador rompe el módulo entero).
- Las rutas a `main.js` y a las imágenes son **relativas** (`./main.js`), no absolutas (`/main.js`), porque en Pages el sitio vive en el subdirectorio `/metanoia/` y no en la raíz del dominio.

Si en algún momento se agregan más `import` a `main.js`, GitHub Pages va a dejar de funcionar y habría que publicar el `dist/` del build en vez de los archivos fuente.

Las ramas `main` y `gh-pages` se mantienen con el mismo contenido.
