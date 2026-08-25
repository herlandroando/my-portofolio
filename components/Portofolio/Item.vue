<template>
    <UCard
        v-scroll-detect="handleScrollDetect"
        class="h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group border border-gray-200/80 dark:border-stone-800 rounded-2xl overflow-hidden"
        :class="computedClassTransition"
        :ui="{
            body: 'h-full px-5 py-5 sm:p-6 flex flex-col justify-between',
        }"
    >
        <div class="flex flex-col gap-3 relative h-full">
            <!-- Card Header -->
            <div class="flex flex-row justify-between items-start gap-2">
                <div class="text-xs">
                    <TextSubTitle tag="h3" class="group-hover:text-primary-500 transition-colors text-base sm:text-lg font-bold">
                        {{ item.title }}
                    </TextSubTitle>
                    <p class="font-semibold text-gray-600 dark:text-gray-300 mt-0.5">{{ item.role }}</p>
                    <p class="text-xs text-gray-400 dark:text-gray-500">{{ item.at }} • {{ item.date }}</p>
                </div>
                <UBadge v-if="categoryBadge" :color="categoryBadge.color" variant="subtle" size="sm" class="capitalize shrink-0">
                    {{ categoryBadge.label }}
                </UBadge>
            </div>

            <!-- Image with Zoom on Hover -->
            <div class="h-[220px] sm:h-[240px] overflow-hidden rounded-xl bg-gray-100 dark:bg-stone-800 relative group/img">
                <NuxtImg
                    class="rounded-xl h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    :src="item.imageUrl"
                    :alt="item.title"
                    format="webp"
                    loading="lazy"
                    placeholder
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span class="text-white text-xs font-medium flex items-center gap-1">
                        <Icon name="mdi:eye-outline" size="16" /> Click for Quick Overview
                    </span>
                </div>
            </div>

            <!-- Skill Badges -->
            <div class="flex flex-row flex-wrap gap-1.5">
                <SkillTag v-for="skill in item.skills" :name="skill" :key="skill" class="!text-xs" />
            </div>

            <!-- Description -->
            <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <p class="line-clamp-3">{{ item.description }}</p>
            </div>

            <!-- Card Footer -->
            <div class="flex flex-row items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-stone-800 gap-2">
                <!-- Direct quick actions (GitHub, Demo, File) -->
                <div class="flex flex-row gap-1.5 items-center">
                    <UButton
                        v-if="item.directLinks?.github"
                        :to="item.directLinks.github"
                        target="_blank"
                        external
                        size="xs"
                        variant="soft"
                        color="neutral"
                        icon="mdi:github"
                        aria-label="Source code on GitHub"
                        class="hover:scale-105 transition-transform"
                        @click.stop
                    >
                        Source
                    </UButton>
                    <UButton
                        v-if="item.directLinks?.demo"
                        :to="item.directLinks.demo"
                        target="_blank"
                        external
                        size="xs"
                        variant="soft"
                        color="primary"
                        icon="mdi:open-in-new"
                        aria-label="Live Demo"
                        class="hover:scale-105 transition-transform"
                        @click.stop
                    >
                        Demo
                    </UButton>
                    <UButton
                        v-if="item.directLinks?.file"
                        :to="item.directLinks.file"
                        target="_blank"
                        external
                        size="xs"
                        variant="soft"
                        color="neutral"
                        icon="mdi:download"
                        aria-label="Download Build"
                        class="hover:scale-105 transition-transform"
                        @click.stop
                    >
                        Download
                    </UButton>
                </div>

                <!-- Case Study link or Coming Soon -->
                <div class="ml-auto flex items-center gap-2">
                    <UButton
                        v-if="typeof item.detailAction === 'string'"
                        :to="item.detailAction"
                        variant="link"
                        color="primary"
                        size="sm"
                        trailing-icon="mdi:arrow-right"
                        class="p-0 font-semibold"
                        @click.stop
                    >
                        Case Study
                    </UButton>
                    <span v-else class="text-xs text-amber-500 flex items-center gap-1">
                        <Icon name="mdi:traffic-cone" size="14"></Icon> Coming Soon
                    </span>
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import type { PortofolioItem } from '~/types/data';
import type { FunctionScrollDetect } from '~/types/plugins';

const key = getCurrentInstance()?.vnode.key as number ?? 1;

const { item } = defineProps<{ item: PortofolioItem }>();
const visible = ref(false);

const computedClassTransition = computed(() => {
    if (visible.value) {
        return "translate-x-0 opacity-100";
    } else {
        return key % 2 ? "translate-x-[-1rem] opacity-0" : "translate-x-[1rem] opacity-0";
    }
});

const categoryBadge = computed(() => {
    switch (item.category) {
        case 'backend':
            return { label: 'Backend & API', color: 'info' as const };
        case 'fullstack':
            return { label: 'Fullstack', color: 'success' as const };
        case 'game':
            return { label: 'Game Dev', color: 'warning' as const };
        default:
            return null;
    }
});

const handleScrollDetect: FunctionScrollDetect = {
    isOnElement: () => {
        visible.value = true;
    },
    isNotOnElement: () => {
        visible.value = false;
    },
};
</script>