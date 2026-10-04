<template>
  <PDrawer :ui="{ content: 'h-full', overlay: 'bg-background-inverted/30' }">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

    <template #footer>
      <PDrawer nested :ui="{ content: 'h-full', overlay: 'bg-background-inverted/30' }">
        <PButton color="neutral" variant="outline" label="Open nested" />

        <template #content>
          <Placeholder class="flex-1 m-4" />
        </template>
      </PDrawer>
    </template>
  </PDrawer>
</template>
