---
title: YearPicker
description: Presents a calendar view tailored for selecting years.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/YearPicker"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
## Year Picker

:badge[Alpha]

:akar-preview{name="YearPicker"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation","Can be controlled or uncontrolled","Focus is fully managed","Localization support","Highly composable","Configurable years per page"]
---
::

## Preface

The component depends on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.

We highly recommend reading through the documentation for the package to get a solid feel for how it works, and you'll need to install it in your project to use the date-related components.

## Installation

Install the date package.

::code-group{sync="pm"}

```bash [pnpm]
pnpm add @internationalized/date
```

```bash [yarn]
yarn add @internationalized/date
```

```bash [npm]
npm install @internationalized/date
```

```bash [bun]
bun add @internationalized/date
```

::

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
import {
  YearPickerCell,
  YearPickerCellTrigger,
  YearPickerGrid,
  YearPickerGridBody,
  YearPickerGridRow,
  YearPickerHeader,
  YearPickerHeading,
  YearPickerNext,
  YearPickerPrev,
  YearPickerRoot,
} from 'akar'
</script>

<template>
  <YearPickerRoot>
    <YearPickerHeader>
      <YearPickerPrev />
      <YearPickerHeading />
      <YearPickerNext />
    </YearPickerHeader>
    <YearPickerGrid>
      <YearPickerGridBody>
        <YearPickerGridRow>
          <YearPickerCell>
            <YearPickerCellTrigger />
          </YearPickerCell>
        </YearPickerGridRow>
      </YearPickerGridBody>
    </YearPickerGrid>
  </YearPickerRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a year picker

:akar-api{name="YearPickerRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Header

Contains the navigation buttons and the heading segments.

:akar-api{name="YearPickerHeader"}

### Prev Button

Calendar navigation button. It navigates the calendar one page (default: 12 years) in the past.

:akar-api{name="YearPickerPrev"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Next Button

Calendar navigation button. It navigates the calendar one page (default: 12 years) in the future.

:akar-api{name="YearPickerNext"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Heading

Heading for displaying the current year range (e.g., "2020 - 2031").

:akar-api{name="YearPickerHeading"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid

Container for wrapping the year picker grid.

:akar-api{name="YearPickerGrid"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid Body

Container for wrapping the grid body.

:akar-api{name="YearPickerGridBody"}

### Grid Row

Container for wrapping the grid row.

:akar-api{name="YearPickerGridRow"}

### Cell

Container for wrapping the year picker cells.

:akar-api{name="YearPickerCell"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cell Trigger

Interactable container for displaying the cell years. Clicking it selects the year.

:akar-api{name="YearPickerCellTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-selected]","values":"Present when selected"},{"attribute":"[data-value]","values":"The ISO string value of the date."},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-unavailable]","values":"Present when unavailable"},{"attribute":"[data-today]","values":"Present when the year is the current year"},{"attribute":"[data-focused]","values":"Present when focused"}]
---
::

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the year picker, focuses the first navigation button."},{"keys":["Space"],"description":" When the focus is on either `YearPickerNext` or `YearPickerPrev`, it navigates the calendar. Otherwise, it selects the year. "},{"keys":["Enter"],"description":" When the focus is on either `YearPickerNext` or `YearPickerPrev`, it navigates the calendar. Otherwise, it selects the year. "},{"keys":["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],"description":"When the focus is on `YearPickerCellTrigger`, it navigates the years, changing the page if necessary."},{"keys":["PageUp"],"description":"When the focus is on `YearPickerCellTrigger`, it navigates to the previous page of years."},{"keys":["PageDown"],"description":"When the focus is on `YearPickerCellTrigger`, it navigates to the next page of years."}]
---
::
