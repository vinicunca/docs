<script setup lang="ts">
import { useRoute } from '#app';
import { PButton, PFooter, PSeparator } from '#components';

const route = useRoute();
</script>

<template>
  <PSeparator
    :icon="route.path === '/' ? undefined : 'i-simple-icons:nuxtdotjs'"
    class="h-px"
  />

  <PFooter>
    <template #left>
      <NuxtLink
        to="https://github.com/vinicunca"
        target="_blank"
        class="text-sm color-text-muted"
      >
        Published under <span class="color-text-highlighted">MIT License</span>
      </NuxtLink>
    </template>

    <template #right>
      <PButton
        aria-label="Vinicunca on GitHub"
        icon="i-simple-icons:github"
        to="https://github.com/vinicunca"
        target="_blank"
        color="neutral"
        variant="ghost"
        size="sm"
      />
    </template>
  </PFooter>
</template>
