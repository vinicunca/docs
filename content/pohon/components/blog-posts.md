---
title: "BlogPosts"
description: "Display a list of blog posts in a responsive grid layout."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/blog-posts.md"
---
## Usage

The BlogPosts component provides a flexible layout to display a list of [BlogPost](/pohon/components/blog-post) components using either the default slot or the `posts` prop.

```vue
<template>
  <PBlogPosts>
    <PBlogPost
      v-for="(post, index) in posts"
      :key="index"
      v-bind="post"
    />
  </PBlogPosts>
</template>
```

### Posts

Use the `posts` prop as an array of objects with the properties of the [BlogPost](/pohon/components/blog-post#props) component.

```vue
<script setup lang="ts">
import type { BlogPostProps } from 'pohon-ui'

const posts = ref<BlogPostProps[]>([
  {
    title: "Nuxt Icon v1",
    description: "Discover Nuxt Icon v1!",
    image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png",
    date: "2024-11-25"
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04"
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22"
  }
])
</script>

<template>
  <UBlogPosts :posts="posts" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the BlogPosts. Defaults to `horizontal`.

```vue
<script setup lang="ts">
import type { BlogPostProps } from 'pohon-ui'

const posts = ref<BlogPostProps[]>([
  {
    title: "Nuxt Icon v1",
    description: "Discover Nuxt Icon v1!",
    image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png",
    date: "2024-11-25"
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04"
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22"
  }
])
</script>

<template>
  <UBlogPosts orientation="vertical" :posts="posts" />
</template>
```

> [!TIP]
> 
> When using the `posts` prop instead of the default slot, the `orientation` of the posts is automatically reversed, `horizontal` to `vertical` and vice versa.

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a page

Use the BlogPosts component in a page to create a blog page:

```vue [pages/blog/index.vue]
<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())
</script>

<template>
  <PPage>
    <PPageHero title="Blog" />

    <PPageBody>
      <PContainer>
        <PBlogPosts>
          <PBlogPost
            v-for="(post, index) in posts"
            :key="index"
            v-bind="post"
            :to="post.path"
          />
        </PBlogPosts>
      </PContainer>
    </PPageBody>
  </PPage>
</template>
```

> [!NOTE]
> 
> In this example, the `posts` are fetched using `queryCollection` from the `@nuxt/content` module.

> [!TIP]
> 
> The `to` prop is overridden here since `@nuxt/content` uses the `path` property.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    blogPosts: {
      base: 'flex flex-col gap-8 lg:gap-y-16',
      variants: {
        orientation: {
          horizontal: 'sm:grid sm:grid-cols-2 lg:grid-cols-3',
          vertical: ''
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/BlogPosts.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/blog-posts.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/BlogPosts.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[BlogPosts source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/BlogPosts.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **posts** — `BlogPostProps[] | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the blog posts.
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **date** — `{ post: T; }`
- **badge** — `{ post: T; }`
- **title** — `{ post: T; }`
- **description** — `{ post: T; }`
- **authors** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; image: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; authors: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; meta: (props?: Record<string, any> | undefined) => string | undefined; date: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; }; } & { post: T; }`
- **header** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; image: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; authors: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; meta: (props?: Record<string, any> | undefined) => string | undefined; date: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; }; } & { post: T; }`
- **body** — `{ post: T; }`
- **footer** — `{ post: T; }`
- **default** — `{} | undefined`

### Events

No events are declared.
