---
title: "Sidebar"
description: "A collapsible sidebar with multiple visual variants."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/sidebar.md"
---
## Usage

The Sidebar component is a standalone, fixed sidebar that pushes the page content. On desktop, it renders inline and can be collapsed; on mobile, it opens a [Modal](/pohon/components/modal), [Slideover](/pohon/components/slideover) or [Drawer](/pohon/components/drawer) component.

> [!TIP]
> See: /docs/components/dashboard-sidebar
> 
> **Sidebar vs DashboardSidebar**: This component is a simple, standalone sidebar you can drop anywhere (chat panel, settings, navigation). If you need drag-to-resize, state persistence and integration with [DashboardGroup](/pohon/components/dashboard-group), use [DashboardSidebar](/pohon/components/dashboard-sidebar) instead.

Use the `header`, `default` and `footer` slots to customize the sidebar content. The `v-model:open` directive is viewport-aware: on desktop it controls the expanded/collapsed state, on mobile it controls the menu.

```vue [SidebarExample.vue]
<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from 'pohon-ui'

const open = ref(true)

const colorMode = useColorMode()

const teams = ref([{
  label: 'Nuxt',
  avatar: {
    src: 'https://github.com/nuxt.png',
    alt: 'Nuxt'
  }
}, {
  label: 'Vue',
  avatar: {
    src: 'https://github.com/vuejs.png',
    alt: 'Vue'
  }
}, {
  label: 'UnJS',
  avatar: {
    src: 'https://github.com/unjs.png',
    alt: 'UnJS'
  }
}])
const selectedTeam = ref(teams.value[0])

const teamsItems = computed<DropdownMenuItem[][]>(() => {
  return [teams.value.map((team, index) => ({
    ...team,
    kbds: ['meta', String(index + 1)],
    onSelect() {
      selectedTeam.value = team
    }
  })), [{
    label: 'Create team',
    icon: 'i-lucide-circle-plus'
  }]]
})

function getItems(state: 'collapsed' | 'expanded') {
  return [{
    label: 'Inbox',
    icon: 'i-lucide-inbox',
    badge: '4'
  }, {
    label: 'Issues',
    icon: 'i-lucide-square-dot'
  }, {
    label: 'Activity',
    icon: 'i-lucide-square-activity'
  }, {
    label: 'Settings',
    icon: 'i-lucide-settings',
    defaultOpen: true,
    children: state === 'expanded'
      ? [{
          label: 'General',
          icon: 'i-lucide-house'
        }, {
          label: 'Team',
          icon: 'i-lucide-users'
        }, {
          label: 'Billing',
          icon: 'i-lucide-credit-card'
        }]
      : []
  }] satisfies NavigationMenuItem[]
}

const user = ref({
  name: 'Benjamin Canac',
  avatar: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'Benjamin Canac'
  }
})

const userItems = computed<DropdownMenuItem[][]>(() => ([[{
  label: 'Profile',
  icon: 'i-lucide-user'
}, {
  label: 'Billing',
  icon: 'i-lucide-credit-card'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  to: '/settings'
}], [{
  label: 'Appearance',
  icon: 'i-lucide-sun-moon',
  children: [{
    label: 'Light',
    icon: 'i-lucide-sun',
    type: 'checkbox',
    checked: colorMode.value === 'light',
    onUpdateChecked(checked: boolean) {
      if (checked) {
        colorMode.preference = 'light'
      }
    },
    onSelect(e: Event) {
      e.preventDefault()
    }
  }, {
    label: 'Dark',
    icon: 'i-lucide-moon',
    type: 'checkbox',
    checked: colorMode.value === 'dark',
    onUpdateChecked(checked: boolean) {
      if (checked) {
        colorMode.preference = 'dark'
      }
    },
    onSelect(e: Event) {
      e.preventDefault()
    }
  }]
}], [{
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  to: 'https://github.com/vinicunca/pohon',
  target: '_blank'
}, {
  label: 'Log out',
  icon: 'i-lucide-log-out'
}]]))

defineShortcuts(extractShortcuts(teamsItems.value))
</script>

<template>
  <div class="flex flex-1">
    <PSidebar
      v-model:open="open"
      collapsible="icon"
      rail
      :ui="{
        container: 'h-full',
        inner: 'bg-background-elevated/25 divide-transparent',
        body: 'py-0'
      }"
    >
      <template #header>
        <PDropdownMenu
          :items="teamsItems"
          :content="{ align: 'start', collisionPadding: 12 }"
          :ui="{ content: 'w-(--akar-dropdown-menu-trigger-width) min-w-48' }"
        >
          <PButton
            v-bind="selectedTeam"
            trailing-icon="i-lucide-chevrons-up-down"
            color="neutral"
            variant="ghost"
            square
            class="w-full data-[state=open]:bg-background-elevated overflow-hidden"
            :ui="{
              trailingIcon: 'color-text-dimmed ms-auto'
            }"
          />
        </PDropdownMenu>
      </template>

      <template #default="{ state }">
        <PNavigationMenu
          :key="state"
          :items="getItems(state)"
          orientation="vertical"
          :ui="{ link: 'p-1.5 overflow-hidden' }"
        />
      </template>

      <template #footer>
        <PDropdownMenu
          :items="userItems"
          :content="{ align: 'center', collisionPadding: 12 }"
          :ui="{ content: 'w-(--akar-dropdown-menu-trigger-width) min-w-48' }"
        >
          <PButton
            v-bind="user"
            :label="user?.name"
            trailing-icon="i-lucide-chevrons-up-down"
            color="neutral"
            variant="ghost"
            square
            class="w-full data-[state=open]:bg-background-elevated overflow-hidden"
            :ui="{
              trailingIcon: 'color-text-dimmed ms-auto'
            }"
          />
        </PDropdownMenu>
      </template>
    </PSidebar>

    <div class="flex-1 flex flex-col">
      <div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-border">
        <PButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

### Variant

Use the `variant` prop to change the visual style of the sidebar. Defaults to `sidebar`.

```vue [SidebarPropsExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem, SidebarProps } from 'pohon-ui'

