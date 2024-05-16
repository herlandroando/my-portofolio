<template>
    <section class="relative mt-28 md:justify-between items-center justify-center md:gap-7 gap-20" id="portofolio">
        <!-- <h2 class="font-black md:text-4xl text-3xl mb-6 w-fit">
            Experience</h2> -->
        <TextTitle tag="h2" class="mb-6 w-fit">Experience</TextTitle>
        <div class="md:px-12 px-7">
            <ol class="timeline md:gap-8 gap-24">
                <TimelineItem v-for="experience in experiences" :is-last-item="experiences.length === experience.key"
                    :key="experience.key" :item="experience"></TimelineItem>
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