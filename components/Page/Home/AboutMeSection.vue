<template>
    <section id="about-me" ref="aboutMeRef" class="relative mt-20 md:mt-32 w-full">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
                <TextTitle tag="h2" class="w-fit">About Me</TextTitle>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl">
                    My journey from crafting custom Warcraft 3 maps to architecting scalable modern web systems.
                </p>
            </div>

            <!-- Chapter Stepper Pills -->
            <div class="flex items-center gap-1.5 flex-wrap">
                <button
                    v-for="(item, index) in contents"
                    :key="item.key"
                    @click="setActiveIndex(index)"
                    :class="[
                        'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer border',
                        activeIndex === index
                            ? 'bg-cloudburst-500 text-white border-cloudburst-500 shadow-md shadow-cloudburst-500/20 scale-105'
                            : 'bg-gray-100 dark:bg-stone-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-stone-700 hover:border-cloudburst-400/50'
                    ]"
                >
                    <span class="opacity-75 font-mono text-[10px]">0{{ index + 1 }}</span>
                    <span>{{ item.tag || item.title }}</span>
                </button>
            </div>
        </div>

        <!-- Main Content Card Container -->
        <div class="relative bg-white/70 dark:bg-stone-900/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/80 dark:border-stone-800 shadow-xl overflow-hidden">
            <!-- Background Ambient Glow -->
            <div class="absolute -top-24 -right-24 w-72 h-72 bg-cloudburst-500/10 rounded-full blur-3xl pointer-events-none" />
            <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
                <!-- Left Column: Interactive 3D Card Stack -->
                <div class="lg:col-span-5 flex flex-col items-center">
                    <div
                        ref="cardDeckRef"
                        class="relative w-full max-w-[320px] sm:max-w-[360px] h-[320px] sm:h-[360px] cursor-pointer select-none perspective-1000"
                        @click="handleDeckClick"
                    >
                        <!-- Stacked Cards Loop -->
                        <div
                            v-for="(item, idx) in contents"
                            :key="item.key"
                            :style="getCardStyle(idx)"
                            class="absolute inset-0 rounded-2xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-stone-800 dark:to-stone-900 border-2 border-white/60 dark:border-stone-700/60 shadow-2xl overflow-hidden transition-all duration-500 ease-out origin-bottom flex flex-col group"
                        >
                            <!-- Card Image Area -->
                            <div class="relative flex-1 w-full h-full overflow-hidden bg-stone-900">
                                <NuxtImg
                                    :src="item.img"
                                    :alt="item.title || `About me story ${item.key}`"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    :style="item.customStyle"
                                    format="webp"
                                    loading="lazy"
                                    @error="handleImageError(item.key)"
                                />

                                <!-- Subtle Gradient Overlay -->
                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <!-- Card Badge & Zoom Trigger (Visible on Active Top Card) -->
                                <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                                        {{ item.tag || `Milestone 0${item.key}` }}
                                    </span>
                                    <button
                                        v-if="idx === activeIndex"
                                        @click.stop="openZoomModal(item)"
                                        class="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors border border-white/20"
                                        title="Click to view full image"
                                    >
                                        <Icon name="mdi:magnify-plus-outline" size="16" />
                                    </button>
                                </div>

                                <!-- Card Bottom Mini Caption -->
                                <div class="absolute bottom-3 left-3 right-3 text-white">
                                    <p class="text-xs font-bold truncate">{{ item.title }}</p>
                                    <p class="text-[10px] text-gray-300 opacity-90 truncate">{{ item.subtitle || item.year }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Interactive Stack Hints & Controls -->
                    <div class="flex items-center gap-3 mt-4 text-xs text-gray-500 dark:text-gray-400">
                        <span class="flex items-center gap-1">
                            <Icon name="mdi:gesture-tap" size="16" class="text-cloudburst-500" />
                            Click card to cycle
                        </span>
                        <span>•</span>
                        <span class="flex items-center gap-1">
                            <Icon name="mdi:gesture-swipe-horizontal" size="16" class="text-cloudburst-500" />
                            Swipe support
                        </span>
                    </div>
                </div>

                <!-- Right Column: Story Narrative & Details -->
                <div class="lg:col-span-7 flex flex-col justify-between">
                    <Transition name="fade-slide" mode="out-in">
                        <div :key="activeIndex" class="space-y-4">
                            <!-- Chapter Indicator -->
                            <div class="flex items-center gap-2">
                                <UBadge color="primary" variant="subtle" size="sm" class="font-mono uppercase tracking-wider text-xs">
                                    Chapter 0{{ currentItem.key }} / 0{{ contents.length }}
                                </UBadge>
                                <span v-if="currentItem.year" class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                                    {{ currentItem.year }}
                                </span>
                            </div>

                            <!-- Title & Subtitle -->
                            <div>
                                <h3 class="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                                    {{ currentItem.title }}
                                </h3>
                                <p v-if="currentItem.subtitle" class="text-sm font-semibold text-cloudburst-600 dark:text-cloudburst-400 mt-1">
                                    {{ currentItem.subtitle }}
                                </p>
                            </div>

                            <!-- Narrative Paragraph -->
                            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed min-h-[100px]">
                                {{ currentItem.description }}
                            </p>

                            <!-- Key Skills / Highlights for this phase -->
                            <div v-if="currentItem.skills && currentItem.skills.length > 0" class="pt-2">
                                <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                                    Core Focus & Tools
                                </p>
                                <div class="flex flex-wrap gap-1.5">
                                    <SkillTag
                                        v-for="skill in currentItem.skills"
                                        :key="skill"
                                        :name="skill"
                                        class="!text-xs"
                                    />
                                </div>
                            </div>
                        </div>
                    </Transition>

                    <!-- Bottom Nav Controls & Progress Bar -->
                    <div class="pt-8 mt-6 border-t border-gray-100 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <!-- Progress Dots -->
                        <div class="flex items-center gap-2">
                            <button
                                v-for="(_, i) in contents"
                                :key="i"
                                @click="setActiveIndex(i)"
                                :class="[
                                    'h-2 rounded-full transition-all duration-300 cursor-pointer',
                                    activeIndex === i ? 'w-8 bg-cloudburst-500' : 'w-2 bg-gray-300 dark:bg-stone-700 hover:bg-cloudburst-400'
                                ]"
                                :aria-label="`Go to story chapter ${i + 1}`"
                            />
                        </div>

                        <!-- Previous / Next Action Buttons -->
                        <div class="flex items-center gap-2">
                            <UButton
                                icon="mdi:chevron-left"
                                color="neutral"
                                variant="soft"
                                size="sm"
                                :disabled="activeIndex === 0"
                                @click="prevCard"
                                aria-label="Previous Chapter"
                            >
                                Prev
                            </UButton>

                            <UButton
                                v-if="activeIndex < contents.length - 1"
                                trailing-icon="mdi:chevron-right"
                                color="primary"
                                variant="solid"
                                size="sm"
                                @click="nextCard"
                                aria-label="Next Chapter"
                            >
                                Next Chapter
                            </UButton>

                            <UButton
                                v-else
                                trailing-icon="mdi:arrow-down"
                                color="primary"
                                variant="solid"
                                size="sm"
                                to="/#experience"
                                aria-label="Explore Experience"
                            >
                                Explore Experience
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- High-Res Image Zoom Modal -->
        <UModal v-model="zoomModalOpen">
            <UCard v-if="zoomedItem" class="overflow-hidden bg-stone-900 border-stone-800">
                <template #header>
                    <div class="flex items-center justify-between">
                        <div class="text-white">
                            <h4 class="font-bold text-base">{{ zoomedItem.title }}</h4>
                            <p class="text-xs text-gray-400">{{ zoomedItem.tag }} • {{ zoomedItem.subtitle }}</p>
                        </div>
                        <UButton
                            color="neutral"
                            variant="ghost"
                            icon="mdi:close"
                            size="xs"
                            @click="zoomModalOpen = false"
                        />
                    </div>
                </template>

                <div class="flex justify-center items-center bg-black/40 rounded-xl overflow-hidden max-h-[70vh]">
                    <NuxtImg
                        :src="zoomedItem.img"
                        :alt="zoomedItem.title || 'About me full image'"
                        class="max-h-[65vh] w-auto object-contain rounded-lg"
                        format="webp"
                    />
                </div>

                <p class="text-xs text-gray-300 mt-4 leading-relaxed">
                    {{ zoomedItem.description }}
                </p>
            </UCard>
        </UModal>
    </section>
