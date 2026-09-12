<template>
    <div class="flex flex-col gap-8 pt-8 pb-16 items-center">
        <!-- Back Button -->
        <div class="max-w-[65ch] w-full flex items-center justify-between">
            <UButton
                to="/#portofolio"
                icon="mdi:arrow-left"
                variant="ghost"
                color="neutral"
                size="sm"
                class="-ml-2 font-medium"
            >
                Back to Portfolio
            </UButton>
            <div class="flex items-center gap-2">
                <UBadge v-if="categoryBadge" :color="categoryBadge.color" variant="subtle" size="sm" class="capitalize">
                    {{ categoryBadge.label }}
                </UBadge>
                <UBadge v-if="scopeBadge" :color="scopeBadge.color" variant="outline" size="xs" class="font-medium">
                    <Icon v-if="scopeBadge.icon" :name="scopeBadge.icon" class="mr-1" size="12" />
                    {{ scopeBadge.label }}
                </UBadge>
            </div>
        </div>

        <template v-if="!pending && data">
            <div class="flex flex-col gap-6 max-w-[65ch] w-full">
                <!-- Title & Meta -->
                <div>
                    <TextTitle>{{ metaInit?.title || data?.meta.applicationName }}</TextTitle>
                    <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                        {{ metaInit?.role }} &bull; {{ metaInit?.at }}
                    </p>
                    <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {{ metaInit?.date }}
                    </p>
                </div>

                <!-- Skill Tags -->
                <div class="flex flex-row flex-wrap gap-1.5">
                    <SkillTag v-for="skill in metaInit?.skills" :name="skill" :key="skill"></SkillTag>
                </div>

                <!-- Hero Image Showcase -->
                <div class="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 shadow-sm max-h-[420px]">
                    <NuxtImg
                        class="w-full h-full object-cover"
                        :src="metaInit?.imageUrl"
                        :alt="metaInit?.title || data?.meta.applicationName"
                        loading="eager"
                    />
                </div>

                <!-- Action Links Header -->
                <div v-if="data?.meta.url" class="flex flex-wrap gap-2">
                    <UButton
                        v-for="(link, key) in data?.meta.url"
                        :key="key"
                        :to="link"
                        external
                        target="_blank"
                        size="sm"
                        :variant="key === 'demo' ? 'solid' : 'soft'"
                        :color="key === 'demo' ? 'primary' : 'neutral'"
                        :icon="iconLink(String(key))"
                    >
                        {{ formatLinkLabel(String(key)) }}
                    </UButton>
                </div>

                <!-- Table of Contents -->
                <UCard v-if="md?.toc?.links && md.toc.links.length > 0" class="prose dark:prose-invert w-full shadow-sm">
                    <h3 class="text-base font-semibold mt-0 mb-3 flex items-center gap-2">
                        <Icon name="mdi:format-list-bulleted" size="20" class="text-primary-500"></Icon>
                        Table of Contents
                    </h3>
                    <ul class="space-y-1 my-0 text-sm">
                        <li v-for="tocItem in md?.toc?.links" :key="tocItem.id">
                            <ULink :to="'#' + tocItem.id" class="text-primary hover:underline">{{ tocItem.text }}</ULink>
                        </li>
                        <li>
                            <ULink to="#project-info" class="text-primary hover:underline">Project Information</ULink>
                        </li>
                    </ul>
                </UCard>
            </div>

            <!-- Markdown Case Study Content -->
            <div class="max-w-[65ch] w-full">
                <MDCRenderer
                    v-if="md"
                    class="prose dark:prose-invert max-w-none w-full"
                    :body="md?.body"
                    :data="md?.data"
                    tag="article"
                />
            </div>

            <!-- Project Info Card -->
            <div class="max-w-[65ch] w-full">
                <UCard class="flex flex-col gap-4 prose dark:prose-invert w-full shadow-sm">
                    <h2 id="project-info" class="mt-0 text-xl font-bold flex items-center gap-2">
                        <Icon name="mdi:information-outline" size="24" class="text-primary-500"></Icon>
                        Project Information
                    </h2>
                    <div>
                        <p class="my-1"><b>Application Name:</b> {{ data?.meta.applicationName }}</p>
                    </div>
                    <div v-if="data?.meta.url">
                        <b>Resources & Links:</b>
                        <ul class="mt-2 space-y-1">
                            <li class="flex flex-row gap-2 items-center" v-for="(link, key) in data?.meta.url" :key="key">
                                <Icon size="20" :name="iconLink(String(key))"></Icon>
                                <ULink :to="link" external target="_blank" class="text-primary font-medium hover:underline">
                                    {{ formatLinkLabel(String(key)) }}
                                </ULink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <b>Contributors & Team:</b>
                        <ul class="mt-2 space-y-1">
                            <li v-for="people in data?.meta.createdBy" :key="people.name">
                                <PortofolioAvatar :people="people"></PortofolioAvatar>
                            </li>
                        </ul>
                    </div>
                    <div v-if="data?.meta.note" class="pt-2 border-t border-gray-100 dark:border-gray-800">
                        <small class="text-gray-500 dark:text-gray-400"><b>Note:</b> {{ data?.meta.note }}</small>
                    </div>
                </UCard>
            </div>

            <!-- Next & Previous Project Navigation Footer -->
            <div class="max-w-[65ch] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <UCard
                    v-if="prevProject"
                    class="cursor-pointer hover:border-primary-500 transition-colors"
                    @click="router.push(prevProject.detailAction as string || '/#portofolio')"
                >
                    <div class="flex flex-col">
                        <span class="text-xs text-gray-400 flex items-center gap-1">
                            <Icon name="mdi:arrow-left" size="14"></Icon> Previous Project
                        </span>
                        <span class="font-semibold text-sm mt-1 line-clamp-1">{{ prevProject.title }}</span>
                    </div>
                </UCard>
                <div v-else></div>

                <UCard
                    v-if="nextProject"
                    class="cursor-pointer hover:border-primary-500 transition-colors text-right"
                    @click="router.push(nextProject.detailAction as string || '/#portofolio')"
                >
                    <div class="flex flex-col items-end">
                        <span class="text-xs text-gray-400 flex items-center gap-1">
                            Next Project <Icon name="mdi:arrow-right" size="14"></Icon>
                        </span>
                        <span class="font-semibold text-sm mt-1 line-clamp-1">{{ nextProject.title }}</span>
                    </div>
                </UCard>
                <div v-else></div>
            </div>
        </template>

        <!-- Skeleton Loading State -->
        <div v-else class="flex flex-col gap-5 max-w-[65ch] w-full justify-center">
            <USkeleton class="h-8 w-[300px]" />
            <USkeleton class="h-4 w-[200px]" />
            <USkeleton class="h-[360px] w-full rounded-xl" />
            <USkeleton class="h-[140px] w-full" />
            <USkeleton class="h-[400px] w-full" />
            <USkeleton class="h-[200px] w-full" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MDCParserResult } from '@nuxtjs/mdc/runtime/types/parser';
