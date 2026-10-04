<script setup lang="ts">
import { kebabCase } from 'scule'
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()
const { framework } = useFrameworks()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(kebabCase(route.path), () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// A page that is only a link in the sidebar, like Figma. The route rule sends
// full requests along, this catches client side navigations to it.
const externalTo = (page.value as { to?: string }).to
if (externalTo) {
  await navigateTo(externalTo, { external: true, replace: true })
}

// Update the framework if the page has different one
watch(page, () => {
  if (page.value?.framework && page.value?.framework !== framework.value) {
    framework.value = page.value?.framework as string
  }
}, { immediate: true })

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { findSurround, findBreadcrumb } = useNavigation(navigation!)

const breadcrumb = computed(() => findBreadcrumb(page.value?.path as string))

// The surround links are framework-specific. Prerendered pages bake in the page's
// framework (or the `nuxt` default), but `useFrameworks` reads the real cookie on the
// client, so keep using the prerendered value through hydration to avoid a mismatch,
// then switch to the actual framework once mounted.
const hydrated = ref(false)
onMounted(() => {
  hydrated.value = true
})

const surround = computed(() => findSurround(
  page.value?.path as string,
  hydrated.value ? framework.value : ((page.value?.framework as string) || 'nuxt')
))

if (!import.meta.prerender) {
  // Redirect to the correct framework version if the page is not the current framework
  watch(framework, () => {
    const route = useRoute()

    if (page.value?.path === route.path && page.value?.framework && page.value?.framework !== framework.value) {
      if (route.path.endsWith(`/${page.value?.framework}`)) {
        navigateTo(`${route.path.split('/').slice(0, -1).join('/')}/${framework.value}`)
      } else {
        navigateTo(`/pohon/getting-started`)
      }
    }
  })
}

const docsPackage = findDocsPackage(route.path)
const packageTitle = docsPackage?.title || 'Vinicunca'
const isVueLibrary = docsPackage?.id === 'pohon' || docsPackage?.id === 'akar'

const title = page.value?.seo?.title ? page.value.seo.title : page.value?.navigation?.title ? page.value.navigation.title : page.value?.title
const prefix = isVueLibrary && (page.value?.path.includes('components/') || page.value?.path.includes('composables/')) ? 'Vue ' : ''
const suffix = !prefix ? '' : page.value?.path.includes('components/') ? 'Component ' : 'Composable '
// A `Vue X Component` title already says Vue, so only tag the framework on pages without that prefix
const frameworkSuffix = !prefix && page.value?.framework === 'vue' ? ' for Vue' : ''
const description = page.value?.seo?.description ? page.value.seo.description : page.value?.description

useSeoMeta({
  titleTemplate: `${prefix}%s ${suffix}- ${packageTitle}${frameworkSuffix}`,
  title,
  ogTitle: `${prefix}${title} ${suffix}- ${packageTitle}${frameworkSuffix}`,
  description,
  ogDescription: description
})

const path = computed(() => route.path.replace(/\/$/, ''))

useCanonical(computed(() => `/raw${path.value}.md`))

if (import.meta.server) {
  if (route.path.startsWith('/pohon/components/')) {
    defineOgImage('Component.takumi', {
      title: page.value.title,
      description: page.value.description,
      slug: (route.params.slug as string[]).pop() as string
    })
  } else {
    defineOgImage('Docs.takumi', {
      title: page.value.title,
      description: page.value.description,
      headline: breadcrumb.value?.[breadcrumb.value.length - 1]?.label || packageTitle,
      framework: page.value?.framework
    })
  }

  useSchemaOrg([
    defineArticle({
      '@type': 'TechArticle',
      'headline': `${prefix}${title} ${suffix}`.trim(),
      'description': description
    }),
    defineBreadcrumb({
      itemListElement: breadcrumb.value?.map(item => ({
        name: item.label,
        item: item.to ? String(item.to) : undefined
      })) || []
    })
  ])
}

const studioIcons = useStudioIcons()

const links = computed(() => [{
  icon: studioIcons.pencil,
  label: 'Edit this page',
  to: `https://github.com/vinicunca/docs/edit/main/content/${page?.value?.stem}.${page?.value?.extension || 'md'}`,
  target: '_blank'
}, ...(docsPackage
  ? [{
      icon: 'i-simple-icons-github',
      label: `${docsPackage.title} on GitHub`,
      to: docsPackage.github,
      target: '_blank'
    }]
  : [])])
</script>

<template>
  <PPage
    v-if="page"
  >
    <PPageHeader :description="page.description">
      <template #headline>
        <PBreadcrumb :items="breadcrumb" />
      </template>

      <template #title>
        {{ page.title }}

        <PBadge
          v-if="page.navigation?.badge"
          :label="page.navigation?.badge"
          variant="subtle"
          size="lg"
          class="rounded-full align-middle"
        />
      </template>

      <template #links>
        <PButton
          v-for="link in page.links"
          :key="link.label"
          color="neutral"
          variant="outline"
          :target="link.to?.startsWith('http') ? '_blank' : undefined"
          v-bind="link"
        >
          <template v-if="link.avatar" #leading>
            <PAvatar v-bind="link.avatar" size="2xs" :alt="`${link.label} avatar`" />
          </template>
        </PButton>
        <PageHeaderLinks />
      </template>
    </PPageHeader>

    <PPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <PSeparator v-if="surround?.filter(Boolean).length" />

      <PContentSurround :surround="(surround as any)" />
    </PPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <PContentToc :links="page.body.toc.links" class="z-2" highlight highlight-variant="circuit">
        <template #bottom>
          <PSeparator v-if="page.body?.toc?.links?.length" type="dashed" />

          <PPageLinks :links="links" />

        </template>
      </PContentToc>
    </template>
  </PPage>
</template>
