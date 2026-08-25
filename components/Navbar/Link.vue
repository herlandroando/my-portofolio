<template>
    <UButton :to="to" variant="link" class="font-bold text-base">
        <slot>Unknown</slot>
    </UButton>
</template>

<script setup lang="ts">
defineProps<{
    to?: string
}>()
</script>