<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import PhpIcon from './components/icons/PhpIcon.vue'
import LaravelIcon from './components/icons/LaravelIcon.vue'
import TypescriptIcon from './components/icons/TypescriptIcon.vue'
import VueIcon from './components/icons/VueIcon.vue'
import TailwindcssIcon from './components/icons/TailwindcssIcon.vue'
import GoIcon from './components/icons/GoIcon.vue'
import MysqlIcon from './components/icons/MysqlIcon.vue'
import PostgresIcon from './components/icons/PostgresIcon.vue'
import DockerIcon from './components/icons/DockerIcon.vue'

import photo from '@/assets/img/i.jpeg'
import SocialLink from './components/SocialLink.vue'
import GithubIcon from './components/icons/GithubIcon.vue'
import LinkedinIcon from './components/icons/LinkedinIcon.vue'
import EnvelopeIcon from './components/icons/EnvelopeIcon.vue'

const { locale } = useI18n()
const theme = ref(localStorage.getItem('theme') || 'dark')

if (theme.value === 'dark') {
  document.documentElement.classList.add('dark')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) {
    document.documentElement.classList.add('dark')
    theme.value = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    theme.value = 'light'
  }
})

function toggleTheme() {
  if (theme.value === 'dark') {
    document.documentElement.classList.remove('dark')
    theme.value = 'light'
  } else {
    document.documentElement.classList.add('dark')
    theme.value = 'dark'
  }
  localStorage.setItem('theme', theme.value)
}

const contacts = [
  {
    key: 'contacts.github',
    icon: GithubIcon,
    url: 'https://github.com/victor-renan'
  },
  {
    key: 'contacts.linkedin',
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/renan-alves-05995a20a',
  },
  {
    key: 'contacts.email',
    icon: EnvelopeIcon,
    url: 'mailto:alvesrenanpro@gmail.com'
  },
]

const techItems = [
  { name: 'PHP', key: 'technologies.php', icon: PhpIcon },
  { name: 'Laravel', key: 'technologies.laravel', icon: LaravelIcon },
  { name: 'Typescript', key: 'technologies.typescript', icon: TypescriptIcon },
  { name: 'Vue.js', key: 'technologies.vue', icon: VueIcon },
  { name: 'TailwindCSS', key: 'technologies.tailwind', icon: TailwindcssIcon },
  { name: 'Go', key: 'technologies.go', icon: GoIcon },
  { name: 'MySQL', key: 'technologies.mysql', icon: MysqlIcon },
  { name: 'Postgres', key: 'technologies.postgres', icon: PostgresIcon },
  { name: 'Docker', key: 'technologies.docker', icon: DockerIcon },
  { name: 'Inertia.js', key: 'technologies.docker', icon: DockerIcon },
]

const tagsItems = [
  'Github Actions',
  'Google Cloud',
  'PHPUnit',
  'Pest',
  'Cypress',
  'Playwright',
  'Laravel Reverb',
  'FrankenPHP',
  'Swoole',
  'PrimeVue',
  'Go Cobra CLI',
  'Go Gin',
]
</script>

<template>
  <main class="mt-8 p-4 flex flex-col items-center text-center">

    <div class="max-w-150 mb-12 flex flex-col items-center text-center gap-4">
      <img src="./assets/img/i.jpeg" alt="Renan Alves" class="w-24 h-24 rounded-lg">
      <h2 class="title">{{ $t('name') }}</h2>
      <p>{{ $t('bio') }}</p>
      <ul class="flex gap-2">
        <li v-for="item in contacts">
          <SocialLink :icon="item.icon" :text="$t(item.key)" :link="item.url" />
        </li>
      </ul>
    </div>

    <div class="max-w-200 mb-12">
      <h2 class="title mb-8">{{ $t('technologies.title') }}</h2>
      <ul class="grid grid-cols-2 gap-4 mb-8">
        <li v-for="item in techItems">
          <div class="flex gap-2">
            <div class="bg-bg-surface-2 border border-bg-surface-3 w-20 h-20 p-2 shrink-0 rounded-lg">
              <component :is="item.icon"></component>
            </div>
            <div class="text-left">
              <h3 class="font-serif italic text-xl font-medium">{{ item.name }}</h3>
              <p class="text-fg-muted text-base">{{ $t(item.key) }}</p>
            </div>
          </div>
        </li>
      </ul>
      <ul class="flex flex-wrap gap-2">
        <li v-for="item in tagsItems">
          <div class="px-2 py-1 text-base rounded-lg bg-bg-surface-2 border border-bg-surface-4">
            {{ item }}
          </div>
        </li>
      </ul>
    </div>

    <div class="max-w-200 w-full mb-12">
      <h2 class="title mb-8">{{ $t('experience.title') }}</h2>
      <ul class="flex flex-col gap-2 text-left">
        <li v-for="item in $tm('experience.items')">
          <div class="p-4 rounded-lg bg-bg-surface-2 border border-bg-surface-4">
            <div class="flex flex-wrap items-center justify-between">
              <h3 class="text-2xl italic font-medium font-serif">{{ item.title }}</h3>
              <p class="text-base">{{ item.date }}</p>
            </div>
            <div>
              <p class="text-xl leading-6 font-serif">{{ item.company }}</p>
            </div>
            <ul class="flex flex-wrap gap-2 my-4">
              <li v-for="tag in item.tags">
                <div class="px-2 py-0.5 rounded-lg bg-bg-surface-3 border border-bg-surface-4 text-xs">
                  {{ tag }}
                </div>
              </li>
            </ul>
            <div class="text-base">
              <ul class="list-disc ml-4">
                <li v-for="task in item.tasks">{{ task }}</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="max-w-150">
      <h2 class="title mb-8">{{ $t('education.title') }}</h2>
    </div>
  </main>
</template>

<style scoped></style>
