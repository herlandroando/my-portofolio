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
const { name, color } = withDefaults(defineProps<{ name: string, color?: string }>(), {
    color: 'cloudburst'
})

const item = computed(() => createSkillMeta(name))
</script>