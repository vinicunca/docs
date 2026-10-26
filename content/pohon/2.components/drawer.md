---
description: A drawer that smoothly slides in and out of the screen.
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: Drawer
    icon: i-lucide-box
    to: /akar/components/drawer
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/Drawer.vue
---

## Usage

Use a [Button](/pohon/components/button) or any other component in the default slot of the Drawer.

Then, use the `#content` slot to add the content displayed when the Drawer is open.

::component-code
---
prettier: true
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

You can also use the `#header`{lang="ts-type"}, `#body`{lang="ts-type"} and `#footer`{lang="ts-type"} slots to customize the Drawer's content.

### Title

Use the `title` prop to set the title of the Drawer's header.

::component-code
---
prettier: true
props:
  title: 'Drawer with title'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Description

Use the `description` prop to set the description of the Drawer's header.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Close

Use the `close` prop to display a close button in the Drawer. Defaults to `false`.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Drawer with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with close button'
  close: true
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Direction

Use the `direction` prop to control the direction of the Drawer. Defaults to `bottom`.

::component-code
---
prettier: true
props:
  direction: 'right'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Inset

Use the `inset` prop to inset the Drawer from the edges.

::component-code
---
prettier: true
props:
  direction: 'right'
  inset: true
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Handle

Use the `handle` prop to control whether the Drawer has a handle or not. Defaults to `true`.

::component-code
---
prettier: true
props:
  handle: false
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Overlay

Use the `overlay` prop to control whether the Drawer has an overlay or not. Defaults to `true`.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Modal

Use the `modal` prop to control whether the Drawer blocks interaction with outside content. Defaults to `true`. Set it to `'trap-focus'` to trap keyboard focus while allowing outside pointer interaction, without a backdrop or body scroll lock.

::note
When `modal` is set to `false`, the overlay is automatically disabled and outside content becomes interactive.
::

::component-code
---
prettier: true
props:
  modal: false
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:p-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Dismissible

Use the `dismissible` prop to control whether the Drawer is dismissible when swiping, clicking outside of it, or pressing Escape. Defaults to `true`.

::note
A `close:prevent` event will be emitted when the user tries to close it.
::

::tip
You can combine `modal: false` with `dismissible: false` to make the Drawer's background interactive without closing it.
::

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

### Scale Background :badge{label="Soon" class="align-text-top"}

Wrap page content in [DrawerProvider](/pohon/components/drawer-provider) with `scale` to scale it whenever a descendant Drawer is open. Leave the Drawer's portal enabled so the drawer renders outside the scaled content.

```vue [app.vue]
<template>
  <PApp>
    <PDrawerProvider
      scale
      class="min-h-dvh"
      :ui="{ content: 'min-h-dvh' }"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PDrawerProvider>
  </PApp>
</template>
```

### Snap Points :badge{label="Soon" class="align-text-top"}

Use `snap-points` to define snap positions, `default-snap-point` for the initial uncontrolled position, or `v-model:snap-point` to control it. Enable `snap-to-sequential-points` to advance one position at a time.

```vue
<PDrawer :snap-points="[0.5, 1]" :default-snap-point="0.5" snap-to-sequential-points title="Snap points">
  <PButton label="Open" />
  <template #body>
    <Placeholder class="h-screen w-full" />
  </template>
</PDrawer>
```

Numeric fractions use the viewport height; numbers greater than 1 are pixels. Strings support `px` and `rem`.

### Migrating from Vaul :badge{label="Soon" class="align-text-top"}

Drawer now uses Akar. Replace `activeSnapPoint` and its update event with `snapPoint` / `update:snapPoint`. Nesting is automatic; remove `nested`. Replace the Vaul wrapper attribute and scaling props with `PDrawerProvider scale`.

The Vaul-only props `handleOnly`, `closeThreshold`, `scrollLockTimeout`, `fixed`, `noBodyStyles`, and `preventScrollRestoration` have been removed. The handle is now a visual swipe affordance; it no longer cycles snap points on click. Use `after:enter`, `after:leave`, or `update:openComplete` instead of `animationEnd`; `drag`, `release`, and `close` events are no longer exposed.

`update:open` receives `(open, details)`, where `details.reason` describes the interaction and `details.cancel()` rejects it. `content` now uses Akar's drawer-specific types, including `initialFocus` and `finalFocus`.

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the Drawer by pressing :kbd{value="O"}.
::

::tip
This lets you move the trigger outside of the Drawer or remove it entirely.
::

### Responsive drawer

You can render a [Modal](/pohon/components/modal) component on desktop and a Drawer on mobile for example.

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### Nested drawers

Drawers nested inside another Drawer’s content are detected automatically; no `nested` prop is needed.

::component-example
---
prettier: true
name: 'drawer-nested-example'
---
::

### With footer slot

Use the `#footer` slot to add content after the Drawer's body.

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### With command palette

You can use a [CommandPalette](/pohon/components/command-palette) component inside the Drawer's content.

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

::note
This example uses `useLazyFetch` with `immediate: false` to only fetch data when the Drawer opens.
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
