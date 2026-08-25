// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-08-25",
  telemetry: false,
  nitro: { preset: "static" },
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Herlandro Tribiakto | Fullstack & Backend Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Portfolio of Herlandro Tribiakto — Fullstack Developer with deep backend expertise in Laravel, PHP, Vue, and System Architecture.",
        },
        {
          property: "og:title",
          content: "Herlandro Tribiakto | Fullstack & Backend Developer",
        },
        {
          property: "og:description",
          content:
            "Explore project case studies, game development, and fullstack engineering experience.",
        },
        { property: "og:image", content: "/assets/images/og-cover.png" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Herlandro Tribiakto | Fullstack & Backend Developer",
        },
        {
          name: "twitter:description",
          content:
            "Explore project case studies, game development, and fullstack engineering experience.",
        },
        { name: "twitter:image", content: "/assets/images/og-cover.png" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Herlandro Tribiakto",
            jobTitle: "Fullstack Developer",
            url: "https://herlandrotri.dev",
            sameAs: [
              "https://github.com/herlandroando",
              "https://www.linkedin.com/in/herlandro-tribiakto/",
              "https://www.instagram.com/herlandrotri/",
            ],
          }),
        },
      ],
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtjs/mdc",
    "@nuxt/image",
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