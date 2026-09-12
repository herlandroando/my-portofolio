<template>
  <div class="flex flex-col md:px-0 px-2">
    <!-- Desktop Side Dot Navigation (Hidden on mobile to avoid overlapping content) -->
    <div class="hidden md:flex fixed top-[50%] -translate-y-1/2 right-4 lg:right-8 z-50 flex-col gap-2.5 bg-white/60 dark:bg-stone-900/60 p-1.5 rounded-full backdrop-blur-sm border border-gray-200/50 dark:border-stone-800/50 shadow-xs">
      <NuxtLink
        v-for="pointSection in pointSections"
        :key="pointSection"
        :to="'/#' + pointSection"
        :title="pointSection"
        class="group p-1"
      >
        <div
          class="w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:scale-125"
          :class="pointClass(pointSection)"
        />
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <Transition>
      <section
        :class="hasFinishMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        v-scroll-detect="handleScrollDetect"
        id="introduction"
        ref="introductionRef"
        class="transition-all duration-700 relative min-h-[calc(100vh-100px)] py-12 md:py-20 flex flex-col justify-center"
      >
        <div class="flex flex-col gap-6 max-w-3xl">
          <!-- Role Pill -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cloudburst-50 dark:bg-cloudburst-950/60 text-cloudburst-600 dark:text-cloudburst-400 border border-cloudburst-200/60 dark:border-cloudburst-900/60 w-fit">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            &lt;FullStackDeveloper /&gt;
          </div>

          <!-- Display Name -->
          <div class="space-y-3">
            <h1 class="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Herlandro <span class="text-transparent bg-clip-text bg-gradient-to-r from-cloudburst-600 to-indigo-500">Tribiakto</span>
            </h1>
            <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
              Fullstack Developer focusing on scalable backend architectures, high-performance web systems, and creative game engineering.
            </p>
          </div>

          <!-- Primary Actions (Clean & Compact CTAs) -->
          <div class="flex flex-wrap items-center gap-3 pt-1">
            <UButton
              to="/#portofolio"
              size="md"
              color="primary"
              icon="mdi:folder-eye-outline"
              class="font-semibold shadow-xs"
            >
              View Portfolio
            </UButton>
            <UButton
              to="/#contact"
              size="md"
              variant="outline"
              color="neutral"
              icon="mdi:email-outline"
              class="font-semibold"
            >
              Get in Touch
            </UButton>

            <div class="h-6 w-px bg-gray-200 dark:bg-stone-800 mx-1 hidden sm:block"></div>

            <!-- Social Links -->
            <div class="flex items-center gap-1">
              <UButton
                v-for="media in myMedia"
                :key="media.label"
                :to="media.link"
                target="_blank"
                external
                variant="ghost"
                color="neutral"
                size="sm"
                :aria-label="media.label"
                class="hover:text-primary transition-colors"
              >
                <Icon :name="media.icon" size="20" />
              </UButton>
            </div>
          </div>

          <!-- Curated Tech Stack Pills (Compact & Expandable) -->
          <div class="pt-4 border-t border-gray-100 dark:border-stone-800/80">
            <div class="flex items-center justify-between gap-2 mb-2.5">
              <span class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Core Technologies
              </span>
              <button
                @click="showAllSkills = !showAllSkills"
                class="text-xs text-cloudburst-600 dark:text-cloudburst-400 font-medium hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{{ showAllSkills ? 'Show core only' : `+${allSkills.length - coreSkills.length} more` }}</span>
                <Icon :name="showAllSkills ? 'mdi:chevron-up' : 'mdi:chevron-down'" size="14" />
              </button>
            </div>

            <div class="flex flex-row gap-1.5 flex-wrap">
              <SkillTag
                v-for="skill in displayedSkills"
                :key="skill.name"
                class="!text-xs"
                :color="skill.color || 'neutral'"
                :name="skill.name"
              />
            </div>
          </div>
        </div>
      </section>
    </Transition>
    <PageHomeAboutMeSection v-scroll-detect="handleScrollDetect" :height-section-before="heightIntroduction" />
    <PageHomeExperienceSection v-scroll-detect="handleScrollDetect" />
    <PageHomeEducationSection v-scroll-detect="handleScrollDetect" />
    <PageHomePortofolioSection v-scroll-detect="handleScrollDetect" />
    <PageHomeContactSection v-scroll-detect="handleScrollDetect" />
  </div>
</template>

<script setup lang="ts">
import type { FunctionScrollDetect } from '~/types/plugins';

interface HeroSkill {
  name: string;
  color?: string;
}

const myMedia = [
  {
    label: 'GitHub',
    link: 'https://github.com/herlandroando/',
    icon: 'mdi:github',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/herlandro-tribiakto/',
    icon: 'mdi:linkedin',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/herlandrotri/',
    icon: 'mdi:instagram',
  },
];

const coreSkills: HeroSkill[] = [
  { name: 'php', color: 'orange' },
  { name: 'laravel', color: 'orange' },
  { name: 'vue', color: 'orange' },
  { name: 'Nuxt', color: 'orange' },
  { name: 'csharp', color: 'orange' },
  { name: '.NET 8', color: 'orange' },
  { name: 'mysql', color: 'orange' },
  { name: 'REST API', color: 'orange' },
  { name: 'Payment Gateway', color: 'neutral' },
  { name: 'godot', color: 'neutral' },
];

const allSkills: HeroSkill[] = [
  { name: 'webDevelopment', color: 'orange' },
  { name: 'php', color: 'orange' },
  { name: 'laravel', color: 'orange' },
  { name: 'js', color: 'orange' },
  { name: 'Livewire', color: 'orange' },
  { name: 'vue', color: 'orange' },
  { name: 'Nuxt', color: 'orange' },
  { name: 'Java', color: 'orange' },
  { name: 'csharp', color: 'orange' },
  { name: '.NET 8', color: 'orange' },
  { name: 'WPF', color: 'orange' },
  { name: 'jQuery', color: 'orange' },
  { name: 'mysql', color: 'orange' },
  { name: 'API', color: 'orange' },
  { name: 'REST API', color: 'orange' },
  { name: 'Payment Gateway', color: 'neutral' },
  { name: 'codeigniter3', color: 'neutral' },
  { name: 'react', color: 'neutral' },
  { name: 'gameDevelopment', color: 'neutral' },
  { name: 'Game Design', color: 'neutral' },
  { name: 'cpp', color: 'neutral' },
  { name: 'SIGIL', color: 'neutral' },
  { name: 'godot', color: 'neutral' },
  { name: 'gdScript', color: 'neutral' },
];

const showAllSkills = ref(false);
const displayedSkills = computed(() => showAllSkills.value ? allSkills : coreSkills);

const pointSections = ['introduction', 'about-me', 'experience', 'education', 'portofolio', 'contact'];

const introductionRef = ref<HTMLElement>();
const sectionId = ref<string>('introduction');
const hasFinishMounted = ref<boolean>(false);

const heightIntroduction = computed(() => introductionRef.value?.clientHeight ?? 0);

const handleScrollDetect: FunctionScrollDetect = {
  options: { startOffset: -200, endOffset: 0 },
  isOnElement(el) {
    sectionId.value = el.id;
  },
  isNotOnElement() {},
};

onMounted(() => {
  hasFinishMounted.value = true;
});

function pointClass(id: string) {
  return sectionId.value === id ? 'bg-cloudburst-500 scale-125' : 'bg-gray-300 dark:bg-stone-700';
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
