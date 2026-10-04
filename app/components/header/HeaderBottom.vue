<script setup lang="ts">
import { mapContentNavigation } from 'pohon-ui/utils/content'

const route = useRoute()

const { currentPackage, packageSections } = useNavigation(inject('navigation')!)

const items = computed(() => mapContentNavigation(packageSections.value.map(item => ({ ...item, children: undefined })))?.map(item => ({
  ...item,
  active: route.path === item.to || route.path.startsWith(`${item.to as string}/`)
})))
</script>

<template>
  <PSeparator class="hidden lg:flex" />

  <PContainer class="hidden lg:flex items-center justify-between">
    <PNavigationMenu :items="items" variant="pill" highlight class="-mx-2.5 -mb-px" />

    <FrameworkTabs v-if="currentPackage?.id === 'pohon'" class="w-40" />
  </PContainer>
</template>
