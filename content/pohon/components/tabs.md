---
title: "Tabs"
description: "A set of tab panels that are displayed one at a time."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/tabs.md"
---
## Usage

Use the Tabs component to display a list of items in tabs.

```vue [TabsExample.vue]
<script setup lang="ts">
const items = [
  {
    label: 'Account',
    icon: 'i-lucide-user',
    slot: 'account'
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock',
    slot: 'password'
  }
]

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<template>
  <PTabs :items="items">
    <template #account>
      <PForm :state="state" class="flex flex-col gap-4">
        <PFormField label="Name" name="name">
          <PInput v-model="state.name" class="w-full" />
        </PFormField>
        <PFormField label="Username" name="username">
          <PInput v-model="state.username" class="w-full" />
        </PFormField>
      </PForm>
    </template>

    <template #password>
      <PForm :state="state" class="flex flex-col gap-4">
        <PFormField label="Current Password" name="current" required>
          <PInput v-model="state.currentPassword" type="password" required class="w-full" />
        </PFormField>
        <PFormField label="New Password" name="new" required>
          <PInput v-model="state.newPassword" type="password" required class="w-full" />
        </PFormField>
        <PFormField label="Confirm Password" name="confirm" required>
          <PInput v-model="state.confirmPassword" type="password" required class="w-full" />
        </PFormField>
      </PForm>
    </template>
  </PTabs>
</template>
```

### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`
- `icon?: string`
- `avatar?: AvatarProps`
- `badge?: string | number | BadgeProps`
- `content?: string`
- `value?: string | number`
- `disabled?: boolean`
- [`slot?: string`](#with-custom-slot)
- `class?: any`
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`

```vue
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = ref<TabsItem[]>([
  {
    label: "Account",
    icon: "i-lucide-user",
    content: "This is the account content."
  },
  {
    label: "Password",
    icon: "i-lucide-lock",
    content: "This is the password content."
  }
])
</script>

<template>
  <UTabs :items="items" class="w-full" />
</template>
```

### Content

Set the `content` prop to `false` to render the triggers without any panels. Defaults to `true`.

```vue
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = ref<TabsItem[]>([
  {
    label: "Account",
    icon: "i-lucide-user",
    content: "This is the account content."
  },
  {
    label: "Password",
    icon: "i-lucide-lock",
    content: "This is the password content."
  }
])
</script>

<template>
  <UTabs :content="false" :items="items" class="w-full" />
</template>
```

### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the Tabs is collapsed. Defaults to `true`.

```vue
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = ref<TabsItem[]>([
  {
    label: "Account",
    icon: "i-lucide-user",
    content: "This is the account content."
  },
  {
    label: "Password",
    icon: "i-lucide-lock",
    content: "This is the password content."
  }
])
</script>

<template>
  <UTabs :unmount-on-hide="false" :items="items" class="w-full" />
</template>
```

> [!NOTE]
> 
> You can inspect the DOM to see each item's content being rendered.

### Color

Use the `color` prop to change the color of the Tabs.

```vue
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = ref<TabsItem[]>([
  {
    label: "Account"
  },
  {
    label: "Password"
  }
])
</script>

<template>
  <UTabs color="neutral" :content="false" :items="items" class="w-full" />
</template>
```

### Variant

Use the `variant` prop to change the variant of the Tabs.

```vue
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = ref<TabsItem[]>([
  {
    label: "Account"
  },
  {
    label: "Password"
  }
])
</script>

<template>
  <UTabs color="neutral" variant="link" :content="false" :items="items" class="w-full" />
</template>
```

### Size

Use the `size` prop to change the size of the Tabs.

```vue
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = ref<TabsItem[]>([
  {
    label: "Account"
  },
  {
    label: "Password"
  }
])
</script>

<template>
  <UTabs size="md" variant="pill" :content="false" :items="items" class="w-full" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Tabs. Defaults to `horizontal`.

```vue
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = ref<TabsItem[]>([
  {
    label: "Account"
  },
  {
    label: "Password"
  }
])
</script>

<template>
  <UTabs orientation="vertical" variant="pill" :content="false" :items="items" class="w-full" />
</template>
```

## Examples

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the `value` of the item. If no `value` is provided, it defaults to the index **as a string**.

```vue [TabsModelValueExample.vue]
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items: TabsItem[] = [
  {
    label: 'Account',
    icon: 'i-lucide-user'
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock'
  }
]

const active = ref('0')

// Note: This is for demonstration purposes only. Don't do this at home.
onMounted(() => {
  setInterval(() => {
    active.value = String((Number(active.value) + 1) % items.length)
  }, 2000)
})
</script>

<template>
  <PTabs v-model="active" :content="false" :items="items" class="w-full" />
</template>
```

> [!TIP]
> 
> Use the `value-key` prop to change the key used to match items when a `v-model` or `default-value` is provided.

### With route query

You can control the active item by a URL query parameter, using `route.query.tab` as the `value` of the item.

```vue [TabsRouteQueryExample.vue]
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const route = useRoute()
const router = useRouter()

const items: TabsItem[] = [
  {
    label: 'Account',
    icon: 'i-lucide-user',
    value: 'account'
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock',
    value: 'password'
  }
]

const active = computed({
  get() {
    return (route.query.tab as string) || 'account'
  },
  set(tab) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.push({
      path: '/docs/components/tabs',
      query: { tab },
      hash: '#with-route-query'
    })
  }
})
</script>

<template>
  <PTabs v-model="active" :content="false" :items="items" class="w-full" />
</template>
```

### With content slot

Use the `#content` slot to customize the content of each item.

```vue [TabsContentSlotExample.vue]
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items: TabsItem[] = [
  {
    label: 'Account',
    icon: 'i-lucide-user'
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock'
  }
]
</script>

<template>
  <PTabs :items="items" class="w-full">
    <template #content="{ item }">
      <p>This is the {{ item.label }} tab.</p>
    </template>
  </PTabs>
</template>
```

### With bottom tab bar

Use the `ui` prop to transform the Tabs into a mobile-style bottom tab bar with icons and small labels, similar to YouTube or Instagram.

```vue [TabsBottomTabBarExample.vue]
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items: TabsItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-house'
  },
  {
    label: 'Activity',
    icon: 'i-lucide-activity'
  },
  {
    label: 'Settings',
    icon: 'i-lucide-settings'
  },
  {
    label: 'Profile',
    icon: 'i-lucide-user'
  }
]
</script>

<template>
  <PTabs
    :items="items"
    :content="false"
    :ui="{
      list: 'justify-around w-full',
      trigger: 'grow flex-col gap-1 py-1',
      label: 'text-[10px]/3'
    }"
    class="w-full"
  />
</template>
```

### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`

```vue [TabsCustomSlotExample.vue]
<script setup lang="ts">
import type { TabsItem } from 'pohon-ui'

const items = [
  {
    label: 'Account',
    description: 'Make changes to your account here. Click save when you\'re done.',
    icon: 'i-lucide-user',
    slot: 'account' as const
  },
  {
    label: 'Password',
    description: 'Change your password here. After saving, you\'ll be logged out.',
    icon: 'i-lucide-lock',
    slot: 'password' as const
  }
] satisfies TabsItem[]

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<template>
  <PTabs :items="items" variant="link" :ui="{ trigger: 'grow' }" class="gap-4 w-full">
    <template #account="{ item }">
      <p class="color-text-muted mb-4">
        {{ item.description }}
      </p>

      <PForm :state="state" class="flex flex-col gap-4">
        <PFormField label="Name" name="name">
          <PInput v-model="state.name" class="w-full" />
        </PFormField>
        <PFormField label="Username" name="username">
          <PInput v-model="state.username" class="w-full" />
        </PFormField>

        <PButton label="Save changes" type="submit" variant="soft" class="self-end" />
      </PForm>
    </template>

    <template #password="{ item }">
      <p class="color-text-muted mb-4">
        {{ item.description }}
      </p>

      <PForm :state="state" class="flex flex-col gap-4">
        <PFormField label="Current Password" name="current" required>
          <PInput v-model="state.currentPassword" type="password" required class="w-full" />
        </PFormField>
        <PFormField label="New Password" name="new" required>
          <PInput v-model="state.newPassword" type="password" required class="w-full" />
        </PFormField>
        <PFormField label="Confirm Password" name="confirm" required>
          <PInput v-model="state.confirmPassword" type="password" required class="w-full" />
        </PFormField>

        <PButton label="Change password" type="submit" variant="soft" class="self-end" />
      </PForm>
    </template>
  </PTabs>
</template>
```

## API

### Props

```ts
/**
 * Props for the Tabs component
 */
interface TabsProps {
  /**
   * The default tab to select.
   * @default '0'
   */
  defaultValue?: string | undefined;
  /**
   * Sync the selected tab with a local storage key.
   */
  sync?: string | undefined;
  /**
   * The hash to scroll to when the tab is selected.
   */
  hash?: string | undefined;
  ui?: { root?: SlotClass; } & { root?: SlotClass; list?: SlotClass; indicator?: SlotClass; trigger?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; label?: SlotClass; trailingBadge?: SlotClass; trailingBadgeSize?: SlotClass; content?: SlotClass; } | undefined;
  modelValue?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Tabs component
 */
interface TabsSlots {
  default(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Tabs component
 */
interface TabsEmits {
  update:modelValue: (payload: [value: string | undefined]) => void;
}
```

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `triggersRef` | `Ref<ComponentPublicInstance[]>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    tabs: {
      slots: {
        root: 'flex items-center gap-2',
        list: 'relative flex p-1 group',
        indicator: 'absolute transition-[translate,width] duration-280',
        trigger: [
          'group relative inline-flex items-center min-w-0 data-[state=inactive]:color-text-muted hover:data-[state=inactive]:not-disabled:color-text font-500 rounded-md disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        label: 'truncate',
        trailingBadge: 'shrink-0',
        trailingBadgeSize: 'sm',
        content: 'w-full rounded-md focus-visible:outline-3'
      },
      variants: {
        color: {
          primary: {
            content: 'outline-primary/25'
          },
          secondary: {
            content: 'outline-secondary/25'
          },
          success: {
            content: 'outline-success/25'
          },
          info: {
            content: 'outline-info/25'
          },
          warning: {
            content: 'outline-warning/25'
          },
          error: {
            content: 'outline-error/25'
          },
          neutral: {
            content: 'outline-outline-inverted/25'
          }
        },
        variant: {
          pill: {
            list: 'bg-background-elevated rounded-lg',
            trigger: [
              'grow',
              "in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:content-[''] in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:absolute in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:inset-0 in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:rounded-md in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:shadow-xs in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:-z-10 in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:isolate"
            ],
            indicator: 'rounded-md shadow-xs'
          },
          link: {
            list: 'border-border',
            indicator: 'rounded-full',
            trigger: "in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:content-[''] in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:absolute in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:rounded-full"
          }
        },
        orientation: {
          horizontal: {
            root: 'flex-col',
            list: 'w-full',
            indicator: 'left-0 w-(--akar-tabs-indicator-size) translate-x-(--akar-tabs-indicator-position)',
            trigger: 'justify-center'
          },
          vertical: {
            list: 'flex-col',
            indicator: 'top-0 h-(--akar-tabs-indicator-size) translate-y-(--akar-tabs-indicator-position)'
          }
        },
        size: {
          xs: {
            trigger: 'px-2 py-1 text-xs gap-1',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs'
          },
          sm: {
            trigger: 'px-2.5 py-1.5 text-xs gap-1.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs'
          },
          md: {
            trigger: 'px-3 py-1.5 text-sm gap-1.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs'
          },
          lg: {
            trigger: 'px-3 py-2 text-sm gap-2',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs'
          },
          xl: {
            trigger: 'px-3 py-2 text-base gap-2',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          variant: 'pill',
          class: {
            indicator: 'inset-y-1'
          }
        },
        {
          orientation: 'horizontal',
          variant: 'link',
          class: {
            list: 'border-b -mb-px',
            indicator: '-bottom-px h-px',
            trigger: 'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:inset-x-0 in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:-bottom-[calc(var(--spacing)+1px)] in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:h-px'
          }
        },
        {
          orientation: 'vertical',
          variant: 'pill',
          class: {
            indicator: 'inset-x-1',
            list: 'items-center',
            trigger: 'w-full justify-center'
          }
        },
        {
          orientation: 'vertical',
          variant: 'link',
          class: {
            list: 'border-s -ms-px',
            indicator: '-start-px w-px',
            trigger: 'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:inset-y-0 in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:-start-[calc(var(--spacing)+1px)] in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:w-px'
          }
        },
        {
          color: 'primary',
          variant: 'pill',
          class: {
            indicator: 'bg-primary',
            trigger: [
              'data-[state=active]:color-text-inverted outline-primary/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-primary'
            ]
          }
        },
        {
          color: 'secondary',
          variant: 'pill',
          class: {
            indicator: 'bg-secondary',
            trigger: [
              'data-[state=active]:color-text-inverted outline-secondary/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-secondary'
            ]
          }
        },
        {
          color: 'success',
          variant: 'pill',
          class: {
            indicator: 'bg-success',
            trigger: [
              'data-[state=active]:color-text-inverted outline-success/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-success'
            ]
          }
        },
        {
          color: 'info',
          variant: 'pill',
          class: {
            indicator: 'bg-info',
            trigger: [
              'data-[state=active]:color-text-inverted outline-info/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-info'
            ]
          }
        },
        {
          color: 'warning',
          variant: 'pill',
          class: {
            indicator: 'bg-warning',
            trigger: [
              'data-[state=active]:color-text-inverted outline-warning/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-warning'
            ]
          }
        },
        {
          color: 'error',
          variant: 'pill',
          class: {
            indicator: 'bg-error',
            trigger: [
              'data-[state=active]:color-text-inverted outline-error/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-error'
            ]
          }
        },
        {
          color: 'neutral',
          variant: 'pill',
          class: {
            indicator: 'bg-background-inverted',
            trigger: [
              'data-[state=active]:color-text-inverted outline-outline-inverted/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:before:bg-background-inverted'
            ]
          }
        },
        {
          color: 'primary',
          variant: 'link',
          class: {
            indicator: 'bg-primary',
            trigger: [
              'data-[state=active]:color-primary outline-primary/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-primary'
            ]
          }
        },
        {
          color: 'secondary',
          variant: 'link',
          class: {
            indicator: 'bg-secondary',
            trigger: [
              'data-[state=active]:color-secondary outline-secondary/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-secondary'
            ]
          }
        },
        {
          color: 'success',
          variant: 'link',
          class: {
            indicator: 'bg-success',
            trigger: [
              'data-[state=active]:color-success outline-success/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-success'
            ]
          }
        },
        {
          color: 'info',
          variant: 'link',
          class: {
            indicator: 'bg-info',
            trigger: [
              'data-[state=active]:color-info outline-info/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-info'
            ]
          }
        },
        {
          color: 'warning',
          variant: 'link',
          class: {
            indicator: 'bg-warning',
            trigger: [
              'data-[state=active]:color-warning outline-warning/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-warning'
            ]
          }
        },
        {
          color: 'error',
          variant: 'link',
          class: {
            indicator: 'bg-error',
            trigger: [
              'data-[state=active]:color-error outline-error/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-error'
            ]
          }
        },
        {
          color: 'neutral',
          variant: 'link',
          class: {
            indicator: 'bg-background-inverted',
            trigger: [
              'data-[state=active]:color-text-highlighted outline-outline-inverted/25 focus-visible:outline-3',
              'in-[[data-slot=list]:not(:has([data-slot=indicator]))]:data-[state=active]:after:bg-background-inverted'
            ]
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        variant: 'pill',
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Tabs.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/tabs.ts).

---

- [Tabs](/akar/components/tabs)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Tabs.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Tabs source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Tabs.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **items** — `T[] | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"link" | "pill" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the tabs.
- **content** — `boolean | undefined; optional; default: true`: The content of the tabs, can be disabled to prevent rendering the content.
- **valueKey** — `GetItemKeys<T> | undefined; optional; default: "value"`: The key used to get the value from the item.
- **labelKey** — `GetItemKeys<T> | undefined; optional; default: "label"`: The key used to get the label from the item.
- **ui** — `{ root?: SlotClass; list?: SlotClass; indicator?: SlotClass; trigger?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; label?: SlotClass; trailingBadge?: SlotClass; trailingBadgeSize?: SlotClass; content?: SlotClass; } | undefined; optional`
- **defaultValue** — `string | number | undefined; optional; default: "0"`: The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs
- **modelValue** — `string | number | undefined; optional`: The controlled value of the tab to activate. Can be bind as \`v-model\`.
- **unmountOnHide** — `boolean | undefined; optional; default: true`: When \`true\`, the element will be unmounted on closed state.
- **activationMode** — `"automatic" | "manual" | undefined; optional`: Whether a tab is activated automatically (on focus) or manually (on click).

### Slots

- **leading** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; trigger: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; trailingBadge: (props?: Record<string, any> | undefined) => string | undefined; trailingBadgeSize: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ item: T; index: number; }`
- **trailing** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; trigger: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; trailingBadge: (props?: Record<string, any> | undefined) => string | undefined; trailingBadgeSize: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **content** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; indicator: (props?: Record<string, any> | undefined) => string | undefined; trigger: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; trailingBadge: (props?: Record<string, any> | undefined) => string | undefined; trailingBadgeSize: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **list-leading** — `{} | undefined`
- **list-trailing** — `{} | undefined`

### Events

- **update:modelValue** — `[payload: string | number]`
