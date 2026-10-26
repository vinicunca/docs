---
title: Menubar
description: A visually persistent menu common in desktop applications that provides quick
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/menu/"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Menubar"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Menubar"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Supports submenus with configurable reading direction.","Supports items, labels, groups of items.","Supports checkable items (single or multiple).","Customize side, alignment, offsets, collision handling.","Optionally render a pointing arrow.","Focus is fully managed.","Full keyboard navigation.","Typeahead support."]
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
  MenubarArrow,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './';
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger />
      <MenubarPortal>
        <MenubarContent>
          <MenubarLabel />
          <MenubarItem />

          <MenubarGroup>
            <MenubarItem />
          </MenubarGroup>

          <MenubarCheckboxItem>
            <MenubarItemIndicator />
          </MenubarCheckboxItem>

          <MenubarRadioGroup>
            <MenubarRadioItem>
              <MenubarItemIndicator />
            </MenubarRadioItem>
          </MenubarRadioGroup>

          <MenubarSub>
            <MenubarSubTrigger />
            <MenubarPortal>
              <MenubarSubContent />
            </MenubarPortal>
          </MenubarSub>

          <MenubarSeparator />
          <MenubarArrow />
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a menubar

:akar-api{name="MenubarRoot"}

### Menu

A top level menu item, contains a trigger with content combination.

:akar-api{name="MenubarMenu"}

### Trigger

The button that toggles the content. By default, the `MenubarContent` will position itself against the trigger.

