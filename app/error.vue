<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const route = useRoute()
const { style, link, color } = useTheme()

const { data: navigation } = await useFetch('/api/navigation.json')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link,
  style
})

useSeoMeta({
  titleTemplate: '%s - Vinicunca',
  title: String(props.error.statusCode)
})

if (import.meta.server) {
  useSeoMeta({
    ogSiteName: 'Vinicunca',
    twitterCard: 'summary_large_image'
  })
}

useFaviconFromTheme()

const { rootNavigation, navigationByFramework } = useNavigation(navigation)

provide('navigation', rootNavigation)

const hasSections = computed(() => !!findDocsPackage(route.path))
</script>

<template>
  <PApp>
    <NuxtLoadingIndicator color="var(--ui-primary)" :height="2" />

    <div :class="[hasSections && 'root']">
      <Header />

      <PError :error="error" />

      <Footer />
    </div>

    <ClientOnly>
      <Search :navigation="navigationByFramework" />
    </ClientOnly>
  </PApp>
</template>
