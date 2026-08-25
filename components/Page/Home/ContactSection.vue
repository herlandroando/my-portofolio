<template>
    <section id="contact"
        class="!text-center relative mt-48 mb-32 flex flex-col md:justify-between items-center justify-center md:gap-7 gap-20">
        <TextTitle tag="h2" class="mb-6 text-center">Let's Have a Chat!</TextTitle>
        <p class="md:w-[80%] w-full">I'm interested in collaborating on creative and innovative projects or if you have
            any questions about me or
            technology, You can chat to me on the social media below:</p>
        <div class="md:px-12 px-7 flex flex-row flex-wrap justify-center gap-4">
            <template v-for="media in myMedia" :key="media.label">
                <UTooltip :text="media.copyValue ? (copiedItem === media.label ? 'Copied!' : `Click to copy ${media.label}`) : `Visit ${media.label}`">
                    <UButton
                        v-if="media.copyValue"
                        :aria-label="`Copy ${media.label}`"
                        class="rounded-full p-3 transition-transform hover:scale-110"
                        variant="solid"
                        @click="handleCopy(media)"
                    >
                        <Icon size="24" :name="copiedItem === media.label ? 'mdi:check' : media.icon" />
                    </UButton>
                    <NuxtLink v-else :aria-label="media.label" :to="media.link" :external="true" target="_blank">
                        <UButton class="rounded-full p-3 transition-transform hover:scale-110" variant="solid">
                            <Icon size="24" :name="media.icon" />
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

interface MediaItem {
    label: string;
    link?: string;
    icon: string;
    copyValue?: string;
}

const myMedia: MediaItem[] = [
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
        label: 'Discord',
        copyValue: 'herlandrotri',
        icon: 'mdi:discord',
    },
    {
        label: 'Email',
        copyValue: 'herlandrotri@gmail.com',
        icon: 'mdi:email',
    },
];

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