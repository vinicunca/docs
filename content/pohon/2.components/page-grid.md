---
title: PageGrid
description: 'A responsive grid system for displaying content in a flexible layout.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/PageGrid.vue
---

## Usage

The PageGrid component provides a responsive grid layout for displaying [PageCard](/pohon/components/page-card) components or any other elements, automatically adjusting from 1 to 3 columns based on screen size.

::component-example
---
name: 'page-grid-example'
class: 'p-8'
---
::

You can also use it to display a list of cards in a bento style layout by using `col-span-*` and `row-span-*` utility classes.

::component-example
---
collapse: true
name: 'page-grid-bento-example'
class: 'p-8'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
