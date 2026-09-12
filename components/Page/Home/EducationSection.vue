<template>
    <section id="education" class="relative mt-16 md:mt-24 w-full">
        <div class="mb-6">
            <TextTitle tag="h2" class="w-fit">Education</TextTitle>
            <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl">
                Academic background, degrees, and core educational foundations.
            </p>
        </div>
        <div class="max-w-3xl">
            <ol class="flex flex-col p-0 m-0">
                <TimelineItem
                    v-for="(edu, index) in educations"
                    :is-last-item="index === educations.length - 1"
                    :key="edu.key"
                    :item="edu"
                />
            </ol>
        </div>
    </section>
</template>

<script setup lang="ts">
import { educations } from '~/data';
</script>