<template>
    <section class="relative mt-24 md:mt-32 w-full" id="portofolio">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
                <TextTitle tag="h2" class="w-fit">Featured Portfolio</TextTitle>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl">
                    Explore production systems, backend architectures, custom CMS platforms, and game prototypes.
                </p>
            </div>

            <!-- Search & Filter Bar -->
            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-stretch sm:items-center">
                <!-- Search Input -->
                <div class="relative min-w-[220px]">
                    <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search stack or title..."
                        class="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-gray-50 dark:bg-stone-900 border border-gray-200 dark:border-stone-800 text-slate-800 dark:text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cloudburst-500/50 transition-all"
                    />
                    <button
                        v-if="searchQuery"
                        class="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-0.5 cursor-pointer"
                        @click="searchQuery = ''"
                        title="Clear search"
                    >
                        <Icon name="mdi:close-circle" size="16" />
                    </button>
                </div>

                <!-- Category Filter Pills -->
                <div class="flex flex-wrap gap-1.5">
                    <UButton
                        v-for="cat in categories"
                        :key="cat.id"
                        :variant="selectedCategory === cat.id ? 'solid' : 'soft'"
                        :color="selectedCategory === cat.id ? 'primary' : 'neutral'"
                        size="xs"
                        class="rounded-full px-3 py-1 font-medium transition-all"
                        @click="selectedCategory = cat.id"
                    >
                        <Icon v-if="cat.icon" :name="cat.icon" class="mr-1"></Icon>
                        {{ cat.label }} ({{ cat.count }})
                    </UButton>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPortfolio.length === 0" class="py-16 text-center bg-gray-50/50 dark:bg-stone-900/50 rounded-3xl border border-gray-200 dark:border-stone-800 my-8">
            <Icon name="mdi:folder-search-outline" size="48" class="mx-auto text-gray-400 dark:text-gray-600 mb-3" />
            <h3 class="text-base font-semibold text-slate-800 dark:text-slate-200">No matching projects found</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4">Try clearing your search query or selecting a different category filter.</p>
            <UButton
                size="sm"
                variant="outline"
                color="neutral"
                @click="resetFilters"
            >
                Reset All Filters
            </UButton>
        </div>

        <!-- Portfolio Items Grid with Transition -->
        <TransitionGroup
            v-else
            name="portfolio-grid"
            tag="div"
            class="grid md:grid-cols-2 mt-4 gap-6 grid-cols-1"
        >
            <PortofolioItem
                v-for="item in filteredPortfolio"
                :key="item.key"
                :item="item"
                @click="handleCardClick(item)"
            />
        </TransitionGroup>

        <!-- Quick View Modal -->
        <PortofolioQuickViewModal
            v-model:open="openQuickView"
            :item="activeQuickViewItem"
        />

        <AlertOnConstruction v-model="openAlertConstruction" />
    </section>
</template>

<script setup lang="ts">
import { portofolio } from '~/data';
import type { PortofolioItem } from '~/types/data';

const openAlertConstruction = ref(false);
const openQuickView = ref(false);
const activeQuickViewItem = ref<PortofolioItem | null>(null);

const selectedCategory = ref<string>('all');
const searchQuery = ref<string>('');

const categoryCounts = computed(() => {
    const counts: Record<string, number> = {
        all: portofolio.length,
        backend: 0,
        fullstack: 0,
        game: 0,
    };
    for (const item of portofolio) {
        if (item.category && counts[item.category] !== undefined) {
            counts[item.category]++;
        }
    }
    return counts;
});

const categories = computed(() => [
    { id: 'all', label: 'All', count: categoryCounts.value.all, icon: 'mdi:view-grid-outline' },
    { id: 'backend', label: 'Backend & APIs', count: categoryCounts.value.backend, icon: 'mdi:server' },
    { id: 'fullstack', label: 'Fullstack & Web', count: categoryCounts.value.fullstack, icon: 'mdi:layers-outline' },
    { id: 'game', label: 'Game Dev', count: categoryCounts.value.game, icon: 'mdi:gamepad-variant-outline' },
]);

const filteredPortfolio = computed(() => {
    return portofolio.filter((item) => {
        const matchesCategory = selectedCategory.value === 'all' || item.category === selectedCategory.value;
        if (!matchesCategory) return false;

        const q = searchQuery.value.trim().toLowerCase();
        if (!q) return true;

        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesRole = item.role.toLowerCase().includes(q);
        const matchesAt = item.at.toLowerCase().includes(q);
        const matchesSkills = item.skills.some((s) => s.toLowerCase().includes(q));

        return matchesTitle || matchesDesc || matchesRole || matchesAt || matchesSkills;
    });
});

function handleCardClick(item: PortofolioItem) {
    activeQuickViewItem.value = item;
    openQuickView.value = true;
}

function resetFilters() {
    searchQuery.value = '';
    selectedCategory.value = 'all';
}
</script>

<style scoped>
.portfolio-grid-move,
.portfolio-grid-enter-active,
.portfolio-grid-leave-active {
    transition: all 0.4s ease;
}

.portfolio-grid-enter-from,
.portfolio-grid-leave-to {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
}

.portfolio-grid-leave-active {
    position: absolute;
}
</style>