// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-08-25",
  nitro: { preset: "static" },
  ssr: false,
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtjs/mdc",
  ],
  icon: {
    clientBundle: {
      scan: false,
    },
    provider: "iconify",
  },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});