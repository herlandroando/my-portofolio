<template>
    <section id="experience" class="relative mt-16 md:mt-24 w-full">
        <div class="mb-6">
            <TextTitle tag="h2" class="w-fit">Experience</TextTitle>
            <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl">
                Engineering roles, system architecture, and professional milestones.
            </p>
        </div>
        <div class="max-w-3xl">
            <ol class="flex flex-col p-0 m-0">
                <TimelineItem
                    v-for="(experience, index) in sortedExperiences"
                    :is-last-item="index === sortedExperiences.length - 1"
                    :key="experience.key"
                    :item="experience"
                />
            </ol>
        </div>
    </section>
</template>

<script setup lang="ts">
import { experiences } from '~/data';

const sortedExperiences = computed(() => [...experiences].sort((a, b) => b.key - a.key))
</script>

<style>
.fade-down-enter-active,
.fade-down-leave-active,
.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 1s ease;
}

.fade-down-enter-from {
    transform: translate(0em, 0em) !important;
    opacity: 1;
}

.fade-down-leave-to {
    transform: translate(0em, 5em) !important;
    opacity: 0;
}

.fade-up-enter-from {
    transform: translate(0em, 5em) !important;
    opacity: 0;
}

.slide-up-leave-to {
    transform: translate(0em, 0em) !important;
    opacity: 1;
}
</style>