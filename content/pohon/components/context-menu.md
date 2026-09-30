---
title: "ContextMenu"
description: "A menu to display actions when right-clicking on an element."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/context-menu.md"
---
## Usage

Use anything you like in the default slot of the ContextMenu, and right-click on it to display the menu.

```vue
<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const items = ref<ContextMenuItem[][]>([
  [
    {
      label: "Appearance",
      children: [
        {
          label: "System",
          icon: "i-lucide-monitor"
        },
        {
          label: "Light",
          icon: "i-lucide-sun"
        },
        {
          label: "Dark",
          icon: "i-lucide-moon"
        }
      ]
    }
  ],
  [
    {
      label: "Show Sidebar",
      kbds: [
        "meta",
        "s"
      ]
    },
    {
      label: "Show Toolbar",
      kbds: [
        "shift",
        "meta",
        "d"
      ]
    },
    {
      label: "Collapse Pinned Tabs",
      disabled: true
    }
  ],
  [
    {
      label: "Refresh the Page"
    },
    {
      label: "Clear Cookies and Refresh"
    },
    {
      label: "Clear Cache and Refresh"
    },
    {
      type: "separator"
    },
    {
      label: "Developer",
      children: [
        [
          {
            label: "View Source",
            kbds: [
              "meta",
              "shift",
              "u"
            ]
          },
          {
            label: "Developer Tools",
            kbds: [
              "option",
              "meta",
              "i"
            ]
          },
          {
            label: "Inspect Elements",
            kbds: [
              "option",
              "meta",
              "c"
            ]
          }
        ],
        [
          {
            label: "JavaScript Console",
            kbds: [
              "option",
              "meta",
              "j"
            ]
          }
        ]
      ]
    }
  ]
])
</script>

<template>
  <UContextMenu :items="items">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `avatar?: AvatarProps`
- `kbds?: string[] | KbdProps[]`
- [`type?: "link" | "label" | "separator" | "checkbox"`](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`](#with-color-items)
- [`checked?: boolean`](#with-checkbox-items)
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `onSelect?: (e: Event) => void`
- [`onUpdateChecked?: (checked: boolean) => void`](#with-checkbox-items)
- `children?: ContextMenuItem[] | ContextMenuItem[][]`
- `class?: any`
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`

You can pass any property from the [Link](/pohon/components/link#props) component such as `to`, `target`, etc.

```vue
<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const items = ref<ContextMenuItem[][]>([
  [
    {
      label: "Appearance",
      children: [
        {
          label: "System",
          icon: "i-lucide-monitor"
        },
        {
          label: "Light",
          icon: "i-lucide-sun"
        },
        {
          label: "Dark",
          icon: "i-lucide-moon"
        }
      ]
    }
  ],
  [
    {
      label: "Show Sidebar",
      kbds: [
        "meta",
        "s"
      ]
    },
    {
      label: "Show Toolbar",
      kbds: [
        "shift",
        "meta",
        "d"
      ]
    },
    {
      label: "Collapse Pinned Tabs",
      disabled: true
    }
  ],
  [
    {
      label: "Refresh the Page"
    },
    {
      label: "Clear Cookies and Refresh"
    },
    {
      label: "Clear Cache and Refresh"
    },
    {
      type: "separator"
    },
    {
      label: "Developer",
      children: [
        [
          {
            label: "View Source",
            kbds: [
              "meta",
              "shift",
              "u"
            ]
          },
          {
            label: "Developer Tools",
            kbds: [
              "option",
              "meta",
              "i"
            ]
          },
          {
            label: "Inspect Elements",
            kbds: [
              "option",
              "meta",
              "c"
            ]
          }
        ],
        [
          {
            label: "JavaScript Console",
            kbds: [
              "option",
              "meta",
              "j"
            ]
          }
        ]
      ]
    }
  ]
])
</script>

<template>
  <UContextMenu :items="items" :ui="{
  content: 'w-48'
}">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

> [!NOTE]
> 
> You can also pass an array of arrays to the `items` prop to create separated groups of items.

> [!TIP]
> 
> Each item can take a `children` array of objects with the same properties as the `items` prop to create a nested menu which can be controlled using the `open`, `defaultOpen` and `content` properties.

### Size

Use the `size` prop to change the size of the ContextMenu.

```vue
<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const items = ref<ContextMenuItem[]>([
  {
    label: "System",
    icon: "i-lucide-monitor"
  },
  {
    label: "Light",
    icon: "i-lucide-sun"
  },
  {
    label: "Dark",
    icon: "i-lucide-moon"
  }
])
</script>

<template>
  <UContextMenu size="xl" :items="items" :ui="{
  content: 'w-48'
}">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

### Modal

Use the `modal` prop to control whether the ContextMenu blocks interaction with outside content. Defaults to `true`.

```vue
<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const items = ref<ContextMenuItem[]>([
  {
    label: "System",
    icon: "i-lucide-monitor"
  },
  {
    label: "Light",
    icon: "i-lucide-sun"
  },
  {
    label: "Dark",
    icon: "i-lucide-moon"
  }
])
</script>

<template>
  <UContextMenu :modal="false" :items="items" :ui="{
  content: 'w-48'
}">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

### Disabled

Use the `disabled` prop to disable the ContextMenu.

```vue
<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const items = ref<ContextMenuItem[]>([
  {
    label: "System",
    icon: "i-lucide-monitor"
  },
  {
    label: "Light",
    icon: "i-lucide-sun"
  },
  {
    label: "Dark",
    icon: "i-lucide-moon"
  }
])
</script>

<template>
  <UContextMenu disabled :items="items" :ui="{
  content: 'w-48'
}">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

## Examples

### With checkbox items

You can use the `type` property with `checkbox` and use the `checked` / `onUpdateChecked` properties to control the checked state of the item.

```vue [ContextMenuCheckboxItemsExample.vue]
<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const showSidebar = ref(true)
const showToolbar = ref(false)

const items = computed<ContextMenuItem[]>(() => [{
  label: 'View',
  type: 'label' as const
}, {
  type: 'separator' as const
}, {
  label: 'Show Sidebar',
  type: 'checkbox' as const,
  checked: showSidebar.value,
  onUpdateChecked(checked: boolean) {
    showSidebar.value = checked
  },
  onSelect(e: Event) {
    e.preventDefault()
  }
}, {
  label: 'Show Toolbar',
  type: 'checkbox' as const,
  checked: showToolbar.value,
  onUpdateChecked(checked: boolean) {
    showToolbar.value = checked
  }
}, {
  label: 'Collapse Pinned Tabs',
  type: 'checkbox' as const,
  disabled: true
}])
</script>

<template>
  <PContextMenu :items="items" :ui="{ content: 'w-48' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </PContextMenu>
</template>
```

> [!NOTE]
> 
> To ensure reactivity for the `checked` state of items, it's recommended to wrap your `items` array inside a `computed`.

### With color items

You can use the `color` property to highlight certain items with a color.

```vue [ContextMenuColorItemsExample.vue]
<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const items: ContextMenuItem[][] = [
  [
    {
      label: 'View',
      icon: 'i-lucide-eye'
    },
    {
      label: 'Copy',
      icon: 'i-lucide-copy'
    },
    {
      label: 'Edit',
      icon: 'i-lucide-pencil'
    }
  ],
  [
    {
      label: 'Delete',
      color: 'error' as const,
      icon: 'i-lucide-trash'
    }
  ]
]
</script>

<template>
  <PContextMenu :items="items" :ui="{ content: 'w-48' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </PContextMenu>
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`
- `#{{ item.slot }}-leading`
- `#{{ item.slot }}-label`
- `#{{ item.slot }}-trailing`

```vue [ContextMenuCustomSlotExample.vue]
<script setup lang="ts">
import type { ContextMenuItem } from 'pohon-ui'

const loading = ref(true)

const items = [
  {
    label: 'Refresh the Page',
    slot: 'refresh' as const
  },
  {
    label: 'Clear Cookies and Refresh'
  },
  {
    label: 'Clear Cache and Refresh'
  }
] satisfies ContextMenuItem[]
</script>

<template>
  <PContextMenu :items="items" :ui="{ content: 'w-48' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72">
      Right click here
    </div>

    <template #refresh-label>
      {{ loading ? 'Refreshing...' : 'Refresh the Page' }}
    </template>

    <template #refresh-trailing>
      <PIcon v-if="loading" name="i-lucide-loader-circle" class="shrink-0 size-5 text-primary animate-spin" />
    </template>
  </PContextMenu>
</template>
```

> [!TIP]
> See: #slots
> 
> You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items.

### Extract shortcuts

Use the [extractShortcuts](/pohon/composables/extract-shortcuts) utility to automatically define shortcuts from menu items with a `kbds` property. It recursively extracts shortcuts and returns an object compatible with [defineShortcuts](/pohon/composables/define-shortcuts).

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

> [!NOTE]
> 
> In this example, `Meta` `S`, `Shift` `Meta` `D`, `Option` `Meta` `U`, `Option` `Meta` `I`, `Option` `Meta` `C` and `Option` `Meta` `J` would trigger the `select` function of the corresponding item.

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    contextMenu: {
      slots: {
        content: 'min-w-32 max-h-(--akar-context-menu-content-available-height) bg-background shadow-lg rounded-md ring ring-ring overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--akar-context-menu-content-transform-origin) flex flex-col debug-context',
        viewport: 'relative divide-y divide-divide scroll-py-1 overflow-y-auto flex-1',
        group: 'p-1 isolate',
        label: 'w-full flex items-center font-600 color-text-highlighted',
        separator: '-mx-1 my-1 h-px bg-border',
        item: 'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75',
        itemLeadingIcon: 'shrink-0',
        itemLeadingAvatar: 'shrink-0',
        itemLeadingAvatarSize: '',
        itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
        itemTrailingIcon: 'shrink-0',
        itemTrailingKbds: 'hidden lg:inline-flex items-center shrink-0',
        itemTrailingKbdsSize: '',
        itemWrapper: 'flex-1 flex flex-col text-start min-w-0',
        itemLabel: 'truncate',
        itemDescription: 'truncate color-text-muted',
        itemLabelExternalIcon: 'inline-block size-3 align-top color-text-dimmed'
      },
      variants: {
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        active: {
          true: {
            item: 'color-text-highlighted before:bg-background-elevated',
            itemLeadingIcon: 'color-text'
          },
          false: {
            item: [
              'color-text data-highlighted:color-text-highlighted data-[state=open]:color-text-highlighted data-highlighted:before:bg-background-elevated/50 data-[state=open]:before:bg-background-elevated/50',
              'transition-colors before:transition-colors'
            ],
            itemLeadingIcon: [
              'color-text-dimmed group-data-highlighted:color-text group-data-[state=open]:color-text',
              'transition-colors'
            ]
          }
        },
        loading: {
          true: {
            itemLeadingIcon: 'animate-spin'
          }
        },
        size: {
          xs: {
            label: 'p-1 text-xs gap-1',
            item: 'p-1 text-xs gap-1',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemTrailingIcon: 'size-4',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'sm'
          },
          sm: {
            label: 'p-1.5 text-xs gap-1.5',
            item: 'p-1.5 text-xs gap-1.5',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemTrailingIcon: 'size-4',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'sm'
          },
          md: {
            label: 'p-1.5 text-sm gap-1.5',
            item: 'p-1.5 text-sm gap-1.5',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemTrailingIcon: 'size-5',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'md'
          },
          lg: {
            label: 'p-2 text-sm gap-2',
            item: 'p-2 text-sm gap-2',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemTrailingIcon: 'size-5',
            itemTrailingKbds: 'gap-1',
            itemTrailingKbdsSize: 'md'
          },
          xl: {
            label: 'p-2 text-base gap-2',
            item: 'p-2 text-base gap-2',
            itemLeadingIcon: 'size-6',
            itemLeadingAvatarSize: 'xs',
            itemTrailingIcon: 'size-6',
            itemTrailingKbds: 'gap-1',
            itemTrailingKbdsSize: 'lg'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          active: false,
          class: {
            item: 'color-primary data-highlighted:color-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10',
            itemLeadingIcon: 'color-primary/75 group-data-highlighted:color-primary group-data-[state=open]:color-primary'
          }
        },
        {
          color: 'secondary',
          active: false,
          class: {
            item: 'color-secondary data-highlighted:color-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10',
            itemLeadingIcon: 'color-secondary/75 group-data-highlighted:color-secondary group-data-[state=open]:color-secondary'
          }
        },
        {
          color: 'success',
          active: false,
          class: {
            item: 'color-success data-highlighted:color-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10',
            itemLeadingIcon: 'color-success/75 group-data-highlighted:color-success group-data-[state=open]:color-success'
          }
        },
        {
          color: 'info',
          active: false,
          class: {
            item: 'color-info data-highlighted:color-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10',
            itemLeadingIcon: 'color-info/75 group-data-highlighted:color-info group-data-[state=open]:color-info'
          }
        },
        {
          color: 'warning',
          active: false,
          class: {
            item: 'color-warning data-highlighted:color-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10',
            itemLeadingIcon: 'color-warning/75 group-data-highlighted:color-warning group-data-[state=open]:color-warning'
          }
        },
        {
          color: 'error',
          active: false,
          class: {
            item: 'color-error data-highlighted:color-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10',
            itemLeadingIcon: 'color-error/75 group-data-highlighted:color-error group-data-[state=open]:color-error'
          }
        },
        {
          color: 'primary',
          active: true,
          class: {
            item: 'color-primary before:bg-primary/10',
            itemLeadingIcon: 'color-primary'
          }
        },
        {
          color: 'secondary',
          active: true,
          class: {
            item: 'color-secondary before:bg-secondary/10',
            itemLeadingIcon: 'color-secondary'
          }
        },
        {
          color: 'success',
          active: true,
          class: {
            item: 'color-success before:bg-success/10',
            itemLeadingIcon: 'color-success'
          }
        },
        {
          color: 'info',
          active: true,
          class: {
            item: 'color-info before:bg-info/10',
            itemLeadingIcon: 'color-info'
          }
        },
        {
          color: 'warning',
          active: true,
          class: {
            item: 'color-warning before:bg-warning/10',
            itemLeadingIcon: 'color-warning'
          }
        },
        {
          color: 'error',
          active: true,
          class: {
            item: 'color-error before:bg-error/10',
            itemLeadingIcon: 'color-error'
          }
        }
      ],
      defaultVariants: {
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ContextMenu.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/context-menu.ts).

---

- [ContextMenu](/akar/components/context-menu)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ContextMenu.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ContextMenu source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ContextMenu.vue)

### Props

- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **items** — `T | undefined; optional`
- **checkedIcon** — `any; optional`: The icon displayed when an item is checked.
- **loadingIcon** — `any; optional`: The icon displayed when an item is loading.
- **externalIcon** — `any; optional; default: true`: The icon displayed when the item is an external link. Set to \`false\` to hide the external icon.
- **content** — `(Omit<ContextMenuContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<MenuContentEmits>>) | undefined; optional`: The content of the menu.
- **portal** — `string | boolean | HTMLElement | undefined; optional; default: true`: Render the menu in a portal.
- **labelKey** — `GetItemKeys<T> | undefined; optional; default: "label"`: The key used to get the label from the item.
- **descriptionKey** — `GetItemKeys<T> | undefined; optional; default: "description"`: The key used to get the description from the item.
- **disabled** — `boolean | undefined; optional`
- **ui** — `{ content?: SlotClass; viewport?: SlotClass; group?: SlotClass; label?: SlotClass; separator?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemTrailing?: SlotClass; itemTrailingIcon?: SlotClass; itemTrailingKbds?: SlotClass; itemTrailingKbdsSize?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemDescription?: SlotClass; itemLabelExternalIcon?: SlotClass; } | undefined; optional`
- **modal** — `boolean | undefined; optional; default: true`: The modality of the dropdown menu.  When set to \`true\`, interaction with outside elements will be disabled and only menu content will be visible to screen readers.
- **pressOpenDelay** — `number | undefined; optional`: The duration from when the trigger is pressed until the menu opens.

### Slots

- **default** — `{} | undefined`
- **item** — `{ item: NestedItem<T>; active: boolean; index: number; ui: { content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; itemLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-leading** — `{ item: NestedItem<T>; active: boolean; index: number; ui: { content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; itemLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-label** — `{ item: NestedItem<T>; active: boolean; index: number; }`
- **item-description** — `{ item: NestedItem<T>; active: boolean; index: number; }`
- **item-trailing** — `{ item: NestedItem<T>; active: boolean; index: number; ui: { content: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; separator: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; itemLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **content-top** — `{ sub: boolean; }`
- **content-bottom** — `{ sub: boolean; }`

### Events

- **update:open** — `[payload: boolean]`