:akar-api{name="MenubarTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Portal

When used, portals the content part into the `body`.

:akar-api{name="MenubarPortal"}

### Content

The component that pops out when a menu is open.

:akar-api{name="MenubarContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-side]","values":["left","right","bottom","top"]},{"attribute":"[data-align]","values":["start","end","center"]}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-menubar-content-transform-origin","description":"The `transform-origin` computed from the content and arrow positions/offsets"},{"cssVariable":"--akar-menubar-content-available-width","description":"The remaining width between the trigger and the boundary edge"},{"cssVariable":"--akar-menubar-content-available-height","description":"The remaining height between the trigger and the boundary edge"},{"cssVariable":"--akar-menubar-trigger-width","description":"The width of the trigger"},{"cssVariable":"--akar-menubar-trigger-height","description":"The height of the trigger"}]
---
::

### Arrow

An optional arrow element to render alongside a menubar menu. This can be used to help visually link the trigger with the `MenubarContent`. Must be rendered inside `MenubarContent`.

:akar-api{name="MenubarArrow"}

### Item

The component that contains the menubar items.

:akar-api{name="MenubarItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Group

Used to group multiple `MenubarItem`s.

:akar-api{name="MenubarGroup"}

### Label

Used to render a label. It won't be focusable using arrow keys.

:akar-api{name="MenubarLabel"}

### CheckboxItem

An item that can be controlled and rendered like a checkbox.

:akar-api{name="MenubarCheckboxItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### RadioGroup

Used to group multiple `MenubarRadioItem`s.

:akar-api{name="MenubarRadioGroup"}

### RadioItem

An item that can be controlled and rendered like a radio.

:akar-api{name="MenubarRadioItem"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### ItemIndicator

Renders when the parent `MenubarCheckboxItem` or `MenubarRadioItem` is checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

:akar-api{name="MenubarItemIndicator"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["checked","unchecked"]}]
---
::

### Separator

Used to visually separate items in a menubar menu.

:akar-api{name="MenubarSeparator"}

### Sub

Contains all the parts of a submenu.

:akar-api{name="MenubarSub"}

### SubTrigger

An item that opens a submenu. Must be rendered inside `MenubarSub`.

:akar-api{name="MenubarSubTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-highlighted]","values":"Present when highlighted"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### SubContent

The component that pops out when a submenu is open. Must be rendered inside `MenubarSub`.

:akar-api{name="MenubarSubContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["open","closed"]},{"attribute":"[data-side]","values":["left","right","bottom","top"]},{"attribute":"[data-align]","values":["start","end","center"]},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

::akar-css-variables
---
data: [{"cssVariable":"--akar-menubar-content-transform-origin","description":"The `transform-origin` computed from the content and arrow positions/offsets"},{"cssVariable":"--akar-menubar-content-available-width","description":"The remaining width between the trigger and the boundary edge"},{"cssVariable":"--akar-menubar-content-available-height","description":"The remaining height between the trigger and the boundary edge"},{"cssVariable":"--akar-menubar-trigger-width","description":"The width of the trigger"},{"cssVariable":"--akar-menubar-trigger-height","description":"The height of the trigger"}]
---
::

## Examples

### With submenus

You can create submenus by using `MenubarSub` in combination with its parts.

```vue{9-11,25-34}
<script setup lang="ts">
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarRoot,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'akar'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem>…</MenubarItem>
          <MenubarItem>…</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Sub menu →</MenubarSubTrigger>
            <MenubarPortal>
              <MenubarSubContent>
                <MenubarItem>Sub menu item</MenubarItem>
                <MenubarItem>Sub menu item</MenubarItem>
                <MenubarArrow />
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>…</MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```vue{13}
<script setup lang="ts">
import { MenubarContent, MenubarItem, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'akar'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem
            class="MenubarItem"
            disabled
          >
            …
          </MenubarItem>
          <MenubarItem class="MenubarItem">
            …
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

```css{2}
/* styles.css */
.MenubarItem[data-disabled] {
  color: gainsboro;
}
```

### With separators

Use the `Separator` part to add a separator between items.

```vue{8,20,22}
<script setup lang="ts">
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from 'akar'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem>…</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>…</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>…</MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### With labels

Use the `Label` part to help label a section.

```vue{5,19}
<script setup lang="ts">
import {
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRoot,
  MenubarTrigger,
} from 'akar'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarLabel>Label</MenubarLabel>
          <MenubarItem>…</MenubarItem>
          <MenubarItem>…</MenubarItem>
          <MenubarItem>…</MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### With checkbox items

Use the `CheckboxItem` part to add an item that can be checked.

```vue{3,27-32}
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from 'akar'

const checked = ref(true)
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem>…</MenubarItem>
          <MenubarItem>…</MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem v-model="checked">
            <MenubarItemIndicator>
              <Icon icon="radix-icons:check" />
            </MenubarItemIndicator>
            Checkbox item
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### With radio items

Use the `RadioGroup` and `RadioItem` parts to add an item that can be checked amongst others.

```vue{9-10,26-39}
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
} from 'akar'

const color = ref('blue')
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarRadioGroup v-model="color">
            <MenubarRadioItem value="red">
              <MenubarItemIndicator>
                <Icon icon="radix-icons:check" />
              </MenubarItemIndicator>
              Red
            </MenubarRadioItem>
            <MenubarRadioItem value="blue">
              <MenubarItemIndicator>
                <Icon icon="radix-icons:check" />
              </MenubarItemIndicator>
              Blue
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### With complex items

You can add extra decorative elements in the `Item` parts, such as images.

```vue{12,16}
<script setup lang="ts">
import { MenubarContent, MenubarItem, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'akar'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem>
            <img src="…">
            Adolfo Hess
          </MenubarItem>
          <MenubarItem>
            <img src="…">
            Miyah Myles
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### Constrain the content/sub-content size

You may want to constrain the width of the content (or sub-content) so that it matches the trigger (or sub-trigger) width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--akar-menubar-trigger-width` and `--akar-menubar-content-available-height` to support this. Use them to constrain the content dimensions.

```vue{10-13}
<script setup lang="ts">
import { MenubarContent, MenubarItem, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'akar'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger> Trigger </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="MenubarContent"
          :side-offset="5"
          :align-offset="-3"
        >
          <MenubarItem> New Tab </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

```css{3-4}
/* styles.css */
.MenubarContent {
  width: var(--akar-menubar-trigger-width);
  max-height: var(--akar-menubar-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--akar-menubar-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```vue{10}
<script setup lang="ts">
import { MenubarContent, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'akar'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent class="MenubarContent">
          …
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

```css{3}
/* styles.css */
.MenubarContent {
  transform-origin: var(--akar-menubar-content-transform-origin);
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

```vue{10}
<script setup lang="ts">
import { MenubarContent, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'akar'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent class="MenubarContent">
          …
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

```css{6-11}
/* styles.css */
.MenubarContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.MenubarContent[data-side="top"] {
  animation-name: slideUp;
}
.MenubarContent[data-side="bottom"] {
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

Adheres to the [Menu Button WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton) and uses [roving tabindex](https://www.w3.org/WAI/ARIA/apg/patterns/kbd_roving_tabindex) to manage focus movement among menu items.

### Keyboard Interactions

::akar-keyboard
---
data: []
---
::
        When focus is on an item, activates the focused item.
      `,
    },
    {
      keys: ['Enter'],
      description: `
        When focus is on <Code>MenubarTrigger</Code>, opens the associated menu.
        <br />
        When focus is on an item, activates the focused item.
      `,
    },
    {
      keys: ['ArrowDown'],
      description: `
        When focus is on <Code>MenubarTrigger</Code>, opens the associated menu.
        <br />
        When focus is on an item, moves focus to the next item.
      `,
    },
    {
      keys: ['ArrowUp'],
      description: `When focus is on an item, moves focus to the previous item.`,
    },
    {
      keys: ['ArrowRight', 'ArrowLeft'],
      description: `
        When focus is on a <Code>MenubarTrigger</Code>, moves focus to the next or previous item. <br /> When focus is on a <Code>MenubarSubTrigger</Code>, opens or closes the submenu depending on reading direction. <br /> When focus is within a <Code>MenubarContent</Code>, opens the next menu in the menubar
      `,
    },
    {
      keys: ['Esc'],
      description: `
        Closes the currently open menu and moves focus to its <Code>MenubarTrigger</Code>.
      `,
    },
  ]"
/>
