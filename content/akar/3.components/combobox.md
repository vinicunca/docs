---
title: Combobox
description: Choose from a list of suggested values with full keyboard support.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Combobox"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Combobox"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Offers 2 positioning modes.","Supports items, labels, groups of items.","Focus is fully managed.","Full keyboard navigation.","Supports custom placeholder.","Supports Right to Left direction."]
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
<script setup lang="ts">
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxCancel,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport,
} from 'akar';
</script>

<template>
  <ComboboxRoot>
    <ComboboxAnchor>
      <ComboboxInput />
      <ComboboxTrigger />
      <ComboboxCancel />
    </ComboboxAnchor>

    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxViewport>
          <ComboboxEmpty />

          <ComboboxItem>
            <ComboboxItemIndicator />
          </ComboboxItem>

          <ComboboxSeparator />

          <ComboboxGroup>
            <ComboboxLabel />
            <ComboboxItem>
              <ComboboxItemIndicator />
            </ComboboxItem>
          </ComboboxGroup>
        </ComboboxViewport>

        <ComboboxArrow />
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a Combobox

:akar-api{name="ComboboxRoot"}

### Anchor

Used as an anchor if you set `ComboboxContent`'s position to `popper`.

:akar-api{name="ComboboxAnchor"}

### Input

The input component to search through the combobox items.

:akar-api{name="ComboboxInput"}

### Trigger

The button that toggles the Combobox Content.

:akar-api{name="ComboboxTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cancel

The button that clears the search term.

:akar-api{name="ComboboxCancel"}

### Empty

Shown when none of the items match the query.

:akar-api{name="ComboboxEmpty"}

### Portal

When used, portals the content part into the `body`.

You need to set `position="popper"` for `ComboboxContent` to make sure the position was automatically computed similar to `Popover` or `DropdownMenu`.

:akar-api{name="ComboboxPortal"}

### Content

The component that pops out when the combobox is open.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="ComboboxContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-side]","values":["left","right","bottom","top"]},{"attribute":"[data-align]","values":["start","end","center"]},{"attribute":"[data-empty]","values":"Present when there are no items matching the filter"}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-combobox-content-transform-origin","description":"The `transform-origin` computed from the content and arrow positions/offsets. Only present when `position=\"popper\"`."},{"cssVariable":"--akar-combobox-content-available-width","description":"The remaining width between the trigger and the boundary edge. Only present when `position=\"popper\"`."},{"cssVariable":"--akar-combobox-content-available-height","description":"The remaining height between the trigger and the boundary edge. Only present when `position=\"popper\"`."},{"cssVariable":"--akar-combobox-trigger-width","description":"The width of the trigger. Only present when `position=\"popper\"`."},{"cssVariable":"--akar-combobox-trigger-height","description":"The height of the trigger. Only present when `position=\"popper\"`."}]
---
::

### Viewport

The scrolling viewport that contains all of the items.

:akar-api{name="ComboboxViewport"}

### Item

The component that contains the combobox items.

:akar-api{name="ComboboxItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### ItemIndicator

Renders when the item is selected. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

:akar-api{name="ComboboxItemIndicator"}

### Group

Used to group multiple items. use in conjunction with `ComboboxLabel` to ensure good accessibility via automatic labelling.

:akar-api{name="ComboboxGroup"}

### Label

Used to render the label of a group. It won't be focusable using arrow keys.

:akar-api{name="ComboboxLabel"}

### Separator

Used to visually separate items in the Combobox

:akar-api{name="ComboboxSeparator"}

### Arrow

An optional arrow element to render alongside the content. This can be used to help visually link the trigger with the `ComboboxContent`. Must be rendered inside `ComboboxContent`. Only available when `position` is set to `popper`.

:akar-api{name="ComboboxArrow"}

### Virtualizer

Virtual container to achieve list virtualization.

::warning
Combobox items **must** be filtered manually before passing them over to the virtualizer. See [example below](#virtualized-combobox-with-working-filtering).
::

See the [virtualization guide](/akar/guides/virtualization.md) for more general info on virtualization.

:akar-api{name="ComboboxVirtualizer"}

## Examples

### Binding objects as values

Unlike native HTML form controls which only allow you to provide strings as values, Akar supports binding complex objects as well.

Make sure to set the `displayValue` prop to set the input value on item selection.

```vue{12,17,23}
<script setup lang="ts">
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot } from 'akar'
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
  <ComboboxRoot v-model="selectedPeople">
    <ComboboxInput :display-value="(v) => v.name" />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          v-for="person in people"
          :key="person.id"
          :value="person"
          :disabled="person.unavailable"
        >
          {{ person.name }}
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### Selecting multiple values

The `Combobox` component allows you to select multiple values. You can enable this by providing an array of values instead of a single value.

```vue{12,17-18}
<script setup lang="ts">
import { ComboboxRoot } from 'akar'
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
  <ComboboxRoot
    v-model="selectedPeople"
    multiple
  >
    …
  </ComboboxRoot>
</template>
```

### Custom filtering

Internally, `ComboboxRoot` will filter the item based on the rendered text.

However, you may also provide your own custom filtering logic together with setting `ignoreFilter="true"`.

```vue{15,16,22,28}
<script setup lang="ts">
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot, useFilter } from 'akar'
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
  <ComboboxRoot
    v-model="selectedPeople"
    :ignore-filter="true"
  >
    <ComboboxInput v-model="searchTerm" />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          v-for="person in filteredPeople"
          :key="person.id"
          :value="person"
        >
          {{ person.name }}
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### Custom label

By default the `Combobox` will use the input contents as the label for screenreaders. If you'd like more control over what is announced to assistive technologies, use the [Label](/akar/components/label) component.

```vue{8,10}
<script setup lang="ts">
import { ComboboxInput, ComboboxRoot, Label } from 'akar'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot v-model="selectedPeople">
    <Label for="person">Person: </Label>
    <ComboboxInput
      id="person"
      placeholder="Select a person"
    />
    …
  </ComboboxRoot>
</template>
```

### With disabled items

 You can add special styles to disabled items via the `data-disabled` attribute.

```vue{19}
<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot,
} from 'akar'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          class="ComboboxItem"
          disabled
        >
          …
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

```css{2}
/* styles.css */
.ComboboxItem[data-disabled] {
  color: "gainsboro";
}
```

### With separators

Use the `Separator` part to add a separator between items.

```vue{21}
<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator
} from 'akar'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxSeparator />
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### With grouped items

