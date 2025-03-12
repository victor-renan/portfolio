<script setup lang="ts">
import { ref } from 'vue'

interface ImageFrameProps {
  src: string
  alt?: string
}

const props = defineProps<ImageFrameProps>()

type Load = 'loaded' | 'loading' | 'error'

const isLoading = ref<Load>('loading')
</script>

<template>
  <div class="text-4xl overflow-hidden flex">
    <img
      v-show="isLoading === 'loaded'"
      @error="() => (isLoading = 'error')"
      @load="() => (isLoading = 'loaded')"
      class="w-full h-full object-cover"
      :src="props.src"
      :alt="props.alt || 'Imagem genérica'"
    />
    <div v-if="isLoading !== 'loaded'" class="w-full h-full">
      <div
        class="bg-stone-900 light:bg-stone-100 rounded-lg flex justify-center items-center h-full"
      >
        <i
          v-if="isLoading === 'loading'"
          class="bx bx-loader-alt text-stone-700 light:text-stone-400 animate-spin"
        ></i>
        <i v-else class="bx bx-image text-stone-700 light:text-stone-400"></i>
      </div>
    </div>
  </div>
</template>
