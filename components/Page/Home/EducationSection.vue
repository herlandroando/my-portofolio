<template>
    <section class="relative mt-28 md:justify-between items-center justify-center md:gap-7 gap-20" id="portofolio">
        <TextTitle tag="h2" class="mb-6 w-fit">Education</TextTitle>
        <!-- <h2 class="font-black md:text-4xl text-3xl mb-6 w-fit">
            Education</h2> -->
        <div class="md:px-12 px-7">
            <ol class="timeline md:gap-8 gap-24">
                <TimelineItem v-for="edu in educations" :is-last-item="educations.length === edu.key" :key="edu.key"
                    :item="edu"></TimelineItem>
            </ol>
        </div>
    </section>

</template>

<script setup lang="ts">
import { educations } from '~/data';

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