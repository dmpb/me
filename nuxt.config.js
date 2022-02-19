const url = "https://dmpb.github.io/me";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Router base
  router: {
    base: "/me/",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Daniel Ponce",
    htmlAttrs: {
      lang: "es",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: url + "/favicon.ico" }],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxtjs/google-analytics",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-one-dark.css",
      },
    },
  },
  // Google Analitycs: https://google-analytics.nuxtjs.org/
  googleAnalytics: {
    id: "G-BR27DERQBP",
  },
};