import { portofolio } from '~/data';
import type { PortofolioSinglePageMeta } from '~/types/data';

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;
const md = ref<MDCParserResult>();

const currentIndex = computed(() => portofolio.findIndex((v) => v.name === slug));

const metaInit = computed(() => {
    if (currentIndex.value >= 0) {
        return portofolio[currentIndex.value];
    }
    return undefined;
});

const prevProject = computed(() => {
    if (currentIndex.value > 0) {
        return portofolio[currentIndex.value - 1];
    }
    return null;
});

const nextProject = computed(() => {
    if (currentIndex.value >= 0 && currentIndex.value < portofolio.length - 1) {
        return portofolio[currentIndex.value + 1];
    }
    return null;
});

const categoryBadge = computed(() => {
    if (!metaInit.value?.category) return null;
    switch (metaInit.value.category) {
        case 'desktop':
            return { label: 'Desktop & Tools', color: 'primary' as const };
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

const scopeBadge = computed(() => {
    if (metaInit.value?.scope === 'self') {
        return { label: 'Self Project', color: 'primary' as const, icon: 'mdi:rocket-launch-outline' };
    }
    if (metaInit.value?.scope === 'client') {
        return { label: 'Client Work', color: 'neutral' as const, icon: 'mdi:briefcase-outline' };
    }
    return null;
});

const { pending, data, error, status } = await useAsyncData(`portofolio-${slug}`, () => fetchingLocalData(slug), {
    lazy: true,
    server: false,
});

// Dynamic SEO
useSeoMeta({
    title: () => `${metaInit.value?.title || 'Case Study'} | Herlandro Tribiakto`,
    description: () => metaInit.value?.description || 'Project case study and technical breakdown.',
    ogTitle: () => `${metaInit.value?.title || 'Case Study'} | Herlandro Tribiakto`,
    ogDescription: () => metaInit.value?.description || 'Project case study and technical breakdown.',
    ogImage: () => metaInit.value?.imageUrl || '/assets/images/og-cover.png',
});

watch([status], async ([newStatus]) => {
    if (newStatus === 'error' || !metaInit.value) {
        showError({ statusCode: 404, statusMessage: 'Project Case Study Not Found' });
        return;
    }
    if (newStatus === 'success' && data.value?.content) {
        md.value = await parseMarkdown(data.value.content);
    }
}, { immediate: true });

function iconLink(name: string) {
    switch (name.toLowerCase()) {
        case 'github':
            return 'mdi:github';
        case 'demo':
        case 'live':
            return 'mdi:open-in-new';
        case 'file':
        case 'drive':
            return 'mdi:google-drive';
        default:
            return 'mdi:link-variant';
    }
}

function formatLinkLabel(key: string) {
    switch (key.toLowerCase()) {
        case 'github':
            return 'Source Code (GitHub)';
        case 'demo':
            return 'Live Preview';
        case 'file':
            return 'Download Build';
        default:
            return key.charAt(0).toUpperCase() + key.slice(1);
    }
}
</script>