// Ignore the props for the example
defineProps<Pick<SidebarProps, 'variant' | 'collapsible' | 'side'>>()

const open = ref(true)

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div
    class="flex flex-1"
    :class="[
      variant === 'inset' && 'bg-neutral-50 dark:bg-neutral-950',
      side === 'right' && 'flex-row-reverse'
    ]"
  >
    <PSidebar
      v-model:open="open"
      :variant="variant"
      :collapsible="collapsible"
      :side="side"
      :ui="{
        container: 'h-full'
      }"
    >
      <template #header>
        <PIcon name="i-logos-nuxt-icon" class="size-8" />
      </template>

      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="flex-1 flex flex-col overflow-hidden lg:peer-data-[variant=floating]:my-4 peer-data-[variant=inset]:m-4 lg:peer-data-[variant=inset]:not-peer-data-[collapsible=offcanvas]:ms-0 peer-data-[variant=inset]:rounded-xl peer-data-[variant=inset]:shadow-sm peer-data-[variant=inset]:ring peer-data-[variant=inset]:ring-ring bg-background">
      <div
        class="h-(--ui-header-height) shrink-0 flex items-center px-4"
        :class="[
          variant !== 'floating' && 'border-b border-border',
          side === 'right' && 'justify-end'
        ]"
      >
        <PButton
          :icon="side === 'left' ? 'i-lucide-panel-left' : 'i-lucide-panel-right'"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

### Collapsible

Use the `collapsible` prop to change the collapse behavior of the sidebar. Defaults to `offcanvas`.

- `offcanvas`: The sidebar slides out of view completely.
- `icon`: The sidebar shrinks to icon-only width.
- `none`: The sidebar is not collapsible.

```vue [SidebarPropsExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem, SidebarProps } from 'pohon-ui'

// Ignore the props for the example
defineProps<Pick<SidebarProps, 'variant' | 'collapsible' | 'side'>>()

const open = ref(true)

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div
    class="flex flex-1"
    :class="[
      variant === 'inset' && 'bg-neutral-50 dark:bg-neutral-950',
      side === 'right' && 'flex-row-reverse'
    ]"
  >
    <PSidebar
      v-model:open="open"
      :variant="variant"
      :collapsible="collapsible"
      :side="side"
      :ui="{
        container: 'h-full'
      }"
    >
      <template #header>
        <PIcon name="i-logos-nuxt-icon" class="size-8" />
      </template>

      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="flex-1 flex flex-col overflow-hidden lg:peer-data-[variant=floating]:my-4 peer-data-[variant=inset]:m-4 lg:peer-data-[variant=inset]:not-peer-data-[collapsible=offcanvas]:ms-0 peer-data-[variant=inset]:rounded-xl peer-data-[variant=inset]:shadow-sm peer-data-[variant=inset]:ring peer-data-[variant=inset]:ring-ring bg-background">
      <div
        class="h-(--ui-header-height) shrink-0 flex items-center px-4"
        :class="[
          variant !== 'floating' && 'border-b border-border',
          side === 'right' && 'justify-end'
        ]"
      >
        <PButton
          :icon="side === 'left' ? 'i-lucide-panel-left' : 'i-lucide-panel-right'"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

> [!TIP]
> See: #slots
> 
> You can access the `state` in the slot props to customize the content of the sidebar when it is collapsed.

### Side

Use the `side` prop to change the side of the sidebar. Defaults to `left`.

```vue [SidebarPropsExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem, SidebarProps } from 'pohon-ui'

