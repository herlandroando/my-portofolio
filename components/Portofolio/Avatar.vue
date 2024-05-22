<template>
    <span v-if="link">
        <ULink :to="link" external target="_blank"><b>{{ name }}</b> </ULink> as {{ people.role }}
    </span>
    <span v-else><b>{{ name }}</b> as {{ people.role }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{ people: { name: string, role: string } }>()

const { name, link } = createProfileMeta(props.people.name);
</script>