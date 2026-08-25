<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Herlandro Tribiakto | Fullstack & Backend Developer',
  description: 'Portfolio of Herlandro Tribiakto — Fullstack Developer with deep backend expertise in Laravel, PHP, Vue, and System Architecture.',
  ogTitle: 'Herlandro Tribiakto | Fullstack & Backend Developer',
  ogDescription: 'Explore project case studies, game development, and fullstack engineering experience.',
  ogImage: '/assets/images/og-cover.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Herlandro Tribiakto | Fullstack & Backend Developer',
  twitterDescription: 'Explore project case studies, game development, and fullstack engineering experience.',
  twitterImage: '/assets/images/og-cover.png',
})

useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Herlandro Tribiakto',
        jobTitle: 'Fullstack Developer',
        url: 'https://herlandrotri.dev',
        sameAs: [
          'https://github.com/herlandroando',
          'https://www.linkedin.com/in/herlandro-tribiakto/',
          'https://www.instagram.com/herlandrotri/'
        ]
      })
    }
  ]
})
</script>
