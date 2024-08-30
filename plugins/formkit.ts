import { defineNuxtPlugin } from '#app'
import { defaultConfig, plugin as formKitPlugin } from '@formkit/vue'
import config from '~/formkit.config'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(formKitPlugin, defaultConfig(config()))
})
