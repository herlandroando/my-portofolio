<template>
    <component :is="props.tag" class="font-bold text-lg">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import type { TypeTagText } from '~/types/components/Text';

const props = withDefaults(defineProps<{
    tag?: TypeTagText,
}>(), {
    tag: 'h2'
})
</script>