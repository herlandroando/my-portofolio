<template>
    <li v-scroll-detect="callbackScroll">
        <Transition name="fade-down">
            <div class="flex md:flex-row flex-col md:gap-0 gap-5 relative transition-all duration-1000"
                :class="{ 'opacity-100 translate-y-0': visible, 'opacity-0 translate-y-[15rem]': !visible }">
                <div class="absolute left-[-32px] top-[51px] border-gray-300 md:h-full h-[calc(100%+8rem)]"
                    :class="{ 'border-l-2': !isLastItem }">

                </div>
                <div class="md:absolute relative ml-[-60px] w-fit rounded-[100%] px-4 py-3 bg-cloudburst-500">
                    <Icon class=" text-white" size="24" :name="item.icon">
                    </Icon>
                </div>
                <UCard class="md:ml-7 md:mt-[-0.5rem] mt-0 ml-[-46px] z-[3]">
                    <TextSubTitle tag="h3">{{ item.role }}</TextSubTitle>
                    <p>at {{ item.at }}</p>
                    <p class="text-sm mb-3 text-gray-400">({{ item.from }} - {{ item.to }})</p>
                    <div class="flex flex-row gap-2 my-2 flex-wrap" v-if="item.skill">
                        <SkillTag v-for="skill in item?.skill" :key="skill" :name="skill"></SkillTag>
                    </div>
                    <component v-for="(content, i) in computedContent" :key="i" :is="content"></component>
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
        // console.log('onElement')
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
    // console.log(text);
    let newElement = [];
    let indexReplace = 0;
    for (let i = 0; i < text.length; i++) {
        const v = text[i];

        if ((i + 1) % 2 === 0) {
            newElement.push(h('span', { class: "text-base whitespace-pre-line" }, { default: () => v }));
            // console.log('skipped')
            break;
        }
        newElement.push(h('span', { class: "text-base whitespace-pre-line" }, { default: () => v }));
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
    // console.log(contentAppend, 'is contentappend');
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

<style></style>