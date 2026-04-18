<script setup lang="ts">
interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

defineProps<{
  item: ProjectItem;
}>();
</script>

<template>
  <a :href="item.url" target="_blank"
    class="block rounded-lg bg-bg-surface-2 border border-bg-surface-4 h-full hover:border-primary transition-colors group">
    <img :src="item.imageUrl" :alt="item.title" class="w-full h-50 rounded-lg" />
    <div class="p-4">
      <h3 class="text-2xl mb-2 italic font-medium font-serif group-hover:text-primary transition-colors">
        {{ item.title }}
      </h3>
      <p class="text-base text-fg-muted">{{ item.description }}</p>
    </div>
  </a>
</template>
