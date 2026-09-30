---
title: "ChangelogVersions"
description: "Display a list of changelog versions in a timeline."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/changelog-versions.md"
---
## Usage

The ChangelogVersions component provides a flexible layout to display a list of [ChangelogVersion](/pohon/components/changelog-version) components using either the default slot or the `versions` prop.

```vue
<template>
  <PChangelogVersions>
    <PChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      v-bind="version"
    />
  </PChangelogVersions>
</template>
```

### Versions

Use the `versions` prop as an array of objects with the properties of the [ChangelogVersion](/pohon/components/changelog-version#props) component.

```vue
<script setup lang="ts">
import type { ChangelogVersionProps } from 'pohon-ui'

const versions = ref<ChangelogVersionProps[]>([
  {
    title: "Nuxt 3.17",
    description: "Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!",
    image: "https://nuxt.com/assets/blog/v3.17.png",
    date: "2025-04-27",
    to: "https://nuxt.com/blog/v3-17",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  },
  {
    title: "Nuxt 3.16",
    description: "Nuxt 3.16 is out - packed with features and performance improvements!",
    image: "https://nuxt.com/assets/blog/v3.16.png",
    date: "2025-03-07",
    to: "https://nuxt.com/blog/v3-16",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  },
  {
    title: "Nuxt 3.15",
    description: "Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!",
    image: "https://nuxt.com/assets/blog/v3.15.png",
    date: "2024-12-24",
    to: "https://nuxt.com/blog/v3-15",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  }
])
</script>

<template>
  <UChangelogVersions :versions="versions" />
</template>
```

### Indicator

Use the `indicator` prop to hide the indicator bar on the left. Defaults to `true`.

```vue
<script setup lang="ts">
import type { ChangelogVersionProps } from 'pohon-ui'

const versions = ref<ChangelogVersionProps[]>([
  {
    title: "Nuxt 3.17",
    description: "Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!",
    image: "https://nuxt.com/assets/blog/v3.17.png",
    date: "2025-04-27",
    to: "https://nuxt.com/blog/v3-17",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  },
  {
    title: "Nuxt 3.16",
    description: "Nuxt 3.16 is out - packed with features and performance improvements!",
    image: "https://nuxt.com/assets/blog/v3.16.png",
    date: "2025-03-07",
    to: "https://nuxt.com/blog/v3-16",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  },
  {
    title: "Nuxt 3.15",
    description: "Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!",
    image: "https://nuxt.com/assets/blog/v3.15.png",
    date: "2024-12-24",
    to: "https://nuxt.com/blog/v3-15",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  }
])
</script>

<template>
  <UChangelogVersions :indicator="false" :versions="versions" />
</template>
```

### Indicator Motion

Use the `indicator-motion` prop to customize or hide the motion effect on the indicator bar. Defaults to `true` with `{ damping: 30, restDelta: 0.001 }` [spring transition options](https://motion.dev/docs/vue-transitions#spring).

```vue
<script setup lang="ts">
import type { ChangelogVersionProps } from 'pohon-ui'

const versions = ref<ChangelogVersionProps[]>([
  {
    title: "Nuxt 3.17",
    description: "Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!",
    image: "https://nuxt.com/assets/blog/v3.17.png",
    date: "2025-04-27",
    to: "https://nuxt.com/blog/v3-17",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  },
  {
    title: "Nuxt 3.16",
    description: "Nuxt 3.16 is out - packed with features and performance improvements!",
    image: "https://nuxt.com/assets/blog/v3.16.png",
    date: "2025-03-07",
    to: "https://nuxt.com/blog/v3-16",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  },
  {
    title: "Nuxt 3.15",
    description: "Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!",
    image: "https://nuxt.com/assets/blog/v3.15.png",
    date: "2024-12-24",
    to: "https://nuxt.com/blog/v3-15",
    target: "_blank",
    ui: {
      container: "max-w-lg"
    }
  }
])
</script>

<template>
  <UChangelogVersions indicator-motion :versions="versions" />
</template>
```

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a page

Use the ChangelogVersions component in a page to create a changelog page:

```vue [pages/changelog.vue]
<script setup lang="ts">
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').all())
</script>

<template>
  <PPage>
    <PPageHero title="Changelog" />

    <PPageBody>
      <PChangelogVersions>
        <PChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.path"
        />
      </PChangelogVersions>
    </PPageBody>
  </PPage>
</template>
```

> [!NOTE]
> 
> In this example, the `versions` are fetched using `queryCollection` from the `@nuxt/content` module.

> [!TIP]
> 
> The `to` prop is overridden here since `@nuxt/content` uses the `path` property.

### With sticky indicator

You can use the `ui` prop and the different slots to make the indicators sticky:

```vue [ChangelogVersionsStickyExample.vue]
<script setup lang="ts">
const versions = [{
  title: 'Nuxt 3.17',
  description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!',
  date: '2025-04-27T00:00:00.000Z',
  image: 'https://nuxt.com/assets/blog/v3.17.png',
  badge: 'v3.17.0',
  to: 'https://nuxt.com/blog/nuxt-3-17',
  target: '_blank',
  authors: [{
    name: 'Daniel Roe',
    avatar: {
      src: 'https://github.com/danielroe.png',
      alt: 'Daniel Roe',
      loading: 'lazy' as const
    },
    to: 'https://github.com/danielroe',
    target: '_blank'
  }]
}, {
  title: 'Nuxt 3.16',
  description: 'Nuxt 3.16 is out - packed with features and performance improvements!',
  date: '2024-03-07T00:00:00.000Z',
  image: 'https://nuxt.com/assets/blog/v3.16.png',
  badge: 'v3.16.0',
  to: 'https://nuxt.com/blog/v3-16',
  target: '_blank',
  authors: [{
    name: 'Daniel Roe',
    avatar: {
      src: 'https://github.com/danielroe.png',
      alt: 'Daniel Roe',
      loading: 'lazy' as const
    },
    to: 'https://github.com/danielroe',
    target: '_blank'
  }]
}, {
  title: 'Nuxt 3.15',
  description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!',
  date: '2024-12-24T00:00:00.000Z',
  image: 'https://nuxt.com/assets/blog/v3.15.png',
  badge: 'v3.15.0',
  to: 'https://nuxt.com/blog/v3-15',
  target: '_blank',
  authors: [{
    name: 'Daniel Roe',
    avatar: {
      src: 'https://github.com/danielroe.png',
      alt: 'Daniel Roe',
      loading: 'lazy' as const
    },
    to: 'https://github.com/danielroe',
    target: '_blank'
  }]
}]
</script>

<template>
  <PChangelogVersions :indicator="false">
    <PChangelogVersion
      v-for="version in versions"
      :key="version.title"
      v-bind="version"
      :badge="undefined"
      class="flex items-start"
      :ui="{
        container: 'max-w-lg me-0',
        indicator: 'sticky top-(--ui-header-height) pt-4 -mt-4 flex flex-col items-end'
      }"
    >
      <template #indicator>
        <PBadge :label="version.badge" variant="soft" />

        <span class="text-sm color-text-muted">{{ new Date(version.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</span>
      </template>
    </PChangelogVersion>
  </PChangelogVersions>
</template>
```

### With scroll container

Pass an object to the `indicator` prop to configure the scroll container. By default, the indicator tracks the window/page scroll ([https://motion.dev/docs/vue-use-scroll#page-scroll](https://motion.dev/docs/vue-use-scroll#page-scroll)).

```vue
<script setup lang="ts">
const scrollContainer = ref<HTMLElement>()
</script>

<template>
  <div ref="scrollContainer" class="max-h-96 overflow-y-auto">
    <PChangelogVersions v-if="scrollContainer" :indicator="{ container: scrollContainer }" />
  </div>
</template>
```

> [!WARNING]
> 
> When using a custom `container`, make sure the container element is mounted before `PChangelogVersions`.

## API

### Props

### Slots

> [!TIP]
> 
> You can use all the slots of the [`ChangelogVersion`](/pohon/components/changelog-version#slots) component inside ChangelogVersions, they are automatically forwarded so you can customize individual versions when using the `versions` prop.
> 
> ```vue
> <template>
>   <PChangelogVersions :versions="versions">
>     <template #body="{ version }">
>       <Markdown :value="version.content" />
>     </template>
>   </PChangelogVersions>
> </template>
> ```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    changelogVersions: {
      slots: {
        root: 'relative',
        container: 'flex flex-col gap-y-8 sm:gap-y-12 lg:gap-y-16',
        indicator: 'absolute hidden lg:block overflow-hidden inset-y-3 start-32 h-full w-px bg-border -ms-[8.5px]',
        beam: 'absolute start-0 top-0 w-full bg-primary will-change-[height]'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ChangelogVersions.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/changelog-versions.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChangelogVersions.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ChangelogVersions source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChangelogVersions.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **versions** — `T[] | undefined; optional`
- **indicator** — `boolean | UseScrollOptions | undefined; optional; default: true`: Display an indicator bar on the left. By default, the indicator will track the scroll of the page. (https://motion.dev/docs/vue-use-scroll#page-scroll)
- **indicatorMotion** — `boolean | SpringOptions | undefined; optional; default: true`: Enable scrolling motion effect on the indicator bar. \`{ damping: 30, restDelta: 0.001 }\`{lang="ts-type"}
- **ui** — `{ root?: SlotClass; container?: SlotClass; indicator?: SlotClass; beam?: SlotClass; } | undefined; optional`

### Slots

- **header** — `{ version: T; }`
- **badge** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; meta: (props?: Record<string, any> | undefined) => string | undefined; date: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; imageWrapper: (props?: Record<string, any> | undefined) => string | undefined; image: (props?: Record<string, any> | undefined) => string | undefined; authors: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; dot: (props?: Record<string, any> | undefined) => string | undefined; dotInner: (props?: Record<string, any> | undefined) => string | undefined; }; } & { version: T; }`
- **date** — `{ version: T; }`
- **title** — `{ version: T; }`
- **description** — `{ version: T; }`
- **image** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; meta: (props?: Record<string, any> | undefined) => string | undefined; date: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; imageWrapper: (props?: Record<string, any> | undefined) => string | undefined; image: (props?: Record<string, any> | undefined) => string | undefined; authors: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; dot: (props?: Record<string, any> | undefined) => string | undefined; dotInner: (props?: Record<string, any> | undefined) => string | undefined; }; } & { version: T; }`
- **body** — `{ version: T; }`
- **footer** — `{ version: T; }`
- **authors** — `{ version: T; }`
- **actions** — `{ version: T; }`
- **indicator** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; meta: (props?: Record<string, any> | undefined) => string | undefined; date: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; imageWrapper: (props?: Record<string, any> | undefined) => string | undefined; image: (props?: Record<string, any> | undefined) => string | undefined; authors: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; dot: (props?: Record<string, any> | undefined) => string | undefined; dotInner: (props?: Record<string, any> | undefined) => string | undefined; }; } & { version: T; }`
- **default** — `{} | undefined`

### Events

No events are declared.
