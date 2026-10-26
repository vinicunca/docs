<script setup lang="ts">
const { columns } = useFooter();
</script>

<template>
  <PSeparator class="h-px" />

  <PFooter :ui="{ top: 'border-b border-border' }">
    <template #top>
      <PContainer>
        <!-- no left or right column: the groups take the theme's full xl
             grid rather than its two-thirds center. `!` because the class
             merge keeps both spans and the stylesheet order would pick one -->
        <PFooterColumns
          :columns="columns"
          :ui="{ center: 'xl:!col-span-3' }"
        />
      </PContainer>
    </template>

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
