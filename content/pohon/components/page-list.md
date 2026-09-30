---
title: "PageList"
description: "A vertical list layout for displaying content in a stacked format."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-list.md"
---
## Usage

The PageList component provides a flexible way to display content in a vertical list layout. It's perfect for creating stacked lists of [PageCard](/pohon/components/page-card) components or any other elements, with optional dividers between items.

```vue [PageListExample.vue]
<script setup lang="ts">
const users = ref([
  {
    name: 'Benjamin Canac',
    description: 'benjamincanac',
    to: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'benjamincanac',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Hugo Richard',
    description: 'HugoRCD',
    to: 'https://github.com/HugoRCD',
    target: '_blank',
    avatar: {
      src: 'https://github.com/HugoRCD.png',
      alt: 'HugoRCD',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Sébastien Chopin',
    description: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      alt: 'atinux',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Romain Hamel',
    description: 'romhml',
    to: 'https://github.com/romhml',
    target: '_blank',
    avatar: {
      src: 'https://github.com/romhml.png',
      alt: 'romhml',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Sandro Circi',
    description: 'sandros94',
    to: 'https://github.com/sandros94',
    target: '_blank',
    avatar: {
      src: 'https://github.com/sandros94.png',
      alt: 'sandros94',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Jakub Michálek',
    description: 'J-Michalek',
    to: 'https://github.com/J-Michalek',
    target: '_blank',
    avatar: {
      src: 'https://github.com/J-Michalek.png',
      alt: 'J-Michalek',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Alex',
    description: 'hywax',
    to: 'https://github.com/hywax',
    target: '_blank',
    avatar: {
      src: 'https://github.com/hywax.png',
      alt: 'hywax',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Maxime Pauvert',
    description: 'maximepvrt',
    to: 'https://github.com/maximepvrt',
    target: '_blank',
    avatar: {
      src: 'https://github.com/maximepvrt.png',
      alt: 'maximepvrt',
      loading: 'lazy' as const
    }
  }
])
</script>

<template>
  <PPageList>
    <PPageCard
      v-for="(user, index) in users"
      :key="index"
      variant="ghost"
      :to="user.to"
      :target="user.target"
    >
      <template #body>
        <PUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
      </template>
    </PPageCard>
  </PPageList>
</template>
```

### Divide

Use the `divide` prop to add a divider between each child element.

```vue [PageListDivideExample.vue]
<script setup lang="ts">
const users = ref([
  {
    name: 'Benjamin Canac',
    description: 'benjamincanac',
    to: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'benjamincanac',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Hugo Richard',
    description: 'HugoRCD',
    to: 'https://github.com/HugoRCD',
    target: '_blank',
    avatar: {
      src: 'https://github.com/HugoRCD.png',
      alt: 'HugoRCD',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Sébastien Chopin',
    description: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      alt: 'atinux',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Romain Hamel',
    description: 'romhml',
    to: 'https://github.com/romhml',
    target: '_blank',
    avatar: {
      src: 'https://github.com/romhml.png',
      alt: 'romhml',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Sandro Circi',
    description: 'sandros94',
    to: 'https://github.com/sandros94',
    target: '_blank',
    avatar: {
      src: 'https://github.com/sandros94.png',
      alt: 'sandros94',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Jakub Michálek',
    description: 'J-Michalek',
    to: 'https://github.com/J-Michalek',
    target: '_blank',
    avatar: {
      src: 'https://github.com/J-Michalek.png',
      alt: 'J-Michalek',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Alex',
    description: 'hywax',
    to: 'https://github.com/hywax',
    target: '_blank',
    avatar: {
      src: 'https://github.com/hywax.png',
      alt: 'hywax',
      loading: 'lazy' as const
    }
  },
  {
    name: 'Maxime Pauvert',
    description: 'maximepvrt',
    to: 'https://github.com/maximepvrt',
    target: '_blank',
    avatar: {
      src: 'https://github.com/maximepvrt.png',
      alt: 'maximepvrt',
      loading: 'lazy' as const
    }
  }
])
</script>

<template>
  <PPageList divide>
    <PPageCard
      v-for="(user, index) in users"
      :key="index"
      variant="ghost"
      :to="user.to"
      :target="user.target"
    >
      <template #body>
        <PUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" />
      </template>
    </PPageCard>
  </PPageList>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageList: {
      base: 'relative flex flex-col',
      variants: {
        divide: {
          true: '*:not-last:after:absolute *:not-last:after:inset-x-1 *:not-last:after:bottom-0 *:not-last:after:bg-border *:not-last:after:h-px'
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageList.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-list.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageList.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageList source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageList.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **divide** — `boolean | undefined; optional; default: false`
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
