<script setup lang="ts">
interface EducationItem {
  title: string;
  date: string;
  institution: string;
}

defineProps<{
  item: EducationItem;
}>();
</script>

<template>
  <div class="p-6 rounded-lg bg-bg-surface-2 border border-bg-surface-4 h-full">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
      <h3 class="text-2xl italic font-medium font-serif">{{ item.title }}</h3>
      <p class="text-base text-fg-muted">{{ item.date }}</p>
    </div>
    <p class="text-lg font-serif">{{ item.institution }}</p>
  </div>
</template>
