---
title: Context Menu
description: Displays a menu located at the pointer, triggered by a right-click or a long-press.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/menu"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/ContextMenu"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="ContextMenu"}

## Features

::akar-highlights
---
features: ["Supports submenus with configurable reading direction.","Supports items, labels, groups of items.","Supports checkable items (single or multiple) with optional indeterminate state.","Supports modal and non-modal modes.","Customize side, alignment, offsets, collision handling.","Focus is fully managed.","Full keyboard navigation.","Typeahead support.","Dismissing and layering behavior is highly customizable.","Triggers with a long-press on touch devices"]
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
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from 'akar';
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger />

    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuLabel />
        <ContextMenuItem />

        <ContextMenuGroup>
          <ContextMenuItem />
        </ContextMenuGroup>

        <ContextMenuCheckboxItem>
          <ContextMenuItemIndicator />
        </ContextMenuCheckboxItem>

        <ContextMenuRadioGroup>
          <ContextMenuRadioItem>
            <ContextMenuItemIndicator />
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>

        <ContextMenuSub>
          <ContextMenuSubTrigger />
          <ContextMenuPortal>
            <ContextMenuSubContent />
          </ContextMenuPortal>
        </ContextMenuSub>

        <ContextMenuSeparator />
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

## API Reference

Adheres to the [Menu WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu) and uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions.html) to manage focus movement among menu items.

### Root

Contains all the parts of a context menu.

:akar-api{name="ContextMenuRoot"}

### Trigger

The area that opens the context menu. Wrap it around the target you want the context menu to open from when right-clicking (or using the relevant keyboard shortcuts).

