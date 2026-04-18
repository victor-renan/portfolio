import './assets/css/styles.css'
import 'boxicons/css/boxicons.min.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import pt from './i18n/locales/pt.json'
import en from './i18n/locales/en.json'

const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt,
    en,
  },
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
