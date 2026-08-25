<template>
    <section id="contact"
        class="relative mt-32 mb-28 flex flex-col items-center justify-center text-center">
        
        <!-- Live Location & Time Widget -->
        <div class="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50 dark:bg-stone-900 border border-gray-200 dark:border-stone-800 shadow-xs text-xs sm:text-sm">
            <span class="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                <Icon name="mdi:map-marker-outline" class="text-red-500" size="18" />
                <span>Yogyakarta, Indonesia (GMT+7)</span>
            </span>
            <span class="text-gray-300 dark:text-stone-700">|</span>
            <span class="font-mono font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Icon name="mdi:clock-outline" class="text-cloudburst-500" size="16" />
                <span>{{ currentTimeStr }}</span>
            </span>
            <span class="text-gray-300 dark:text-stone-700 hidden sm:inline">|</span>
            <span class="hidden sm:inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span>{{ currentWorkStatus }}</span>
            </span>
        </div>

        <TextTitle tag="h2" class="mb-4 text-center">Let's Build Something Great Together</TextTitle>
        <p class="md:w-[70%] w-full text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            Whether you have an upcoming project, a backend architecture puzzle, or an engineering role open, my inbox is always open.
        </p>

        <!-- Quick Mail Generator Templates -->
        <div class="w-full max-w-2xl bg-gray-50/70 dark:bg-stone-900/60 p-6 rounded-3xl border border-gray-200/80 dark:border-stone-800 mb-10 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                Quick Inquiries
            </div>
            <div class="grid sm:grid-cols-3 gap-2.5">
                <button
                    v-for="tpl in emailTemplates"
                    :key="tpl.title"
                    class="p-3 rounded-xl bg-white dark:bg-stone-800 border border-gray-200/80 dark:border-stone-700/80 text-left hover:border-cloudburst-400 dark:hover:border-cloudburst-500 hover:shadow-md transition-all cursor-pointer group"
                    @click="openMailClient(tpl)"
                >
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-lg">{{ tpl.icon }}</span>
                        <Icon name="mdi:arrow-top-right" size="14" class="text-gray-400 group-hover:text-cloudburst-500 transition-colors" />
                    </div>
                    <div class="font-semibold text-xs text-slate-800 dark:text-slate-100">{{ tpl.title }}</div>
                    <div class="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 line-clamp-1">{{ tpl.subtitle }}</div>
                </button>
            </div>
        </div>

        <!-- Social Media & Copy Buttons -->
        <div class="flex flex-row flex-wrap justify-center gap-3">
            <template v-for="media in myMedia" :key="media.label">
                <UTooltip :text="media.copyValue ? (copiedItem === media.label ? 'Copied to clipboard!' : `Click to copy ${media.label}`) : `Visit ${media.label}`">
                    <UButton
                        v-if="media.copyValue"
                        :aria-label="`Copy ${media.label}`"
                        class="rounded-2xl px-4 py-3 transition-all hover:scale-105 shadow-xs flex items-center gap-2"
                        :color="copiedItem === media.label ? 'success' : 'neutral'"
                        variant="soft"
                        @click="handleCopy(media)"
                    >
                        <Icon size="20" :name="copiedItem === media.label ? 'mdi:check' : media.icon" />
                        <span class="text-xs font-semibold">{{ media.label }}</span>
                    </UButton>
                    <NuxtLink v-else :aria-label="media.label" :to="media.link" :external="true" target="_blank">
                        <UButton class="rounded-2xl px-4 py-3 transition-all hover:scale-105 shadow-xs flex items-center gap-2" color="neutral" variant="soft">
                            <Icon size="20" :name="media.icon" />
                            <span class="text-xs font-semibold">{{ media.label }}</span>
                        </UButton>
                    </NuxtLink>
                </UTooltip>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const toast = useToast();
const { copy } = useClipboard();
const copiedItem = ref<string | null>(null);

const currentTimeStr = ref('');
const currentWorkStatus = ref('Open for discussion');

interface MediaItem {
    label: string;
    link?: string;
    icon: string;
    copyValue?: string;
}

const myMedia: MediaItem[] = [
    {
        label: 'Email',
        copyValue: 'herlandrotri@gmail.com',
        icon: 'mdi:email',
    },
    {
        label: 'Discord',
        copyValue: 'herlandrotri',
        icon: 'mdi:discord',
    },
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/herlandro-tribiakto/',
        icon: 'mdi:linkedin',
    },
    {
        label: 'GitHub',
        link: 'https://github.com/herlandroando/',
        icon: 'mdi:github',
    },
    {
        label: 'Instagram',
        link: 'https://www.instagram.com/herlandrotri/',
        icon: 'mdi:instagram',
    },
];

const emailTemplates = [
    {
        icon: '💼',
        title: 'Job Opportunity',
        subtitle: 'Full-time / Contract engineering roles',
        subject: 'Job Opportunity for Herlandro Tribiakto',
        body: "Hi Herlandro,\n\nI came across your portfolio and would like to discuss an engineering opportunity with you.\n\nBest regards,\n[Your Name]",
    },
    {
        icon: '🤝',
        title: 'Project Collaboration',
        subtitle: 'Freelance & custom software development',
        subject: 'Project Inquiry - Backend / Fullstack Collaboration',
        body: "Hi Herlandro,\n\nI have a project that could benefit from your Laravel/Vue expertise. Here are the rough details:\n\nScope:\nTimeline:\n\nBest regards,\n[Your Name]",
    },
    {
        icon: '☕',
        title: 'Quick Chat',
        subtitle: 'General tech discussion & networking',
        subject: 'Connecting from your developer portfolio',
        body: "Hi Herlandro,\n\nJust wanted to connect and say hi! Loved your work and projects.\n\nBest regards,\n[Your Name]",
    },
];

function updateTime() {
    try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Asia/Jakarta',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };
        currentTimeStr.value = new Intl.DateTimeFormat('en-US', options).format(now);

        const hoursWIB = parseInt(
            new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', hour: 'numeric', hour12: false }).format(now),
            10
        );

        if (hoursWIB >= 8 && hoursWIB <= 22) {
            currentWorkStatus.value = 'Active & Online (WIB)';
        } else {
            currentWorkStatus.value = 'Offline (Will reply soon)';
        }
    } catch {
        currentTimeStr.value = 'GMT+7';
    }
}

let timer: any = null;
onMounted(() => {
    updateTime();
    timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});

function openMailClient(tpl: typeof emailTemplates[0]) {
    const mailto = `mailto:herlandrotri@gmail.com?subject=${encodeURIComponent(tpl.subject)}&body=${encodeURIComponent(tpl.body)}`;
    window.location.href = mailto;
}

async function handleCopy(media: MediaItem) {
    if (!media.copyValue) return;
    await copy(media.copyValue);
    copiedItem.value = media.label;
    
    toast.add({
        title: `${media.label} Copied!`,
        description: `${media.copyValue} copied to clipboard!`,
        color: 'success',
        icon: 'mdi:check-circle',
    });

    setTimeout(() => {
        if (copiedItem.value === media.label) {
            copiedItem.value = null;
        }
    }, 2000);
}
</script>