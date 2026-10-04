<script setup lang="ts">
import { Markdown } from '@comark/vue'

const items = [
  {
    label: 'Is Pohon UI free to use?',
    icon: 'i-lucide-circle-help',
    content: 'Yes! Pohon UI is completely free and open source under the MIT license. All 125+ components are available to everyone.'
  },
  {
    label: 'Can I use Pohon UI with Vue without Nuxt?',
    icon: 'i-lucide-circle-help',
    content: 'Yes! While optimized for Nuxt, Pohon UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.'
  },
  {
    label: 'Will Pohon UI work with other CSS frameworks like UnoCSS?',
    icon: 'i-lucide-circle-help',
    content: 'No. Pohon UI is designed exclusively for UnoCSS. UnoCSS support would require significant architecture changes due to different class naming conventions.'
  },
  {
    label: 'How does Pohon UI handle accessibility?',
    icon: 'i-lucide-circle-help',
    content: 'Through [Akar](https://akar.vinicunca.dev/docs/overview/accessibility) integration, Pohon UI provides **automatic ARIA attributes**, **keyboard navigation**, **focus management**, and **screen reader support**. While offering a strong foundation, testing in your specific use case remains important.'
  },
  {
    label: 'How is Pohon UI tested?',
    icon: 'i-lucide-circle-help',
    content: 'Pohon UI has component tests covering core behavior and accessibility.'
  },
  {
    label: 'Is Pohon UI production-ready?',
    icon: 'i-lucide-circle-help',
    content: 'Pohon UI is designed for production Vue applications and maintained with component tests and regular updates.'
  }
]
</script>

<template>
  <PAccordion
    type="multiple"
    :items="items"
    :unmount-on-hide="false"
    :default-value="['3']"
    :ui="{
      trigger: 'text-base',
      body: 'text-base color-text-muted'
    }"
  >
    <template #body="{ item }">
      <Markdown :value="item.content" unwrap="p" />
    </template>
  </PAccordion>
</template>
