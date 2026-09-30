---
title: "Header"
description: "A responsive header for your site navigation."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/header.md"
---
## Usage

The Header component renders a `<header>` element.

> [!TIP]
> See: /docs/getting-started/theme/css-variables#header
> 
> Its height is defined through a `--ui-header-height` CSS variable.

Use the `left`, `default` and `right` slots to customize the header and the `body` or `content` slots to customize the header menu.

```vue [HeaderExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Theme',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}])
</script>

<template>
  <PHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <PNavigationMenu :items="items" />

    <template #right>
      <PColorModeButton />

      <PTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </PTooltip>
    </template>
  </PHeader>
</template>
```

> [!NOTE]
> 
> In this example, we use the [NavigationMenu](/pohon/components/navigation-menu) component to render the header links in the center.

### Title

Use the `title` prop to change the title of the header. Defaults to `Pohon UI`.

```vue
<template>
  <UHeader title="Pohon UI" />
</template>
```

You can also use the `title` slot to add your own logo.

> [!TIP]
> See: #props
> 
> You should still add the `title` prop to replace the default `aria-label` of the link.

```vue
<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template></UHeader>
</template>
```

### To

Use the `to` prop to change the link of the title. Defaults to `/`.

```vue
<template>
  <UHeader to="/docs" />
</template>
```

You can also use the `left` slot to override the link entirely.

```vue
<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/docs">
        <Logo class="h-6 w-auto" />
      </NuxtLink>
    </template></UHeader>
</template>
```

### Mode

Use the `mode` prop to change the mode of the header menu. Defaults to `modal`.

Use the `body` slot to fill the menu body (under the header) or the `content` slot to fill the entire menu.

> [!TIP]
> See: #props
> 
> You can use the `menu` prop to customize the menu of the header, it will adapt depending on the mode you choose.

```vue [HeaderMenuExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Theme',
  icon: 'i-lucide-palette',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}])
</script>

<template>
  <PHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <PNavigationMenu :items="items" />

    <template #right>
      <PColorModeButton />

      <PTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </PTooltip>
    </template>

    <template #body>
      <PNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </PHeader>
</template>
```

### Toggle

Use the `toggle` prop to customize the toggle button displayed on mobile.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

```vue [HeaderToggleExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Theme',
  icon: 'i-lucide-palette',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}])
</script>

<template>
  <PHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <PNavigationMenu :items="items" />

    <template #right>
      <PColorModeButton />

      <PTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </PTooltip>
    </template>

    <template #body>
      <PNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </PHeader>
</template>
```

### Toggle Side

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `right`.

```vue [HeaderToggleSideExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Theme',
  icon: 'i-lucide-palette',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}])
</script>

<template>
  <PHeader toggle-side="left">
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <PNavigationMenu :items="items" />

    <template #right>
      <PColorModeButton />

      <PTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </PTooltip>
    </template>

    <template #body>
      <PNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </PHeader>
</template>
```

## Examples

### With animated toggle

Use the `#toggle` slot to replace the default toggle button with a custom animated hamburger icon using [Motion Vue](https://motion.dev/docs/vue/motion-component).

```vue [HeaderToggleAnimatedExample.vue]
<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Theme',
  icon: 'i-lucide-palette',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}])

const variants: { [k: string]: VariantType | ((custom: unknown) => VariantType) } = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1
  },
  close: (custom: unknown) => {
    const c = custom as number
    return {
      rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
      y: c === 1 ? 6 : c === 3 ? -6 : 0,
      opacity: c === 2 ? 0 : 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  }
}
</script>

<template>
  <PHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <PNavigationMenu :items="items" />

    <template #right>
      <PColorModeButton />

      <PTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </PTooltip>
    </template>

    <template #toggle="{ open, toggle, ui }">
      <PButton
        size="sm"
        variant="ghost"
        color="neutral"
        square
        :class="ui.toggle({ toggleSide: 'right' })"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <motion.line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="1"
            tabindex="-1"
          />
          <motion.line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="2"
            tabindex="-1"
          />
          <motion.line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="3"
            tabindex="-1"
          />
        </svg>
      </PButton>
    </template>

    <template #body>
      <PNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </PHeader>
</template>
```

### Within `app.vue`

Use the Header component in your `app.vue` or in a layout:

```vue [app.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Theme',
  to: '/theme',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/vinicunca/pohon/releases',
  target: '_blank'
}])
</script>

<template>
  <PApp>
    <PHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <PNavigationMenu :items="items" />

      <template #right>
        <PColorModeButton />

        <PButton
          color="neutral"
          variant="ghost"
          to="https://github.com/vinicunca/pohon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <PNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </PHeader>

    <PMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PMain>

    <PFooter />
  </PApp>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: 'bg-background/75 backdrop-blur-sm border-b border-border h-(--ui-header-height) sticky top-0 z-50',
        container: 'flex items-center justify-between gap-3 h-full',
        left: 'lg:flex-1 flex items-center gap-1.5',
        center: 'hidden lg:flex',
        right: 'flex items-center justify-end lg:flex-1 gap-1.5',
        title: 'shrink-0 font-700 text-xl color-text-highlighted flex items-end gap-1.5',
        toggle: 'lg:hidden',
        content: 'lg:hidden',
        overlay: 'lg:hidden',
        header: 'px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3',
        body: 'p-4 sm:p-6 overflow-y-auto'
      },
      variants: {
        toggleSide: {
          left: {
            toggle: '-ms-1.5'
          },
          right: {
            toggle: '-me-1.5'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Header.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/header.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Header.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Header source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Header.vue)

### Props

- **as** — `any; optional; default: "header"`: The element or component this component should render as.
- **title** — `string | undefined; optional; default: "Pohon UI"`
- **to** — `string | undefined; optional; default: "/"`
- **mode** — `T | undefined; optional; default: "modal" as never`: The mode of the header menu.
- **menu** — `HeaderMenu<T> | undefined; optional`: The props for the header menu component.
- **toggle** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Customize the toggle button to open the header menu displayed when the \`content\` slot is used. \`{ color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **toggleSide** — `"left" | "right" | undefined; optional; default: "right"`: The side to render the toggle button on.
- **autoClose** — `boolean | undefined; optional; default: true`: Automatically close when route changes.
- **ui** — `{ root?: SlotClass; container?: SlotClass; left?: SlotClass; center?: SlotClass; right?: SlotClass; title?: SlotClass; toggle?: SlotClass; content?: SlotClass; overlay?: SlotClass; header?: SlotClass; body?: SlotClass; } | undefined; optional`
- **open** — `boolean | undefined; optional; default: false`

### Slots

- **title** — `{} | undefined`
- **left** — `{} | undefined`
- **default** — `{} | undefined`
- **right** — `{} | undefined`
- **toggle** — `{ open: boolean; toggle: () => void; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; left: (props?: Record<string, any> | undefined) => string | undefined; center: (props?: Record<string, any> | undefined) => string | undefined; right: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; toggle: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; overlay: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **top** — `{} | undefined`
- **bottom** — `{} | undefined`
- **body** — `{} | undefined`
- **content** — `{ close?: (() => void) | undefined; }`

### Events

- **update:open** — `[value: boolean]`
