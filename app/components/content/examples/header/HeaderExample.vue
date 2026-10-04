<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Theme',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}])
</script>

<template>
  <PHeader>
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
  </PHeader>
</template>
