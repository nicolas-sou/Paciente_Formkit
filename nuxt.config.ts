import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt'
  ],
  css: [
    '~/assets/global.css' 
  ],
  plugins: [
    '~/plugins/the-mask.ts',
  ],

  compatibilityDate: '2024-08-29',
})