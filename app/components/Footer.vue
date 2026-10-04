<script setup lang="ts">
const { links } = useFooter()
</script>

<template>
  <PSeparator class="h-px" />

  <PFooter>
    <template #left>
      <NuxtLink to="https://github.com/vinicunca" target="_blank" class="text-sm color-text-muted">
        Published under <span class="color-text-highlighted">MIT License</span>
      </NuxtLink>
    </template>

    <PNavigationMenu :items="links" variant="link" color="neutral" :ui="{ list: 'flex-wrap justify-center' }" />

    <template #right>
      <PButton
        aria-label="Vinicunca on GitHub"
        icon="i-simple-icons-github"
        to="https://github.com/vinicunca"
        target="_blank"
        color="neutral"
        variant="ghost"
        size="sm"
      />
    </template>
  </PFooter>
</template>
