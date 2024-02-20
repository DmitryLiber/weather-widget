import { fileURLToPath, URL } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import './app/assets/scss/_functions.scss';
          @import './app/assets/scss/_variables.scss';
          @import './app/assets/scss/_mixins.scss';
          `,
        },
      },
    },
  },
  devtools: { enabled: true },
  css: ['@/app/assets/scss/main.scss'],
  dir: {
    pages: 'app/routing',
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    '@app': fileURLToPath(new URL('./app', import.meta.url)),
    '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
    '@widgets': fileURLToPath(new URL('./widgets', import.meta.url)),
    '@features': fileURLToPath(new URL('./features', import.meta.url)),
    '@entities': fileURLToPath(new URL('./entities', import.meta.url)),
    '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
  },
})