:akar-api{name="ContextMenuTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]}]
---
::

### Portal

When used, portals the content part into the `body`.

:akar-api{name="ContextMenuPortal"}

### Content

The component that pops out in an open context menu.

:akar-api{name="ContextMenuContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-side]","values":["left","right","bottom","top"]},{"attribute":"[data-align]","values":["start","end","center"]}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-context-menu-content-transform-origin","description":"The `transform-origin` computed from the content and arrow positions/offsets"},{"cssVariable":"--akar-context-menu-content-available-width","description":"The remaining width between the trigger and the boundary edge"},{"cssVariable":"--akar-context-menu-content-available-height","description":"The remaining height between the trigger and the boundary edge"},{"cssVariable":"--akar-context-menu-trigger-width","description":"The width of the trigger"},{"cssVariable":"--akar-context-menu-trigger-height","description":"The height of the trigger"}]
---
::

### Arrow

An optional arrow element to render alongside a submenu. This can be used to help visually link the trigger item with the `ContextMenu.Content`. Must be rendered inside `ContextMenu.Content`.

:akar-api{name="ContextMenuArrow"}

### Item

The component that contains the context menu items.

:akar-api{name="ContextMenuItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Group

Used to group multiple `ContextMenu.Item`s.

:akar-api{name="ContextMenuGroup"}

### Label

Used to render a label. It won't be focusable using arrow keys.

:akar-api{name="ContextMenuLabel"}

### CheckboxItem

An item that can be controlled and rendered like a checkbox.

:akar-api{name="ContextMenuCheckboxItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked","indeterminate"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### RadioGroup

Used to group multiple `ContextMenu.RadioItem`s.

:akar-api{name="ContextMenuRadioGroup"}

### RadioItem

An item that can be controlled and rendered like a radio.

:akar-api{name="ContextMenuRadioItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked","indeterminate"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### ItemIndicator

Renders when the parent `ContextMenu.CheckboxItem` or `ContextMenu.RadioItem` is checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

:akar-api{name="ContextMenuItemIndicator"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked","indeterminate"]}]
---
::

### Separator

Used to visually separate items in the context menu.

:akar-api{name="ContextMenuSeparator"}

### Sub

Contains all the parts of a submenu.

:akar-api{name="ContextMenuSub"}

### SubTrigger

An item that opens a submenu. Must be rendered inside `ContextMenu.Sub`.

:akar-api{name="ContextMenuSubTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### SubContent

The component that pops out when a submenu is open. Must be rendered inside `ContextMenu.Sub`.

:akar-api{name="ContextMenuSubContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-side]","values":["left","right","bottom","top"]},{"attribute":"[data-align]","values":["start","end","center"]}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-context-menu-content-transform-origin","description":"The `transform-origin` computed from the content and arrow positions/offsets"},{"cssVariable":"--akar-context-menu-content-available-width","description":"The remaining width between the trigger and the boundary edge"},{"cssVariable":"--akar-context-menu-content-available-height","description":"The remaining height between the trigger and the boundary edge"},{"cssVariable":"--akar-context-menu-trigger-width","description":"The width of the trigger"},{"cssVariable":"--akar-context-menu-trigger-height","description":"The height of the trigger"}]
---
::

## Examples

### With submenus

You can create submenus by using `ContextMenuSub` in combination with its parts.

```vue{24-33}
<script setup lang="ts">
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from 'akar'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Sub menu →</ContextMenuSubTrigger>
          <ContextMenuPortal>
            <ContextMenuSubContent>
              <ContextMenuItem>Sub menu item</ContextMenuItem>
              <ContextMenuItem>Sub menu item</ContextMenuItem>
              <ContextMenuArrow />
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>…</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```vue{12}
<script setup lang="ts">
import { ContextMenuContent, ContextMenuItem, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'akar'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem
          class="ContextMenuItem"
          disabled
        >
          …
        </ContextMenuItem>
        <ContextMenuItem class="ContextMenuItem">
          …
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

```css{2}
/* styles.css */
.ContextMenuItem[data-disabled] {
  color: gainsboro;
}
```

### With separators

Use the `Separator` part to add a separator between items.

```vue{7,18,20}
<script setup lang="ts">
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from 'akar'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>…</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### With labels

Use the `Label` part to help label a section.

```vue{5,17}
<script setup lang="ts">
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRoot,
  ContextMenuTrigger,
} from 'akar'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuLabel>Label</ContextMenuLabel>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuItem>…</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### With checkbox items

Use the `CheckboxItem` part to add an item that can be checked.

```vue{3,25-30}
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuPortal,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from 'akar'

const checked = ref(true)
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem v-model="checked">
          <ContextMenuItemIndicator>
            <Icon icon="radix-icons:check" />
          </ContextMenuItemIndicator>
          Checkbox item
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### With radio items

Use the `RadioGroup` and `RadioItem` parts to add an item that can be checked amongst others.

```vue{8,9,24-43}
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from 'akar'

const color = ref('blue')
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuRadioGroup v-model="color">
          <ContextMenuRadioItem value="red">
            <ContextMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </ContextMenuItemIndicator>
            Red
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="blue">
            <ContextMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </ContextMenuItemIndicator>
            Blue
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="green">
            <ContextMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </ContextMenuItemIndicator>
            Green
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### With complex items

You can add extra decorative elements in the `Item` parts, such as images.

```vue{11,15}
<script setup lang="ts">
import { ContextMenuContent, ContextMenuItem, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'akar'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem>
          <img src="…">
          Adolfo Hess
        </ContextMenuItem>
        <ContextMenuItem>
          <img src="…">
          Miyah Myles
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### Constrain the content/sub-content size

You may want to constrain the width of the content (or sub-content) so that it matches the trigger (or sub-trigger) width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--akar-context-menu-trigger-width` and `--akar-context-menu-content-available-height` to support this. Use them to constrain the content dimensions.

```vue{9}
<script setup lang="ts">
import { ContextMenuContent, ContextMenuItem, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'akar'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent class="ContextMenuContent">
        …
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

```css{3-4}
/* styles.css */
.ContextMenuContent {
  width: var(--akar-context-menu-trigger-width);
  max-height: var(--akar-context-menu-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--akar-context-menu-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```vue{9}
<script setup lang="ts">
import { ContextMenuContent, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'akar'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent class="ContextMenuContent">
        …
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

```css{3}
/* styles.css */
.ContextMenuContent {
  transform-origin: var(--akar-context-menu-content-transform-origin);
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Collision-aware animations

We expose `data-side` and `data-align` attributes. Their values will change at runtime to reflect collisions. Use them to create collision and direction-aware animations.

```vue{9}
<script setup lang="ts">
import { ContextMenuContent, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'akar'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent class="ContextMenuContent">
        …
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

```css{6-11}
/* styles.css */
.ContextMenuContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.ContextMenuContent[data-side="top"] {
  animation-name: slideUp;
}
.ContextMenuContent[data-side="bottom"] {
  animation-name: slideDown;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Accessibility

Uses [roving tabindex](https://www.w3.org/WAI/ARIA/apg/patterns/kbd_roving_tabindex) to manage focus movement among menu items.

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Space"],"description":"Activates the focused item."},{"keys":["Enter"],"description":"Activates the focused item."},{"keys":["ArrowDown"],"description":"Moves focus to the next item."},{"keys":["ArrowUp"],"description":"Moves focus to the previous item."},{"keys":["ArrowRight","ArrowLeft"],"description":" When focus is on `ContextMenu.SubTrigger`, opens or closes the submenu depending on reading direction. "},{"keys":["Esc"],"description":"Closes the context menu"}]
---
::
