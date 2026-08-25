<template>
    <UButton :to="to" :target="external ? '_blank' : undefined" :external="external" class="p-0 !text-base" variant="link">
        <slot>_</slot>
    </UButton>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    to?: string,
    external?: boolean,
}>(), {
    external: true,
})
</script>