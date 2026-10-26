---
title: Pagination
description: Displays data in paged format and provides navigation between pages.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Pagination"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Pagination"}

## Features

::akar-highlights
---
features: ["Enable quick access to first, or last page","Enable to show edges constantly, or not"]
---
::

## Installation

Install the component from your command line.

::code-group{sync="pm"}

```bash [pnpm]
pnpm add akar
```

```bash [yarn]
yarn add akar
```

```bash [npm]
npm install akar
```

```bash [bun]
bun add akar
```

::

### Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'akar';
</script>

<template>
  <PaginationRoot>
    <PaginationList v-slot="{ items }">
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
        />
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
</template>
```

## API Reference

### Root

Contains all of the paginations parts.

:akar-api{name="PaginationRoot"}

### List

Used to show the list of pages. It also makes pagination accessible to assistive technologies.

:akar-api{name="PaginationList"}

### Item

Used to render the button that changes the current page. Reka's docs called this part `PaginationItem`; in Akar v2.0.20 the export is `PaginationListItem`.

:akar-api{name="PaginationListItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-selected]","values":["true",""]},{"attribute":"[data-type]","values":["page"]}]
---
::

### Ellipsis

Placeholder element when the list is long, and only a small amount of `siblingCount` was set and `showEdges` was set to `true`.

:akar-api{name="PaginationEllipsis"}

::akar-data-attributes
---
data: [{"attribute":"[data-type]","values":["ellipsis"]}]
---
::

### First

Triggers that set the page value to 1

:akar-api{name="PaginationFirst"}

### Prev

Triggers that set the page value to the previous page

:akar-api{name="PaginationPrev"}

### Next

Triggers that set the page value to the next page

:akar-api{name="PaginationNext"}

### Last

Triggers that set the page value to the last page

:akar-api{name="PaginationLast"}

## Examples

### With ellipsis

You can add `PaginationEllipsis` as a visual cue for more previous and after items.

```vue{10,14}
<script setup lang="ts">
import { PaginationEllipsis, PaginationList, PaginationListItem, PaginationRoot } from 'akar'
</script>

<template>
  <PaginationRoot>
    <PaginationList v-slot="{ items }">
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
        />
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
    </PaginationList>
  </PaginationRoot>
</template>
```

### With first/last button

You can add `PaginationFirst` to allow user to navigate to first page, or `PaginationLast` to navigate to last page.

```vue{8,10}
<script setup lang="ts">
import { PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationRoot } from 'akar'
</script>

<template>
  <PaginationRoot>
    <PaginationList>
      <PaginationFirst />
      ...
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
</template>
```

### Control page programmatically

You can control the current page by passing it a reactive value.

```vue{6,10,11}
<script setup lang="ts">
import { PaginationRoot } from 'akar'
import { ref } from 'vue'
import { Select } from './custom-select'

const currentPage = ref(1)
</script>

<template>
  <Select v-model="currentPage" />
  <PaginationRoot v-model:page="currentPage">
    ...
  </PaginationRoot>
</template>
```

## Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"Moves focus to the next focusable element."},{"keys":["Space"],"description":" When focus is on a any trigger, trigger selected page or arrow navigation "},{"keys":["Enter"],"description":" When focus is on a any trigger, trigger selected page or arrow navigation "}]
---
::
