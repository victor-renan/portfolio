<script setup lang="ts">
interface ExperienceItem {
  title: string;
  date: string;
  company: string;
  tags: string[];
  tasks: string[];
}

defineProps<{
  item: ExperienceItem;
}>();
</script>

<template>
  <div class="p-4 rounded-lg bg-bg-surface-2 border border-bg-surface-4">
    <div class="flex flex-wrap items-center justify-between">
      <h3 class="text-2xl italic font-medium font-serif">{{ item.title }}</h3>
      <p class="text-base text-fg-muted">{{ item.date }}</p>
    </div>
    <div>
      <p class="text-xl leading-6 font-serif">{{ item.company }}</p>
    </div>
    <ul class="flex flex-wrap gap-2 my-4">
      <li v-for="tag in item.tags" :key="tag">
        <div class="px-2 py-0.5 rounded-lg bg-bg-surface-3 border border-bg-surface-4 text-xs">
          {{ tag }}
        </div>
      </li>
    </ul>
    <div class="text-base">
      <ul class="list-disc ml-4">
        <li v-for="task in item.tasks" :key="task">{{ task }}</li>
      </ul>
    </div>
  </div>
</template>
