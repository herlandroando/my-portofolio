// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: { preset: "static" },
  // devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/ui", // "@nuxt/image",
  "@nuxtjs/google-fonts", "nuxt-icon", "@vueuse/nuxt", "@nuxtjs/mdc"],
  css: ["assets/css/main.css"],
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