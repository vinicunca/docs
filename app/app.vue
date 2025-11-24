<script lang="ts" setup>
import { PApp } from '#components';
import { provide, queryCollectionNavigation, useAppConfig, useAsyncData, useHead, useNavigation, useRoute, useSeoMeta } from '#imports';

const appConfig = useAppConfig();
const route = useRoute();

useHead({
  link: [
    {
      href: '/favicons/favicon.ico',
      rel: 'icon',
      sizes: '48x48',
    },

    {
      href: '/favicons/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },

    {
      href: '/favicons/site.webmanifest',
      rel: 'manifest',
    },

    {
      href: '/favicons/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
    },

    {
      href: '/favicons/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
    },

    {
      href: '/favicons/favicon.ico',
      rel: 'icon',
      sizes: '48x48',
    },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#fff' },
  ],
});

useSeoMeta({
  author: 'praburangki',
  ogTitle: 'Vinicunca',
  ogDescription: 'Utilities to enhance developer experience',
  twitterCard: 'summary_large_image',
  twitterCreator: '@praburangki',
});

const { data: navigation } = useAsyncData(
  'navigation',
  () => queryCollectionNavigation(
    'docs',
    ['package', 'category', 'description'],
  ),
);

useAsyncData(
  'perkakas-methods',
  () => $fetch('/api/perkakas.json'),
);

const { rootNavigation } = useNavigation(navigation);

provide('navigation', rootNavigation);
</script>

<template>
  <PApp
    :toaster="appConfig.toaster"
    :tooltip="{
      delayDuration: 300,
    }"
  >
    <NuxtLoadingIndicator
      color="var(--akar-primary)"
      :height="2"
    />

    <div>
      <HeaderBase v-if="!route.path.startsWith('/examples')" />

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <!-- <LayoutFooter /> -->

      <!-- <ClientOnly>
          <LayoutHeaderSearch
            :files="files"
            :navigation="navigationByFramework"
          />
        </ClientOnly> -->
    </div>
  </PApp>
</template>
