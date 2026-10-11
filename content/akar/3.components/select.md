---
title: Select
description: Displays a list of options for the user to pick from—triggered by a button.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Select"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Select"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Offers 2 positioning modes.","Supports items, labels, groups of items.","Focus is fully managed.","Full keyboard navigation.","Supports custom placeholder.","Typeahead support.","Supports Right to Left direction."]
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
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'akar';
</script>

<template>
  <SelectRoot>
    <SelectTrigger>
      <SelectValue />
      <SelectIcon />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent>
        <SelectScrollUpButton />
        <SelectViewport>
          <SelectItem>
            <SelectItemText />
            <SelectItemIndicator />
          </SelectItem>
          <SelectGroup>
            <SelectLabel />
            <SelectItem>
              <SelectItemText />
              <SelectItemIndicator />
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
        </SelectViewport>
        <SelectScrollDownButton />
        <SelectArrow />
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a Select

:akar-api{name="SelectRoot"}

### Trigger

The button that toggles the Select The `SelectContent` will position itself by aligning over the trigger.

:akar-api{name="SelectTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-placeholder]","values":"Present when has placeholder"}]
---
::

### Value

The part that reflects the selected value. By default the selected item's text will be rendered. if you require more control, you can instead control the select and pass your own `children`. It should not be styled to ensure correct positioning. An optional `placeholder` prop is also available for when the select has no value.

:akar-api{name="SelectValue"}

### Icon

A small icon often displayed next to the value as a visual affordance for the fact it can be open. By default renders ▼ but you can use your own icon via `asChild` or use `children`.

:akar-api{name="SelectItem"}

### Portal

When used, portals the content part into the `body`.

:akar-api{name="SelectPortal"}

### Content

The component that pops out when the select is open.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="SelectContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-side]","values":["left","right","bottom","top"]},{"attribute":"[data-align]","values":["start","end","center"]}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-select-content-transform-origin","description":"The `transform-origin` computed from the content and arrow positions/offsets. Only present when `position=\"popper\"`."},{"cssVariable":"--akar-select-content-available-width","description":"The remaining width between the trigger and the boundary edge. Only present when `position=\"popper\"`."},{"cssVariable":"--akar-select-content-available-height","description":"The remaining height between the trigger and the boundary edge. Only present when `position=\"popper\"`."},{"cssVariable":"--akar-select-trigger-width","description":"The width of the trigger. Only present when `position=\"popper\"`."},{"cssVariable":"--akar-select-trigger-height","description":"The height of the trigger. Only present when `position=\"popper\"`."}]
---
::

### Viewport

The scrolling viewport that contains all of the items.

:akar-api{name="SelectViewport"}

### Item

The component that contains the select items.

