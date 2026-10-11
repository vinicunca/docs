---
title: MonthRangePicker
description: Presents a calendar view tailored for selecting month ranges.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/MonthRangePicker"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
## Month Range Picker

:badge[Alpha]

:akar-preview{name="MonthRangePicker"}

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
  MonthRangePickerCell,
  MonthRangePickerCellTrigger,
  MonthRangePickerGrid,
  MonthRangePickerGridBody,
  MonthRangePickerGridRow,
  MonthRangePickerHeader,
  MonthRangePickerHeading,
  MonthRangePickerNext,
  MonthRangePickerPrev,
  MonthRangePickerRoot,
} from 'akar';
</script>

<template>
  <MonthRangePickerRoot>
    <MonthRangePickerHeader>
      <MonthRangePickerPrev />
      <MonthRangePickerHeading />
      <MonthRangePickerNext />
    </MonthRangePickerHeader>
    <MonthRangePickerGrid>
      <MonthRangePickerGridBody>
        <MonthRangePickerGridRow>
          <MonthRangePickerCell>
            <MonthRangePickerCellTrigger />
          </MonthRangePickerCell>
        </MonthRangePickerGridRow>
      </MonthRangePickerGridBody>
    </MonthRangePickerGrid>
  </MonthRangePickerRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a month range picker

:akar-api{name="MonthRangePickerRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-invalid]","values":"Present when invalid"}]
---
::

### Header

Contains the navigation buttons and the heading segments.

:akar-api{name="MonthRangePickerHeader"}

### Prev Button

Calendar navigation button. It navigates the calendar one year in the past.

:akar-api{name="MonthRangePickerPrev"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Next Button

Calendar navigation button. It navigates the calendar one year in the future.

:akar-api{name="MonthRangePickerNext"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Heading

Heading for displaying the current year.

:akar-api{name="MonthRangePickerHeading"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid

Container for wrapping the month range picker grid.

:akar-api{name="MonthRangePickerGrid"}

::akar-data-attributes
---
data: [{"attribute":"[data-readonly]","values":"Present when readonly"},{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Grid Body

Container for wrapping the grid body.

:akar-api{name="MonthRangePickerGridBody"}

### Grid Row

Container for wrapping the grid row.

:akar-api{name="MonthRangePickerGridRow"}

### Cell

Container for wrapping the month range picker cells.

:akar-api{name="MonthRangePickerCell"}

::akar-data-attributes
---
data: [{"attribute":"[data-disabled]","values":"Present when disabled"}]
---
::

### Cell Trigger

Interactable container for displaying the cell months. Clicking it selects the month.

:akar-api{name="MonthRangePickerCellTrigger"}

::akar-data-attributes
---
data: [{"attribute":"[data-selected]","values":"Present when selected"},{"attribute":"[data-value]","values":"The ISO string value of the date."},{"attribute":"[data-disabled]","values":"Present when disabled"},{"attribute":"[data-unavailable]","values":"Present when unavailable"},{"attribute":"[data-today]","values":"Present when the month is the current month"},{"attribute":"[data-selection-start]","values":"Present when the month is the start of the selection."},{"attribute":"[data-selection-end]","values":"Present when the month is the end of the selection."},{"attribute":"[data-highlighted]","values":"Present when the month is highlighted by the user as they select a range."},{"attribute":"[data-highlighted-start]","values":"Present when the month is the start of the range that is highlighted by the user."},{"attribute":"[data-highlighted-end]","values":"Present when the month is the end of the range that is highlighted by the user."},{"attribute":"[data-focused]","values":"Present when focused"}]
---
::

## Accessibility

### Keyboard Interactions

::akar-keyboard
---
data: [{"keys":["Tab"],"description":"When focus moves onto the month range picker, focuses the first navigation button."},{"keys":["Space"],"description":" When the focus is on either `MonthRangePickerNext` or `MonthRangePickerPrev`, it navigates the calendar. Otherwise, it selects the month. "},{"keys":["Enter"],"description":" When the focus is on either `MonthRangePickerNext` or `MonthRangePickerPrev`, it navigates the calendar. Otherwise, it selects the month. "},{"keys":["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],"description":"When the focus is on `MonthRangePickerCellTrigger`, it navigates the months, changing the year if necessary."},{"keys":["PageUp"],"description":"When the focus is on `MonthRangePickerCellTrigger`, it navigates to the same month in the previous year."},{"keys":["PageDown"],"description":"When the focus is on `MonthRangePickerCellTrigger`, it navigates to the same month in the next year."},{"keys":["Escape"],"description":"Cancels the current range selection and restores the previous valid range."}]
---
::
