<script setup lang="ts">
interface LinkProjectProps {
  title: string
  description: string
  url: string
  imageUrl: string
  imageAlt?: string
}

const props = withDefaults(defineProps<LinkProjectProps>(), {
  imageAlt: 'Foto do projeto',
})
</script>

<template>
  <a
    class="lg:max-w-60 transition hover:bg-stone-900 dark:hover:bg-stone-300 p-2 rounded-xl"
    target="_blank"
    :href="props.url"
  >
    <img class="rounded-lg w-full object-cover" :src="props.imageUrl" :alt="props.imageAlt" />
    <div class="mt-2">
      <h1 class="text-xl font-bold mb-1 flex items-center gap-1">
        {{ props.title }}
        <i class="bx bx-link-external text-1xl"></i>
      </h1>
      <p class="text-sm">{{ props.description }}</p>
    </div>
  </a>
</template>
