import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt'
  ],
  css: [
    '~/assets/global.css' // Caminho para o arquivo CSS global
  ],
  plugins: [
    '~/plugins/the-mask.ts', // Se estiver usando TypeScript, ou ~/plugins/the-mask.js para JavaScript
  ],

  compatibilityDate: '2024-08-29',
})