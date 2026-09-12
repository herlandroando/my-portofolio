<template>
    <li v-scroll-detect="callbackScroll" class="relative list-none">
        <Transition name="fade-down">
            <div class="flex flex-row gap-3 sm:gap-5 relative transition-all duration-700"
                :class="{ 'opacity-100 translate-y-0': visible, 'opacity-0 translate-y-8': !visible }">
                
                <!-- Left Track: Node + Vertical Line -->
                <div class="flex flex-col items-center shrink-0 w-9 sm:w-11">
                    <!-- Icon Node -->
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-xs z-10"
                        :class="visible ? 'bg-cloudburst-500 text-white ring-4 ring-cloudburst-100 dark:ring-cloudburst-950/60 scale-105' : 'bg-gray-100 dark:bg-stone-800 text-gray-500'">
                        <Icon size="18" :name="item.icon" />
                    </div>

                    <!-- Connecting Line -->
                    <div v-if="!isLastItem"
                        class="w-0.5 grow mt-2 transition-colors duration-500 min-h-[36px]"
                        :class="visible ? 'bg-cloudburst-300 dark:bg-cloudburst-600' : 'bg-gray-200 dark:bg-stone-800'">
                    </div>
                </div>

                <!-- Right Track: Timeline Content Card -->
                <div class="grow pb-6 sm:pb-8">
                    <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-gray-200/80 dark:border-stone-800 shadow-xs transition-all duration-300 hover:shadow-md hover:border-cloudburst-300 dark:hover:border-cloudburst-800">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                            <TextSubTitle tag="h3" class="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">{{ item.role }}</TextSubTitle>
                            <span class="text-[11px] font-medium text-cloudburst-600 dark:text-cloudburst-400 bg-cloudburst-50 dark:bg-cloudburst-950/50 px-2.5 py-0.5 rounded-full border border-cloudburst-100 dark:border-cloudburst-900/50 w-fit">
                                {{ item.from }} — {{ item.to }}
                            </span>
                        </div>

                        <p class="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 mt-0.5">at {{ item.at }}</p>

                        <!-- Tech Stack Tags -->
                        <div class="flex flex-row gap-1.5 my-2.5 flex-wrap" v-if="item.skill">
                            <SkillTag v-for="skill in item?.skill" :key="skill" :name="skill" class="!text-xs"></SkillTag>
                        </div>

                        <!-- Body Content -->
                        <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-0.5">
                            <component v-for="(content, i) in computedContent" :key="i" :is="content"></component>
                        </div>
                    </div>
                </div>
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
        if (itemOptions) {
            newElement.push(createComponent(itemOptions));
        }
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