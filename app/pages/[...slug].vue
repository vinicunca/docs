<script lang="ts" setup>
import type { Ref } from '#imports';
import type { ContentNavigationItem } from '@nuxt/content';
import { createError, useAsyncData, useRoute, useSeoMeta } from '#app';
import { computed, definePageMeta, inject, queryCollection, useNavigation } from '#imports';
import { toKebabCase } from '@vinicunca/perkakas';
import { pickLinkProps } from 'pohon-ui/utils/link';

definePageMeta({
  layout: 'docs',
});

const route = useRoute();

const { data: page } = await useAsyncData(
  toKebabCase(route.path),
  () => queryCollection('docs')
    .path(route.path)
    .first(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  });
}

const navigation = inject<Ref<Array<ContentNavigationItem>>>('navigation');
const { githubLink, findBreadcrumb, findSurround } = useNavigation(navigation!);

const breadcrumbs = computed(() => findBreadcrumb(page.value?.path as string));
const surround = computed(() => findSurround(page.value?.path as string));

const title = page.value?.seo?.title ?? page.value?.title;
const description = page.value?.seo?.description ?? page.value?.description;

const communityLinks = computed(() => {
  return [
    {
      icon: 'i-lucide:file-pen',
      label: 'Edit this page',
      to: `https://github.com/vinicunca/docs/edit/main/content/${page.value?.stem}.md`,
      target: '_blank',
    },
    {
      icon: 'i-lucide:star',
      label: 'Star on GitHub',
      to: githubLink,
      target: '_blank',
    },
  ];
});

useSeoMeta({
  titleTemplate: '%s - Vinicunca',
  title,
  ogTitle: `${title}`,
  description,
  ogDescription: description,
});
</script>

<template>
  <div
    v-if="page"
    class="flex flex-col lg:(gap-10 grid grid-cols-10)"
  >
    <div class="lg:col-span-8">
      <!-- Page header -->
      <div class="py-8 border-b border-border relative">
        <!-- Headline -->
        <div class="text-sm color-primary font-semibold mb-2.5 flex gap-1.5 items-center">
          <PBreadcrumb :items="breadcrumbs" />
        </div>

        <div>
          <!-- Wrapper -->
          <div class="flex flex-col gap-4 lg:(flex-row items-center justify-between)">
            <h1 class="text-3xl color-text-highlighted font-bold text-pretty sm:text-4xl">
              {{ title }}
            </h1>

            <div class="flex flex-wrap gap-1.5 items-center">
              <PButton
                v-for="link in page.links"
                :key="link.label"
                color="neutral"
                variant="outline"
                :target="link.to?.startsWith('http') ? '_blank' : undefined"
                v-bind="link"
              />

              <CorePageLinks />
            </div>
          </div>

          <div class="text-lg color-text-muted mt-4 text-pretty">
            <MDC
              v-if="page.description"
              :value="page.description"
              unwrap="p"
              :cache-key="`${toKebabCase(route.path)}-description`"
            />
          </div>
        </div>
      </div>

      <!-- Page Content -->
      <div class="mt-8 pb-24 space-y-12">
        <ContentRenderer
          v-if="page.body"
          :value="page"
        />

        <PSeparator v-if="surround?.filter(Boolean).length" />

        <PContentSurround :surround="(surround as any)" />
      </div>
    </div>

    <!-- Page aside right -->
    <PContentToc
      v-if="page?.body?.toc?.links?.length"
      :links="page.body.toc.links"
      class="order-first z-2 lg:col-span-2 lg:order-last"
    >
      <template #bottom>
        <PSeparator
          v-if="page.body?.toc?.links?.length"
          type="dashed"
        />

        <nav class="flex flex-col gap-3">
          <p class="text-sm font-semibold flex gap-1.5 items-center">
            Community
          </p>

          <ul class="flex flex-col gap-2">
            <li
              v-for="(link, index) in communityLinks"
              :key="index"
              class="relative"
            >
              <PLink
                v-slot="slotProps"
                v-bind="pickLinkProps(link)"
                custom
              >
                <PLinkBase
                  v-bind="slotProps"
                  class="group text-sm color-text-muted flex gap-1.5 transition-colors items-center hover:color-text focus-visible:outline-primary"
                >
                  <PIcon
                    v-if="link.icon"
                    :name="link.icon"
                    class="shrink-0 size-5"
                  />

                  <span
                    v-if="link.label"
                    class="truncate"
                  >

                    {{ link.label }}

                    <PIcon
                      v-if="link.target === '_blank'"
                      name="i-lucide:arrow-up-right"
                      class="color-text-dimmed size-3 top-0 absolute"
                    />
                  </span>
                </PLinkBase>
              </PLink>
            </li>
          </ul>
        </nav>

        <PSeparator type="dashed" />
      </template>
    </PContentToc>
  </div>
</template>
