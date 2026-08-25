<template>
    <header class="py-5 fixed w-full top-0 z-[10] dark:bg-stone-950 bg-slate-50 h-20">
        <UContainer class="flex flex-row justify-between items-center">
            <div class="flex flex-row gap-4">
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
                <ClientOnly v-if="!colorMode?.forced">
                    <UButton
                        variant="outline"
                        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                        @click="isDark = !isDark">
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

watch([x, y], ([x, y], [xO, yO]) => {
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
}

function handleClickTop() {
    window.scrollTo(0, 0)
}
</script>