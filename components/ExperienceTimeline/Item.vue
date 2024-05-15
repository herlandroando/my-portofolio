<template>
    <li>
        <div class="flex md:flex-row flex-col md:gap-0 gap-5">
            <div class="md:absolute relative ml-[-60px] w-fit rounded-[100%] px-4 py-3 bg-cloudburst-500">
                <Icon class=" text-white" size="24" :name="experience.icon">
                </Icon>
            </div>
            <UCard class="md:ml-7 md:mt-[-0.5rem] mt-0 ml-[-46px] ">
                <h3 class="font-bold text-lg">{{ experience.role }}</h3>
                <h4>at {{ experience.at }}</h4>
                <p class="text-sm mb-3 text-gray-400">({{ experience.from }} - {{ experience.to }})</p>
                <div class="flex flex-row gap-2 my-2">
                    <SkillTag v-for="skill in experience.skill" :key="skill" :name="skill"></SkillTag>
                </div>
                <component v-for="(content, i) in computedContent" :key="i" :is="content"></component>
            </UCard>
        </div>
    </li>
</template>

<script setup lang="ts">
import Link from './Link.vue';

const { experience } = defineProps<{
    experience: ExperienceItem
}>()

const computedContent = computed(() => renderContent())

onMounted(() => {
    console.log(computedContent.value, 'computed');
})

function renderContent() {
    const text = experience.content.split("{::}")
    if (text.length <= 1) {
        return [h('span', { class: "whitespace-pre-line" }, { default: () => experience.content })]
    }
    // console.log(text);
    let newElement = [];
    let indexReplace = 0;
    for (let i = 0; i < text.length; i++) {
        const v = text[i];

        if ((i + 1) % 2 === 0) {
            newElement.push(h('span', { class: "whitespace-pre-line" }, { default: () => v }));
            // console.log('skipped')
            break;
        }
        newElement.push(h('span', { class: "whitespace-pre-line" }, { default: () => v }));
        if (!experience.contentAppend) {
            throw Error('You must assign content append if you write template {{::}} on timeline items.')
        }

        const itemOptions = experience.contentAppend[indexReplace];
        newElement.push(createComponent(itemOptions))
        indexReplace++;
    }
    return newElement
}

function createComponent(contentAppend: ExperienceItemContentAppend) {
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