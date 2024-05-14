<template>
    <section id="about-me" ref="aboutMeRef"
        class="relative h-[calc(400vh-5rem)] w-full max-w-full dark:bg-slate-800 bg-white">
        <Transition>
            <div v-if="aboutMeVisible" class="w-full left-0 h-full md:py-12 fixed top-[3.5rem] z-10">
                <UContainer class="w-full h-full">
                    <div class="px-12 md:my-0 my-[15%] mx-0">
                        <div>
                            <h2 class="font-black md:text-4xl text-3xl mb-6 w-fit">
                                About Me</h2>
                        </div>
                        <div
                            class="md:flex-row flex-col flex h-full max-w-full md:py-14 md:justify-between justify-center text-left gap-8">
                            <div class="md:basis-1/3 basis-[none] relative w-full md:h-[370px] h-[195px]">
                                <template v-for="(content, k) in contents.slice(selectedContent, selectedContent + 3)">
                                    <Transition name="slide">
                                        <div v-if="content.key >= selectedContent + 1" :key="content.key"
                                            class="dark:bg-slate-600 bg-slate-100 shadow-md absolute w-full h-full justify-center flex"
                                            :style="{ zIndex: contents.length - k, transform: defineTransform(k) }">
                                            <Transition name="fade">
                                                <img v-if="content.key === selectedContent + 1" :src="content.img"
                                                    class="w-full h-auto object-cover" :style="content?.customStyle" />
                                            </Transition>
                                        </div>
                                    </Transition>
                                </template>
                            </div>
                            <div class="md:basis-2/3 basis-[none] md:px-5 md:text-lg text-sm self-center">
                                <p>{{ contents[selectedContent].description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </UContainer>
            </div>
        </Transition>
    </section>
</template>

<script setup lang="ts">
import { aboutMeContents } from '~/data';

const props = defineProps<{
    heightSectionBefore: number
}>()
const aboutMeRef = ref<HTMLElement>();
const aboutMeVisible = ref(false);
const clientHeight = ref(0);
const selectedContent = ref(0);

const { x, y } = useWindowScroll()

const contents = aboutMeContents;

onMounted(() => {
    clientHeight.value = aboutMeRef.value?.clientHeight ?? 0;
})

watch([x, y], ([x, y]) => {
    if (!props.heightSectionBefore) {
        return;
    }
    if (y >= props.heightSectionBefore && y <= (aboutMeRef.value?.clientHeight ?? 0)) {
        aboutMeVisible.value = true
    } else {
        aboutMeVisible.value = false
    }

    if (aboutMeVisible.value) {
        selectedContent.value = handleCompareSelectedContent();
    }
})

function handleCompareSelectedContent() {
    let compare = (clientHeight.value - props.heightSectionBefore) / contents.length;
    for (let i = 0; i < contents.length; i++) {
        let compareStartHeight = props.heightSectionBefore + (compare * i)
        let compareEndHeight = props.heightSectionBefore + (compare * (i + 1));
        if (y.value > compareStartHeight && y.value < compareEndHeight) {
            return i;
        }
    }
    aboutMeVisible.value = false;
    return 0;
}

function defineTransform(k: number) {
    let { x, y } = { x: 0.5 * k, y: 0.5 * k }

    return `translate(${x}em, ${y}em)`
}

</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 1s ease;
}

.slide-enter-from {
    transform: translate(.5em, .5em) !important;
}

.slide-leave-to {
    transform: translate(-40em, 0em) !important;
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>