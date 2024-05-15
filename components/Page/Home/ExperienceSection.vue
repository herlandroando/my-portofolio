<template>
    <section
        class="relative mt-28 md:justify-between items-center justify-center md:gap-7 gap-20"
        id="portofolio">
        <h2 class="font-black md:text-4xl text-3xl mb-6 w-fit">
            Experience</h2>
        <div class="px-12">
            <ol class="timeline border-gray-300 border-l-2 md:gap-8 gap-24">
                <ExperienceTimelineItem v-for="experience in experiences" :key="experience.key"
                    :experience="experience"></ExperienceTimelineItem>
            </ol>
        </div>
    </section>

</template>

<script setup lang="ts">
import { experiences } from '~/data';

</script>

<style>
.timeline {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: 32px 0 32px 32px;
    font-size: 1.125rem;
    position: relative;
}
</style>