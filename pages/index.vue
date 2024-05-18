<template>
  <div class="flex flex-col md:px-0 px-2">
    <div class="fixed top-[50%] md:right-8 right-1 h-screen z-50">
      <div class="flex flex-col justify-center gap-3">
        <NuxtLink v-for="pointSection in pointSections" :key="pointSection" :to="'/#' + pointSection">
          <div class="rounded-full p-[0.35rem]" :class="pointClass(pointSection)">
          </div>
        </NuxtLink>
      </div>
    </div>
    <Transition>
      <section :class="hasFinishMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        v-scroll-detect="handleScrollDetect" id="introduction" ref="introductionRef"
        class="transition-all duration-700 relative mt-5 md:justify-between items-center justify-center md:gap-7 gap-20 h-[calc(100vh-6.25rem)]">
        <div class="relative flex flex-col justify-center h-full">
          <div class="text-left">
            <UBadge class="font-medium md:text-2xl text-xl mb-2">{{ `
              <FullStackDeveloper />`}}
            </UBadge>
            <h2
              class="font-black md:text-6xl text-5xl mb-3 border-cloudburst-600 border-b-8 border-none md:border-solid w-fit">
              Herlandro<br class="md:hidden block" /> <span
                class="md:border-none border-cloudburst-600 border-b-8 border-solid">Tribiakto</span></h2>
            <div class="flex flex-row gap-2 flex-wrap mb-6">
              <template v-for="skill in skills">
                <SkillTag class="!text-white" v-if="_.isArray(skill)" :color="skill[1]" :key="skill[0]" :name="skill[0]">
                </SkillTag>
                <SkillTag v-else color="gray" :key="skill" :name="skill">
                </SkillTag>
              </template>
            </div>
            <p class="font-medium md:text-2xl text-xl">I'm focusing on the Backend but it's possible that I'll work on
              the
              Frontend.</p>
            <div class="flex flex-row gap-2 justify-start mt-5">
              <ULink v-for="media in myMedia" :key="media.label" :to="media.link" target="_blank" :external="true">
                <UButton class="p-2" variant="soft">
                  <Icon :name="media.icon" size="24" />
                </UButton>
              </ULink>
            </div>
          </div>
        </div>

      </section>
    </Transition>
    <PageHomeAboutMeSection v-scroll-detect="handleScrollDetect" :height-section-before="heightIntroduction">
    </PageHomeAboutMeSection v-scroll-detect="handleScrollDetect">
    <PageHomeExperienceSection v-scroll-detect="handleScrollDetect" />
    <PageHomeEducationSection v-scroll-detect="handleScrollDetect" />
    <PageHomePortofolioSection v-scroll-detect="handleScrollDetect" />
    <PageHomeContactSection v-scroll-detect="handleScrollDetect"></PageHomeContactSection>
  </div>
</template>

<script setup lang="ts">
import type { FunctionScrollDetect } from '~/types/plugins';
import { experiences, portofolio } from '~/data/index'
import _ from 'lodash';


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

const skills = ref<any>([])
const pointSections = ['introduction', 'about-me', 'experience', 'education', 'portofolio', 'contact']

const introductionRef = ref<HTMLElement>()
const sectionId = ref<string>('introduction');
const hasFinishMounted = ref<boolean>(false);

const heightIntroduction = computed(() => introductionRef.value?.clientHeight ?? 0)

const handleScrollDetect: FunctionScrollDetect = {
  options: { startOffset: -200, endOffset: 0 },
  isOnElement(el) {
    sectionId.value = el.id

  },
  isNotOnElement(el) {

  },
}

onMounted(() => {
  hasFinishMounted.value = true;
  skills.value = [['webDevelopment', 'orange'], ['php', 'orange'], ['laravel', 'orange'], ['js', 'orange'], ['Livewire', 'orange'], ['vue', 'orange'], ['jQuery', 'orange'], ['mysql', 'orange'], ['API', 'orange'], ['REST API', 'orange'], 'Payment Gateway', 'codeigniter3', 'react', 'gameDevelopment', 'Game Design', 'cpp', 'SIGIL', 'godot', 'gdScript']
})

function pointClass(id: string) {
  return sectionId.value === id ? 'bg-cloudburst-400' : 'bg-gray-200'
}
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
