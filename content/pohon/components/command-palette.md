---
title: "CommandPalette"
description: "A command palette with full-text search powered by Fuse.js for efficient fuzzy matching."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/command-palette.md"
---
## Usage

Use the `v-model` directive to control the value of the CommandPalette or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "users",
    label: "Users",
    items: [
      {
        label: "Benjamin Canac",
        suffix: "benjamincanac",
        avatar: {
          src: "https://github.com/benjamincanac.png",
          loading: "lazy"
        }
      },
      {
        label: "Hugo Richard",
        suffix: "HugoRCD",
        avatar: {
          src: "https://github.com/HugoRCD.png",
          loading: "lazy"
        }
      },
      {
        label: "Sébastien Chopin",
        suffix: "atinux",
        avatar: {
          src: "https://github.com/atinux.png",
          loading: "lazy"
        }
      },
      {
        label: "Romain Hamel",
        suffix: "romhml",
        avatar: {
          src: "https://github.com/romhml.png",
          loading: "lazy"
        }
      },
      {
        label: "Sandro Circi",
        suffix: "sandros94",
        avatar: {
          src: "https://github.com/sandros94.png",
          loading: "lazy"
        }
      },
      {
        label: "Jakub Michálek",
        suffix: "J-Michalek",
        avatar: {
          src: "https://github.com/J-Michalek.png",
          loading: "lazy"
        }
      },
      {
        label: "Alex",
        suffix: "hywax",
        avatar: {
          src: "https://github.com/hywax.png",
          loading: "lazy"
        }
      },
      {
        label: "Maxime Pauvert",
        suffix: "maximepvrt",
        avatar: {
          src: "https://github.com/maximepvrt.png",
          loading: "lazy"
        }
      }
    ]
  }
])
const value = ref({})
</script>

<template>
  <UCommandPalette v-model="value" :groups="groups" class="flex-1 h-80" />
</template>
```

> [!TIP]
> See: #control-selected-items
> 
> You can also use the `@update:model-value` event to listen to the selected item(s).

### Groups

The CommandPalette component filters groups and ranks matching commands by relevance as users type. It provides dynamic, instant search results for efficient command discovery. Use the `groups` prop as an array of objects with the following properties:

- `id: string`
- `label?: string`
- `slot?: string`
- `items?: CommandPaletteItem[]`
- [`ignoreFilter?: boolean`](#with-ignore-filter)
- [`postFilter?: (searchTerm: string, items: T[]) => T[]`](#with-post-filtered-items)
- `highlightedIcon?: string`

> [!CAUTION]
> 
> You must provide an `id` for each group otherwise the group will be ignored.

Each group contains an `items` array of objects that define the commands. Each item can have the following properties:

- `prefix?: string`
- `label?: string`
- `suffix?: string`
- `icon?: string`
- `avatar?: AvatarProps`
- `chip?: ChipProps`
- `kbds?: string[] | KbdProps[]`
- `active?: boolean`
- `loading?: boolean`
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `placeholder?: string`
- `children?: CommandPaletteItem[]`
- `onSelect?: (e: Event) => void`
- `class?: any`
- `ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`

You can pass any property from the [Link](/pohon/components/link#props) component such as `to`, `target`, etc.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "users",
    label: "Users",
    items: [
      {
        label: "Benjamin Canac",
        suffix: "benjamincanac",
        avatar: {
          src: "https://github.com/benjamincanac.png",
          loading: "lazy"
        }
      },
      {
        label: "Hugo Richard",
        suffix: "HugoRCD",
        avatar: {
          src: "https://github.com/HugoRCD.png",
          loading: "lazy"
        }
      },
      {
        label: "Sébastien Chopin",
        suffix: "atinux",
        avatar: {
          src: "https://github.com/atinux.png",
          loading: "lazy"
        }
      },
      {
        label: "Romain Hamel",
        suffix: "romhml",
        avatar: {
          src: "https://github.com/romhml.png",
          loading: "lazy"
        }
      },
      {
        label: "Sandro Circi",
        suffix: "sandros94",
        avatar: {
          src: "https://github.com/sandros94.png",
          loading: "lazy"
        }
      },
      {
        label: "Jakub Michálek",
        suffix: "J-Michalek",
        avatar: {
          src: "https://github.com/J-Michalek.png",
          loading: "lazy"
        }
      },
      {
        label: "Alex",
        suffix: "hywax",
        avatar: {
          src: "https://github.com/hywax.png",
          loading: "lazy"
        }
      },
      {
        label: "Maxime Pauvert",
        suffix: "maximepvrt",
        avatar: {
          src: "https://github.com/maximepvrt.png",
          loading: "lazy"
        }
      }
    ]
  }
])
const value = ref({})
</script>

<template>
  <UCommandPalette v-model="value" :groups="groups" class="flex-1" />
</template>
```

> [!TIP]
> See: #with-children-in-items
> 
> Each item can take a `children` array of objects with the following properties to create submenus:

### Multiple

Use the `multiple` prop to allow multiple selections.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "users",
    label: "Users",
    items: [
      {
        label: "Benjamin Canac",
        suffix: "benjamincanac",
        avatar: {
          src: "https://github.com/benjamincanac.png",
          loading: "lazy"
        }
      },
      {
        label: "Hugo Richard",
        suffix: "HugoRCD",
        avatar: {
          src: "https://github.com/HugoRCD.png",
          loading: "lazy"
        }
      },
      {
        label: "Sébastien Chopin",
        suffix: "atinux",
        avatar: {
          src: "https://github.com/atinux.png",
          loading: "lazy"
        }
      },
      {
        label: "Romain Hamel",
        suffix: "romhml",
        avatar: {
          src: "https://github.com/romhml.png",
          loading: "lazy"
        }
      },
      {
        label: "Sandro Circi",
        suffix: "sandros94",
        avatar: {
          src: "https://github.com/sandros94.png",
          loading: "lazy"
        }
      },
      {
        label: "Jakub Michálek",
        suffix: "J-Michalek",
        avatar: {
          src: "https://github.com/J-Michalek.png",
          loading: "lazy"
        }
      },
      {
        label: "Alex",
        suffix: "hywax",
        avatar: {
          src: "https://github.com/hywax.png",
          loading: "lazy"
        }
      },
      {
        label: "Maxime Pauvert",
        suffix: "maximepvrt",
        avatar: {
          src: "https://github.com/maximepvrt.png",
          loading: "lazy"
        }
      }
    ]
  }
])
const value = ref([])
</script>

