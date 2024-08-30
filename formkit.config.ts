import { genesisIcons } from "@formkit/icons"
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'

const pro = createProPlugin('fk-34b7b8018', inputs)

export default defineFormKitConfig(() => ({
  plugins: [
    pro,
  ],
  icons: { ...genesisIcons },
  config: {
    classes: {
      outer: 'mb-5',
    }
  }
}))
