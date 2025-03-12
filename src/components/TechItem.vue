<script setup lang="ts">
interface TechItemProps {
  name: string
  description: string
}

const props = defineProps<TechItemProps>()
</script>

<template>
  <div
    class="flex items-center gap-2 p-2 hover:bg-stone-900 light:hover:bg-stone-300 rounded-xl transition w-full md:max-w-60 cursor-default"
  >
    <div class="w-15 h-15 p-2 rounded-lg bg-stone-800 light:bg-stone-200">
      <slot name="icon"></slot>
    </div>
    <div class="flex-1">
      <h1 class="text-lg font-bold">{{ props.name }}</h1>
      <p class="text-xs">{{ props.description }}</p>
    </div>
  </div>
</template>
