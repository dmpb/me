const url = "https://dmpb.github.io/me";

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "/me/",
    head: {
      title: "Daniel Ponce",
      htmlAttrs: {
        lang: "es",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: url + "/favicon.ico" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { key: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content: "Hola, me llamo Daniel Ponce",
        },
        {
          property: "og:title",
          content: "Daniel Ponce",
        },
        {
          property: "og:description",
          content:
            "Hola, soy un Desarrollador de Software aposionado en crear productos que las personas realmente amen.",
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:image",
          content: url + "/daniel-ponce-profile.jpg",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/3821d4dff7.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  nitro: {
    preset: "github_pages",
  },
});
