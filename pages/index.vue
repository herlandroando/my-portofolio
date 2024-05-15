<template>
  <div class="flex flex-col md:px-0 px-2">
    <section ref="introductionRef"
      class="relative mt-5 md:justify-between items-center justify-center md:gap-7 gap-20 h-[calc(100vh-6.25rem)]">
      <div class="relative flex flex-col justify-center h-full">
        <div class="text-left">
          <UBadge class="font-medium md:text-2xl text-xl mb-2">{{ `
            <WebDeveloper />`}}
          </UBadge>
          <h2
            class="font-black md:text-6xl text-5xl mb-6 border-cloudburst-600 border-b-8 border-none md:border-solid w-fit">
            Herlandro<br class="md:hidden block" /> <span
              class="md:border-none border-cloudburst-600 border-b-8 border-solid">Tribiakto</span></h2>
          <p class="font-medium md:text-2xl text-xl">I'm focusing on the Backend but it's possible that I'll work on the
            Frontend.</p>
          <div class="flex flex-row gap-2 justify-start mt-5">
            <ULink v-for="media in myMedia" :key="media.label" :to="media.link" target="_blank" external>
              <UButton class="p-2" variant="soft">
                <Icon :name="media.icon" size="24" />
              </UButton>
            </ULink>
          </div>
        </div>
      </div>
      <PageHomeAboutMeSection :height-section-before="heightIntroduction">

      </PageHomeAboutMeSection>
      <PageHomeExperienceSection />
      <section
        class="relative mt-28 md:justify-between items-center justify-center md:gap-7 gap-20 h-[calc(100vh-6.25rem)]"
        id="portofolio">
        <h2 class="font-black md:text-4xl text-3xl mb-6 w-fit">
          Portofolio</h2>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
const myMedia = [
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/herlandro-tribiakto/',
    icon: 'mdi:linkedin',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/herlandrotri/',
    icon: 'mdi:instagram',
  },
  {
    label: 'Github',
    link: 'https://github.com/herlandroando/',
    icon: 'mdi:github',
  },
]

const introductionRef = ref<HTMLElement>()

const heightIntroduction = computed(() => introductionRef.value?.clientHeight ?? 0)

</script>

<style>
.avatar {
  vertical-align: middle;
  background-image: url("/assets/images/me.png");
  width: 50%;
  height: 50%;
  border-radius: 50%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<!-- <UCard class="mt-10">
        <template #header>
          <div class="flex justify-between">
            <h1>Welcome to Nuxt UI Starter</h1>
            <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
          </div>
        </template>
        <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
      </UCard> -->
