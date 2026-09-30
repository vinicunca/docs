---
title: "ChangelogVersion"
description: "A customizable article to display in a changelog."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/changelog-version.md"
---
## Usage

The ChangelogVersion component provides a flexible way to display an `<article>` element with customizable content including title, description, image, etc.

```vue
<template>
  <p-changelog-version :authors="[
    {
      name: 'Benjamin Canac',
      description: '@benjamincanac',
      avatar: {
        src: 'https://github.com/benjamincanac.png',
        loading: 'lazy'
      },
      to: 'https://x.com/benjamincanac',
      target: '_blank'
    },
    {
      name: 'Sebastien Chopin',
      description: '@atinux',
      avatar: {
        src: 'https://github.com/atinux.png',
        loading: 'lazy'
      },
      to: 'https://x.com/atinux',
      target: '_blank'
    },
    {
      name: 'Hugo Richard',
      description: '@hugorcd',
      avatar: {
        src: 'https://github.com/hugorcd.png',
        loading: 'lazy'
      },
      to: 'https://x.com/hugorcd',
      target: '_blank'
    }
  ]" :ui="{
    container: 'max-w-lg'
  }" class="w-full" date="2025-03-12" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." image="https://nuxt.com/assets/blog/pohon-ui-v3.png" target="_blank" title="Introducing Pohon UI v3" to="https://nuxt.com/blog/pohon-ui-v3" />
</template>
```

> [!TIP]
> See: /docs/components/changelog-versions
> 
> Use the `ChangelogVersions` component to display multiple changelog versions in a timeline with an indicator bar on the left.

### Title

Use the `title` prop to display the title of the ChangelogVersion.

```vue
<template>
  <UChangelogVersion title="Introducing Pohon UI v3" />
</template>
```

### Description

Use the `description` prop to display the description of the ChangelogVersion.

```vue
<template>
  <UChangelogVersion title="Introducing Pohon UI v3" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." />
</template>
```

### Date

Use the `date` prop to display the date of the ChangelogVersion.

