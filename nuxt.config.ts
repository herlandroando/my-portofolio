// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate:"2026-08-25",
  nitro: { preset: "static" },
  // devtools: { enabled: true },
  ssr: false,
  modules: [// "@nuxt/image",
  "@nuxt/ui", "@nuxtjs/google-fonts", "@vueuse/nuxt", "@nuxtjs/mdc", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  hooks: {
    close: () => {
      process.exit(0);
    },
  },
});