<template>
    <UModal v-model="open">
        <div class="p-8 flex flex-col justify-center items-center gap-3 text-center relative">
            <UButton variant="ghost" @click="handleClose" class="absolute top-0 right-0 mt-4 mr-2 p-1">
                <Icon name="mdi:close" size="24"></Icon>
            </UButton>
            <Icon name="mdi:traffic-cone" class="text-orange-400 mt-4" size="48"></Icon>
            <TextSubTitle>Under Construction</TextSubTitle>
            <p>I am very sorry for this. But I will release this feature soon.</p>
            <UButton @click="handleClose" color="red">Close</UButton>
        </div>
    </UModal>
</template>

<script setup lang="ts">
const [open, _] = defineModel()

function handleClose() {
    open.value = false
}
</script>