Use the `Group` and `Label` parts to group items in a section.

```vue{19,20,24}
<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot
} from 'akar'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxGroup>
          <ComboboxLabel>Label</ComboboxLabel>
          <ComboboxItem>…</ComboboxItem>
          <ComboboxItem>…</ComboboxItem>
          <ComboboxItem>…</ComboboxItem>
        </ComboboxGroup>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### With complex items

You can use custom content in your items.

```vue{21}
<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot
} from 'akar'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem>
          <img src="…">
          Adolfo Hess
          <ComboboxItemIndicator />
        </ComboboxItem>
        …
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### Prevent select behavior

By default, selecting `ComboboxItem` would close the content, and update the `modelValue` with the provided value.
You can prevent this behavior by preventing default `@select.prevent`.

```vue{11}
<script setup lang="ts">
import { ComboboxContent, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxPortal, ComboboxRoot } from 'akar'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem @select.prevent>
          Item A
        </ComboboxItem>
        …
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### Virtualized combobox with working filtering

Combobox items **must** be filtered manually before passing them over to the virtualizer.

See the [virtualization guide](/akar/guides/virtualization.md) for more general info on virtualization.

```vue{9-10,17,19-28}
<script setup lang="ts">
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot, ComboboxViewport, ComboboxVirtualizer, useFilter } from 'akar'
import { computed, ref } from 'vue'

const people = Array.from({ length: 100000 }).map((_, id) => ({ id, name: `Person #${id}` }))
const selectedPeople = ref(people[0])
const searchTerm = ref('')

const { contains } = useFilter({ sensitivity: 'base' })
const filteredPeople = computed(() => people.filter(p => contains(p.name, searchTerm.value)))
</script>

<template>
  <ComboboxRoot v-model="selectedPeople">
    <ComboboxInput v-model="searchTerm" />
    <ComboboxPortal>
      <ComboboxContent class="max-h-[40vh] overflow-hidden">
        <ComboboxViewport>
          <ComboboxVirtualizer
            v-slot="{ option }"
            :options="filteredPeople"
            :text-content="(x) => x.name"
            :estimate-size="24"
          >
            <ComboboxItem :value="option">
              {{ option.name }}
            </ComboboxItem>
          </ComboboxVirtualizer>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

## Accessibility

Adheres to the [Combobox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

See the W3C [Combobox Autocomplete List](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/) example for more information.

### Keyboard Interactions

::akar-keyboard
---
data: []
---
:: When focus is on an item, moves focus to the next item. ',
    },
    {
      keys: ['ArrowUp'],
      description: ' When focus is on <Code>ComboboxInput</Code>, opens the combobox content. <br /> When focus is on an item, moves focus to the previous item. ',
    },
    {
      keys: ['Esc'],
      description: ' Closes combobox and restores the selected item in the <Code>ComboboxInput</Code> field. ',
    },
  ]"
/>

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Command Menu

Combobox can be use to build your own Command Menu.

#### Usage

```vue
<script setup lang="ts">
import { Command, CommandItem } from './your-command';
</script>

<template>
  <Command>
    <CommandItem value="1">
      Item 1
    </CommandItem>
    <CommandItem value="2">
      Item 2
    </CommandItem>
    <CommandItem value="3">
      Item 3
    </CommandItem>
  </Command>
</template>
```

#### Implementation

```ts
// your-command.ts
export { default as Command } from 'Command.vue';
export { default as CommandItem } from 'CommandItem.vue';
```

```vue
<!-- Command.vue -->
<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from 'akar';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, } from '@radix-icons/vue';
import { ComboboxContent, ComboboxInput, ComboboxPortal, ComboboxRoot, useForwardPropsEmits } from 'akar';

const props = defineProps<ComboboxRootProps>();
const emits = defineEmits<ComboboxRootEmits>();

const forward = useForwardPropsEmits(props, emits);
</script>

<template>
  <ComboboxRoot
    v-bind="forward"
    :open="true"
    model-value=""
  >
    <ComboboxInput placeholder="Type a command or search…" />

    <ComboboxPortal>
      <ComboboxContent
        @escape-key-down.prevent
        @focus-outside.prevent
        @interact-outside.prevent
        @pointer-down-outside.prevent
      >
        <ComboboxViewport>
          <slot />
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

```vue
<!-- ComboboxItem.vue -->
<script setup lang="ts">
import type { ComboboxItemProps } from 'akar';
import { CheckIcon } from '@radix-icons/vue';
import { ComboboxItem } from 'akar';

const props = defineProps<ComboboxItemProps>();
</script>

<template>
  <ComboboxItem
    v-bind="props"
    @select.prevent
  >
    <slot />
  </ComboboxItem>
</template>
```
