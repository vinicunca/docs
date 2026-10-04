---
title: Listbox
description: A control that allows the user to toggle between checked and not checked.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Listbox"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Listbox"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Supports items, labels, groups of items.","Focus is fully managed.","Full keyboard navigation.","Supports Right to Left direction.","Different selection behavior."]
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

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { ListboxContent, ListboxFilter, ListboxGroup, ListboxGroupLabel, ListboxItem, ListboxItemIndicator, ListboxRoot, ListboxVirtualizer } from 'akar'
</script>

<template>
  <ListboxRoot>
    <ListboxFilter />

    <ListboxContent>
      <ListboxItem>
        <ListboxItemIndicator />
      </ListboxItem>

      <!-- or with group -->
      <ListboxGroup>
        <ListboxGroupLabel />
        <ListboxItem>
          <ListboxItemIndicator />
        </ListboxItem>
      </ListboxGroup>

      <!-- or with virtual -->
      <ListboxVirtualizer>
        <ListboxItem>
          <ListboxItemIndicator />
        </ListboxItem>
      </ListboxVirtualizer>
    </ListboxContent>
  </ListboxRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a listbox. An `input` will also render when used within a `form` to ensure events propagate correctly.

:akar-api{name="ListboxRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Filter

Input element to perform filtering.

:akar-api{name="ListboxFilter"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Content

Contains all the listbox group and items.

:akar-api{name="ListboxContent"}

### Item

The item component.

:akar-api{name="ListboxItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### ItemIndicator

Renders when the item is selected. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

:akar-api{name="ListboxItemIndicator"}

### Group

Used to group multiple items. use in conjunction with `ListboxGroupLabel` to ensure good accessibility via automatic labelling.

:akar-api{name="ListboxGroup"}

### GroupLabel

Used to render the label of a group. It won't be focusable using arrow keys.

:akar-api{name="ListboxGroupLabel"}

### Virtualizer

Virtual container to achieve list virtualization.

:akar-api{name="ListboxVirtualizer"}

## Examples

### Binding objects as values

Unlike native HTML form controls which only allow you to provide strings as values, Akar supports binding complex objects as well.

```vue{12,16,21}
<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot } from 'akar'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]
const selectedPeople = ref(people[0])
</script>

<template>
  <ListboxRoot v-model="selectedPeople">
    <ListboxContent>
      <ListboxItem
        v-for="person in people"
        :key="person.id"
        :value="person"
        :disabled="person.unavailable"
      >
        {{ person.name }}
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>
```

### Selecting multiple values

The `Listbox` component allows you to select multiple values. You can enable this by providing an array of values instead of a single value.

```vue{12,18}
<script setup lang="ts">
import { ListboxRoot } from 'akar'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]
const selectedPeople = ref([people[0], people[1]])
</script>

<template>
  <ListboxRoot
    v-model="selectedPeople"
    multiple
  >
    ...
  </ListboxRoot>
</template>
```

### Custom filtering

```vue{13,15-16,21,24}
<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot, useFilter } from 'akar'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]
const selectedPeople = ref(people[0])
const searchTerm = ref('')

const { startsWith } = useFilter({ sensitivity: 'base' })
const filteredPeople = computed(() => people.filter(p => startsWith(p.name, searchTerm.value)))
</script>

<template>
  <ListboxRoot v-model="selectedPeople">
    <ListboxFilter v-model="searchTerm" />
    <ListboxContent>
      <ListboxItem
        v-for="person in filteredPeople"
        :key="person.id"
        :value="person"
      >
        {{ person.name }}
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>
```

### Virtual List

Rendering a long list of item can slow down the app, thus using virtualization would significantly improve the performance.

See the [virtualization guide](/akar/guides/virtualization.md) for more general info on virtualization.

```vue{18-23}
<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot, ListboxVirtualizer } from 'akar'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
  // and a lot more
]
</script>

<template>
  <ListboxRoot>
    <ListboxContent>
      <ListboxVirtualizer
        v-slot="{ option }"
        :options="people"
        :text-content="(opt) => opt.name"
      >
        <ListboxItem :value="option">
          {{ person.name }}
        </ListboxItem>
      </ListboxVirtualizer>
    </ListboxContent>
  </ListboxRoot>
</template>
```

## Accessibility

Adheres to the [Listbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Enter"],"description":"When highlight on `ListboxItem`, selects the focused item. "},{"keys":["ArrowDown"],"description":"When focus is on `ListboxItem`, moves focus to the next item. "},{"keys":["ArrowUp"],"description":"When focus is on `ListboxItem`, moves focus to the previous item. "},{"keys":["Home"],"description":"Moves focus and highlight to the first item."},{"keys":["End"],"description":"Moves focus and highlight to the last item."},{"keys":["Ctrl/Cmd + A"],"description":"Select all the items."}]
---
::
