<template>
    <UCard v-scroll-detect="handleScrollDetect" class="h-full cursor-pointer transition-all duration-1000"
        :class="computedClassTransition" :ui="{
            body: {
                base: 'h-full',
                background: '',
                padding: 'px-4 py-5 sm:p-6',
            },
        }">
        <div class="flex flex-col gap-3 relative h-full">
            <div class="text-xs">
                <TextSubTitle tag="h3">{{ item.title }}</TextSubTitle>
                <p class="font-semibold text-gray-500">{{ item.role }}</p>
                <p class="text-gray-500">at {{ item.at }} || {{ item.date }}</p>

            </div>
            <div class="h-[340px]">
                <img class="rounded h-full w-full object-cover" :src="item.imageUrl" />
            </div>
            <div class="flex flex-row flex-wrap gap-1">
                <SkillTag v-for="skill in item.skills" :name="skill" :key="skill"></SkillTag>
            </div>
            <div class="text-sm">
                <p>{{ item.description }}</p>
            </div>
            <UButton variant="link" color="black" class="p-0 mt-auto">
                Click for more details <Icon name="mdi:traffic-cone"></Icon>
            </UButton>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import type { PortofolioItem } from '~/types/data';
import type { FunctionScrollDetect } from '~/types/plugins';

const key = getCurrentInstance()?.vnode.key as number ?? 1

const { item } = defineProps<{ item: PortofolioItem }>()
const visible = ref(false);
const computedClassTransition = computed(() => {
    if (visible.value) {
        return "translate-x-0 opacity-100"
    } else {
        return key % 2 ? "translate-x-[-1rem] opacity-0" : "translate-x-[1rem] opacity-0"
    }
})

const handleScrollDetect: FunctionScrollDetect =
{
    isOnElement: () => {
        visible.value = true;
    },
    isNotOnElement: () => {
        visible.value = false;
    },
}

</script>