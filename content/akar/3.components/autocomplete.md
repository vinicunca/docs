---
title: Autocomplete
description: An input with suggestions that allows free-form text entry. Unlike Combobox, the value is the input text itself rather than a selected item.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Autocomplete"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:badge[Alpha]

:akar-preview{name="Autocomplete"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Offers 2 positioning modes.","Supports items, labels, groups of items.","Focus is fully managed.","Full keyboard navigation.","Supports custom placeholder.","Supports Right to Left direction.","Free-form text input — value is the typed text, not a selection."]
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
  AutocompleteAnchor,
  AutocompleteArrow,
  AutocompleteCancel,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteLabel,
  AutocompletePortal,
  AutocompleteRoot,
  AutocompleteSeparator,
  AutocompleteTrigger,
  AutocompleteViewport,
} from 'akar'
</script>

<template>
  <AutocompleteRoot>
    <AutocompleteAnchor>
      <AutocompleteInput />
      <AutocompleteTrigger />
      <AutocompleteCancel />
    </AutocompleteAnchor>

    <AutocompletePortal>
      <AutocompleteContent>
        <AutocompleteViewport>
          <AutocompleteEmpty />

          <AutocompleteItem />

          <AutocompleteSeparator />

          <AutocompleteGroup>
            <AutocompleteLabel />
            <AutocompleteItem />
          </AutocompleteGroup>
        </AutocompleteViewport>

        <AutocompleteArrow />
      </AutocompleteContent>
    </AutocompletePortal>
  </AutocompleteRoot>
</template>
```

## Autocomplete vs. Combobox

The Autocomplete component is similar to the [Combobox](/akar/components/combobox) but with a key difference:

| | Autocomplete | Combobox |
| --- | --- | --- |
| **`modelValue`** | The input text (`string`) | The selected item (`AcceptableValue`) |
| **Free-form text** | Yes — any text is valid | No — must select from the list |
| **`multiple`** | Not supported | Supported |
| **Input on blur** | Retains typed text by default | Resets to selected value by default |
| **Item selection** | Fills the input with the item's text value | Sets `modelValue` to the item's value |

Use **Autocomplete** when the user should be able to type anything with optional suggestions. Use **Combobox** when the user must pick from a predefined set of options.

## API Reference

### Root

Contains all the parts of an Autocomplete.

:akar-api{name="AutocompleteRoot"}

### Anchor

Used as an anchor if you set `AutocompleteContent`'s position to `popper`.

:akar-api{name="ComboboxAnchor"}

### Input

The input component to search through the autocomplete items. Typing updates the `modelValue` directly.

:akar-api{name="AutocompleteInput"}

### Trigger

The button that toggles the Autocomplete Content.

:akar-api{name="ComboboxTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cancel

The button that clears the input text and resets the value.

:akar-api{name="ComboboxCancel"}

### Empty

Shown when none of the items match the query.

:akar-api{name="ComboboxEmpty"}

### Portal

When used, portals the content part into the `body`.

You need to set `position="popper"` for `AutocompleteContent` to make sure the position was automatically computed similar to `Popover` or `DropdownMenu`.

:akar-api{name="ComboboxPortal"}

### Content

The component that pops out when the autocomplete is open.

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

The component that contains the autocomplete items. When selected, the item's string value fills the input.

:akar-api{name="ComboboxItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Group

Used to group multiple items. Use in conjunction with `AutocompleteLabel` to ensure good accessibility via automatic labelling.

:akar-api{name="ComboboxGroup"}

### Label

Used to render the label of a group. It won't be focusable using arrow keys.

:akar-api{name="ComboboxLabel"}

### Separator

Used to visually separate items in the Autocomplete.

:akar-api{name="ComboboxSeparator"}

### Arrow

An optional arrow element to render alongside the content. This can be used to help visually link the trigger with the `AutocompleteContent`. Must be rendered inside `AutocompleteContent`. Only available when `position` is set to `popper`.

:akar-api{name="ComboboxArrow"}

### Virtualizer

Virtual container to achieve list virtualization.

See the [virtualization guide](/akar/guides/virtualization.md) for more general info on virtualization.

:akar-api{name="ComboboxVirtualizer"}

## Examples

### Basic usage

The `modelValue` is a string that reflects whatever the user types. Selecting an item fills the input with that item's text.

```vue
<script setup lang="ts">
import { AutocompleteContent, AutocompleteInput, AutocompleteItem, AutocompletePortal, AutocompleteRoot } from 'akar'
import { ref } from 'vue'

const searchText = ref('')
const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple']
</script>

<template>
  <AutocompleteRoot v-model="searchText">
    <AutocompleteInput placeholder="Type a fruit..." />
    <AutocompletePortal>
      <AutocompleteContent>
        <AutocompleteItem
          v-for="fruit in fruits"
          :key="fruit"
          :value="fruit"
        >
          {{ fruit }}
        </AutocompleteItem>
      </AutocompleteContent>
    </AutocompletePortal>
  </AutocompleteRoot>
</template>
```

### Hide menu when empty

Use the `hideWhenEmpty` prop on `AutocompleteContent` to hide the menu when no items match the filter.

```vue
<template>
  <AutocompleteRoot v-model="searchText">
    <AutocompleteInput placeholder="Type a fruit..." />
    <AutocompletePortal>
      <AutocompleteContent hide-when-empty>
        <AutocompleteItem
          v-for="fruit in fruits"
          :key="fruit"
          :value="fruit"
        >
          {{ fruit }}
        </AutocompleteItem>
      </AutocompleteContent>
    </AutocompletePortal>
  </AutocompleteRoot>
</template>
```

### With form submission

The Autocomplete value is submitted as a regular text field in forms.

```vue
<script setup lang="ts">
import { AutocompleteContent, AutocompleteInput, AutocompleteItem, AutocompletePortal, AutocompleteRoot } from 'akar'
import { ref } from 'vue'

const query = ref('')
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
</script>

<template>
  <form>
    <AutocompleteRoot v-model="query" name="city">
      <AutocompleteInput placeholder="Enter a city..." />
      <AutocompletePortal>
        <AutocompleteContent>
          <AutocompleteItem
            v-for="city in cities"
            :key="city"
            :value="city"
          >
            {{ city }}
          </AutocompleteItem>
        </AutocompleteContent>
      </AutocompletePortal>
    </AutocompleteRoot>
  </form>
</template>
```

## Accessibility

Adheres to the [Combobox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox).

### Keyboard Interactions

::akar-keyboard
---
data: []
---
:: When focus is on an item, moves focus to the next item.',
    },
    {
      keys: ['ArrowUp'],
      description: 'When focus is on <Code>AutocompleteInput</Code>, opens the autocomplete content. <br /> When focus is on an item, moves focus to the previous item.',
    },
    {
      keys: ['Esc'],
      description: 'Closes the autocomplete content and returns focus to <Code>AutocompleteInput</Code>.',
    },
  ]"
/>
