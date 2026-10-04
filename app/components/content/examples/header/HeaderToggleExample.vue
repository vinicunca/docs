<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Theme',
  icon: 'i-lucide-palette',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}])
</script>

<template>
  <PHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <PNavigationMenu :items="items" />

    <template #right>
      <PColorModeButton />

      <PTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </PTooltip>
    </template>

    <template #body>
      <PNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </PHeader>
</template>
