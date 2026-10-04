<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'
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

const variants: { [k: string]: VariantType | ((custom: unknown) => VariantType) } = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1
  },
  close: (custom: unknown) => {
    const c = custom as number
    return {
      rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
      y: c === 1 ? 6 : c === 3 ? -6 : 0,
      opacity: c === 2 ? 0 : 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  }
}
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

    <template #toggle="{ open, toggle, ui }">
      <PButton
        size="sm"
        variant="ghost"
        color="neutral"
        square
        :class="ui.toggle({ toggleSide: 'right' })"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <motion.line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="1"
            tabindex="-1"
          />
          <motion.line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="2"
            tabindex="-1"
          />
          <motion.line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="3"
            tabindex="-1"
          />
        </svg>
      </PButton>
    </template>

    <template #body>
      <PNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </PHeader>
</template>