</template>

<script setup lang="ts">
import { aboutMeContents } from '~/data';
import type { AboutMeItem } from '~/types/data';

defineProps<{
    heightSectionBefore?: number;
}>();

const contents: AboutMeItem[] = aboutMeContents;
const activeIndex = ref(0);
const cardDeckRef = ref<HTMLElement | null>(null);

const currentItem = computed(() => contents[activeIndex.value] || contents[0]);

// Zoom Modal State
const zoomModalOpen = ref(false);
const zoomedItem = ref<AboutMeItem | null>(null);

function openZoomModal(item: AboutMeItem) {
    zoomedItem.value = item;
    zoomModalOpen.value = true;
}

// 3D Tilt calculation using useMouseInElement
const { elementX, elementY, elementWidth, elementHeight, isOutside } = useMouseInElement(cardDeckRef);

const tiltTransform = computed(() => {
    if (isOutside.value || !elementWidth.value || !elementHeight.value) {
        return '';
    }
    const xPct = (elementX.value / elementWidth.value) - 0.5;
    const yPct = (elementY.value / elementHeight.value) - 0.5;
    const rotateX = (-yPct * 12).toFixed(2);
    const rotateY = (xPct * 12).toFixed(2);
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Card navigation methods
function nextCard() {
    activeIndex.value = (activeIndex.value + 1) % contents.length;
}

function prevCard() {
    activeIndex.value = (activeIndex.value - 1 + contents.length) % contents.length;
}

function setActiveIndex(index: number) {
    activeIndex.value = index;
}

function handleDeckClick() {
    nextCard();
}

// Touch swipe gestures
const { direction } = useSwipe(cardDeckRef, {
    onSwipeEnd() {
        if (direction.value === 'left') {
            nextCard();
        } else if (direction.value === 'right') {
            prevCard();
        }
    }
});

// Keyboard navigation (Arrow keys when in view or focused)
onMounted(() => {
    const handleKeydown = (e: KeyboardEvent) => {
        if (zoomModalOpen.value) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            // only trigger if user is interacting with deck area
        }
    };
    window.addEventListener('keydown', handleKeydown);
    onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
});

// Calculate stacked card transformations
function getCardStyle(index: number) {
    const total = contents.length;
    // Calculate position offset relative to active card
    const diff = (index - activeIndex.value + total) % total;

    if (diff === 0) {
        // Active top card
        return {
            zIndex: 30,
            transform: tiltTransform.value || 'translate3d(0px, 0px, 0px) rotate(0deg) scale(1)',
            opacity: 1,
            pointerEvents: 'auto' as const,
        };
    } else if (diff === 1) {
        // Second card in stack
        return {
            zIndex: 20,
            transform: 'translate3d(14px, 14px, -20px) rotate(3deg) scale(0.95)',
            opacity: 0.85,
            pointerEvents: 'auto' as const,
        };
    } else {
        // Back card in stack
        return {
            zIndex: 10,
            transform: 'translate3d(26px, 26px, -40px) rotate(-3deg) scale(0.90)',
            opacity: 0.65,
            pointerEvents: 'auto' as const,
        };
    }
}

function handleImageError(key: number) {
    console.warn(`[AboutMeSection] Image failed to load for key ${key}`);
}
</script>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(12px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}
</style>