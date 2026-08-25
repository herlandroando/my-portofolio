<template>
    <UBadge :color="color">
        <div class="flex flex-row gap-1 items-center">
            {{ item.label }}
            <template v-if="item.icon !== ''">
                {{ ' ' }} <Icon size="18" :name="item.icon"></Icon>
            </template>
        </div>
    </UBadge>
</template>

<script setup lang="ts">
const { name, color = 'cloudburst' } = defineProps<{ name: string, color?: string }>()

const item = computed(() => createSkillMeta(name))
</script>