<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const items = [
  {
    label: 'Docs',
    icon: 'i-lucide-book-open',
    slot: 'docs' as const,
    children: [
      {
        label: 'Icons',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        description: 'Choose a primary and a neutral color from your UnoCSS theme.'
      },
      {
        label: 'Theme',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    slot: 'components' as const,
    children: [
      {
        label: 'Link',
        description: 'Use NuxtLink with superpowers.'
      },
      {
        label: 'Modal',
        description: 'Display a modal within your application.'
      },
      {
        label: 'NavigationMenu',
        description: 'Display a list of links.'
      },
      {
        label: 'Pagination',
        description: 'Display a list of pages.'
      },
      {
        label: 'Popover',
        description: 'Display a non-modal dialog that floats around a trigger element.'
      },
      {
        label: 'Progress',
        description: 'Show a horizontal bar to indicate task progression.'
      }
    ]
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github'
  }
] satisfies NavigationMenuItem[]
</script>

<template>
  <PNavigationMenu
    :items="items"
    :ui="{
      viewport: 'sm:w-(--akar-navigation-menu-viewport-width)',
      content: 'sm:w-auto',
      childList: 'sm:w-96',
      childLinkDescription: 'text-balance line-clamp-2'
    }"
    class="w-full justify-center"
  >
    <template #docs-content="{ item }">
      <ul class="grid gap-2 p-4 lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
        <li class="row-span-3">
          <Placeholder class="size-full min-h-48" />
        </li>

        <li v-for="child in item.children" :key="child.label">
          <PLink class="text-sm text-left rounded-md p-3 transition-colors hover:bg-background-elevated/50">
            <p class="font-medium color-text-highlighted">
              {{ child.label }}
            </p>
            <p class="color-text-muted line-clamp-2">
              {{ child.description }}
            </p>
          </PLink>
        </li>
      </ul>
    </template>
  </PNavigationMenu>
</template>
