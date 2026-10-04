---
title: MonthPicker
description: Presents a calendar view tailored for selecting months.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/MonthPicker"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
## Month Picker

:badge[Alpha]

:akar-preview{name="MonthPicker"}

## Features

::akar-highlights
---
features: ["Full keyboard navigation","Can be controlled or uncontrolled","Focus is fully managed","Localization support","Highly composable"]
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
  MonthPickerCell,
  MonthPickerCellTrigger,
  MonthPickerGrid,
  MonthPickerGridBody,
  MonthPickerGridRow,
  MonthPickerHeader,
  MonthPickerHeading,
  MonthPickerNext,
  MonthPickerPrev,
  MonthPickerRoot,
} from 'akar'
</script>

<template>
  <MonthPickerRoot>
    <MonthPickerHeader>
      <MonthPickerPrev />
      <MonthPickerHeading />
      <MonthPickerNext />
    </MonthPickerHeader>
    <MonthPickerGrid>
      <MonthPickerGridBody>
        <MonthPickerGridRow>
          <MonthPickerCell>
            <MonthPickerCellTrigger />
          </MonthPickerCell>
        </MonthPickerGridRow>
      </MonthPickerGridBody>
    </MonthPickerGrid>
  </MonthPickerRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a month picker

:akar-api{name="MonthPickerRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Header

Contains the navigation buttons and the heading segments.

:akar-api{name="MonthPickerHeader"}

### Prev Button

Calendar navigation button. It navigates the calendar one year in the past.

:akar-api{name="MonthPickerPrev"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Next Button

Calendar navigation button. It navigates the calendar one year in the future.

:akar-api{name="MonthPickerNext"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Heading

Heading for displaying the current year.

:akar-api{name="MonthPickerHeading"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid

Container for wrapping the month picker grid.

:akar-api{name="MonthPickerGrid"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid Body

Container for wrapping the grid body.

:akar-api{name="MonthPickerGridBody"}

### Grid Row

Container for wrapping the grid row.

:akar-api{name="MonthPickerGridRow"}

### Cell

Container for wrapping the month picker cells.

:akar-api{name="MonthPickerCell"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cell Trigger

Interactable container for displaying the cell months. Clicking it selects the month.

:akar-api{name="MonthPickerCellTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-selected]","values":"Present when selected"},{"attribute":"[data-value]","values":"The ISO string value of the date."},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-unavailable]","values":"Present when unavailable"},{"attribute":"[data-today]","values":"Present when the month is the current month"},{"attribute":"[data-focused]","values":"Present when focused"}]
---
::

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the month picker, focuses the first navigation button."},{"keys":["Space"],"description":" When the focus is on either `MonthPickerNext` or `MonthPickerPrev`, it navigates the calendar. Otherwise, it selects the month. "},{"keys":["Enter"],"description":" When the focus is on either `MonthPickerNext` or `MonthPickerPrev`, it navigates the calendar. Otherwise, it selects the month. "},{"keys":["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],"description":"When the focus is on `MonthPickerCellTrigger`, it navigates the months, changing the year if necessary."},{"keys":["PageUp"],"description":"When the focus is on `MonthPickerCellTrigger`, it navigates to the same month in the previous year."},{"keys":["PageDown"],"description":"When the focus is on `MonthPickerCellTrigger`, it navigates to the same month in the next year."}]
---
::
