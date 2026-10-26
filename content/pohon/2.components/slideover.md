---
description: A dialog that slides in from any side of the screen.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: Dialog
    icon: i-lucide-box
    to: /akar/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/Slideover.vue
---

## Usage

Use a [Button](/pohon/components/button) or any other component in the default slot of the Slideover.

Then, use the `#content` slot to add the content displayed when the Slideover is open.

::component-code
---
prettier: true
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

You can also use the `#header`{lang="ts-type"}, `#body`{lang="ts-type"} and `#footer`{lang="ts-type"} slots to customize the Slideover's content.

### Title

Use the `title` prop to set the title of the Slideover's header.

::component-code
---
prettier: true
props:
  title: 'Slideover with title'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Description

Use the `description` prop to set the description of the Slideover's header.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Close

Use the `close` prop to customize or hide the close button (with `false` value) displayed in the Slideover's header.

You can pass any property from the [Button](/pohon/components/button) component to customize it.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Slideover with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
The close button is not displayed if the `#content` slot is used as it's a part of the header.
::

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/pohon/components/icon). Defaults to `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::framework-only
#nuxt
:::tip{to="/pohon/getting-started/integrations/icons/nuxt#theme"}
You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.
:::

#vue
:::tip{to="/pohon/getting-started/integrations/icons/vue#theme"}
You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key.
:::
::

### Side

Use the `side` prop to set the side of the screen where the Slideover will slide in from. Defaults to `right`.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'left'
  title: 'Slideover with side'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full min-h-48" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

### Inset

Use the `inset` prop to inset the Slideover from the edges.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'right'
  inset: true
  title: 'Slideover with inset'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="min-w-96 min-h-96 size-full"}
::

### Transition

Use the `transition` prop to control whether the Slideover is animated or not. Defaults to `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Slideover without transition'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Overlay

Use the `overlay` prop to control whether the Slideover has an overlay or not. Defaults to `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Slideover without overlay'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Modal

Use the `modal` prop to control whether the Slideover blocks interaction with outside content. Defaults to `true`.

::note
When `modal` is set to `false`, the overlay is automatically disabled and outside content becomes interactive.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Slideover interactive'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Dismissible

Use the `dismissible` prop to control whether the Slideover is dismissible when clicking outside of it or pressing escape. Defaults to `true`.

::note
A `close:prevent` event will be emitted when the user tries to close it.
::

::tip
You can combine `modal: false` with `dismissible: false` to make the Slideover's background interactive without closing it.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Slideover non-dismissible'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Unmount

Use the `unmount-on-hide` prop to prevent the Slideover's content from being unmounted when it is closed. Defaults to `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Slideover'
slots:
  default: |

    <PButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:p-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
You can inspect the DOM to see the Slideover's content being rendered even while it is closed.
::

::tip
When the `portal` prop is set to `false`, the content is also rendered on the server. This is useful to render an open Slideover during SSR without a flash on page load, or to expose its content for SEO.
::

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::component-example
---
name: 'slideover-open-example'
---
::

::note
In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the Slideover by pressing :kbd{value="O"}.
::

::tip
This lets you move the trigger outside of the Slideover or remove it entirely.
::

### Programmatic usage

You can use the [`useOverlay`](/pohon/composables/use-overlay) composable to open a Slideover programmatically.

::warning
Make sure to wrap your app with the [`App`](/pohon/components/app) component which uses the [`OverlayProvider`](https://github.com/vinicunca/pohon/blob/main/src/runtime/components/OverlayProvider.vue) component.
::

First, create a slideover component that will be opened programmatically:

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
We are emitting a `close` event when the slideover is closed or dismissed here. You can emit any data through the `close` event, and that data becomes the resolved value of `open()`. The event must be emitted for the promise to resolve.
::

Then, use it in your app:

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
You can close the slideover within the slideover component by emitting `emit('close')`.
::

### Nested slideovers

You can nest slideovers within each other.

::component-example
---
name: 'slideover-nested-example'
---
::

### With footer slot

Use the `#footer` slot to add content after the Slideover's body.

::component-example
---
name: 'slideover-footer-slot-example'
---
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
