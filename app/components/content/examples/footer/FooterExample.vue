<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const items: NavigationMenuItem[] = [{
  label: 'Theme Studio',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://play.pohon.vinicunca.dev/',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}]
</script>

<template>
  <PFooter>
    <template #left>
      <p class="color-text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <PNavigationMenu :items="items" variant="link" />

    <template #right>
      <PButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/vinicunca/pohon/discussions"
        target="_blank"
        aria-label="Discussions"
      />
      <PButton
        icon="i-lucide-book-open"
        color="neutral"
        variant="ghost"
        to="https://pohon.vinicunca.dev/"
        target="_blank"
        aria-label="Documentation"
      />
      <PButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/vinicunca/pohon"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </PFooter>
</template>
