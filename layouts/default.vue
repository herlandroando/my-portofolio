<template>
    <header class="py-5 fixed w-full top-0 z-[10] dark:bg-stone-950 bg-slate-50 h-20 border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur">
        <UContainer class="flex flex-row justify-between items-center">
            <div class="flex flex-row gap-4 items-center">
                <UButton class="lg:hidden block" @click="handleOpenSidebar">
                    <Icon name="mdi:menu"></Icon>
                </UButton>
                <USlideover side="left" v-model:open="openSidebar">
                    <template #content>
                        <div class="p-4 flex flex-col h-full justify-center gap-6 relative">
                            <div class="absolute top-0 mt-8">
                                <UButton class="p-2" @click="() => openSidebar = false">
                                    <Icon name="mdi:close" size="24"></Icon>
                                </UButton>
                            </div>
                            <NavbarLink @click="() => openSidebar = false" to="/#about-me">About Me</NavbarLink>
                            <NavbarLink @click="() => openSidebar = false" to="/#experience">Experience</NavbarLink>
                            <NavbarLink @click="() => openSidebar = false" to="/#education">Education</NavbarLink>
                            <NavbarLink @click="() => openSidebar = false" to="/#portofolio">Portofolio</NavbarLink>
                            <NavbarLink @click="handleAlertConstruction">
                                <Icon name="mdi:traffic-cone"></Icon> Blog
                            </NavbarLink>
                            <NavbarLink @click="() => openSidebar = false" to="/#contact">Contact</NavbarLink>
                            <UButton
                                to="/resume.pdf"
                                target="_blank"
                                icon="mdi:file-document-outline"
                                color="primary"
                                variant="soft"
                                class="mt-4 justify-center"
                                @click="() => openSidebar = false"
                            >
                                Resume
                            </UButton>
                        </div>
                    </template>
                </USlideover>
                <Logo></Logo>
            </div>
            <div class="flex-row justify-center gap-3 lg:flex hidden items-center">
                <NavbarLink to="/#about-me">About Me</NavbarLink>
                <NavbarLink to="/#experience">Experience</NavbarLink>
                <NavbarLink to="/#education">Education</NavbarLink>
                <NavbarLink to="/#portofolio">Portofolio</NavbarLink>
                <NavbarLink @click="handleAlertConstruction">
                    <Icon name="mdi:traffic-cone"></Icon> Blog
                </NavbarLink>
                <NavbarLink to="/#contact">Contact</NavbarLink>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <UButton
                    to="/resume.pdf"
                    target="_blank"
                    icon="mdi:file-document-outline"
                    color="primary"
                    variant="soft"
                    size="sm"
                    class="hidden sm:inline-flex"
                >
                    Resume
                </UButton>
                <ClientOnly v-if="!colorMode?.forced">
                    <UButton
                        variant="outline"
                        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                        @click="isDark = !isDark"
                    >
                        <Icon v-if="isDark" name="mdi:weather-night" size="20"></Icon>
                        <Icon v-else name="mdi:weather-sunny" size="20"></Icon>
                    </UButton>
                </ClientOnly>
            </div>
        </UContainer>
    </header>
    <UContainer>
        <div class="mt-[80px]"></div>
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