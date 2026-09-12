<template>
    <section class="relative mt-16 md:mt-24 w-full" id="portofolio">
        <!-- Section Header -->
        <div class="mb-5">
            <TextTitle tag="h2" class="w-fit">Featured Portfolio</TextTitle>
            <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl">
                Explore production systems, backend architectures, custom CMS platforms, and game prototypes.
            </p>
        </div>

        <!-- Unified Compact Filter Toolbar -->
        <div class="flex flex-col gap-3 mb-6 bg-gray-50/70 dark:bg-stone-900/60 p-3 sm:p-3.5 rounded-2xl border border-gray-200/70 dark:border-stone-800/70">
            <!-- Top Controls: Scope Segmented Toggle & Search -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <!-- Scope Tabs -->
                <div class="inline-flex items-center gap-1 p-1 bg-gray-200/60 dark:bg-stone-800/80 rounded-xl w-fit">
                    <button
                        v-for="s in scopes"
                        :key="s.id"
                        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer"
                        :class="selectedScope === s.id
                            ? 'bg-white dark:bg-stone-900 text-primary-600 dark:text-primary-400 shadow-xs'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'"
                        @click="selectedScope = s.id"
                    >
                        <Icon v-if="s.icon" :name="s.icon" size="14" />
                        <span>{{ s.label }}</span>
                        <span
                            class="text-[10px] px-1.5 py-0.2 rounded-full font-bold"
                            :class="selectedScope === s.id
                                ? 'bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400'
                                : 'bg-gray-300/60 dark:bg-stone-700 text-gray-500 dark:text-gray-400'"
                        >
                            {{ s.count }}
                        </span>
                    </button>
                </div>

                <!-- Search Input -->
                <div class="relative w-full sm:w-60 md:w-64 shrink-0">
                    <Icon name="mdi:magnify" class="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search projects..."
                        class="w-full pl-8 pr-7 py-1.5 rounded-xl text-xs bg-white dark:bg-stone-800 border border-gray-200 dark:border-stone-700 text-slate-800 dark:text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cloudburst-500/50 transition-all"
                    />
                    <button
                        v-if="searchQuery"
                        class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-0.5 cursor-pointer"
                        @click="searchQuery = ''"
                        title="Clear search"
                    >
                        <Icon name="mdi:close-circle" size="14" />
                    </button>
                </div>
            </div>

            <!-- Category Filter Pills -->
            <div class="flex flex-wrap items-center gap-1.5 pt-1 border-t border-gray-200/50 dark:border-stone-800/50">
                <button
                    v-for="cat in categories"
                    :key="cat.id"
                    :class="[
                        'px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1 border',
                        selectedCategory === cat.id
                            ? 'bg-cloudburst-500 text-white border-cloudburst-500 shadow-xs'
                            : 'bg-white dark:bg-stone-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-stone-700 hover:border-cloudburst-400/50'
                    ]"
                    @click="selectedCategory = cat.id"
                >
                    <Icon v-if="cat.icon" :name="cat.icon" size="13" />
                    <span>{{ cat.label }}</span>
                    <span class="opacity-75 text-[10px]">({{ cat.count }})</span>
                </button>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPortfolio.length === 0" class="py-16 text-center bg-gray-50/50 dark:bg-stone-900/50 rounded-3xl border border-gray-200 dark:border-stone-800 my-8">
            <Icon name="mdi:folder-search-outline" size="48" class="mx-auto text-gray-400 dark:text-gray-600 mb-3" />
            <h3 class="text-base font-semibold text-slate-800 dark:text-slate-200">No matching projects found</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4">Try resetting your scope or category filter.</p>
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
            class="grid md:grid-cols-2 mt-4 gap-4 sm:gap-5 grid-cols-1"
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
import type { PortofolioItem, PortofolioScope } from '~/types/data';

const openAlertConstruction = ref(false);
const openQuickView = ref(false);
const activeQuickViewItem = ref<PortofolioItem | null>(null);

const selectedScope = ref<PortofolioScope>('all');
const selectedCategory = ref<string>('all');
const searchQuery = ref<string>('');

const scopeCounts = computed(() => {
    let client = 0;
    let self = 0;
    for (const item of portofolio) {
        if (item.scope === 'client') client++;
        if (item.scope === 'self') self++;
    }
    return {
        all: portofolio.length,
        client,
        self,
    };
});

const scopes = computed(() => [
    { id: 'all' as PortofolioScope, label: 'All Projects', count: scopeCounts.value.all, icon: 'mdi:view-grid-outline' },
    { id: 'client' as PortofolioScope, label: 'Client & Work', count: scopeCounts.value.client, icon: 'mdi:briefcase-outline' },
    { id: 'self' as PortofolioScope, label: 'Self Projects', count: scopeCounts.value.self, icon: 'mdi:rocket-launch-outline' },
]);

const categoryCounts = computed(() => {
    const counts: Record<string, number> = {
        all: 0,
        desktop: 0,
        backend: 0,
        fullstack: 0,
        game: 0,
    };

    const targetList = selectedScope.value === 'all'
        ? portofolio
        : portofolio.filter((i) => i.scope === selectedScope.value);

    counts.all = targetList.length;
    for (const item of targetList) {
        if (item.category && item.category in counts) {
            counts[item.category] = (counts[item.category] ?? 0) + 1;
        }
    }
    return counts;
});

const categories = computed(() => [
    { id: 'all', label: 'All Tech', count: categoryCounts.value.all, icon: 'mdi:code-braces' },
    { id: 'desktop', label: 'Desktop & Tools', count: categoryCounts.value.desktop, icon: 'mdi:monitor-dashboard' },
    { id: 'backend', label: 'Backend & APIs', count: categoryCounts.value.backend, icon: 'mdi:server' },
    { id: 'fullstack', label: 'Fullstack & Web', count: categoryCounts.value.fullstack, icon: 'mdi:layers-outline' },
    { id: 'game', label: 'Game Dev', count: categoryCounts.value.game, icon: 'mdi:gamepad-variant-outline' },
]);

const filteredPortfolio = computed(() => {
    return portofolio.filter((item) => {
        const matchesScope = selectedScope.value === 'all' || item.scope === selectedScope.value;
        if (!matchesScope) return false;

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
    selectedScope.value = 'all';
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