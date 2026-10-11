---
title: Tabs
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Tabs"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Tabs"}

## Features

::akar-highlights
---
features: ["Can be controlled or uncontrolled.","Supports horizontal/vertical orientation.","Supports automatic/manual activation.","Full keyboard navigation."]
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
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'akar';
</script>

<template>
  <TabsRoot>
    <TabsList>
      <TabsIndicator />
      <TabsTrigger />
    </TabsList>
    <TabsContent />
  </TabsRoot>
</template>
```

## API Reference

### Root

Contains all the tabs component parts.

:akar-api{name="TabsRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### List

Contains the triggers that are aligned along the edge of the active content.

:akar-api{name="TabsList"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Trigger

The button that activates its associated content.

:akar-api{name="TabsTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["active","inactive"]},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

### Indicator

The indicator that highlights the current active tab.

:akar-api{name="TabsIndicator"}

::akar-css-variables
---
data: [{"cssVariable":"--akar-tabs-indicator-size","description":"The size of the indicator."},{"cssVariable":"--akar-tabs-indicator-thickness","description":"The thickness of the indicator."},{"cssVariable":"--akar-tabs-indicator-position","description":"The position of the indicator"}]
---
::

### Content

Contains the content associated with each trigger.

::note
Defer mounting with `forceMount` / [`Presence`](/akar/utilities/presence). See the [animation guide](/akar/guides/animation).
::

:akar-api{name="TabsContent"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["active","inactive"]},{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

## Examples

### Vertical

You can create vertical tabs by using the `orientation` prop.

```vue{8}
<script setup>
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'akar'
</script>

<template>
  <TabsRoot
    default-value="tab1"
    orientation="vertical"
  >
    <TabsList aria-label="tabs example">
      <TabsTrigger value="tab1">
        One
      </TabsTrigger>
      <TabsTrigger value="tab2">
        Two
      </TabsTrigger>
      <TabsTrigger value="tab3">
        Three
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      Tab one content
    </TabsContent>
    <TabsContent value="tab2">
      Tab two content
    </TabsContent>
    <TabsContent value="tab3">
      Tab three content
    </TabsContent>
  </TabsRoot>
</template>
```

## Accessibility

Adheres to the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel).

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":" When focus moves onto the tabs, focuses the active trigger. When a trigger is focused, moves focus to the active content."},{"keys":["ArrowDown"],"description":" Moves focus to the next trigger depending on `orientation` and activates its associated content."},{"keys":["ArrowRight"],"description":" Moves focus to the next trigger depending on `orientation` and activates its associated content."},{"keys":["ArrowUp"],"description":" Moves focus to the previous trigger depending on `orientation` and activates its associated content."},{"keys":["ArrowLeft"],"description":" Moves focus to the previous trigger depending on `orientation` and activates its associated content."},{"keys":["Home"],"description":" Moves focus to the first trigger and activates its associated content."},{"keys":["End"],"description":" Moves focus to the last trigger and activates its associated content."}]
---
::
