<template>
    <UBadge :color="computedColor">
        <div class="flex flex-row gap-1 items-center">
            {{ item.label }}
            <template v-if="item.icon !== ''">
                {{ ' ' }} <Icon size="18" :name="item.icon"></Icon>
            </template>
        </div>
    </UBadge>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    name: string
    color?: string
}>(), {
    color: 'primary'
})

const computedColor = computed(() => {
    if (props.color === 'gray') return 'neutral'
    if (props.color === 'cloudburst') return 'primary'
    if (props.color === 'orange') return 'warning'
    return props.color as any
})

const item = computed(() => createSkillMeta(props.name))
</script>