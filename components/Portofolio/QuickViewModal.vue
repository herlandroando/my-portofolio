<template>
    <UModal :model-value="open" @update:model-value="$emit('update:open', $event)">
        <UCard v-if="item" class="overflow-hidden">
            <template #header>
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">
                            {{ item.title }}
                        </h3>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {{ item.role }} • {{ item.at }} ({{ item.date }})
                        </p>
                    </div>
                    <UButton
                        color="neutral"
                        variant="ghost"
                        icon="mdi:close"
                        size="xs"
                        @click="$emit('update:open', false)"
                    />
                </div>
            </template>

            <div class="space-y-4">
                <div v-if="item.imageUrl" class="rounded-xl overflow-hidden max-h-[280px] bg-gray-100 dark:bg-stone-800">
                    <NuxtImg
                        :src="item.imageUrl"
                        :alt="item.title"
                        class="w-full h-full object-cover"
                        format="webp"
                        loading="lazy"
                    />
                </div>

                <div class="flex flex-wrap gap-1.5">
                    <SkillTag v-for="skill in item.skills" :key="skill" :name="skill" class="!text-xs" />
                </div>

                <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ item.description }}
                </p>
            </div>

            <template #footer>
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                        <UButton
                            v-if="item.directLinks?.github"
                            :to="item.directLinks.github"
                            target="_blank"
                            external
                            icon="mdi:github"
                            size="xs"
                            variant="soft"
                        >
                            GitHub
                        </UButton>
                        <UButton
                            v-if="item.directLinks?.demo"
                            :to="item.directLinks.demo"
                            target="_blank"
                            external
                            icon="mdi:launch"
                            size="xs"
                            variant="soft"
                        >
                            Demo
                        </UButton>
                        <UButton
                            v-if="item.directLinks?.file"
                            :to="item.directLinks.file"
                            target="_blank"
                            external
                            icon="mdi:file-download-outline"
                            size="xs"
                            variant="soft"
                        >
                            Asset File
                        </UButton>
                    </div>

                    <UButton
                        v-if="item.detailAction"
                        :to="typeof item.detailAction === 'string' ? item.detailAction : undefined"
                        color="primary"
                        size="xs"
                        trailing-icon="mdi:arrow-right"
                    >
                        View Case Study
                    </UButton>
                </div>
            </template>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import type { PortofolioItem } from '~/types/data';

defineProps<{
    open: boolean;
    item: PortofolioItem | null;
}>();

defineEmits<{
    (e: 'update:open', value: boolean): void;
}>();
</script>
