<template>
    <section class="relative mt-28 md:justify-between items-center justify-center md:gap-7 gap-20 w-full"
        id="portofolio">
        <!-- <h2 class="font-black md:text-4xl text-3xl mb-6 w-fit">
            Portofolio</h2> -->
        <TextTitle tag="h2" class="mb-6 w-fit">Portofolio</TextTitle>
        <div class="grid md:grid-cols-2 mt-14 gap-4 grid-cols-1">
            <PortofolioItem @click="handleAlertClick(item)" v-for="(item) in portofolio" :item="item" :key="item.key">
            </PortofolioItem>
        </div>
        <AlertOnConstruction v-model="openAlertConstruction" />
    </section>
</template>

<script setup lang="ts">
import { portofolio } from '~/data';
import type { PortofolioItem } from '~/types/data';

const router = useRouter();
const openAlertConstruction = ref(false)

function handleAlertClick(item: PortofolioItem) {
    if (typeof item.detailAction === 'string') {
        router.push(item.detailAction)
        return;
    }
    openAlertConstruction.value = !openAlertConstruction.value;
}
</script>