> [!TIP]
> 
> The date is automatically formatted to the [current locale](/pohon/getting-started/integrations/i18n/nuxt#locale). You can either pass a `Date` object or a string.

```vue
<template>
  <UChangelogVersion title="Introducing Pohon UI v3" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." date="2025-03-12" />
</template>
```

### Badge

Use the `badge` prop to display a [Badge](/pohon/components/badge) on the ChangelogVersion.

```vue
<template>
  <UChangelogVersion title="Introducing Pohon UI v3" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." date="2025-03-12" badge="Release" />
</template>
```

You can pass any property from the [Badge](/pohon/components/badge#props) component to customize it.

```vue
<template>
  <UChangelogVersion title="Introducing Pohon UI v3" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." date="2025-03-12" :badge="{
  label: 'Release',
  color: 'primary',
  variant: 'outline'
}" />
</template>
```

### Image

Use the `image` prop to display an image in the BlogPost.

> [!NOTE]
> 
> If [`@nuxt/image`](https://image.nuxt.com/get-started/installation) is installed, the `<NuxtImg>` component will be used instead of the native `img` tag.

```vue
<template>
  <UChangelogVersion title="Introducing Pohon UI v3" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." date="2025-03-12" image="https://nuxt.com/assets/blog/pohon-ui-v3.png" />
</template>
```

### Authors

Use the `authors` prop to display a list of [User](/pohon/components/user) in the ChangelogVersion as an array of objects with the following properties:

- `name?: string`
- `description?: string`
- `avatar?: Omit<AvatarProps, 'size'>`
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`
- `size?: UserProps['size']`
- `orientation?: UserProps['orientation']`

You can pass any property from the [Link](/pohon/components/link#props) component such as `to`, `target`, etc.

```vue
<script setup lang="ts">
import type { UserProps } from 'pohon-ui'

const authors = ref<UserProps[]>([
  {
    name: "Benjamin Canac",
    description: "@benjamincanac",
    avatar: {
      src: "https://github.com/benjamincanac.png",
      loading: "lazy"
    },
    to: "https://x.com/benjamincanac",
    target: "_blank"
  },
  {
    name: "Sebastien Chopin",
    description: "@atinux",
    avatar: {
      src: "https://github.com/atinux.png",
      loading: "lazy"
    },
    to: "https://x.com/atinux",
    target: "_blank"
  },
  {
    name: "Hugo Richard",
    description: "@hugorcd",
    avatar: {
      src: "https://github.com/hugorcd.png",
      loading: "lazy"
    },
    to: "https://x.com/hugorcd",
    target: "_blank"
  }
])
</script>

<template>
  <UChangelogVersion title="Introducing Pohon UI v3" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." date="2025-03-12" image="https://nuxt.com/assets/blog/pohon-ui-v3.png" :authors="authors" />
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UChangelogVersion title="Introducing Pohon UI v3" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." date="2025-03-12" image="https://nuxt.com/assets/blog/pohon-ui-v3.png" to="https://nuxt.com/blog/pohon-ui-v3" target="_blank" />
</template>
```

### Indicator

Use the `indicator` prop to hide the indicator dot on the left. Defaults to `true`.

```vue
<template>
  <UChangelogVersion title="Introducing Pohon UI v3" description="Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility." date="2025-03-12" image="https://nuxt.com/assets/blog/pohon-ui-v3.png" :indicator="false" />
</template>
```

> [!NOTE]
> 
> When the `indicator` prop is `false`, the date will be displayed over the title.

## Examples

### With body slot

You can use the `body` slot to display custom content between the image and the authors with:

- the [Markdown](https://comark.dev/rendering/vue) component from `@comark/vue` to display some markdown.
- the [ContentRenderer](https://content.nuxt.com/docs/components/content-renderer) component from `@nuxt/content` to render the content of the page or list.
- or use the `:u-changelog-version` component directly in your content with markdown inside the `body` slot as Pohon UI provides pre-styled prose components.

```vue [ChangelogVersionMarkdownExample.vue]
<script setup lang="ts">
import { Markdown } from '@comark/vue'

const content = `
![Pohon UI v3](https://nuxt.com/assets/blog/pohon-ui-v3.png)

We are thrilled to introduce Pohon UI v3, a comprehensive redesign of our UI library that delivers significant improvements in accessibility, performance, and developer experience. This major update represents over 1,500 commits of dedicated work, collaboration, and innovation from our team and the community.

Read the blog post announcement: https://nuxt.com/blog/pohon-ui-v3

**[Get started with Pohon UI v3 →](/pohon/getting-started/installation/nuxt)**

### 🧩 Akar: A New Foundation

We've transitioned from [Headless UI](https://headlessui.com/) to [Akar](/akar/) as our core component foundation, bringing:

- **Expanded Component Library**: Access to 55+ primitives, significantly expanding our component offerings
- **Future-Proof Development**: Benefit from Akar's growing popularity and continuous improvements
- **First-Class Accessibility**: Built-in accessibility features aligned with our commitment to inclusive design

### 🚀 UnoCSS Integration

Pohon UI now leverages the latest [UnoCSS](https://unocss.com), delivering:

- **Exceptional Performance**: Full builds up to 5× faster, with incremental builds over 100× faster
- **Streamlined Toolchain**: Built-in import handling, vendor prefixing, and syntax transforms with zero additional tooling
- **CSS-First Configuration**: Customize and extend the framework directly in CSS instead of JavaScript configuration

### 🎨 UnoCSS Variants

We've adopted [UnoCSS Variants](https://vinicunca.dev/unocss-variants/) to power our design system, offering:

- **Dynamic Styling**: Create flexible component variants with a powerful, intuitive API
- **Type Safety**: Full TypeScript support with intelligent auto-completion
- **Smart Conflict Resolution**: Efficiently merge conflicting styles with predictable results

## Migration from v2

We want to be transparent: migrating from Pohon UI v2 to v3 requires significant effort. While we've maintained core concepts and components, Pohon UI v3 has been rebuilt from the ground up to provide enhanced capabilities.

To upgrade your project:

1. Read our detailed [migration guide](/pohon/getting-started/installation/nuxt)
2. Review the new documentation and components before attempting to upgrade
3. Report any issues on our [GitHub repository](https://github.com/vinicunca/pohon/issues)

## 🙏 Acknowledgements

This release represents thousands of hours of work from our team and the community. We'd like to thank everyone who contributed to making Pohon UI v3 a reality, especially @romhml, @sandros94, and @hywax for their tremendous work.
`

const version = {
  title: 'Introducing Pohon UI v3',
  description: 'Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility.',
  date: '2025-03-12T00:00:00.000Z',
  badge: 'Release',
  to: 'https://nuxt.com/blog/pohon-ui-v3',
  target: '_blank',
  content,
  authors: [{
    name: 'Benjamin Canac',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'Benjamin Canac',
      loading: 'lazy' as const
    },
    to: 'https://github.com/benjamincanac',
    target: '_blank'
  }]
}
</script>

<template>
  <PChangelogVersion v-bind="version" :ui="{ container: 'max-w-lg' }" class="w-full">
    <template #body>
      <Markdown :value="version.content" />
    </template>
  </PChangelogVersion>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    changelogVersion: {
      slots: {
        root: 'relative',
        container: 'flex flex-col mx-auto max-w-2xl',
        header: '',
        meta: 'flex items-center gap-3 mb-2',
        date: 'text-sm/6 color-text-toned truncate',
        badge: '',
        title: 'relative text-xl text-pretty font-600 color-text-highlighted',
        description: 'text-base text-pretty color-text-muted mt-1',
        imageWrapper: 'relative overflow-hidden rounded-lg aspect-[16/9] mt-5 group/changelog-version-image',
        image: 'object-cover object-top w-full h-full',
        authors: 'flex flex-wrap gap-x-4 gap-y-1.5',
        footer: 'border-t border-border pt-5 flex items-center justify-between',
        indicator: 'absolute start-0 top-0 w-32 hidden lg:flex items-center justify-end gap-3 min-w-0',
        dot: 'size-4 rounded-full bg-background ring ring-ring flex items-center justify-center my-1',
        dotInner: 'size-2 rounded-full bg-primary'
      },
      variants: {
        body: {
          false: {
            footer: 'mt-5'
          }
        },
        badge: {
          false: {
            meta: 'lg:hidden'
          }
        },
        to: {
          true: {
            title: [
              'outline-primary/25 has-focus-visible:outline-3 rounded-xs',
              'transition'
            ],
            image: 'transform transition-transform duration-280 group-hover/changelog-version-image:scale-105 group-has-focus-visible/changelog-version-image:scale-105'
          }
        },
        hidden: {
          true: {
            date: 'lg:hidden'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ChangelogVersion.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/changelog-version.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChangelogVersion.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ChangelogVersion source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChangelogVersion.vue)

### Props

- **as** — `any; optional; default: "article"`: The element or component this component should render as.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **date** — `string | Date | undefined; optional`: The date of the changelog version. Can be a string or a Date object.
- **badge** — `string | BadgeProps | undefined; optional`: Display a badge on the changelog version. Can be a string or an object. \`{ color: 'neutral', variant: 'solid' }\`{lang="ts-type"}
- **authors** — `UserProps[] | undefined; optional`: The authors of the changelog version.
- **image** — `string | (Partial<ImgHTMLAttributes> & { [key: string]: any; }) | undefined; optional`: The image of the changelog version. Can be a string or an object.
- **indicator** — `boolean | undefined; optional; default: true`: Display an indicator dot on the left.
- **to** — `string | it | et | undefined; optional`
- **target** — `(string & {}) | "_blank" | "_parent" | "_self" | "_top" | null | undefined; optional`
- **onClick** — `((event: MouseEvent) => void) | undefined; optional`
- **ui** — `{ root?: SlotClass; container?: SlotClass; header?: SlotClass; meta?: SlotClass; date?: SlotClass; badge?: SlotClass; title?: SlotClass; description?: SlotClass; imageWrapper?: SlotClass; image?: SlotClass; authors?: SlotClass; footer?: SlotClass; indicator?: SlotClass; dot?: SlotClass; dotInner?: SlotClass; } | undefined; optional`

### Slots

- **header** — `{} | undefined`
- **badge** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; meta: (props?: Record<string, any> | undefined) => string | undefined; date: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; imageWrapper: (props?: Record<string, any> | undefined) => string | undefined; image: (props?: Record<string, any> | undefined) => string | undefined; authors: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; dot: (props?: Record<string, any> | undefined) => string | undefined; dotInner: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **date** — `{} | undefined`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **image** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; meta: (props?: Record<string, any> | undefined) => string | undefined; date: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; imageWrapper: (props?: Record<string, any> | undefined) => string | undefined; image: (props?: Record<string, any> | undefined) => string | undefined; authors: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; dot: (props?: Record<string, any> | undefined) => string | undefined; dotInner: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **body** — `{} | undefined`
- **footer** — `{} | undefined`
- **authors** — `{} | undefined`
- **actions** — `{} | undefined`
- **indicator** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; meta: (props?: Record<string, any> | undefined) => string | undefined; date: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; imageWrapper: (props?: Record<string, any> | undefined) => string | undefined; image: (props?: Record<string, any> | undefined) => string | undefined; authors: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; dot: (props?: Record<string, any> | undefined) => string | undefined; dotInner: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

No events are declared.