<template>
  <UCommandPalette multiple v-model="value" :groups="groups" class="flex-1" />
</template>
```

> [!CAUTION]
> 
> Ensure to pass an array to the `default-value` prop or the `v-model` directive.

### Placeholder

Use the `placeholder` prop to change the placeholder text.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette placeholder="Search an app..." :groups="groups" class="flex-1" />
</template>
```

### Size

Use the `size` prop to change the size of the CommandPalette.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette size="xl" :groups="groups" class="flex-1" />
</template>
```

### Icon

Use the `icon` prop to customize the input [Icon](/pohon/components/icon). Defaults to `i-lucide-search`.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette icon="i-lucide-box" :groups="groups" class="flex-1" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.search` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.search` key.

### Selected Icon

Use the `selected-icon` prop to customize the selected item [Icon](/pohon/components/icon). Defaults to `i-lucide-check`.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "users",
    label: "Users",
    items: [
      {
        label: "Benjamin Canac",
        suffix: "benjamincanac",
        avatar: {
          src: "https://github.com/benjamincanac.png",
          loading: "lazy"
        }
      },
      {
        label: "Hugo Richard",
        suffix: "HugoRCD",
        avatar: {
          src: "https://github.com/HugoRCD.png",
          loading: "lazy"
        }
      },
      {
        label: "Sébastien Chopin",
        suffix: "atinux",
        avatar: {
          src: "https://github.com/atinux.png",
          loading: "lazy"
        }
      },
      {
        label: "Romain Hamel",
        suffix: "romhml",
        avatar: {
          src: "https://github.com/romhml.png",
          loading: "lazy"
        }
      },
      {
        label: "Sandro Circi",
        suffix: "sandros94",
        avatar: {
          src: "https://github.com/sandros94.png",
          loading: "lazy"
        }
      },
      {
        label: "Jakub Michálek",
        suffix: "J-Michalek",
        avatar: {
          src: "https://github.com/J-Michalek.png",
          loading: "lazy"
        }
      },
      {
        label: "Alex",
        suffix: "hywax",
        avatar: {
          src: "https://github.com/hywax.png",
          loading: "lazy"
        }
      },
      {
        label: "Maxime Pauvert",
        suffix: "maximepvrt",
        avatar: {
          src: "https://github.com/maximepvrt.png",
          loading: "lazy"
        }
      }
    ]
  }
])
const value = ref([
  {
    label: "Benjamin Canac",
    suffix: "benjamincanac",
    avatar: {
      src: "https://github.com/benjamincanac.png",
      loading: "lazy"
    }
  }
])
</script>

<template>
  <UCommandPalette multiple v-model="value" selected-icon="i-lucide-circle-check" :groups="groups" class="flex-1" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/pohon/components/icon) when an item has children. Defaults to `i-lucide-chevron-right`.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "actions",
    items: [
      {
        label: "Share",
        icon: "i-lucide-share",
        children: [
          {
            label: "Email",
            icon: "i-lucide-mail"
          },
          {
            label: "Copy",
            icon: "i-lucide-copy"
          },
          {
            label: "Link",
            icon: "i-lucide-link"
          }
        ]
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette trailing-icon="i-lucide-arrow-right" :groups="groups" class="flex-1" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronRight` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronRight` key.

### Loading

Use the `loading` prop to show a loading icon on the CommandPalette.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette loading :groups="groups" class="flex-1" />
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette loading loading-icon="i-lucide-loader" :groups="groups" class="flex-1" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.

### Close

Use the `close` prop to display a [Button](/pohon/components/button) to dismiss the CommandPalette.

> [!TIP]
> 
> An `update:open` event will be emitted when the close button is clicked.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette close :groups="groups" class="flex-1" />
</template>
```

You can pass any property from the [Button](/pohon/components/button) component to customize it.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette :close="{
  color: 'primary',
  variant: 'outline',
  class: 'rounded-full'
}" :groups="groups" class="flex-1" />
</template>
```

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette close close-icon="i-lucide-arrow-right" :groups="groups" class="flex-1" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key.

### Back

Use the `back` prop to customize or hide the back button (with `false` value) displayed when navigating into a submenu.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "actions",
    items: [
      {
        label: "Share",
        icon: "i-lucide-share",
        children: [
          {
            label: "Email",
            icon: "i-lucide-mail"
          },
          {
            label: "Copy",
            icon: "i-lucide-copy"
          },
          {
            label: "Link",
            icon: "i-lucide-link"
          }
        ]
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette :back="{
  color: 'primary'
}" :groups="groups" class="flex-1" />
</template>
```

### Back Icon

