---
title: Perulytics
description: Dashboard interactivo para visualizar en tiempo real las tendencias de la disputa electoral en Perú, con foco en la batalla por el segundo lugar entre los candidatos.
image: perulytics.png
slug: perulytics
---

# Perulytics Web

Dashboard interactivo para visualizar en tiempo real las tendencias de la disputa electoral en Perú, con foco en la batalla por el segundo lugar entre los candidatos.

> **Demo en vivo:** [perulytics-web.vercel.app](https://perulytics-web.vercel.app/)

## Vista previa

![Vista previa de Perulytics Web](/me/projects/perulytics.png)

## Características

- **Disputa 10 vs 35** como eje narrativo principal (diferencia de porcentaje, votos y momentum).
- **Snapshots en tiempo real** con polling automático al backend de Perulytics.
- **Estado de ingesta y avance de actas** siempre visible en el encabezado.
- **UI oscura, moderna y minimalista** con efecto glassmorphism y acentos cromáticos por candidato.
- Construido sobre **Next.js 16 + React 19 + Tailwind CSS 4** y **Recharts** para las visualizaciones.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Recharts](https://recharts.org)
- TypeScript

## Requisitos previos

- Node.js 20 o superior
- npm (o yarn / pnpm / bun)

## Configuración

Crea un archivo `.env.local` en la raíz del proyecto basándote en `.env.example`:

```bash
cp .env.example .env.local
```

Variables disponibles:

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | URL base del backend de Perulytics (por defecto, el entorno de producción). |

## Desarrollo local

Instala dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el dashboard.

Scripts disponibles:

```bash
npm run dev     # Servidor de desarrollo
npm run build   # Build de producción
npm run start   # Sirve el build de producción
npm run lint    # Linter (ESLint + next/core-web-vitals)
```

## Estructura del proyecto

```
app/
├── _components/   # Componentes UI del dashboard
├── _constants/    # Constantes compartidas (estilos por candidato, etc.)
├── _hooks/        # Hooks de fetching y derivación de datos
├── _types/        # Tipos TypeScript compartidos
├── _utils/        # Formateadores y helpers
├── api/           # Route handlers (proxy al backend)
├── globals.css    # Estilos globales y utilidades glass
├── layout.tsx     # Layout raíz
└── page.tsx       # Dashboard principal
```

## Despliegue

La aplicación está desplegada en Vercel: [perulytics-web.vercel.app](https://perulytics-web.vercel.app/).

Para desplegar tu propia copia, la forma más sencilla es usar la [plataforma de Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Solo necesitas configurar la variable de entorno `NEXT_PUBLIC_API_BASE_URL` apuntando a tu backend de Perulytics.

Más detalles en la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

## Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Aprende Next.js](https://nextjs.org/learn)
- [Repositorio de Next.js en GitHub](https://github.com/vercel/next.js)
