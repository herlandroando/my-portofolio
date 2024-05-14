// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxt/ui",
    // "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  css: ["assets/css/main.css"],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
