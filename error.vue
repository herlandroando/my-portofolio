<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps({
    error: Object as () => NuxtError
})
</script>

<template>
    <NuxtLayout>
        <div class="h-[55vh] w-full justify-center items-center flex flex-col pt-14 gap-3">
            <h1 class="text-3xl font-bold">{{ error?.statusCode ?? "?" }}</h1>
            <p>{{ 'Hmm... How did you get here? Can you tell me on my contact?' }}</p>
            <UButton to="/">Go back home</UButton>
        </div>
    </NuxtLayout>
</template>