import { defineNuxtPlugin } from '#app'
import { defaultConfig, plugin as formKitPlugin } from '@formkit/vue'
import config from '~/formkit.config'

export default defineNuxtPlugin((nuxtApp) => {
  // Aqui chamamos a função para obter as configurações e passamos para o FormKit
  nuxtApp.vueApp.use(formKitPlugin, defaultConfig(config()))
})
