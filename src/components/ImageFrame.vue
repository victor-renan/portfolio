<script setup lang="ts">
import { ref } from 'vue'

interface ImageFrameProps {
  src: string
  alt?: string
}

const props = defineProps<ImageFrameProps>()

type Load = 'loaded' | 'loading' | 'error'

const isLoading = ref<Load>('error')
</script>

<template>
  <div class="text-4xl overflow-hidden flex">
    <div
      v-if="isLoading != 'loaded'"
      class="w-full h-full"
      :class="[isLoading != 'error' && 'animate-pulse']"
    >
      <div
        class="bg-stone-900 dark:bg-stone-100 rounded-lg flex justify-center items-center h-full"
      >
        <i v-if="isLoading == 'loading'" class="bx bx-image text-stone-700 dark:text-stone-400"></i>
        <i v-else class="bx bx-loader-alt text-stone-700 dark:text-stone-400 animate-spin"></i>
      </div>
    </div>
    <img
      v-show="isLoading != 'error'"
      @loadstart="() => (isLoading = 'loading')"
      @load="() => (isLoading = 'loaded')"
      class="w-full h-full object-cover"
      :src="props.src"
      :alt="props.alt || 'Imagem genérica'"
    />
  </div>
</template>
