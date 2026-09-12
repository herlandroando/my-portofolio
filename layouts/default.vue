<template>
    <header class="fixed w-full top-0 z-[10] dark:bg-stone-950/85 bg-white/85 h-[60px] border-b border-gray-200/60 dark:border-stone-800/60 backdrop-blur-md transition-colors">
        <UContainer class="h-full flex flex-row justify-between items-center">
            <div class="flex flex-row gap-3 items-center">
                <UButton class="lg:hidden block" variant="ghost" color="neutral" size="sm" @click="handleOpenSidebar">
                    <Icon name="mdi:menu" size="20"></Icon>
                </UButton>
                <USlideover side="left" v-model:open="openSidebar">
                    <template #content>
                        <div class="p-5 flex flex-col h-full justify-center gap-5 relative bg-white dark:bg-stone-950">
                            <div class="absolute top-4 right-4">
                                <UButton variant="ghost" color="neutral" size="sm" class="p-2" @click="() => openSidebar = false">
                                    <Icon name="mdi:close" size="22"></Icon>
                                </UButton>
                            </div>
                            <div class="mb-4">
                                <Logo></Logo>
                            </div>
                            <NavbarLink @click="() => openSidebar = false" to="/#about-me">About Me</NavbarLink>
                            <NavbarLink @click="() => openSidebar = false" to="/#experience">Experience</NavbarLink>
                            <NavbarLink @click="() => openSidebar = false" to="/#education">Education</NavbarLink>
                            <NavbarLink @click="() => openSidebar = false" to="/#portofolio">Portofolio</NavbarLink>
                            <NavbarLink @click="handleAlertConstruction">
                                <Icon name="mdi:traffic-cone"></Icon> Blog
                            </NavbarLink>
                            <NavbarLink @click="() => openSidebar = false" to="/#contact">Contact</NavbarLink>
                        </div>
                    </template>
                </USlideover>
                <Logo></Logo>
            </div>
            <div class="flex-row justify-center gap-2 lg:flex hidden items-center text-sm">
                <NavbarLink to="/#about-me">About Me</NavbarLink>
                <NavbarLink to="/#experience">Experience</NavbarLink>
                <NavbarLink to="/#education">Education</NavbarLink>
                <NavbarLink to="/#portofolio">Portofolio</NavbarLink>
                <NavbarLink @click="handleAlertConstruction">
                    <Icon name="mdi:traffic-cone"></Icon> Blog
                </NavbarLink>
                <NavbarLink to="/#contact">Contact</NavbarLink>
            </div>
            <div class="flex flex-row gap-2 items-center">
                <ClientOnly v-if="!colorMode?.forced">
                    <UButton
                        variant="ghost"
                        color="neutral"
                        size="sm"
                        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                        @click="isDark = !isDark"
                    >
                        <Icon v-if="isDark" name="mdi:weather-night" size="18"></Icon>
                        <Icon v-else name="mdi:weather-sunny" size="18"></Icon>
                    </UButton>
                </ClientOnly>
            </div>
        </UContainer>
    </header>
    <UContainer>
        <div class="mt-[60px]"></div>
        <slot></slot>
    </UContainer>
    <footer class="dark:bg-stone-950 bg-slate-50 flex-col flex justify-center items-center mt-24 w-full p-6 gap-1">
        <p>
            Create with 💖 by Herlandro
        </p>
        <p class="text-sm text-gray-400 text-center">
            Using <UButton to="https://nuxt.com/" target="_blank" class="p-0" variant="link">Nuxt</UButton>
            &
            <UButton to="https://ui.nuxt.com/" target="_blank" class="p-0" variant="link">Nuxt UI</UButton>
            <br>
            Built with <UButton to="https://vercel.com/" target="_blank" class="p-0" variant="link">Vercel</UButton>
        </p>
        <p class="text-sm mt-5 text-gray-400 text-center">
            Source code on <UButton to="https://github.com/herlandroando/my-portofolio" target="_blank" class="p-0" variant="link">Github</UButton>.
        </p>
    </footer>
    <AlertOnConstruction v-model="openAlertConstruction" />
    <div class="fixed bottom-4 right-4 z-30" @click="handleClickTop">
        <Transition>
            <UButton v-if="notOnTop" class="p-2">
                <Icon size="24" name="mdi:chevron-up"></Icon>
            </UButton>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const openAlertConstruction = ref(false);
const openSidebar = ref(false);
const notOnTop = ref(false);
const { x, y } = useWindowScroll()

watch([x, y], ([x, y]) => {
    if (y > 100 && !notOnTop.value) {
        notOnTop.value = true
        return;
    }
    if (y <= 100 && notOnTop.value) {
        notOnTop.value = false
        return;
    }
})

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

function handleOpenSidebar() {
    openSidebar.value = true;
}

function handleAlertConstruction() {
    openSidebar.value = false;
    openAlertConstruction.value = true;
}

function handleClickTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>