// Ignore the props for the example
defineProps<Pick<SidebarProps, 'variant' | 'collapsible' | 'side'>>()

const open = ref(true)

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div
    class="flex flex-1"
    :class="[
      variant === 'inset' && 'bg-neutral-50 dark:bg-neutral-950',
      side === 'right' && 'flex-row-reverse'
    ]"
  >
    <PSidebar
      v-model:open="open"
      :variant="variant"
      :collapsible="collapsible"
      :side="side"
      :ui="{
        container: 'h-full'
      }"
    >
      <template #header>
        <PIcon name="i-logos-nuxt-icon" class="size-8" />
      </template>

      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="flex-1 flex flex-col overflow-hidden lg:peer-data-[variant=floating]:my-4 peer-data-[variant=inset]:m-4 lg:peer-data-[variant=inset]:not-peer-data-[collapsible=offcanvas]:ms-0 peer-data-[variant=inset]:rounded-xl peer-data-[variant=inset]:shadow-sm peer-data-[variant=inset]:ring peer-data-[variant=inset]:ring-ring bg-background">
      <div
        class="h-(--ui-header-height) shrink-0 flex items-center px-4"
        :class="[
          variant !== 'floating' && 'border-b border-border',
          side === 'right' && 'justify-end'
        ]"
      >
        <PButton
          :icon="side === 'left' ? 'i-lucide-panel-left' : 'i-lucide-panel-right'"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

### Title

Use the `title` prop to set the title of the sidebar header.

```vue
<template>
  <USidebar title="Navigation">
    <Placeholder class="h-full" />
  </USidebar>
</template>
```

### Description

Use the `description` prop to set the description of the sidebar header.

```vue
<template>
  <USidebar title="Navigation" description="Browse your workspace">
    <Placeholder class="h-full" />
  </USidebar>
</template>
```

### Rail

Use the `rail` prop to display a thin interactive edge on the sidebar that toggles the collapsed state on click. The rail is only rendered when `collapsible` is not `none`.

```vue
<template>
  <USidebar rail collapsible="icon" title="Navigation">
    <Placeholder class="h-full" />
  </USidebar>
</template>
```

### Close

Use the `close` prop to display a close button in the sidebar header. The close button is only rendered when `collapsible` is not `none`.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

```vue
<template>
  <USidebar close rail collapsible="icon" title="Navigation">
    <Placeholder class="h-full" />
  </USidebar>
</template>
```

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

```vue
<template>
  <USidebar close close-icon="i-lucide-panel-right-close" rail collapsible="icon" side="right" title="Navigation">
    <Placeholder class="h-full" />
  </USidebar>
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

### Mode

Use the `mode` prop to change the mode of the sidebar menu on mobile. Defaults to `slideover`.

```vue [SidebarModeExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem, SidebarProps } from 'pohon-ui'

// Ignore the props for the example
defineProps<Pick<SidebarProps, 'mode'>>()

const open = ref(true)

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div class="flex flex-1">
    <PSidebar v-model:open="open" :mode="mode" title="Navigation">
      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="flex-1 flex flex-col">
      <div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-border">
        <PButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

> [!TIP]
> See: #props
> 
> You can use the `menu` prop to customize the menu of the sidebar, it will adapt depending on the mode you choose.

## Examples

### Control open state

You can control the open state by using the `open` prop or the `v-model:open` directive. On desktop it controls the expanded/collapsed state, on mobile it opens/closes the sheet menu.

