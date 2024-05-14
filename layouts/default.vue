<template>
    <header class="py-5 fixed w-full top-0 z-[100] dark:bg-stone-950 bg-slate-50 h-20">
        <UContainer class="flex flex-row justify-between items-center">
            <div>
                <Logo></Logo>
            </div>
            <div class="flex-row justify-center gap-5 md:flex hidden">
                <NavbarLink to="#about-me">About Me</NavbarLink>
                <NavbarLink>Portofolio</NavbarLink>
                <NavbarLink>Blog</NavbarLink>
            </div>
            <div class="flex flex-row gap-3">
                <UButton @click="() => $colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
                    variant="ghost">
                    <Icon v-if="!isDark" name="material-symbols:clear-day-rounded"></Icon>
                    <Icon v-else name="material-symbols:nightlight"></Icon>
                </UButton>
                <UButton size="lg" variant="outline">
                    Contact me <Icon name="material-symbols:arrow-outward-rounded"></Icon>
                </UButton>
            </div>
        </UContainer>

    </header>
    <UContainer id="main" as="main" class="relative">
        <div class="mt-[80px]"></div>
        <slot></slot>
    </UContainer>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() =>
    colorMode.value === 'dark'
)

console.log(isDark.value)

// function handleChangeColorMode() {
//     colorMode.preference = isDark.value ? 'light' : 'dark'
// }
</script>