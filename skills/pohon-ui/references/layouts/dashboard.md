# Dashboard Layout

Build admin interfaces with resizable sidebars, multi-panel layouts, and toolbars.

## When to use

- Admin panels, back-office UIs
- Email clients, project management tools
- Any app with a persistent sidebar and content panels
- Combine with chat or editor layouts for specialized dashboards

## Component tree

```
PApp
└── NuxtLayout (dashboard)
    └── PDashboardGroup
        ├── PDashboardSidebar
        │   ├── #header (logo, search button)
        │   ├── #default (navigation) — receives { collapsed } slot prop
        │   └── #footer (user menu)
        └── NuxtPage
            └── PDashboardPanel
                ├── #header → PDashboardNavbar + PDashboardToolbar
                ├── #body (scrollable content)
                └── #footer (optional)
```

## Layout

```vue [layouts/dashboard.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from 'pohon-ui'

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Home',
  icon: 'i-lucide-house',
  to: '/dashboard'
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  to: '/dashboard/inbox'
}, {
  label: 'Users',
  icon: 'i-lucide-users',
  to: '/dashboard/users'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  to: '/dashboard/settings'
}])
</script>

<template>
  <PDashboardGroup>
    <PDashboardSidebar collapsible resizable>
      <template #header="{ collapsed }">
        <PDashboardSearchButton :collapsed="collapsed" />
      </template>

      <template #default="{ collapsed }">
        <PNavigationMenu
          :collapsed="collapsed"
          :items="items"
          orientation="vertical"
        />
      </template>

      <template #footer="{ collapsed }">
        <PButton
          :icon="collapsed ? 'i-lucide-log-out' : undefined"
          :label="collapsed ? undefined : 'Sign out'"
          color="neutral"
          variant="ghost"
          block
        />
      </template>
    </PDashboardSidebar>

    <slot />
  </PDashboardGroup>
</template>
```

## Page

```vue [pages/dashboard/index.vue]
<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
</script>

<template>
  <PDashboardPanel>
    <template #header>
      <PDashboardNavbar title="Home">
        <template #leading>
          <PDashboardSidebarCollapse />
        </template>
        <template #right>
          <PButton icon="i-lucide-plus" label="New" />
        </template>
      </PDashboardNavbar>
    </template>

    <template #body>
      <!-- Page content -->
    </template>
  </PDashboardPanel>
</template>
```

### Common mistakes

- Forgetting `definePageMeta({ layout: 'dashboard' })` — the page won't use the dashboard layout without it.
- Putting content directly in `PDashboardPanel` without using `#body` slot — content won't scroll properly.
- Not handling the `collapsed` slot prop — sidebar content should adapt when collapsed (hide labels, center icons).

## Key components

### DashboardGroup

Root wrapper. Manages sidebar state and persistence.

| Prop | Default | Purpose |
|---|---|---|
| `storage` | `'cookie'` | `'cookie'`, `'localStorage'`, `false` |
| `storage-key` | `'dashboard'` | Storage key name |

### DashboardSidebar

Resizable, collapsible sidebar. Must be inside `DashboardGroup`.

| Prop | Default | Purpose |
|---|---|---|
| `resizable` | `false` | Drag to resize |
| `collapsible` | `false` | Collapse when dragged to edge |
| `side` | `'left'` | `'left'` or `'right'` |
| `mode` | `'slideover'` | Mobile: `'modal'`, `'slideover'`, `'drawer'` |

All slots receive `{ collapsed, collapse }` — `collapsed` is the boolean state, `collapse(value)` toggles it programmatically. Use `v-model:collapsed` and `v-model:open` (mobile) for state control.

### DashboardPanel

Content panel with `#header`, `#body` (scrollable), `#footer`, and `#default` (raw, no scroll) slots.

### DashboardNavbar / DashboardToolbar

Navbar: `#leading`, `#left`, `#default`, `#right` slots + `title` prop. Use `PDashboardSidebarCollapse` in `#leading` to collapse the sidebar on desktop. The navbar already renders a mobile toggle, customized with its `toggle` prop.
Toolbar: same slots, sits below navbar for filters/actions.

### PNavigationMenu in sidebar

Always pass `:collapsed="collapsed"` to `PNavigationMenu` inside a collapsible sidebar — it auto-hides labels and centers icons. Use `NavigationMenuItem[][]` (array of arrays) for separate groups (main nav + footer links).

## Multi-panel (list-detail)

```vue [pages/dashboard/inbox.vue]
<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
</script>

<template>
  <PDashboardPanel id="inbox-list" resizable>
    <template #header>
      <PDashboardNavbar title="Inbox" />
    </template>
    <template #body>
      <!-- Email list -->
    </template>
  </PDashboardPanel>

  <PDashboardPanel id="inbox-detail" class="hidden lg:flex">
    <template #header>
      <PDashboardNavbar title="Message" />
    </template>
    <template #body>
      <!-- Email content -->
    </template>
  </PDashboardPanel>
</template>
```

## With toolbar

```vue
<PDashboardPanel>
  <template #header>
    <PDashboardNavbar title="Users" />
    <PDashboardToolbar>
      <template #left>
        <PInput icon="i-lucide-search" placeholder="Search..." />
      </template>
      <template #right>
        <PSelect :items="['All', 'Active', 'Inactive']" />
      </template>
    </PDashboardToolbar>
  </template>
</PDashboardPanel>
```

## With search

```vue [layouts/dashboard.vue]
<template>
  <PDashboardGroup>
    <PDashboardSidebar>
      <template #header>
        <PDashboardSearchButton />
      </template>
    </PDashboardSidebar>

    <slot />

    <PDashboardSearch :groups="searchGroups" />
  </PDashboardGroup>
</template>
```

## Right sidebar

```vue
<PDashboardGroup>
  <PDashboardSidebar collapsible resizable>
    <!-- Left sidebar -->
  </PDashboardSidebar>

  <slot />

  <PDashboardSidebar side="right" resizable>
    <!-- Right sidebar -->
  </PDashboardSidebar>
</PDashboardGroup>
```
