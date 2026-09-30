---
title: "Collapsible"
description: "A collapsible element to toggle visibility of its content."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/collapsible.md"
---
## Usage

Use a [Button](/pohon/components/button) or any other component in the default slot of the Collapsible.

Then, use the `#content` slot to add the content displayed when the Collapsible is open.

```vue
<template>
  <UCollapsible class="flex flex-col gap-2 w-48">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  
    <template #content>
      <Placeholder class="h-48" />
    </template></UCollapsible>
</template>
```

### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the Collapsible is collapsed. Defaults to `true`.

```vue
<template>
  <UCollapsible :unmount-on-hide="false" class="flex flex-col gap-2 w-48">
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  
    <template #content>
      <Placeholder class="h-48" />
    </template></UCollapsible>
</template>
```

> [!NOTE]
> 
> You can inspect the DOM to see the content being rendered.

### Disabled

Use the `disabled` prop to disable the Collapsible.

```vue
<template>
  <UCollapsible class="flex flex-col gap-2 w-48" disabled>
    <PButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  
    <template #content>
      <Placeholder class="h-48" />
    </template></UCollapsible>
</template>
```

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [CollapsibleOpenExample.vue]
<script setup lang="ts">
const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <PCollapsible v-model:open="open" class="flex flex-col gap-2 w-48">
    <PButton
      label="Open"
      color="neutral"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      block
    />

    <template #content>
      <Placeholder class="h-48" />
    </template>
  </PCollapsible>
</template>
```

> [!NOTE]
> 
> In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the Collapsible by pressing `O`.

> [!TIP]
> 
> This lets you move the trigger outside of the Collapsible or remove it entirely.

### With rotating icon

Here is an example with a rotating icon in the Button that indicates the open state of the Collapsible.

```vue [CollapsibleIconExample.vue]
<template>
  <PCollapsible class="flex flex-col gap-2 w-48">
    <PButton
      class="group"
      label="Open"
      color="neutral"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      :ui="{
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
      }"
      block
    />

    <template #content>
      <Placeholder class="h-48" />
    </template>
  </PCollapsible>
</template>
```

## API

### Props

```ts
/**
 * Props for the Collapsible component
 */
interface CollapsibleProps {
  /**
   * The icon displayed to toggle the collapsible.
   * @default appConfig.ui.icons.chevronDown
   */
  icon?: any;
  /**
   * The name displayed in the trigger label.
   * @default t('prose.collapsible.name')
   */
  name?: string | undefined;
  /**
   * The text displayed when the collapsible is open.
   * @default t('prose.collapsible.openText')
   */
  openText?: string | undefined;
  /**
   * The text displayed when the collapsible is closed.
   * @default t('prose.collapsible.closeText')
   */
  closeText?: string | undefined;
  ui?: { root?: SlotClass; trigger?: SlotClass; triggerIcon?: SlotClass; triggerLabel?: SlotClass; content?: SlotClass; } & { root?: SlotClass; content?: SlotClass; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Collapsible component
 */
interface CollapsibleSlots {
  default(): any;
}
```

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    collapsible: {
      slots: {
        root: '',
        content: 'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] data-[state=closed]:overflow-hidden'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Collapsible.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/collapsible.ts).

---

- [Collapsible](/akar/components/collapsible)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Collapsible.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Collapsible source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Collapsible.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ root?: SlotClass; content?: SlotClass; } | undefined; optional`
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the collapsible.
- **unmountOnHide** — `boolean | undefined; optional; default: true`: When \`true\`, the element will be unmounted on closed state.
- **open** — `boolean | undefined; optional`: The controlled open state of the collapsible. Can be binded with \`v-model\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the collapsible when it is initially rendered. <br> Use when you do not need to control its open state.

### Slots

- **default** — `{ open: boolean; }`
- **content** — `{} | undefined`

### Events

- **update:open** — `[value: boolean]`
