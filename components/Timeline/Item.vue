<template>
    <li v-scroll-detect="callbackScroll">
        <Transition name="fade-down">
            <div class="flex md:flex-row flex-col md:gap-0 gap-5 relative transition-all duration-700"
                :class="{ 'opacity-100 translate-y-0': visible, 'opacity-0 translate-y-12': !visible }">
                
                <!-- Connecting Line -->
                <div class="absolute left-[-32px] top-[51px] border-gray-200 dark:border-stone-800 md:h-full h-[calc(100%+6rem)] transition-colors"
                    :class="{ 'border-l-2': !isLastItem, 'border-cloudburst-400 dark:border-cloudburst-500': visible }">
                </div>

                <!-- Icon Node -->
                <div class="md:absolute relative ml-[-60px] w-fit rounded-full p-3 transition-all duration-500 shadow-md"
                    :class="visible ? 'bg-cloudburst-500 text-white ring-4 ring-cloudburst-100 dark:ring-cloudburst-950/60 scale-105' : 'bg-gray-200 dark:bg-stone-800 text-gray-500'">
                    <Icon size="22" :name="item.icon">
                    </Icon>
                </div>

                <!-- Timeline Content Card -->
                <UCard class="md:ml-7 md:mt-[-0.5rem] mt-0 ml-[-46px] z-[3] w-full border border-gray-200/80 dark:border-stone-800 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <TextSubTitle tag="h3" class="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">{{ item.role }}</TextSubTitle>
                        <span class="text-xs font-medium text-cloudburst-600 dark:text-cloudburst-400 bg-cloudburst-50 dark:bg-cloudburst-950/50 px-2.5 py-1 rounded-full border border-cloudburst-100 dark:border-cloudburst-900/50 w-fit">
                            {{ item.from }} — {{ item.to }}
                        </span>
                    </div>

                    <p class="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-1">at {{ item.at }}</p>

                    <!-- Tech Stack Tags -->
                    <div class="flex flex-row gap-1.5 my-3 flex-wrap" v-if="item.skill">
                        <SkillTag v-for="skill in item?.skill" :key="skill" :name="skill" class="!text-xs"></SkillTag>
                    </div>

                    <!-- Body Content -->
                    <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-1">
                        <component v-for="(content, i) in computedContent" :key="i" :is="content"></component>
                    </div>
                </UCard>
            </div>
        </Transition>
    </li>
</template>

<script setup lang="ts">
import type { FunctionScrollDetect } from '~/types/plugins';
import Link from './Link.vue';
import type { TimelineItem, TimelineItemContentAppend } from '~/types/data';

const { item } = defineProps<{
    item: TimelineItem,
    isLastItem?: boolean,
}>()

const visible = ref(false);

const computedContent = computed(() => renderContent())
const callbackScroll: FunctionScrollDetect = {
    isOnElement: () => {
        visible.value = true;
    },
    isNotOnElement: () => {
        visible.value = false;
    }
}

function renderContent() {
    const text = item.content.split("{::}")
    if (text.length <= 1) {
        return [h('span', { class: "whitespace-pre-line" }, { default: () => item.content })]
    }
    
    let newElement = [];
    let indexReplace = 0;
    for (let i = 0; i < text.length; i++) {
        const v = text[i];

        if ((i + 1) % 2 === 0) {
            newElement.push(h('span', { class: "whitespace-pre-line" }, { default: () => v }));
            break;
        }
        newElement.push(h('span', { class: "whitespace-pre-line" }, { default: () => v }));
        if (!item.contentAppend) {
            throw Error('You must assign content append if you write template {{::}} on timeline items.')
        }

        const itemOptions = item.contentAppend[indexReplace];
        newElement.push(createComponent(itemOptions))
        indexReplace++;
    }
    return newElement
}

function createComponent(contentAppend: TimelineItemContentAppend) {
    let component = null;
    switch (contentAppend.type) {
        case 'button':
            component = h('button', null, { default: () => contentAppend.options.text })
            break;
        case 'link':
            component = h(Link, { to: contentAppend.options.to, external: contentAppend.options.external }, { default: () => contentAppend.options.text })
            break;
        default:
            throw Error('There is no type of that.');
    }
    return component
}
</script>