<script setup lang="ts">
import { PButton, PContentSearchButton, PHeader, PNavigationMenu, PTooltip } from '#components';
import { useHeader } from '~/composables/use-header';

const { desktopLinks } = useHeader();
</script>

<template>
  <PHeader
    :pohon="{ left: 'min-w-0' }"
    class="flex flex-col"
  >
    <template #left>
      <NuxtLink
        to="/"
        class="text-xl color-text-highlighted font-bold flex shrink-0 gap-2 min-w-0 items-center focus-visible:outline-primary"
        aria-label="Vinicunca"
      >
        <img
          src="/logo.svg"
          class="shrink-0 h-6 w-auto"
        >

        Vinicunca
      </NuxtLink>
    </template>

    <PNavigationMenu
      :items="desktopLinks"
      variant="link"
    />

    <template #right>
      <PColorModeSwitch />

      <PTooltip
        text="Search"
        :kbds="['meta', 'K']"
      >
        <PContentSearchButton />
      </PTooltip>

      <PTooltip
        text="Open on GitHub"
        class="hidden lg:flex"
      >
        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca"
          target="_blank"
          icon="i-simple-icons:github"
          aria-label="GitHub"
        />
      </PTooltip>
    </template>

    <template #body>
      <HeaderBody />
    </template>
  </PHeader>
</template>
