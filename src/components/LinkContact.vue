<script setup lang="ts">
interface LinkContactProps {
  url: string
  title: string
  icon: string
}

const props = defineProps<LinkContactProps>()
</script>

<template>
  <a
    class="flex items-center justify-center gap-1 bg-stone-700 light:bg-stone-500 p-2 rounded-lg text-blue-50 light:text-stone-50 hover:bg-stone-600 light:hover:bg-stone-700 transition"
    target="_blank"
    :href="props.url"
  >
    <i :class="props.icon" class="text-xl"></i>
    <span class="items-center gap-1 text-sm text-nowrap">
      {{ props.title }}
      <i class="bx bx-link-external"></i>
    </span>
  </a>
</template>
