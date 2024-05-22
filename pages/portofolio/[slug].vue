<template>
    <div class="flex flex-col gap-8 pt-12 items-center">
        <template v-if="!pending">
            <div class="flex flex-col gap-5 max-w-[65ch] w-full">
                <TextTitle>{{ metaInit?.title }}</TextTitle>
                <div class="flex flex-row flex-wrap gap-1">
                    <SkillTag v-for="skill in metaInit?.skills" :name="skill"></SkillTag>
                </div>
                <div class="object-contain h-[400px] bg-gray-200 dark:bg-gray-800 rounded-md w-full">
                    <img class="h-full mx-auto" :src="metaInit?.imageUrl" :alt="metaInit?.title" />
                </div>
                <UCard class="prose dark:prose-invert w-full ">
                    <h3 class="mt-0">Table of Content</h3>
                    <ul>
                        <li v-for="toc in md?.toc?.links" :key="toc.id">
                            <ULink :to="'#' + toc.id">{{ toc.text }}</ULink>
                        </li>
                        <li>
                            <ULink :to="'#project-info'">Project Info</ULink>
                        </li>
                    </ul>
                </UCard>
            </div>

            <MDCRenderer v-if="md" class="prose dark:prose-invert" :body="md?.body" :data="md?.data" tag="article">
            </MDCRenderer>
            <UCard class="flex flex-col gap-2 prose dark:prose-invert w-full">
                <h2 id="project-info" class="mt-0">Project Info</h2>
                <div>
                    <p><b>Application Name:</b> {{ data?.meta.applicationName }}</p>
                </div>
                <div>
                    <b>Link:</b>
                    <ul>
                        <li class="flex flex-row gap-1 items-center" v-for="(link, key) in data?.meta.url" :key="key">
                            <Icon size="22" :name="iconLink(key)"></Icon>
                            <ULink :to="link" external target="_blank">
                                {{ _.capitalize(key) }}
                            </ULink>
                        </li>
                    </ul>
                </div>

                <div>
                    <b>Made by:</b>
                    <ul>
                        <li v-for="people in data?.meta.createdBy" :key="people.name">
                            <PortofolioAvatar :people="people"></PortofolioAvatar>
                        </li>
                    </ul>
                </div>
                <div>
                    <small> <b>Note: </b>{{ data?.meta.note }}</small>
                </div>
            </UCard>
        </template>
        <!-- <template> -->
        <div v-else class="flex flex-col gap-5 max-w-[65ch] w-full justify-center">
            <USkeleton class="h-6 w-[250px]" />
            <USkeleton class="h-[400px] w-full" />
            <USkeleton class="h-[200px] w-full" />
            <USkeleton class="h-[700px] w-full" />
            <USkeleton class="h-[200px] w-full" />
        </div>
        <!-- </template> -->
    </div>
</template>

<script setup lang="ts">
import type { MDCParserResult } from '@nuxtjs/mdc/runtime/types/parser';
import axios from 'axios';
import _ from 'lodash';
import { portofolio } from '~/data';
import type { PortofolioSinglePageMeta } from '~/types/data';

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;
const md = ref<MDCParserResult>()
const toc = ref()

const { pending, data, error, status } = await useAsyncData(`portofolio-${slug}`, () => fetchingLocalData(slug), {
    lazy: true,
    server: false,
})

const metaInit = portofolio.find((v) => {
    console.log(v.name, slug)
    return v.name === slug
})


watch([status], async ([status]) => {
    console.log('updated', status, error.value)
    if (status === 'error') {
        // alert("Not found")
        router.replace('/404')
    }
    if (status === 'success') {
        md.value = await parseMarkdown(data.value?.content ?? '')
    }
})

function iconLink(name: string) {
    switch (name) {
        case "github":
            return "mdi:github"
            break;

        default:
            return "mdi:file"
            break;
    }
}
</script>
