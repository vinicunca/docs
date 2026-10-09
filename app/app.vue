<script setup lang="ts">
const route = useRoute();

const appConfig = useAppConfig();
const { style, link, color } = useTheme();

const colorMode = useColorMode();

// Bare `d`, site-wide since the color mode button sits in the header on every
// page. defineShortcuts disables single-key bindings while an input or a
// contenteditable is focused, so it never eats a typed 'd'.
// Not in the example iframes: those pin their mode from ?theme= to match
// the page embedding them.
defineShortcuts({
  d: () => {
    if (route.path.startsWith('/examples')) {
      return;
    }
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});

const { data: navigation } = await useFetch('/api/navigation.json');

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link,
  style,
});

if (import.meta.server) {
  useSeoMeta({
    ogSiteName: 'Vinicunca',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  });

  useSchemaOrg([
    defineWebSite({
      name: useSiteConfig().name,
    }),
  ]);
}

useFaviconFromTheme();

const { rootNavigation, navigationByFramework } = useNavigation(navigation);

provide('navigation', rootNavigation);

const showLayout = computed(() => !route.path.startsWith('/examples') && !route.path.startsWith('/theme'));
const hasSections = computed(() => !!findDocsPackage(route.path));
</script>

<template>
  <PApp :toaster="appConfig.toaster">
    <NuxtLoadingIndicator
      color="var(--ui-primary)"
      :height="2"
    />

    <div :class="[hasSections && 'root']">
      <template v-if="showLayout">
        <Header />
      </template>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <template v-if="showLayout">
        <Footer />
      </template>
    </div>

    <template v-if="!route.path.startsWith('/examples')">
      <ClientOnly>
        <Search :navigation="navigationByFramework" />
      </ClientOnly>
    </template>
  </PApp>
</template>

<style>
/* Safelist (do not remove): [&>div]:*:my-0 [&>div]:*:w-full h-64 !px-0 !py-0 !pt-0 !pb-0 !p-0 !justify-start !justify-end !min-h-96 h-136 max-h-[341px] */

@media (min-width: 1024px) {
  .root {
    --ui-header-height: 112px;
  }
}
</style>
