---
title: "ContentSearchButton"
description: "A pre-styled Button to open the ContentSearch modal."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/content-search-button.md"
---
> [!WARNING]
> See: /docs/getting-started/integrations/content
> 
> This component is only available when the `@nuxt/content` module is installed.

## Usage

The ContentSearchButton component is used to open the [ContentSearch](/pohon/components/content-search) modal.

```vue
<template>
  <UContentSearchButton />
</template>
```

It extends the [Button](/pohon/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UContentSearchButton variant="subtle" />
</template>
```

> [!NOTE]
> See: #collapsed
> 
> The button defaults to `color="neutral"` and `variant="outline"` when not collapsed, `variant="ghost"` when collapsed.

### Collapsed

Use the `collapsed` prop to show the button's label and [kbds](#kbds). Defaults to `true`.

```vue
<template>
  <UContentSearchButton :collapsed="false" />
</template>
```

### Kbds

Use the `kbds` prop to display keyboard keys in the button. Defaults to `['meta', 'K']` to match the default shortcut of the [ContentSearch](/pohon/components/content-search#shortcut) component.

```vue
<template>
  <UContentSearchButton :collapsed="false" :kbds="[
  'alt',
  'O'
]" />
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> 
> This component also supports all native `<button>` HTML attributes.

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    contentSearchButton: {
      slots: {
        base: '',
        label: '',
        trailing: 'hidden lg:flex items-center gap-0.5 ms-auto'
      },
      variants: {
        collapsed: {
          true: {
            label: 'hidden',
            trailing: 'lg:hidden'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/content/ContentSearchButton.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/content/content-search-button.ts).

---

- [Button](/pohon/components/button)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/content/ContentSearchButton.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