Use the `back-icon` prop to customize the back button [Icon](/pohon/components/icon). Defaults to `i-lucide-arrow-left`.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "actions",
    items: [
      {
        label: "Share",
        icon: "i-lucide-share",
        children: [
          {
            label: "Email",
            icon: "i-lucide-mail"
          },
          {
            label: "Copy",
            icon: "i-lucide-copy"
          },
          {
            label: "Link",
            icon: "i-lucide-link"
          }
        ]
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette back back-icon="i-lucide-house" :groups="groups" class="flex-1" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.arrowLeft` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.arrowLeft` key.

### Disabled

Use the `disabled` prop to disable the CommandPalette.

```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from 'pohon-ui'

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "apps",
    items: [
      {
        label: "Calendar",
        icon: "i-lucide-calendar"
      },
      {
        label: "Music",
        icon: "i-lucide-music"
      },
      {
        label: "Maps",
        icon: "i-lucide-map"
      }
    ]
  }
])
</script>

<template>
  <UCommandPalette disabled :groups="groups" class="flex-1" />
</template>
```

## Examples

### Control selected item(s)

You can control the selected item(s) by using the `default-value` prop or the `v-model` directive, by using the `onSelect` field on each item or by using the `@update:model-value` event.

```vue [CommandPaletteSelectExample.vue]
<script setup lang="ts">
const toast = useToast()

const groups = ref([
  {
    id: 'users',
    label: 'Users',
    items: [
      {
        label: 'Benjamin Canac',
        suffix: 'benjamincanac',
        to: 'https://github.com/benjamincanac',
        target: '_blank',
        avatar: {
          src: 'https://github.com/benjamincanac.png',
          loading: 'lazy' as const
        }
      },
      {
        label: 'Hugo Richard',
        suffix: 'HugoRCD',
        to: 'https://github.com/HugoRCD',
        target: '_blank',
        avatar: {
          src: 'https://github.com/HugoRCD.png',
          loading: 'lazy' as const
        }
      },
      {
        label: 'Sébastien Chopin',
        suffix: 'atinux',
        to: 'https://github.com/atinux',
        target: '_blank',
        avatar: {
          src: 'https://github.com/atinux.png',
          loading: 'lazy' as const
        }
      },
      {
        label: 'Romain Hamel',
        suffix: 'romhml',
        to: 'https://github.com/romhml',
        target: '_blank',
        avatar: {
          src: 'https://github.com/romhml.png',
          loading: 'lazy' as const
        }
      },
      {
        label: 'Sandro Circi',
        suffix: 'sandros94',
        to: 'https://github.com/sandros94',
        target: '_blank',
        avatar: {
          src: 'https://github.com/sandros94.png',
          loading: 'lazy' as const
        }
      },
      {
        label: 'Jakub Michálek',
        suffix: 'J-Michalek',
        to: 'https://github.com/J-Michalek',
        target: '_blank',
        avatar: {
          src: 'https://github.com/J-Michalek.png',
          loading: 'lazy' as const
        }
      },
      {
        label: 'Alex',
        suffix: 'hywax',
        to: 'https://github.com/hywax',
        target: '_blank',
        avatar: {
          src: 'https://github.com/hywax.png',
          loading: 'lazy' as const
        }
      },
      {
        label: 'Maxime Pauvert',
        suffix: 'maximepvrt',
        to: 'https://github.com/maximepvrt',
        target: '_blank',
        avatar: {
          src: 'https://github.com/maximepvrt.png',
          loading: 'lazy' as const
        }
      }
    ]
  },
  {
    id: 'actions',
    items: [
      {
        label: 'Add new file',
        suffix: 'Create a new file in the current directory or workspace.',
        icon: 'i-lucide-file-plus',
        kbds: [
          'meta',
          'N'
        ],
        onSelect() {
          toast.add({ title: 'Add new file' })
        }
      },
      {
        label: 'Add new folder',
        suffix: 'Create a new folder in the current directory or workspace.',
        icon: 'i-lucide-folder-plus',
        kbds: [
          'meta',
          'F'
        ],
        onSelect() {
          toast.add({ title: 'Add new folder' })
        }
      },
      {
        label: 'Add hashtag',
        suffix: 'Add a hashtag to the current item.',
        icon: 'i-lucide-hash',
        kbds: [
          'meta',
          'H'
        ],
        onSelect() {
          toast.add({ title: 'Add hashtag' })
        }
      },
      {
        label: 'Add label',
        suffix: 'Add a label to the current item.',
        icon: 'i-lucide-tag',
        kbds: [
          'meta',
          'L'
        ],
        onSelect() {
          toast.add({ title: 'Add label' })
        }
      }
    ]
  }
])

function onSelect(item: any) {
  console.log(item)
}
</script>

<template>
  <PCommandPalette
    :groups="groups"
    class="flex-1 h-80"
    @update:model-value="onSelect"
  />
</template>
```

> [!TIP]
> 
> Use the `value-key` prop to select a field of an item to use as the value instead of the object itself. Use the `by` prop to compare objects by a field instead of reference.

### Control search term

Use the `v-model:search-term` directive to control the search term.

```vue [CommandPaletteSearchTermExample.vue]
<script setup lang="ts">
const users = [
  {
    label: 'Benjamin Canac',
    suffix: 'benjamincanac',
    to: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Hugo Richard',
    suffix: 'HugoRCD',
    to: 'https://github.com/HugoRCD',
    target: '_blank',
    avatar: {
      src: 'https://github.com/HugoRCD.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Sébastien Chopin',
    suffix: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Romain Hamel',
    suffix: 'romhml',
    to: 'https://github.com/romhml',
    target: '_blank',
    avatar: {
      src: 'https://github.com/romhml.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Sandro Circi',
    suffix: 'sandros94',
    to: 'https://github.com/sandros94',
    target: '_blank',
    avatar: {
      src: 'https://github.com/sandros94.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Jakub Michálek',
    suffix: 'J-Michalek',
    to: 'https://github.com/J-Michalek',
    target: '_blank',
    avatar: {
      src: 'https://github.com/J-Michalek.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Alex',
    suffix: 'hywax',
    to: 'https://github.com/hywax',
    target: '_blank',
    avatar: {
      src: 'https://github.com/hywax.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Maxime Pauvert',
    suffix: 'maximepvrt',
    to: 'https://github.com/maximepvrt',
    target: '_blank',
    avatar: {
      src: 'https://github.com/maximepvrt.png',
      loading: 'lazy' as const
    }
  }
]

const searchTerm = ref('B')

function onSelect() {
  searchTerm.value = ''
}
</script>

<template>
  <PCommandPalette
    v-model:search-term="searchTerm"
    :groups="[{ id: 'users', items: users }]"
    class="flex-1"
    @update:model-value="onSelect"
  />
</template>
```

> [!NOTE]
> 
> This example uses the `@update:model-value` event to reset the search term when an item is selected.

### With children in items

You can create hierarchical menus by using the `children` property in items. When an item has children, it will automatically display a chevron icon and enable navigation into a submenu.

```vue [CommandPaletteItemsChildrenExample.vue]
<script setup lang="ts">
const toast = useToast()

const groups = [{
  id: 'actions',
  label: 'Actions',
  items: [{
    label: 'Create new',
    icon: 'i-lucide-plus',
    children: [{
      label: 'New file',
      icon: 'i-lucide-file-plus',
      suffix: 'Create a new file in the current directory',
      onSelect(e: Event) {
        e.preventDefault()
        toast.add({ title: 'New file created!' })
      },
      kbds: ['meta', 'N']
    }, {
      label: 'New folder',
      icon: 'i-lucide-folder-plus',
      suffix: 'Create a new folder in the current directory',
      onSelect(e: Event) {
        e.preventDefault()
        toast.add({ title: 'New folder created!' })
      },
      kbds: ['meta', 'F']
    }, {
      label: 'New project',
      icon: 'i-lucide-folder-git',
      suffix: 'Create a new project from a template',
      onSelect(e: Event) {
        e.preventDefault()
        toast.add({ title: 'New project created!' })
      },
      kbds: ['meta', 'P']
    }]
  }, {
    label: 'Share',
    icon: 'i-lucide-share',
    children: [{
      label: 'Copy link',
      icon: 'i-lucide-link',
      suffix: 'Copy a link to the current item',
      onSelect(e: Event) {
        e.preventDefault()
        toast.add({ title: 'Link copied to clipboard!' })
      },
      kbds: ['meta', 'L']
    }, {
      label: 'Share via email',
      icon: 'i-lucide-mail',
      suffix: 'Share the current item via email',
      onSelect(e: Event) {
        e.preventDefault()
        toast.add({ title: 'Share via email dialog opened!' })
      }
    }, {
      label: 'Share on social',
      icon: 'i-lucide-share-2',
      suffix: 'Share the current item on social media',
      children: [{
        label: 'Twitter',
        icon: 'i-simple-icons-twitter',
        onSelect(e: Event) {
          e.preventDefault()
          toast.add({ title: 'Shared on Twitter!' })
        }
      }, {
        label: 'LinkedIn',
        icon: 'i-simple-icons-linkedin',
        onSelect(e: Event) {
          e.preventDefault()
          toast.add({ title: 'Shared on LinkedIn!' })
        }
      }, {
        label: 'Facebook',
        icon: 'i-simple-icons-facebook',
        onSelect(e: Event) {
          e.preventDefault()
          toast.add({ title: 'Shared on Facebook!' })
        }
      }]
    }]
  }, {
    label: 'Settings',
    icon: 'i-lucide-settings',
    children: [{
      label: 'General',
      icon: 'i-lucide-sliders',
      suffix: 'Configure general settings',
      onSelect(e: Event) {
        e.preventDefault()
        toast.add({ title: 'General settings opened!' })
      }
    }, {
      label: 'Appearance',
      icon: 'i-lucide-palette',
      suffix: 'Customize the appearance',
      onSelect(e: Event) {
        e.preventDefault()
        toast.add({ title: 'Appearance settings opened!' })
      }
    }, {
      label: 'Security',
      icon: 'i-lucide-shield',
      suffix: 'Manage security settings',
      onSelect(e: Event) {
        e.preventDefault()
        toast.add({ title: 'Security settings opened!' })
      }
    }]
  }]
}]
</script>

<template>
  <PCommandPalette :groups="groups" class="flex-1" />
</template>
```

> [!NOTE]
> 
> When navigating into a submenu:
> 
> - The search term is reset
> - A back button appears in the input
> - You can go back to the previous group by pressing the `Backspace` key

### With fetched items

You can fetch items from an API and use them in the CommandPalette.

```vue [CommandPaletteFetchExample.vue]
<script setup lang="ts">
const searchTerm = ref('')

const { data: users, status } = useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'command-palette-users',
  transform: (data: { id: number, name: string, email: string }[]) => {
    return data?.map(user => ({ id: user.id, label: user.name, suffix: user.email, avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const } })) || []
  },
  server: false
})

const groups = computed(() => [{
  id: 'users',
  label: searchTerm.value ? `Users matching “${searchTerm.value}”...` : 'Users',
  items: users.value || []
}])
</script>

<template>
  <PCommandPalette
    v-model:search-term="searchTerm"
    :loading="status === 'pending' || status === 'idle'"
    :groups="groups"
    class="flex-1 h-80"
  />
</template>
```

> [!NOTE]
> 
> This example uses `useLazyFetch` with `server: false` to fetch data on the client without blocking the initial render. The loading state checks for both `pending` and `idle` status to display a loading indicator before and during the fetch.

### With ignore filter

You can set the `ignoreFilter` field to `true` on a group to disable the internal search and use your own search logic.

```vue [CommandPaletteIgnoreFilterExample.vue]
<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

const searchTerm = ref('')
const searchTermDebounced = refDebounced(searchTerm, 200)

const { data: users, status } = useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'command-palette-users-search',
  params: { q: searchTermDebounced },
  transform: (data: { id: number, name: string, email: string }[]) => {
    return data?.map(user => ({ id: user.id, label: user.name, suffix: user.email, avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const } })) || []
  },
  server: false
})

const groups = computed(() => [{
  id: 'users',
  label: searchTerm.value ? `Users matching “${searchTerm.value}”...` : 'Users',
  items: users.value || [],
  ignoreFilter: true
}])
</script>

<template>
  <PCommandPalette
    v-model:search-term="searchTerm"
    :loading="status === 'pending' || status === 'idle'"
    :groups="groups"
    class="flex-1 h-80"
  />
</template>
```

> [!NOTE]
> 
> This example uses [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) to debounce the API calls. The loading state checks for both `pending` and `idle` status to display a loading indicator before and during the fetch.

### With post-filtered items

You can use the `postFilter` field on a group to filter items after the search happened.

```vue [CommandPalettePostFilterExample.vue]
<script setup lang="ts">
const items = [
  {
    id: '/',
    label: 'Introduction',
    level: 1
  },
  {
    id: '/docs/getting-started#whats-new-in-v3',
    label: 'What\'s new in v3?',
    level: 2
  },
  {
    id: '/docs/getting-started#akar',
    label: 'Akar',
    level: 3
  },
  {
    id: '/docs/getting-started/installation/nuxt',
    label: 'UnoCSS',
    level: 3
  },
  {
    id: '/docs/getting-started#unocss-variants',
    label: 'UnoCSS Variants',
    level: 3
  },
  {
    id: '/docs/getting-started/installation',
    label: 'Installation',
    level: 1
  }
]

function postFilter(searchTerm: string, items: any[]) {
  // Filter only first level items if no searchTerm
  if (!searchTerm) {
    return items?.filter(item => item.level === 1)
  }

  return items
}
</script>

<template>
  <PCommandPalette :groups="[{ id: 'files', items, postFilter }]" class="flex-1" />
</template>
```

> [!NOTE]
> 
> Start typing to see items with higher level appear.

### With custom fuse search

You can use the `fuse` prop to override the options of [useFuse](https://vueuse.org/integrations/useFuse) which defaults to:

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

> [!TIP]
> 
> The `fuseOptions` are the options of [Fuse.js](https://www.fusejs.io/), the `resultLimit` is the maximum number of results to return and the `matchAllWhenSearchEmpty` is a boolean to match all items when the search term is empty.

You can for example set `{ fuseOptions: { includeMatches: true } }` to highlight the search term in the items.

```vue [CommandPaletteFuseExample.vue]
<script setup lang="ts">
const { data: users } = useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'command-palette-users',
  transform: (data: { id: number, name: string, email: string }[]) => {
    return data?.map(user => ({ id: user.id, label: user.name, suffix: user.email, avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const } })) || []
  },
  server: false
})
</script>

<template>
  <PCommandPalette
    :groups="[{ id: 'users', items: users || [] }]"
    :fuse="{ fuseOptions: { includeMatches: true } }"
    class="flex-1 h-80"
  />
</template>
```

### With virtualization

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

> [!WARNING]
> See: https://github.com/unovue/akar/issues/1885
> 
> When enabled, all groups are flattened into a single list due to a limitation of Akar.

```vue [CommandPaletteVirtualizeExample.vue]
<script setup lang="ts">
import type { CommandPaletteItem } from 'pohon-ui'

const items: CommandPaletteItem[] = Array(1000)
  .fill(0)
  .map((_, value) => ({
    label: `item-${value}`,
    value
  }))

const groups = [
  {
    id: 'items',
    items
  }
]
</script>

<template>
  <PCommandPalette
    virtualize
    :fuse="{ resultLimit: 1000 }"
    :groups="groups"
    class="flex-1 h-80"
  />
</template>
```

### Within a Popover

You can use the CommandPalette component inside a [Popover](/pohon/components/popover)'s content.

```vue [PopoverCommandPaletteExample.vue]
<script setup lang="ts">
import type { CommandPaletteItem } from 'pohon-ui'

const items = ref([
  {
    label: 'bug',
    value: 'bug',
    chip: {
      color: 'error'
    }
  },
  {
    label: 'feature',
    value: 'feature',
    chip: {
      color: 'success'
    }
  },
  {
    label: 'enhancement',
    value: 'enhancement',
    chip: {
      color: 'info'
    }
  }
] satisfies CommandPaletteItem[])

const label = ref([])
</script>

<template>
  <PPopover :content="{ side: 'right', align: 'start' }">
    <PButton
      icon="i-lucide-tag"
      label="Select labels"
      color="neutral"
      variant="subtle"
    />

    <template #content>
      <PCommandPalette
        v-model="label"
        multiple
        placeholder="Search labels..."
        :groups="[{ id: 'labels', items }]"
        :ui="{ input: '[&>input]:h-8 [&>input]:text-sm' }"
      />
    </template>
  </PPopover>
</template>
```

### Within a Modal

You can use the CommandPalette component inside a [Modal](/pohon/components/modal)'s content.

```vue [ModalCommandPaletteExample.vue]
<script setup lang="ts">
const searchTerm = ref('')

const { data: users, status, execute } = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'modal-command-palette-users',
  params: { q: searchTerm },
  transform: (data: { id: number, name: string, email: string }[]) => {
    return data?.map(user => ({ id: user.id, label: user.name, suffix: user.email, avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const } })) || []
  },
  immediate: false
})

const groups = computed(() => [{
  id: 'users',
  label: searchTerm.value ? `Users matching “${searchTerm.value}”...` : 'Users',
  items: users.value || [],
  ignoreFilter: true
}])

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}
</script>

<template>
  <PModal @update:open="onOpen">
    <PButton
      label="Search users..."
      color="neutral"
      variant="subtle"
      icon="i-lucide-search"
    />

    <template #content>
      <PCommandPalette
        v-model:search-term="searchTerm"
        :loading="status === 'pending'"
        :groups="groups"
        placeholder="Search users..."
        class="h-80"
      />
    </template>
  </PModal>
</template>
```

> [!NOTE]
> 
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the Modal opens.

### Within a Drawer

You can use the CommandPalette component inside a [Drawer](/pohon/components/drawer)'s content.

```vue [DrawerCommandPaletteExample.vue]
<script setup lang="ts">
const searchTerm = ref('')

const { data: users, status, execute } = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'drawer-command-palette-users',
  params: { q: searchTerm },
  transform: (data: { id: number, name: string, email: string }[]) => {
    return data?.map(user => ({ id: user.id, label: user.name, suffix: user.email, avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const } })) || []
  },
  immediate: false
})

const groups = computed(() => [{
  id: 'users',
  label: searchTerm.value ? `Users matching “${searchTerm.value}”...` : 'Users',
  items: users.value || [],
  ignoreFilter: true
}])

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}
</script>

<template>
  <PDrawer :handle="false" @update:open="onOpen">
    <PButton
      label="Search users..."
      color="neutral"
      variant="subtle"
      icon="i-lucide-search"
    />

    <template #content>
      <PCommandPalette
        v-model:search-term="searchTerm"
        :loading="status === 'pending'"
        :groups="groups"
        placeholder="Search users..."
        class="h-80"
      />
    </template>
  </PDrawer>
</template>
```

> [!NOTE]
> 
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the Drawer opens.

### Listen open state

When using the `close` prop, you can listen to the `update:open` event when the button is clicked.

```vue [CommandPaletteOpenExample.vue]
<script setup lang="ts">
const open = ref(false)

const users = [
  {
    label: 'Benjamin Canac',
    suffix: 'benjamincanac',
    to: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Hugo Richard',
    suffix: 'HugoRCD',
    to: 'https://github.com/HugoRCD',
    target: '_blank',
    avatar: {
      src: 'https://github.com/HugoRCD.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Sébastien Chopin',
    suffix: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Romain Hamel',
    suffix: 'romhml',
    to: 'https://github.com/romhml',
    target: '_blank',
    avatar: {
      src: 'https://github.com/romhml.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Sandro Circi',
    suffix: 'sandros94',
    to: 'https://github.com/sandros94',
    target: '_blank',
    avatar: {
      src: 'https://github.com/sandros94.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Jakub Michálek',
    suffix: 'J-Michalek',
    to: 'https://github.com/J-Michalek',
    target: '_blank',
    avatar: {
      src: 'https://github.com/J-Michalek.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Alex',
    suffix: 'hywax',
    to: 'https://github.com/hywax',
    target: '_blank',
    avatar: {
      src: 'https://github.com/hywax.png',
      loading: 'lazy' as const
    }
  },
  {
    label: 'Maxime Pauvert',
    suffix: 'maximepvrt',
    to: 'https://github.com/maximepvrt',
    target: '_blank',
    avatar: {
      src: 'https://github.com/maximepvrt.png',
      loading: 'lazy' as const
    }
  }
]
</script>

<template>
  <PModal v-model:open="open">
    <PButton
      label="Search users..."
      color="neutral"
      variant="subtle"
      icon="i-lucide-search"
    />

    <template #content>
      <PCommandPalette close :groups="[{ id: 'users', items: users }]" @update:open="open = $event" />
    </template>
  </PModal>
</template>
```

> [!NOTE]
> 
> This can be useful when using the CommandPalette inside a [`Modal`](/pohon/components/modal) for example.

### With footer slot

Use the `#footer` slot to add custom content at the bottom of the CommandPalette, such as keyboard shortcuts help or additional actions.

```vue [CommandPaletteFooterSlotExample.vue]
<script setup lang="ts">
const groups = [
  {
    id: 'actions',
    items: [
      {
        label: 'Add new file',
        suffix: 'Create a new file in the current directory',
        icon: 'i-lucide-file-plus',
        kbds: ['meta', 'N']
      },
      {
        label: 'Add new folder',
        suffix: 'Create a new folder in the current directory',
        icon: 'i-lucide-folder-plus',
        kbds: ['meta', 'F']
      },
      {
        label: 'Search files',
        suffix: 'Search across all files in the project',
        icon: 'i-lucide-search',
        kbds: ['meta', 'P']
      },
      {
        label: 'Settings',
        suffix: 'Open application settings',
        icon: 'i-lucide-settings',
        kbds: ['meta', ',']
      }
    ]
  },
  {
    id: 'recent',
    label: 'Recent',
    items: [
      {
        label: 'project.vue',
        suffix: 'components/',
        icon: 'i-vscode-icons-file-type-vue'
      },
      {
        label: 'readme.md',
        suffix: 'docs/',
        icon: 'i-vscode-icons-file-type-markdown'
      },
      {
        label: 'package.json',
        suffix: 'root/',
        icon: 'i-vscode-icons-file-type-node'
      }
    ]
  }
]
</script>

<template>
  <PCommandPalette :groups="groups" class="flex-1 h-80">
    <template #footer>
      <div class="flex items-center justify-between gap-2">
        <PIcon name="i-simple-icons-nuxtdotjs" class="size-5 color-text-dimmed ml-1" />
        <div class="flex items-center gap-1">
          <PButton color="neutral" variant="ghost" label="Open Command" class="color-text-dimmed" size="xs">
            <template #trailing>
              <PKbd value="enter" />
            </template>
          </PButton>
          <PSeparator orientation="vertical" class="h-4" />
          <PButton color="neutral" variant="ghost" label="Actions" class="color-text-dimmed" size="xs">
            <template #trailing>
              <PKbd value="meta" />
              <PKbd value="k" />
            </template>
          </PButton>
        </div>
      </div>
    </template>
  </PCommandPalette>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item or group.

You will have access to the following slots:

- `#{{ item.slot }}`
- `#{{ item.slot }}-leading`
- `#{{ item.slot }}-label`
- `#{{ item.slot }}-trailing`
- `#{{ group.slot }}`
- `#{{ group.slot }}-leading`
- `#{{ group.slot }}-label`
- `#{{ group.slot }}-trailing`

```vue [CommandPaletteCustomSlotExample.vue]
<script setup lang="ts">
const groups = [
  {
    id: 'settings',
    items: [
      {
        label: 'Profile',
        icon: 'i-lucide-user',
        kbds: ['meta', 'P']
      },
      {
        label: 'Billing',
        icon: 'i-lucide-credit-card',
        kbds: ['meta', 'B'],
        slot: 'billing' as const
      },
      {
        label: 'Notifications',
        icon: 'i-lucide-bell'
      },
      {
        label: 'Security',
        icon: 'i-lucide-lock'
      }
    ]
  },
  {
    id: 'users',
    label: 'Users',
    slot: 'users' as const,
    items: [
      {
        label: 'Benjamin Canac',
        suffix: 'benjamincanac',
        to: 'https://github.com/benjamincanac',
        target: '_blank'
      },
      {
        label: 'Romain Hamel',
        suffix: 'romhml',
        to: 'https://github.com/romhml',
        target: '_blank'
      },
      {
        label: 'Sébastien Chopin',
        suffix: 'atinux',
        to: 'https://github.com/atinux',
        target: '_blank'
      },
      {
        label: 'Hugo Richard',
        suffix: 'HugoRCD',
        to: 'https://github.com/HugoRCD',
        target: '_blank'
      },
      {
        label: 'Sandro Circi',
        suffix: 'sandros94',
        to: 'https://github.com/sandros94',
        target: '_blank'
      },
      {
        label: 'Daniel Roe',
        suffix: 'danielroe',
        to: 'https://github.com/danielroe',
        target: '_blank'
      },
      {
        label: 'Jakub Michálek',
        suffix: 'J-Michalek',
        to: 'https://github.com/J-Michalek',
        target: '_blank'
      },
      {
        label: 'Eugen Istoc',
        suffix: 'genu',
        to: 'https://github.com/genu',
        target: '_blank'
      }
    ]
  }
]
</script>

<template>
  <PCommandPalette :groups="groups" class="flex-1 h-80">
    <template #users-leading="{ item }">
      <PAvatar :src="`https://github.com/${item.suffix}.png`" size="2xs" loading="lazy" />
    </template>

    <template #billing-label="{ item }">
      <span class="font-medium text-primary">{{ item.label }}</span>

      <PBadge variant="subtle" size="sm">
        50% off
      </PBadge>
    </template>
  </PCommandPalette>
</template>
```

> [!TIP]
> See: #slots
> 
> You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items.

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    commandPalette: {
      slots: {
        root: 'flex flex-col min-h-0 min-w-0 divide-y divide-divide',
        input: '',
        close: '',
        back: 'p-0',
        content: 'relative overflow-hidden flex flex-col',
        footer: 'p-1',
        viewport: 'relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none',
        group: 'p-1 isolate',
        empty: 'text-center color-text-muted',
        label: 'font-600 color-text-highlighted',
        item: 'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75',
        itemLeadingIcon: 'shrink-0',
        itemLeadingAvatar: 'shrink-0',
        itemLeadingAvatarSize: '',
        itemLeadingChip: 'shrink-0',
        itemLeadingChipSize: '',
        itemTrailing: 'ms-auto inline-flex items-center',
        itemTrailingIcon: 'shrink-0',
        itemTrailingHighlightedIcon: 'shrink-0 color-text-dimmed hidden group-data-highlighted:inline-flex',
        itemTrailingKbds: 'hidden lg:inline-flex items-center shrink-0',
        itemTrailingKbdsSize: '',
        itemWrapper: 'flex-1 flex flex-col text-start min-w-0',
        itemLabel: 'truncate space-x-1 color-text-dimmed',
        itemLabelBase: 'color-text-highlighted [&>mark]:color-primary [&>mark]:bg-primary/15',
        itemLabelPrefix: 'color-text',
        itemLabelSuffix: 'color-text-dimmed [&>mark]:color-primary [&>mark]:bg-primary/15',
        itemDescription: 'truncate color-text-muted [&>mark]:color-primary [&>mark]:bg-primary/15'
      },
      variants: {
        virtualize: {
          true: {
            viewport: 'p-1 isolate'
          },
          false: {
            viewport: 'divide-y divide-divide'
          }
        },
        size: {
          xs: {
            input: '[&>input]:h-10',
            empty: 'py-3 text-xs',
            label: 'p-1 text-[10px]/3 gap-1',
            item: 'p-1 text-xs gap-1',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemLeadingChip: 'size-4',
            itemLeadingChipSize: 'sm',
            itemTrailing: 'gap-1',
            itemTrailingIcon: 'size-4',
            itemTrailingHighlightedIcon: 'size-4',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'sm'
          },
          sm: {
            input: '[&>input]:h-11',
            empty: 'py-4 text-xs',
            label: 'p-1.5 text-[10px]/3 gap-1.5',
            item: 'p-1.5 text-xs gap-1.5',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemLeadingChip: 'size-4',
            itemLeadingChipSize: 'sm',
            itemTrailing: 'gap-1.5',
            itemTrailingIcon: 'size-4',
            itemTrailingHighlightedIcon: 'size-4',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'sm'
          },
          md: {
            input: '[&>input]:h-12',
            empty: 'py-6 text-sm',
            label: 'p-1.5 text-xs gap-1.5',
            item: 'p-1.5 text-sm gap-1.5',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemLeadingChip: 'size-5',
            itemLeadingChipSize: 'md',
            itemTrailing: 'gap-1.5',
            itemTrailingIcon: 'size-5',
            itemTrailingHighlightedIcon: 'size-5',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'md'
          },
          lg: {
            input: '[&>input]:h-13',
            empty: 'py-7 text-sm',
            label: 'p-2 text-xs gap-2',
            item: 'p-2 text-sm gap-2',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemLeadingChip: 'size-5',
            itemLeadingChipSize: 'md',
            itemTrailing: 'gap-2',
            itemTrailingIcon: 'size-5',
            itemTrailingHighlightedIcon: 'size-5',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'md'
          },
          xl: {
            input: '[&>input]:h-14',
            empty: 'py-8 text-base',
            label: 'p-2 text-sm gap-2',
            item: 'p-2 text-base gap-2',
            itemLeadingIcon: 'size-6',
            itemLeadingAvatarSize: 'xs',
            itemLeadingChip: 'size-6',
            itemLeadingChipSize: 'lg',
            itemTrailing: 'gap-2',
            itemTrailingIcon: 'size-6',
            itemTrailingHighlightedIcon: 'size-6',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'lg'
          }
        },
        active: {
          true: {
            item: 'color-text-highlighted before:bg-background-elevated',
            itemLeadingIcon: 'color-text'
          },
          false: {
            item: [
              'color-text data-highlighted:not-data-disabled:color-text-highlighted data-highlighted:not-data-disabled:before:bg-background-elevated/50',
              'transition-colors before:transition-colors'
            ],
            itemLeadingIcon: [
              'color-text-dimmed group-data-highlighted:not-group-data-disabled:color-text',
              'transition-colors'
            ]
          }
        },
        loading: {
          true: {
            itemLeadingIcon: 'animate-spin'
          }
        }
      },
      defaultVariants: {
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/CommandPalette.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/command-palette.ts).

---

- [Fuse.js](https://fusejs.io/)
- [Listbox](/akar/components/listbox)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/CommandPalette.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[CommandPalette source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/CommandPalette.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **icon** — `any; optional`: The icon displayed in the input. Set to \`false\` to hide the icon.
- **trailingIcon** — `any; optional`: The icon displayed on the right side of the input.
- **selectedIcon** — `any; optional`: The icon displayed when an item is selected.
- **childrenIcon** — `any; optional`: The icon displayed when an item has children.
- **placeholder** — `string | undefined; optional`: The placeholder text for the input.
- **autofocus** — `boolean | undefined; optional; default: true`: Automatically focus the input when component is mounted.
- **close** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Display a close button in the input (useful when inside a Modal for example). \`{ size: 'md', color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **closeIcon** — `any; optional`: The icon displayed in the close button.
- **back** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Display a button to navigate back in history. \`{ size: 'md', color: 'neutral', variant: 'link' }\`{lang="ts-type"}
- **backIcon** — `any; optional`: The icon displayed in the back button.
- **input** — `boolean | Omit<InputProps<AcceptableValue, ModelModifiers>, "defaultValue" | "modelValue"> | undefined; optional; default: true`: Configure the input or hide it with \`false\`.
- **groups** — `G[] | undefined; optional`
- **fuse** — `UseFuseOptions<T> | undefined; optional`: Options for [useFuse](https://vueuse.org/integrations/useFuse).
- **virtualize** — `boolean | { overscan?: number | undefined; estimateSize?: number | ((index: number) => number) | undefined; } | undefined; optional; default: false`: Enable virtualization for large lists. Note: when enabled, all groups are flattened into a single list due to a limitation of Akar
- **valueKey** — `GetItemKeys<T> | undefined; optional`: When \`items\` is an array of objects, select the field to use as the value instead of the object itself.
- **labelKey** — `GetItemKeys<T> | undefined; optional; default: "label"`: The key used to get the label from the item.
- **descriptionKey** — `GetItemKeys<T> | undefined; optional; default: "description"`: The key used to get the description from the item.
- **preserveGroupOrder** — `boolean | undefined; optional; default: false`: Whether to preserve the order of groups as defined in the \`groups\` prop when filtering. When \`false\`, groups will appear based on item matches.
- **searchDelay** — `number | undefined; optional; default: 0`: Delay (in milliseconds) before the search term is passed to Fuse (debounced). Useful when indexing large datasets where fuzzy search becomes the bottleneck — the input stays responsive while Fuse and the result pipeline only re-run after typing settles. Set to \`0\` (the default) to disable.
- **ui** — `{ root?: SlotClass; input?: SlotClass; close?: SlotClass; back?: SlotClass; content?: SlotClass; footer?: SlotClass; viewport?: SlotClass; group?: SlotClass; empty?: SlotClass; label?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemLeadingChip?: SlotClass; itemLeadingChipSize?: SlotClass; itemTrailing?: SlotClass; itemTrailingIcon?: SlotClass; itemTrailingHighlightedIcon?: SlotClass; itemTrailingKbds?: SlotClass; itemTrailingKbdsSize?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemLabelBase?: SlotClass; itemLabelPrefix?: SlotClass; itemLabelSuffix?: SlotClass; itemDescription?: SlotClass; } | undefined; optional`
- **multiple** — `boolean | undefined; optional`: Whether multiple options can be selected or not.
- **defaultValue** — `AcceptableValue | AcceptableValue[] | undefined; optional`: The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox
- **modelValue** — `AcceptableValue | AcceptableValue[] | undefined; optional`: The controlled value of the listbox. Can be binded with \`v-model\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with listbox
- **highlightOnHover** — `boolean | undefined; optional; default: true`: When \`true\`, hover over item will trigger highlight
- **selectionBehavior** — `"replace" | "toggle" | undefined; optional`: How multiple selection should behave in the collection.
- **by** — `string | ((a: AcceptableValue, b: AcceptableValue) => boolean) | undefined; optional`: Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **searchTerm** — `string | undefined; optional; default: ""`

### Slots

- **empty** — `{ searchTerm: string; }`
- **footer** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **back** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **close** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-leading** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-label** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-description** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-trailing** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **group-label** — `{ group: G; label: string; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:modelValue** — `[value: T]`
- **highlight** — `[payload: { ref: HTMLElement; value: T; } | undefined]`
- **update:open** — `[value: boolean]`
- **entryFocus** — `[event: CustomEvent<any>]`
- **leave** — `[event: Event]`
- **update:searchTerm** — `[value: string]`
