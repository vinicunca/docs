<script setup lang="ts">
const { mobileLinks } = useHeader();
const { currentPackage, sectionLinks: sectionItems, navigationByCategory } = useNavigation(inject('navigation')!);
</script>

<template>
  <template v-if="currentPackage">
    <PNavigationMenu
      v-if="sectionItems.length"
      orientation="vertical"
      :items="sectionItems"
      class="-mx-2.5"
    />

    <div
      v-if="currentPackage.id === 'pohon'"
      class="mt-4 flex flex-col gap-2"
    >
      <FrameworkTabs />
    </div>

    <PSeparator
      type="dashed"
      class="mb-6 mt-4"
    />

    <PContentNavigation
      :navigation="navigationByCategory"
      highlight
      :ui="{ linkTrailingBadge: 'font-semibold uppercase' }"
    />

    <PSeparator
      type="dashed"
      class="mb-6 mt-4"
    />
  </template>

  <PNavigationMenu
    orientation="vertical"
    :items="mobileLinks"
    class="-mx-2.5"
  />
</template>
