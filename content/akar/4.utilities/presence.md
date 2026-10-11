---
title: Presence
description: Manages mounting and unmounting of element with transition support.
---
::note
**Question**

How is this component different from [Vue Transition](https://vuejs.org/guide/built-ins/transition.html#transition)?

A: The biggest difference is it accepts css animation, and control the visibility of element.
::

Presence component provides enhanced control over element mounting/unmounting. It ensures animations and transitions complete before removing elements from the DOM, making it perfect for animated UI components.

## API Reference

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| `present*` |  | `boolean` | Conditional to mount or unmount the child element. Similar to `v-if` |
| `forceMount` | `false` | `boolean` | Force the element to render all the time. Useful for programmatically render grandchild component with the exposed `present` |

| Event | Type | Description |
| --- | --- | --- |
| `enter` | `CustomEvent` | Event handler called when the enter animation has started |
| `after-enter` | `CustomEvent` | Event handler called when the enter animation has finished |
| `leave` | `CustomEvent` | Event handler called when the leave animation has started |
| `after-leave` | `CustomEvent` | Event handler called when the leave animation has finished |

::tip
Read our [Animation Guide](/akar/guides/animation) to learn more about implementing animations with Presence component.
::

## Example

```vue{2,4,5}
<template>
  <Presence :present="isVisible">
    <div
      :data-state="isVisible ? 'open' : 'closed'"
      class="data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
    >
      <slot />
    </div>
  </Presence>
</template>
```

### Force Mount

When you need to ensure content is always rendered regardless of the present state:

```vue
<template>
  <Presence
    v-slot="{ present }"
    :present="isVisible"
    :force-mount="true"
  >
    <div>
      This content will always be rendered

      <div v-if="present">
        This content is hidden
      </div>
    </div>
  </Presence>
</template>
```
