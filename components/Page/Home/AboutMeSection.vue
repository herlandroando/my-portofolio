<template>
    <section id="about-me" ref="aboutMeRef"
        class="relative h-[calc(400vh-5rem)] w-full max-w-full dark:bg-slate-800 bg-white">
        <Transition>
            <div v-if="aboutMeVisible" class="w-full left-0 h-full md:py-12 fixed top-[3.5rem] z-10">
                <UContainer class="w-full h-full">
                    <div class="px-12 md:my-0 my-[50%] mx-0">
                        <div>
                            <h2 class="font-black md:text-4xl text-3xl mb-6 w-fit">
                                About Me</h2>
                                <ULink class="md:block hidden" to="#portofolio"><UButton>Skip This <Icon name="mdi:chevron-right"></Icon></UButton></ULink>
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
                            <ULink class="md:hidden block" to="#portofolio"><UButton>Skip This <Icon name="mdi:chevron-right"></Icon></UButton></ULink>

                        </div>
                    </div>
                </UContainer>
            </div>
        </Transition>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    heightSectionBefore: number
}>()
const aboutMeRef = ref<HTMLElement>();
const aboutMeVisible = ref(false);
const clientHeight = ref(0);
const selectedContent = ref(0);

const { x, y } = useWindowScroll()

const contents = [{
    key: 1,
    img: "/assets/images/1.jpg",
    description: "My name is Herlandro Tribiakto and yup that is me. You're probably wondering how i ended up in this situation...",
},
{
    key: 2,
    img: "/assets/images/2.png",
    description: `It all started with the game Warcraft 3. I was intrigued by the game's world editor. Inside there is a game logic design with the GUI of the application so that the map of the game has something unique.
    By using this, I made a map in the game and my friends liked the map I made. From here I was inspired to become a programmer focusing on game development.`,
    customStyle: { objectPosition: "25% 25%" }
}, {
    key: 3,
    img: "/assets/images/3.jpg",
    description: `Days passed but none of my friends or people in my neighborhood were interested in
    game development. On top of that, I had been slapped with the harshness of life. I became a web developer and started to get interested in web development.
    I learned by myself on YouTube, documentation of several technology websites and other written sources.`,
    customStyle: { objectPosition: "15% 0%" }
}]

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
        // console.log(y.value < compareStartHeight, y.value < compareEndHeight, compareStartHeight, compareEndHeight, y.value)
        //300 < 200 && 300 > 400
        if (y.value > compareStartHeight && y.value < compareEndHeight) {
            console.log("YES", i)
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