---
title: "Footer"
description: "A responsive footer for your site links and legal notices."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/footer.md"
---
## Usage

The Footer component renders a `<footer>` element.

Use the `left`, `default` and `right` slots to customize the footer.

```vue [FooterExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const items: NavigationMenuItem[] = [{
  label: 'Theme Studio',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://play.pohon.vinicunca.dev/',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}]
</script>

<template>
  <PFooter>
    <template #left>
      <p class="color-text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <PNavigationMenu :items="items" variant="link" />

    <template #right>
      <PButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/vinicunca/pohon/discussions"
        target="_blank"
        aria-label="Discussions"
      />
      <PButton
        icon="i-lucide-book-open"
        color="neutral"
        variant="ghost"
        to="/pohon/"
        target="_blank"
        aria-label="Documentation"
      />
      <PButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/vinicunca/pohon"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </PFooter>
</template>
```

> [!NOTE]
> 
> In this example, we use the [NavigationMenu](/pohon/components/navigation-menu) component to render the footer links in the center.

> [!TIP]
> See: /docs/components/footer-columns
> 
> You can use the `FooterColumns` component to display a list of links inside the `top` slot.

## Examples

### Within `app.vue`

Use the Footer component in your `app.vue` or in a layout:

```vue [app.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const items: NavigationMenuItem[] = [{
  label: 'Theme Studio',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://play.pohon.vinicunca.dev/',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}]
</script>

<template>
  <PApp>
    <PHeader />

    <PMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PMain>

    <PSeparator icon="i-lucide-leaf" type="dashed" class="h-px" />

    <PFooter>
      <template #left>
        <p class="color-text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <PNavigationMenu :items="items" variant="link" />

      <template #right>
        <PButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon/discussions"
          target="_blank"
          aria-label="Discussions"
        />
        <PButton
          icon="i-lucide-book-open"
          color="neutral"
          variant="ghost"
          to="/pohon/"
          target="_blank"
          aria-label="Documentation"
        />
        <PButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </PFooter>
  </PApp>
</template>
```

> [!NOTE]
> 
> In this example, we use the [Separator](/pohon/components/separator) component to add a border above the footer.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    footer: {
      slots: {
        root: '',
        top: 'py-8 lg:py-12',
        bottom: 'py-8 lg:py-12',
        container: 'py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3',
        left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
        center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
        right: 'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Footer.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/footer.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Footer.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Footer source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Footer.vue)

### Props

- **as** — `any; optional; default: "footer"`: The element or component this component should render as.
- **ui** — `{ root?: SlotClass; top?: SlotClass; bottom?: SlotClass; container?: SlotClass; left?: SlotClass; center?: SlotClass; right?: SlotClass; } | undefined; optional`

### Slots

- **left** — `{} | undefined`
- **default** — `{} | undefined`
- **right** — `{} | undefined`
- **top** — `{} | undefined`
- **bottom** — `{} | undefined`

### Events

No events are declared.
