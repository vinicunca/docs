<script setup lang="ts">
const { currentPackage, sectionLinks: items } = useNavigation(inject('navigation')!);
</script>

<template>
  <PSeparator class="hidden lg:flex" />

  <PContainer class="hidden items-center justify-between lg:flex">
    <PNavigationMenu
      :items="items"
      variant="pill"
      highlight
      class="-mx-2.5 -mb-px"
    />

    <FrameworkTabs
      v-if="currentPackage?.id === 'pohon'"
      class="w-40"
    />
  </PContainer>
</template>