```vue [SidebarOpenExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value
})

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div class="flex flex-1">
    <PSidebar v-model:open="open" title="Navigation" collapsible="icon">
      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="flex-1 flex flex-col">
      <div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-border">
        <PButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          :aria-label="open ? 'Close sidebar' : 'Open sidebar'"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

> [!NOTE]
> 
> In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the open state of the Sidebar by pressing `O`.

### Persist open state

Use [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) from VueUse or [`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie) instead of `ref` to persist the sidebar state across page reloads.

```vue [SidebarPersistExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const open = useLocalStorage('sidebar-open', true)

defineShortcuts({
  o: () => open.value = !open.value
})

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div class="flex flex-1">
    <PSidebar v-model:open="open" title="Navigation" collapsible="icon">
      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="flex-1 flex flex-col">
      <div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-border">
        <PButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

> [!NOTE]
> 
> The only difference with the previous example is replacing `ref(true)` with `useLocalStorage('sidebar-open', true)`.

### With custom width

The sidebar width is controlled by the `--sidebar-width` CSS variable (defaults to `16rem`). The collapsed icon width is controlled by `--sidebar-width-icon` (defaults to `4rem`).

Override them globally in your CSS or per-instance with the `style` attribute.

```vue [SidebarWidthExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const open = ref(true)

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div class="flex flex-1">
    <PSidebar
      v-model:open="open"
      collapsible="icon"
      :style="{ '--sidebar-width': '20rem' }"
    >
      <PNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </PSidebar>

    <div class="flex-1 flex flex-col">
      <div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-border">
        <PButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

### With header

To position the sidebar below a [Header](/pohon/components/header), customize the `gap` and `container` using the `ui` prop.

```vue [SidebarHeaderExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const open = ref(true)

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <div class="flex flex-col flex-1">
    <PHeader toggle-side="left" :ui="{ container: 'px-4!' }">
      <template #toggle>
        <PButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </template>
    </PHeader>

    <div class="flex flex-1 min-h-0">
      <PSidebar
        v-model:open="open"
        collapsible="icon"
        :ui="{
          gap: 'h-[calc(100%-var(--ui-header-height))]',
          container: 'absolute top-(--ui-header-height) bottom-0 h-[calc(100%-var(--ui-header-height))]'
        }"
      >
        <PNavigationMenu
          :items="items"
          orientation="vertical"
          :ui="{ link: 'p-1.5 overflow-hidden' }"
        />
      </PSidebar>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>
  </div>
</template>
```

> [!NOTE]
> 
> The `--ui-header-height` variable defaults to `4rem` and is used by the Header. Adjust it if your navbar uses a different height.

### With AI chat

Use the sidebar on the right side with [ChatMessages](/pohon/components/chat-messages) and [ChatPrompt](/pohon/components/chat-prompt) to create an AI chat panel.

```vue [SidebarChatExample.vue]
<script setup lang="ts">
import type { UIMessage } from 'ai'
import { isTextUIPart } from 'ai'
import { useChat } from '@ai-sdk/vue'
import { isPartStreaming } from 'pohon-ui/utils/ai'
import { Markdown } from '@comark/vue'
import shiki from '@comark/vue/plugins/shiki'
import security from '@comark/vue/plugins/security'

const plugins = [shiki(), security({ blockedTags: ['script', 'style', 'iframe', 'object', 'embed', 'form'] })]

const open = ref(true)
const input = ref('')

const initialMessages: UIMessage[] = [{
  id: '1',
  role: 'user',
  parts: [{ type: 'text', text: 'What is Pohon UI?' }]
}, {
  id: '2',
  role: 'assistant',
  parts: [{ type: 'text', text: 'Pohon UI is a Vue component library built on Akar, UnoCSS, and UnoCSS Variants. It provides 125+ accessible components for building modern web apps.' }]
}]

const { messages, status, error, sendMessage, regenerate, stop } = useChat({
  messages: initialMessages
})

function onSubmit() {
  if (!input.value.trim()) return

  sendMessage({ text: input.value })

  input.value = ''
}

const ui = {
  prose: {
    p: { base: 'my-2 text-sm/6' },
    li: { base: 'my-0.5 text-sm/6' },
    ul: { base: 'my-2' },
    ol: { base: 'my-2' },
    h1: { base: 'text-xl mb-4' },
    h2: { base: 'text-lg mt-6 mb-3' },
    h3: { base: 'text-base mt-4 mb-2' },
    h4: { base: 'text-sm mt-3 mb-1.5' },
    code: { base: 'text-xs' },
    pre: { root: 'my-2', base: 'text-xs/5' },
    table: { root: 'my-2' },
    hr: { base: 'my-4' }
  }
}
</script>

<template>
  <div class="flex flex-1">
    <div class="flex-1 flex flex-col">
      <div class="h-(--ui-header-height) shrink-0 flex items-center justify-end px-4 border-b border-border">
        <PButton
          icon="i-lucide-panel-right"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>

    <PSidebar
      v-model:open="open"
      side="right"
      title="AI Chat"
      close
      :style="{ '--sidebar-width': '20rem' }"
      :ui="{ container: 'h-full' }"
    >
      <PTheme :ui="ui">
        <PChatMessages
          :messages="messages"
          :status="status"
          compact
          class="px-0"
        >
          <template #content="{ message }">
            <template v-for="(part, index) in message.parts" :key="`${message.id}-${part.type}-${index}`">
              <template v-if="isTextUIPart(part)">
                <Markdown
                  v-if="message.role === 'assistant'"
                  :value="part.text"
                  :streaming="isPartStreaming(part)"
                  :plugins="plugins"
                  class="*:first:mt-0 *:last:mb-0"
                />
                <p v-else-if="message.role === 'user'" class="whitespace-pre-wrap text-sm/6">
                  {{ part.text }}
                </p>
              </template>
            </template>
          </template>
        </PChatMessages>
      </PTheme>

      <template #footer>
        <PChatPrompt
          v-model="input"
          :error="error"
          :autofocus="false"
          variant="subtle"
          size="sm"
          @submit="onSubmit"
        >
          <PChatPromptSubmit
            size="sm"
            :status="status"
            @stop="stop()"
            @reload="regenerate()"
          />
        </PChatPrompt>
      </template>
    </PSidebar>
  </div>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    sidebar: {
      slots: {
        root: 'peer [--sidebar-width:16rem] [--sidebar-width-icon:4rem]',
        gap: 'relative w-(--sidebar-width) bg-transparent',
        container: 'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) lg:flex',
        inner: 'flex size-full flex-col overflow-hidden divide-y divide-divide',
        header: 'flex items-center gap-1.5 overflow-hidden px-4 min-h-(--ui-header-height)',
        wrapper: 'min-w-0 flex-1',
        title: 'color-text-highlighted font-600 truncate',
        description: 'color-text-muted text-sm truncate',
        actions: 'flex items-center gap-1.5 shrink-0',
        close: '',
        body: 'flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4',
        footer: 'flex items-center gap-1.5 overflow-hidden p-4',
        rail: [
          'absolute inset-y-0 z-20 hidden w-4 after:absolute after:inset-y-0 after:left-1/2 after:w-px lg:flex hover:after:bg-(--ui-border-accented)',
          'after:transition-colors'
        ]
      },
      variants: {
        transition: {
          true: {
            gap: 'transition-[width] duration-280 ease-out',
            container: 'transition-[left,right,width] duration-280 ease-out',
            rail: 'transition-all ease-out'
          }
        },
        side: {
          left: {
            container: 'left-0 border-e border-border',
            rail: 'end-0 translate-x-1/2'
          },
          right: {
            container: 'right-0 border-s border-border',
            rail: '-start-px -translate-x-1/2'
          }
        },
        collapsible: {
          offcanvas: {
            root: 'group/sidebar hidden lg:block',
            gap: 'data-[state=collapsed]:w-0'
          },
          icon: {
            root: 'group/sidebar hidden lg:block',
            gap: 'data-[state=collapsed]:w-(--sidebar-width-icon)',
            container: 'data-[state=collapsed]:w-(--sidebar-width-icon)',
            actions: 'group-data-[state=collapsed]/sidebar:hidden',
            body: 'group-data-[state=collapsed]/sidebar:overflow-hidden'
          },
          none: {
            root: 'h-full w-(--sidebar-width)'
          }
        },
        variant: {
          sidebar: {},
          floating: {
            container: 'p-4 border-transparent',
            inner: 'rounded-lg ring ring-ring shadow-lg',
            rail: 'inset-y-4'
          },
          inset: {
            container: 'py-4 border-transparent',
            inner: 'divide-transparent',
            rail: 'inset-y-4'
          }
        }
      },
      compoundVariants: [
        {
          side: 'left',
          collapsible: [
            'offcanvas',
            'icon'
          ],
          class: {
            rail: 'cursor-w-resize data-[state=collapsed]:cursor-e-resize'
          }
        },
        {
          side: 'right',
          collapsible: [
            'offcanvas',
            'icon'
          ],
          class: {
            rail: 'cursor-e-resize data-[state=collapsed]:cursor-w-resize'
          }
        },
        {
          side: 'left',
          collapsible: 'none',
          class: {
            root: 'border-e border-border'
          }
        },
        {
          side: 'right',
          collapsible: 'none',
          class: {
            root: 'border-s border-border'
          }
        },
        {
          side: 'left',
          collapsible: 'offcanvas',
          class: {
            container: 'data-[state=collapsed]:-left-(--sidebar-width)'
          }
        },
        {
          side: 'right',
          collapsible: 'offcanvas',
          class: {
            container: 'data-[state=collapsed]:-right-(--sidebar-width)'
          }
        },
        {
          variant: 'floating',
          collapsible: 'icon',
          class: {
            gap: 'data-[state=collapsed]:w-[calc(var(--sidebar-width-icon)+--spacing(8))]',
            container: 'data-[state=collapsed]:w-[calc(var(--sidebar-width-icon)+--spacing(8)+2px)]'
          }
        },
        {
          variant: 'floating',
          collapsible: 'none',
          class: {
            root: 'p-4 border-0'
          }
        },
        {
          variant: 'inset',
          collapsible: 'none',
          class: {
            root: 'py-4 border-0'
          }
        },
        {
          variant: 'floating',
          side: 'left',
          class: {
            rail: 'end-4'
          }
        },
        {
          variant: 'floating',
          side: 'right',
          class: {
            rail: 'start-[calc(--spacing(4)-1px)]'
          }
        }
      ]
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Sidebar.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/sidebar.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Sidebar.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Sidebar source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Sidebar.vue)

### Props

- **as** — `any; optional; default: "aside"`: The element or component this component should render as.
- **variant** — `"sidebar" | "inset" | "floating" | undefined; optional; default: "sidebar"`: The visual variant of the sidebar.
- **collapsible** — `"icon" | "none" | "offcanvas" | undefined; optional; default: "offcanvas"`: The collapse behavior of the sidebar. - \`offcanvas\`: The sidebar slides out of view completely. - \`icon\`: The sidebar shrinks to icon-only width. - \`none\`: The sidebar is not collapsible.
- **side** — `"left" | "right" | undefined; optional; default: "left"`: The side to render the sidebar on.
- **title** — `string | undefined; optional`: The title displayed in the sidebar header.
- **description** — `string | undefined; optional`: The description displayed in the sidebar header.
- **close** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: false`: Display a close button to collapse the sidebar. Only renders when \`collapsible\` is not \`none\`. \`{ size: 'md', color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **closeIcon** — `any; optional`: The icon displayed in the close button.
- **rail** — `boolean | undefined; optional; default: false`: Display a rail on the sidebar edge to toggle collapse. Only renders when \`collapsible\` is not \`none\`.
- **transition** — `boolean | undefined; optional; default: true`: Animate the sidebar when collapsing or expanding.
- **mode** — `T | undefined; optional; default: "slideover" as never`: The mode of the sidebar menu on mobile.
- **menu** — `SidebarMenu<T> | undefined; optional`: The props for the sidebar menu component on mobile.
- **ui** — `{ root?: SlotClass; gap?: SlotClass; container?: SlotClass; inner?: SlotClass; header?: SlotClass; wrapper?: SlotClass; title?: SlotClass; description?: SlotClass; actions?: SlotClass; close?: SlotClass; body?: SlotClass; footer?: SlotClass; rail?: SlotClass; } | undefined; optional`
- **open** — `boolean | undefined; optional; default: true`

### Slots

- **header** — `{ state: SidebarState; open: boolean; close: () => void; }`
- **title** — `{ state: SidebarState; }`
- **description** — `{ state: SidebarState; }`
- **actions** — `{ state: SidebarState; }`
- **close** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; gap: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; inner: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; rail: (props?: Record<string, any> | undefined) => string | undefined; }; state: SidebarState; }`
- **default** — `{ state: SidebarState; open: boolean; close: () => void; }`
- **footer** — `{ state: SidebarState; open: boolean; close: () => void; }`
- **rail** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; gap: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; inner: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; actions: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; rail: (props?: Record<string, any> | undefined) => string | undefined; }; state: SidebarState; }`
- **content** — `{ close: () => void; }`

### Events

- **update:open** — `[value: boolean]`
