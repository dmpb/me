module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
