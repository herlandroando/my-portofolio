<template>
    <ULink :to="to" :external="external" :target="external ? '_blank' : ''">
        <UButton class="p-0 !text-base" variant="link">
            <slot>_</slot>
        </UButton>
    </ULink>
</template>

<script setup lang="ts">
const { to, external = true } = defineProps<{
    to?: string,
    external?: boolean,
}>()

</script>