:akar-api{name="SelectItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### ItemText

The textual part of the item. It should only contain the text you want to see in the trigger when that item is selected. It should not be styled to ensure correct positioning.

:akar-api{name="SelectItemText"}

### ItemIndicator

Renders when the item is selected. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

:akar-api{name="SelectItemIndicator"}

### ScrollUpButton

An optional button used as an affordance to show the viewport overflow as well as functionally enable scrolling upwards.

:akar-api{name="SelectScrollUpButton"}

### ScrollDownButton

An optional button used as an affordance to show the viewport overflow as well as functionally enable scrolling downwards.

:akar-api{name="SelectScrollDownButton"}

### Group

Used to group multiple items. use in conjunction with `SelectLabel` to ensure good accessibility via automatic labelling.

:akar-api{name="SelectGroup"}

### Label

Used to render the label of a group. It won't be focusable using arrow keys.

:akar-api{name="SelectLabel"}

### Separator

Used to visually separate items in the Select

:akar-api{name="SelectSeparator"}
### Arrow

An optional arrow element to render alongside the content. This can be used to help visually link the trigger with the `SelectContent`. Must be rendered inside `SelectContent`. Only available when `position` is set to `popper`.

:akar-api{name="SelectArrow"}

## Examples

### Change the positioning mode

By default, `Select` will behave similarly to a native MacOS menu by positioning `SelectContent` relative to the active item. If you would prefer an alternative positioning approach similar to `Popover` or `DropdownMenu` then you can set `position` to `popper` and make use of additional alignment options such as `side`, `sideOffset` and more.

```vue{20-23}
// index.vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'akar'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent
        position="popper"
        :side-offset="5"
      >
        …
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### Constrain the content size

When using `position="popper"` on `SelectContent`, you may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--akar-select-trigger-width` and `--akar-select-content-available-height` to support this. Use them to constrain the content dimensions.

```vue{21}
// index.vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'akar'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent
        class="SelectContent"
        position="popper"
        :side-offset="5"
      >
        …
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```css{3,4}
/* styles.css */
.SelectContent {
  width: var(--akar-select-trigger-width);
  max-height: var(--akar-select-content-available-height);
}
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```vue{23-24}
// index.vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'akar'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectItem
            class="SelectItem"
            disabled
          >
            …
          </SelectItem>
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```css{2}
/* styles.css */
.SelectItem[data-disabled] {
  color: "gainsboro";
}
```

### With a placeholder

You can use the `placeholder` prop on `Value` for when the select has no value. There's also a `data-placeholder` attribute on `Trigger` to help with styling.

```vue{19,20}
// index.vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'akar'
import './styles.css'
</script>

<template>
  <SelectRoot>
    <SelectTrigger class="SelectTrigger">
      <SelectValue placeholder="Pick an option" />
      <SelectIcon />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>…</SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```css{2}
/* styles.css */
.SelectTrigger[data-placeholder] {
  color: "gainsboro";
}
```

### With separators

Use the `Separator` part to add a separator between items.

```vue{10}
<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
          <SelectSeparator />
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### With grouped items

Use the `Group` and `Label` parts to group items in a section.

```vue{7,8,12}
<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>Label</SelectLabel>
            <SelectItem>…</SelectItem>
            <SelectItem>…</SelectItem>
            <SelectItem>…</SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### With complex items

You can use custom content in your items.

```vue{23}
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'akar'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectItem>
            <SelectItemText>
              <img src="…">
              Adolfo Hess
            </SelectItemText>
            <SelectItemIndicator>…</SelectItemIndicator>
          </SelectItem>
          <SelectItem>…</SelectItem> <SelectItem>…</SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### Controlling the value displayed in the trigger

By default the trigger display the selected item's text (no longer automatically render `ItemText`'s content like in v1).

If you need to render other than plain text, you can control the component using `v-model` props (or accessing `SelectValue`'s slotProps) and passing `slot` to `SelectValue`. Remember to make sure what you put in there is accessible.

```vue{2,4,10-12}
<script setup>
const countries = { 'france': '🇫🇷', 'united-kingdom': '🇬🇧', 'spain': '🇪🇸' }

const value = ref('france')
</script>

<template>
  <SelectRoot v-model="value">
    <SelectTrigger>
      <SelectValue :aria-label="value">
        {{ countries[value] }}
      </SelectValue>
      <SelectIcon />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectItem value="france">
            <SelectItemText>France</SelectItemText>
            <SelectItemIndicator>…</SelectItemIndicator>
          </SelectItem>
          <SelectItem value="united-kingdom">
            <SelectItemText>United Kingdom</SelectItemText>
            <SelectItemIndicator>…</SelectItemIndicator>
          </SelectItem>
          <SelectItem value="spain">
            <SelectItemText>Spain</SelectItemText>
            <SelectItemIndicator>…</SelectItemIndicator>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### With custom scrollbar

The native scrollbar is hidden by default as we recommend using the `ScrollUpButton` and `ScrollDownButton` parts for the best UX. If you do not want to use these parts, compose your select with our [Scroll Area](scroll-area) primitive.

```vue{25,27,32-34}
// index.vue
<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'akar'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <ScrollAreaRoot
          class="ScrollAreaRoot"
          type="auto"
        >
          <SelectViewport as-child>
            <ScrollAreaViewport class="ScrollAreaViewport">
              <StyledItem>…</StyledItem> <StyledItem>…</StyledItem>
              <StyledItem>…</StyledItem>
            </ScrollAreaViewport>
          </SelectViewport>
          <ScrollAreaScrollbar
            class="ScrollAreaScrollbar"
            orientation="vertical"
          >
            <ScrollAreaThumb class="ScrollAreaThumb" />
          </ScrollAreaScrollbar>
        </ScrollAreaRoot>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```css
/* styles.css */
.ScrollAreaRoot {
  width: 100%;
  height: 100%;
}

.ScrollAreaViewport {
  width: 100%;
  height: 100%;
}

.ScrollAreaScrollbar {
  width: 4px;
  padding: 5px 2px;
}

.ScrollAreaThumb {
  background: rgba(0, 0, 0, 0.3);
  borderradius: 3px;
}
```

## Accessibility

Adheres to the [ListBox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox).

See the W3C [Select-Only Combobox](https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html) example for more information.

### Keyboard Interactions

::akar-keyboard
---
data: []
---
:: When focus is on an item, selects the focused item. ',
    },
    {
      keys: ['Enter'],
      description: ' When focus is on <Code>SelectTrigger</Code>, opens the select and focuses the first item. <br /> When focus is on an item, selects the focused item. ',
    },
    {
      keys: ['ArrowDown'],
      description: ' When focus is on <Code>SelectTrigger</Code>, opens the Select <br /> When focus is on an item, moves focus to the next item. ',
    },
    {
      keys: ['ArrowUp'],
      description: ' When focus is on <Code>SelectTrigger</Code>, opens the Select <br /> When focus is on an item, moves focus to the previous item. ',
    },
    {
      keys: ['Esc'],
      description: ' Closes the select and moves focus to <Code>SelectTrigger</Code>. ',
    },
  ]"
/>

### Labelling

Use our [Label](label) component in order to offer a visual and accessible label for the Select

```vue{19,22,26,28}
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  Label,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'akar'
import { ref } from 'vue'
</script>

<template>
  <Label>
    Country
    <SelectRoot>…</SelectRoot>
  </Label>

  <!-- or -->

  <Label for="country">Country</Label>
  <SelectRoot>
    <SelectTrigger id="country">
      …
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>…</SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract down to `Select` and `SelectItem`

This example abstracts most of the parts.

#### Usage

```vue
<script setup lang="ts">
import { Select, SelectItem } from './your-select';
</script>

<template>
  <Select default-value="2">
    <SelectItem value="1">
      Item 1
    </SelectItem>
    <SelectItem value="2">
      Item 2
    </SelectItem>
    <SelectItem value="3">
      Item 3
    </SelectItem>
  </Select>
</template>
```

#### Implementation

```ts
// your-select.ts
export { default as Select } from 'Select.vue';
export { default as SelectItem } from 'SelectItem.vue';
```

```vue
<!-- Select.vue -->
<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'akar';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, } from '@radix-icons/vue';
import { SelectContent, SelectIcon, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport, useForwardPropsEmits } from 'akar';

const props = defineProps<SelectRootProps>();
const emits = defineEmits<SelectRootEmits>();

const forward = useForwardPropsEmits(props, emits);
</script>

<template>
  <SelectRoot v-bind="forward">
    <SelectTrigger>
      <SelectValue />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <slot />
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```vue
<!-- SelectItem.vue -->
<script setup lang="ts">
import type { SelectItemProps } from 'akar';
import { CheckIcon } from '@radix-icons/vue';
import { SelectItem, SelectItemIndicator, SelectItemText } from 'akar';

const props = defineProps<SelectItemProps>();
</script>

<template>
  <SelectItem v-bind="props">
    <SelectItemText>
      <slot />
    </SelectItemText>
    <SelectItemIndicator>
      <CheckIcon />
    </SelectItemIndicator>
  </SelectItem>
</template>
```
