<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  name: string;
  icon: Component;
  description: string;
}>();
</script>

<template>
  <div class="flex gap-2">
    <div class="bg-bg-surface-2 border border-bg-surface-3 w-20 h-20 p-2 shrink-0 rounded-lg text-primary">
      <component :is="icon" class="w-full h-full"></component>
    </div>
    <div class="text-left">
      <h3 class="font-serif italic text-xl font-medium">{{ name }}</h3>
      <p class="text-fg-muted text-base">{{ description }}</p>
    </div>
  </div>
</template>
