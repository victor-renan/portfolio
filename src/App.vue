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
import TechCard from './components/TechCard.vue'
import ExperienceCard from './components/ExperienceCard.vue'
import EducationCard from './components/EducationCard.vue'
import ProjectCard from './components/ProjectCard.vue'

import GithubIcon from './components/icons/GithubIcon.vue'
import LinkedinIcon from './components/icons/LinkedinIcon.vue'
import EnvelopeIcon from './components/icons/EnvelopeIcon.vue'
import InertiaIcon from './components/icons/InertiaIcon.vue'

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
  { name: 'Inertia.js', key: 'technologies.inertia', icon: InertiaIcon },
]

const tagsItems = [
  'VILT Stack',
  'Github Actions',
  'Google Cloud',
  'PHPUnit',
  'Pest',
  'Cypress',
  'Playwright',
  'Laravel Octane',
  'Laravel Reverb',
  'FrankenPHP',
  'Swoole',
  'PrimeVue',
  'Go Cobra CLI',
  'Go Gin',
  'Chart.js',
  'Vite',
  'Typescript Transformer',
  'Laravel Data',
  'Ziggy',
]

const isSidebarOpen = ref(false)

const navigation = [
  { key: 'title', id: 'me' },
  { key: 'technologies.title', id: 'techs' },
  { key: 'experience.title', id: 'xp' },
  { key: 'education.title', id: 'edu' },
  { key: 'projects.title', id: 'projects' },
]
</script>

<template>
  <nav class="bg-bg-surface border-b border-bg-surface-3 z-50 h-16 flex items-center px-4 sticky w-full top-0">
    <div class="max-w-204 mx-auto flex justify-between items-center w-full px-4">
      <div class="flex items-center gap-6">
        <button @click="isSidebarOpen = true" class="md:hidden text-2xl" :aria-label="$t('footer.top')">
          <i class="bx bx-menu"></i>
        </button>

        <ul class="hidden md:flex items-center gap-8">
          <li v-for="item in navigation">
            <a class="hover:text-primary transition-colors text-base" :href="'#' + item.id">
              {{ $t(item.key).split(' ')[0] }}
            </a>
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-3">
        <button @click="toggleTheme"
          class="flex items-center justify-center bg-bg-surface-2 border border-bg-surface-3 w-10 h-10 rounded-lg hover:bg-bg-surface-3 transition-colors text-xl shadow-sm">
          <i v-if="theme === 'dark'" class="bx bx-sun text-yellow-500"></i>
          <i v-else class="bx bx-moon text-primary"></i>
        </button>

        <select v-model="locale"
          class="bg-bg-surface-2 border border-bg-surface-3 text-sm rounded-lg px-2 py-1.5 outline-none focus:ring-1 focus:ring-primary transition cursor-pointer">
          <option value="pt">PT</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </div>
  </nav>

  <Transition name="fade">
    <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"></div>
  </Transition>

  <Transition name="slide">
    <div v-if="isSidebarOpen"
      class="fixed right-0 top-0 h-full w-72 bg-bg-surface-2 border-l border-bg-surface-3 z-[70] p-6 md:hidden shadow-2xl">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-xl font-serif italic text-primary">{{ $t('name') }}</h2>
        <button @click="isSidebarOpen = false" class="text-3xl">
          <i class="bx bx-x"></i>
        </button>
      </div>

      <ul class="flex flex-col gap-6 text-left">
        <li v-for="item in navigation">
          <a class="text-lg hover:text-primary py-2" @click="isSidebarOpen = false" :href="'#' + item.id">
            {{ $t(item.key) }}
          </a>
        </li>
      </ul>

      <div class="mt-auto pt-12">
        <ul class="flex gap-4">
          <li v-for="item in contacts">
            <a :href="item.url" target="_blank" class="text-2xl hover:text-primary transition-colors">
              <component :is="item.icon" class="w-6 h-6"></component>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Transition>

  <main class="mt-8 p-4 flex flex-col items-center text-center max-w-204 mx-auto">

    <section :id="navigation[0].id" class="max-w-120 mb-12 flex flex-col items-center text-center gap-4">
      <img src="./assets/img/i.jpeg" alt="Renan Alves" class="w-24 h-24 rounded-lg">
      <h2 class="title">{{ $t('name') }}</h2>
      <p>{{ $t('bio') }}</p>
      <ul class="flex gap-2 flex-wrap justify-center">
        <li v-for="item in contacts">
          <SocialLink :icon="item.icon" :text="$t(item.key)" :link="item.url" />
        </li>
      </ul>
    </section>

    <section :id="navigation[1].id" class="w-full mb-12">
      <h2 class="title mb-8">{{ $t('technologies.title') }}</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <li v-for="item in techItems" :key="item.name">
          <TechCard :name="item.name" :icon="item.icon" :description="$t(item.key)" />
        </li>
      </ul>
      <ul class="flex flex-wrap gap-2">
        <li v-for="item in tagsItems">
          <div class="px-2 py-1 text-base rounded-lg bg-bg-surface-2 border border-bg-surface-4">
            {{ item }}
          </div>
        </li>
      </ul>
    </section>

    <section :id="navigation[2].id" class=" w-full mb-12">
      <h2 class="title mb-8">{{ $t('experience.title') }}</h2>
      <ul class="flex flex-col gap-4 text-left">
        <li v-for="(item, index) in $tm('experience.items')" :key="index">
          <ExperienceCard :item="item" />
        </li>
      </ul>
    </section>

    <section :id="navigation[3].id" class="w-full mb-12">
      <h2 class="title mb-8">{{ $t('education.title') }}</h2>
      <ul class="grid grid-cols-1 gap-4 text-left">
        <li v-for="(item, index) in $tm('education.items')" :key="index">
          <EducationCard :item="item" />
        </li>
      </ul>
    </section>

    <section :id="navigation[4].id" class="w-full mb-12">
      <h2 class="title mb-8">{{ $t('projects.title') }}</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <li v-for="(item, index) in $tm('projects.items')" :key="index">
          <ProjectCard :item="item" />
        </li>
      </ul>
    </section>
  </main>

  <footer class="text-center p-4">
    <div>
      &copy;{{ (new Date()).getFullYear() }} - {{ $t('footer.copy') }}.
      <a class="text-primary hover:text-primary/70 underline underline-offset-4" href="#">{{ $t('footer.top') }}</a>
    </div>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
