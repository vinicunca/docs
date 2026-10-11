# Wrapping Akar into design-system components

The usual job: hide the parts a team never changes (Portal, Overlay, Close button, Indicator) behind your own component, and keep every Akar prop, event and `v-model` working.

## Forward props and emits

Type your wrapper with Akar's exported `<Part>Props` / `<Part>Emits`, then bind the result of `useForwardPropsEmits`:

```vue
<!-- MyDialogContent.vue -->
<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'akar';
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'akar';

defineOptions({ inheritAttrs: false });

const props = defineProps<DialogContentProps>();
const emits = defineEmits<DialogContentEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="DialogOverlay" />
    <DialogContent
      class="DialogContent"
      v-bind="{ ...$attrs, ...forwarded }"
    >
      <slot />
      <DialogClose aria-label="Close">
        ×
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
```

```ts
export { default as MyDialogContent } from './MyDialogContent.vue';
// my-dialog.ts: re-export the parts you do not wrap
export { DialogRoot as MyDialog, DialogDescription as MyDialogDescription, DialogTitle as MyDialogTitle, DialogTrigger as MyDialogTrigger } from 'akar';
```

The same pattern wraps a Root: declare `RootProps` + `RootEmits` and forward them, and `v-model` keeps working, because `update:modelValue` / `update:open` are forwarded as `onUpdate:*` listeners.

| Composable | Use when |
|---|---|
| `useForwardPropsEmits(props, emits)` | The wrapper re-declares the part's props and emits (most wrappers) |
| `useForwardProps(props)` | Props only |
| `useEmitAsProps(emits)` | Emits only (warns if the component declares no emits) |
| `useForwardExpose()` | Your wrapper has several root nodes, or must expose a specific element as its template ref (`:ref="forwardRef"`) |

Use these instead of `v-bind="props"`. Vue casts every undeclared optional boolean prop to `false`, so `v-bind="props"` sends `modal: false` to `DialogRoot` (default `true`) and silently makes the dialog non-modal. `useForwardProps` forwards only the props the parent actually passed, plus declared defaults.

Akar parts pass unknown attributes (`class`, `data-*`, `aria-*`) through to their element. When your wrapper's root is a Portal, those attributes would land on the Portal instead, so set `inheritAttrs: false` and bind `$attrs` onto the content part, as above.

## Your own parts with `as` / `asChild`

Give your own components the same API by rendering `Primitive`:

```vue
<script setup lang="ts">
import type { PrimitiveProps } from 'akar';
import { Primitive } from 'akar';

const props = withDefaults(defineProps<PrimitiveProps>(), { as: 'button' });
</script>

<template>
  <Primitive
    v-bind="props"
    class="btn"
  >
    <slot />
  </Primitive>
</template>
```

Rules for the child of an `asChild` part:

- It renders **one root element**. A multi-root component or a fragment breaks attribute merging and the element ref Akar uses for focus and positioning.
- Attribute fallthrough stays on (no `inheritAttrs: false` without re-binding `$attrs` on the root).
- The element stays interactive for its role: a trigger must be focusable and respond to keyboard and pointer, so wrap a `button` or `a`, not a `div`.
- The child's own props win on conflicts; `class`, `style` and listeners are merged.

`Slot` (from `akar`) is the bare version: it forwards its attributes to its first child and has no scoped slot props.

## Reading internal state

Every Root, and some other parts, export `inject<Part>Context()` (for example `injectAccordionItemContext`, `injectDialogRootContext`). Call it in a child component to read state such as `open` or `modelValue` without prop drilling. The docs mark it as internal API that may change; use props, slot props and data attributes first. It throws outside its provider, unless you pass a fallback argument (`injectDialogRootContext(null)`). See the [inject context guide](https://vinicunca.dev/raw/akar/guides/inject-context.md).

## Namespaced exports

`import { Dialog } from 'akar/namespaced'` gives `Dialog.Root`, `Dialog.Trigger`, `Dialog.Portal`, and so on: useful in templates that use many parts. Parts still nest the same way: `Dialog.Portal` goes inside `Dialog.Root`. See the [namespaced components guide](https://vinicunca.dev/raw/akar/guides/namespaced-components.md).

More: [composition guide](https://vinicunca.dev/raw/akar/guides/composition.md), [useForwardPropsEmits](https://vinicunca.dev/raw/akar/utilities/use-forward-props-emits.md), [Primitive](https://vinicunca.dev/raw/akar/utilities/primitive.md), and the "Custom APIs" section at the end of most component pages.
