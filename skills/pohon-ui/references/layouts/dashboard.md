# Dashboard Layout

Build admin interfaces with resizable sidebars, multi-panel layouts, and toolbars. Examples use Nuxt layouts; in plain Vue, put the `PDashboardGroup` shell in a layout component around `<RouterView />`. API: [dashboard-group](https://vinicunca.dev/raw/pohon/components/dashboard-group.md), [dashboard-sidebar](https://vinicunca.dev/raw/pohon/components/dashboard-sidebar.md), [dashboard-panel](https://vinicunca.dev/raw/pohon/components/dashboard-panel.md).

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
import type { NavigationMenuItem } from 'pohon-ui';

const items = computed<Array<NavigationMenuItem>>(() => [{
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
}]);
</script>

<template>
  <PDashboardGroup>
    <PDashboardSidebar
      collapsible
      resizable
    >
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
definePageMeta({ layout: 'dashboard' });
</script>

<template>
  <PDashboardPanel>
    <template #header>
      <PDashboardNavbar title="Home">
        <template #leading>
          <PDashboardSidebarCollapse />
        </template>
        <template #right>
          <PButton
            icon="i-lucide-plus"
            label="New"
          />
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
| `storage` | `'cookie'` | Where sizes and collapsed state persist: `'cookie'` or `'local'` (localStorage) |
| `storage-key` | `'dashboard'` | Storage key prefix |
| `persistent` | `true` | Set `false` to skip persisting |
| `unit` | `'%'` | Size unit: `'%'`, `'rem'`, `'px'` |

### DashboardSidebar

Resizable, collapsible sidebar. Must be inside `DashboardGroup`.

| Prop | Default | Purpose |
|---|---|---|
| `resizable` | `false` | Drag to resize |
| `collapsible` | `false` | Collapse when dragged to edge |
| `side` | `'left'` | `'left'` or `'right'` |
| `mode` | `'slideover'` | Mobile: `'modal'`, `'slideover'`, `'drawer'` |
| `min-size` / `default-size` / `max-size` | `10` / `15` / `20` | Width in the group's `unit` |
| `collapsed-size` | `0` | Width when collapsed (set it to keep an icon rail) |

`#header`, `#default`, and `#footer` receive `{ collapsed, collapse }`: `collapsed` is the state, `collapse(value)` sets it. Control state with `v-model:collapsed` (desktop) and `v-model:open` (mobile menu).

### DashboardPanel

Content panel with `#header`, `#body` (scrollable), `#footer`, and `#default` (raw, no scroll) slots. Give each panel a unique `id` when you use `resizable`, so its size persists.

### DashboardNavbar / DashboardToolbar

Navbar: `title` and `icon` props, `#leading`, `#title`, `#trailing`, `#left`, `#default`, `#right` slots. Put `PDashboardSidebarCollapse` in `#leading` to collapse the sidebar on desktop. The navbar already renders the mobile sidebar toggle (`toggle` prop, `toggle-side`).
Toolbar: `#left`, `#default`, `#right` slots; sits below the navbar for filters and actions.

### PNavigationMenu in sidebar

Always pass `:collapsed="collapsed"` to `PNavigationMenu` inside a collapsible sidebar — it auto-hides labels and centers icons. Use `NavigationMenuItem[][]` (array of arrays) for separate groups (main nav + footer links).

## Multi-panel (list-detail)

```vue [pages/dashboard/inbox.vue]
<script setup lang="ts">
definePageMeta({ layout: 'dashboard' });
</script>

<template>
  <PDashboardPanel
    id="inbox-list"
    resizable
  >
    <template #header>
      <PDashboardNavbar title="Inbox" />
    </template>
    <template #body>
      <!-- Email list -->
    </template>
  </PDashboardPanel>

  <PDashboardPanel
    id="inbox-detail"
    class="hidden lg:flex"
  >
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
    <!-- groups: [{ id: 'links', label: 'Go to', items: [{ label: 'Inbox', icon: 'i-lucide-inbox', to: '/inbox' }] }] -->
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
