<script setup lang="ts">
import { mapContentNavigation } from 'pohon-ui/utils/content'

const route = useRoute()
const { mobileLinks } = useHeader()
const { currentPackage, packageSections, navigationByCategory } = useNavigation(inject('navigation')!)

const sectionItems = computed(() => mapContentNavigation(packageSections.value.map(item => ({ ...item, children: undefined })))?.map(item => ({
  ...item,
  active: route.path === item.to || route.path.startsWith(`${item.to as string}/`)
})))
</script>

<template>
  <template v-if="currentPackage">
    <PNavigationMenu v-if="sectionItems.length" orientation="vertical" :items="sectionItems" class="-mx-2.5" />

    <div v-if="currentPackage.id === 'pohon'" class="flex flex-col gap-2 mt-4">
      <FrameworkTabs />
    </div>

    <PSeparator type="dashed" class="mt-4 mb-6" />

    <PContentNavigation :navigation="navigationByCategory" highlight :ui="{ linkTrailingBadge: 'font-semibold uppercase' }" />

    <PSeparator type="dashed" class="mt-4 mb-6" />
  </template>

  <PNavigationMenu orientation="vertical" :items="mobileLinks" class="-mx-2.5" />
</template>
