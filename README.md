# Portfolio – Daniel Ponce

Sitio personal construido con Nuxt + Nuxt Content para presentar proyectos y experiencia.

## Requisitos

- Node.js 18+
- npm 9+

## Configuración rápida

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:3000`.

## Comandos útiles

```bash
# desarrollo
npm run dev

# build de producción
npm run build

# preview local
npm run start

# export estático (GitHub Pages)
npm run generate
```

## Contenido de proyectos

Los proyectos se cargan desde `content/projects/*.md` usando Nuxt Content.  
Cada archivo define `title`, `description`, `image` y `slug`.

## Estructura

- `pages/` rutas y vistas
- `layouts/` layout global
- `components/` componentes reutilizables
- `assets/` estilos y recursos
- `content/` markdown de proyectos

## Deployment

Este proyecto está configurado para GitHub Pages (`nitro.preset = "github_pages"`).  
La base pública se define en `nuxt.config.ts` con `app.baseURL`.
