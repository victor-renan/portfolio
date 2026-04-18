<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  icon: Component
  text: string
  link: string
}>()
</script>

<template>
  <a target="_blank" class="flex justify-center items-center px-4 py-2 gap-2 rounded-lg bg-bg-surface-3
    hover:bg-bg-surface-4" :href="link" rel="noopener noreferrer">
    <component :is="icon" class="size-6"></component>
    <span class="font-medium">{{ text }}</span>
  </a>
</template>
