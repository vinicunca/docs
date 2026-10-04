# Data Tables

Complete patterns for displaying and managing tabular data.

## Basic table

```vue
<script setup lang="ts">
import type { TableColumn } from 'pohon-ui'

const data = ref([
  { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob', email: 'bob@example.com', role: 'Editor' }
])

const columns: TableColumn<typeof data.value[number]>[] = [{
  accessorKey: 'name',
  header: 'Name'
}, {
  accessorKey: 'email',
  header: 'Email'
}, {
  accessorKey: 'role',
  header: 'Role'
}]
</script>

<template>
  <PTable :data="data" :columns="columns" />
</template>
```

## With search and filters (dashboard)

```vue
<script setup lang="ts">
import type { TableColumn } from 'pohon-ui'

const search = ref('')
const roleFilter = ref('All')

const rows = ref([
  { name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob', email: 'bob@example.com', role: 'Editor', status: 'Inactive' }
])

const columns: TableColumn[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
  { accessorKey: 'status', header: 'Status' },
  { id: 'actions' }
]

const filteredRows = computed(() => {
  return rows.value.filter(row => {
    const matchesSearch = !search.value || row.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesRole = roleFilter.value === 'All' || row.role === roleFilter.value
    return matchesSearch && matchesRole
  })
})
</script>

<template>
  <PDashboardPanel>
    <template #header>
      <PDashboardNavbar title="Users" />

      <PDashboardToolbar>
        <template #left>
          <PInput v-model="search" icon="i-lucide-search" placeholder="Search users..." />
        </template>
        <template #right>
          <PSelect v-model="roleFilter" :items="['All', 'Admin', 'Editor', 'Viewer']" />
        </template>
      </PDashboardToolbar>
    </template>

    <template #body>
      <PTable :data="filteredRows" :columns="columns">
        <template #status-cell="{ row }">
          <PBadge :color="row.original.status === 'Active' ? 'success' : 'neutral'" :label="row.original.status" variant="subtle" />
        </template>

        <template #actions-cell="{ row }">
          <PDropdownMenu
            :items="[
              [{ label: 'Edit', icon: 'i-lucide-pencil', onSelect: () => edit(row.original) }],
              [{ label: 'Delete', icon: 'i-lucide-trash', color: 'error', onSelect: () => remove(row.original) }]
            ]"
          >
            <PButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" />
          </PDropdownMenu>
        </template>
      </PTable>
    </template>
  </PDashboardPanel>
</template>
```

## With row selection

Row selection uses TanStack Table's `rowSelection` state — a `Record<string, boolean>` keyed by row index.

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
const rowSelection = ref<Record<string, boolean>>({})
</script>

<template>
  <PTable ref="table" v-model:row-selection="rowSelection" :data="data" :columns="columns" />

  <div class="px-4 py-3.5 text-sm color-text-muted">
    {{ table?.tableApi?.getFilteredSelectedRowModel().rows.length || 0 }} of
    {{ table?.tableApi?.getFilteredRowModel().rows.length || 0 }} row(s) selected.
  </div>
</template>
```

Add a checkbox column using the `h` function. Use tri-state `modelValue` (`true`, `false`, or `'indeterminate'`) for the "select all" header:

```ts
import { h } from 'vue'

const PCheckbox = resolveComponent('PCheckbox')

const columns: TableColumn[] = [{
  id: 'select',
  header: ({ table }) => h(PCheckbox, {
    'modelValue': table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected(),
    'onUpdate:modelValue': (value: boolean | 'indeterminate') => table.toggleAllPageRowsSelected(!!value),
    'aria-label': 'Select all'
  }),
  cell: ({ row }) => h(PCheckbox, {
    'modelValue': row.getIsSelected(),
    'onUpdate:modelValue': (value: boolean | 'indeterminate') => row.toggleSelected(!!value),
    'aria-label': 'Select row'
  })
},
// ... other columns
]
```

## With pagination

Use `v-model:pagination` on `PTable` with TanStack's `getPaginationRowModel`, then wire `PPagination` to the table API. `PPagination`'s `total` is total **items** (not pages) — it calculates page count from `total / items-per-page`.

```vue
<script setup lang="ts">
import { getPaginationRowModel } from '@tanstack/vue-table'

const table = useTemplateRef('table')

const pagination = ref({
  pageIndex: 0,
  pageSize: 5
})
</script>

<template>
  <PTable
    ref="table"
    v-model:pagination="pagination"
    :data="data"
    :columns="columns"
    :pagination-options="{ getPaginationRowModel: getPaginationRowModel() }"
  />

  <div class="flex justify-end p-4">
    <PPagination
      :page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
      :items-per-page="table?.tableApi?.getState().pagination.pageSize"
      :total="table?.tableApi?.getFilteredRowModel().rows.length"
      @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
    />
  </div>
</template>
```

## With async data (Nuxt)

Use `status === 'pending' || status === 'idle'` for loading state — `idle` covers the initial render before `useLazyFetch` starts.

```vue
<script setup lang="ts">
const { data, status } = useLazyFetch('/api/users', { server: false })
</script>

<template>
  <PTable :data="data" :columns="columns" :loading="status === 'pending' || status === 'idle'" />
</template>
```

For server-side pagination:

```vue
<script setup lang="ts">
const page = ref(1)

const { data, status } = await useAsyncData(
  'users',
  () => $fetch('/api/users', { query: { page: page.value } }),
  { watch: [page] }
)
</script>

<template>
  <PTable :data="data?.items" :columns="columns" :loading="status === 'pending'" />

  <div class="flex justify-end p-4">
    <PPagination v-model:page="page" :total="data?.total" :items-per-page="data?.pageSize" />
  </div>
</template>
```

## Tips

- Table is built on [TanStack Table v8](https://tanstack.com/table/v8) — columns use `ColumnDef` format with `accessorKey`, `header`, `cell`
- Use `#<column>-cell` and `#<column>-header` template slots to customize rendering with Vue templates
- Alternatively, use the `h` function inside `header` and `cell` column properties for inline rendering
- Row data in slots is accessed via `row.original` (not `row` directly)
- Use `v-model:row-selection` for selection, `v-model:sorting` for sort state
- Wrap tables in `PDashboardPanel` with `#header` toolbar for the dashboard pattern
- For empty states, use the `#empty` slot
