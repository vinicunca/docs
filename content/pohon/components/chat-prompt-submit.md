---
title: "ChatPromptSubmit"
description: "A Button for submitting chat prompts with automatic status handling."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/chat-prompt-submit.md"
---
## Usage

The ChatPromptSubmit component is used inside the [ChatPrompt](/pohon/components/chat-prompt) component to submit the prompt. It automatically handles the different `status` values to control the chat.

It extends the [Button](/pohon/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <PChatPrompt>
    <PChatPromptSubmit />
  </PChatPrompt>
</template>
```

> [!NOTE]
> 
> You can also use it inside the `footer` slot of the [`ChatPrompt`](/pohon/components/chat-prompt) component.

### Ready

When its status is `ready`, use the `color`, `variant` and `icon` props to customize the Button. Defaults to:

- `color="primary"`
- `variant="solid"`
- `icon="i-lucide-arrow-up"`

```vue
<template>
  <UChatPromptSubmit color="primary" variant="solid" icon="i-lucide-arrow-up" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.arrowUp` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.arrowUp` key.

### Submitted

When its status is `submitted`, use the `submitted-color`, `submitted-variant` and `submitted-icon` props to customize the Button. Defaults to:

- `submittedColor="neutral"`
- `submittedVariant="subtle"`
- `submittedIcon="i-lucide-square"`

> [!NOTE]
> 
> The `stop` event is emitted when the user clicks on the Button.

```vue
<template>
  <UChatPromptSubmit submitted-color="neutral" submitted-variant="subtle" submitted-icon="i-lucide-square" status="submitted" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.stop` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.stop` key.

### Streaming

When its status is `streaming`, use the `streaming-color`, `streaming-variant` and `streaming-icon` props to customize the Button. Defaults to:

- `streamingColor="neutral"`
- `streamingVariant="subtle"`
- `streamingIcon="i-lucide-square"`

> [!NOTE]
> 
> The `stop` event is emitted when the user clicks on the Button.

```vue
<template>
  <UChatPromptSubmit streaming-color="neutral" streaming-variant="subtle" streaming-icon="i-lucide-square" status="streaming" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.stop` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.stop` key.

### Error

When its status is `error`, use the `error-color`, `error-variant` and `error-icon` props to customize the Button. Defaults to:

- `errorColor="error"`
- `errorVariant="soft"`
- `errorIcon="i-lucide-rotate-ccw"`

> [!NOTE]
> 
> The `reload` event is emitted when the user clicks on the Button.

```vue
<template>
  <UChatPromptSubmit error-color="error" error-variant="soft" error-icon="i-lucide-rotate-ccw" status="error" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.reload` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.reload` key.

## Examples

> [!TIP]
> See: /docs/components/chat
> 
> Check the **Chat** overview page for installation instructions, server setup and usage examples.

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> 
> This component also supports all native `<button>` HTML attributes.

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    chatPromptSubmit: {
      slots: {
        base: ''
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ChatPromptSubmit.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/chat-prompt-submit.ts).

---

- [Button](/pohon/components/button)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatPromptSubmit.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ChatPromptSubmit source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatPromptSubmit.vue)

### Props

- **status** — `ChatStatus | undefined; optional; default: "ready"`
- **icon** — `any; optional`: The icon displayed in the button when the status is \`ready\`. Set to \`false\` to hide the icon.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`: The color of the button when the status is \`ready\`.
- **variant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional`: The variant of the button when the status is \`ready\`.
- **streamingIcon** — `any; optional`: The icon displayed in the button when the status is \`streaming\`.
- **streamingColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "neutral"`: The color of the button when the status is \`streaming\`.
- **streamingVariant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional; default: "subtle"`: The variant of the button when the status is \`streaming\`.
- **submittedIcon** — `any; optional`: The icon displayed in the button when the status is \`submitted\`.
- **submittedColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "neutral"`: The color of the button when the status is \`submitted\`.
- **submittedVariant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional; default: "subtle"`: The variant of the button when the status is \`submitted\`.
- **errorIcon** — `any; optional`: The icon displayed in the button when the status is \`error\`.
- **errorColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "error"`: The color of the button when the status is \`error\`.
- **errorVariant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional; default: "soft"`: The variant of the button when the status is \`error\`.
- **ui** — `({ base?: SlotClass; } & { base?: SlotClass; label?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailingIcon?: SlotClass; }) | undefined; optional`
- **type** — `"button" | "reset" | "submit" | undefined; optional`: The type of the button when not a link.
- **disabled** — `boolean | undefined; optional`
- **as** — `any; optional`: The element or component this component should render as when not a link.
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **name** — `string | undefined; optional`
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **label** — `string | undefined; optional`
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **onClick** — `((event: MouseEvent) => void) | ((event: MouseEvent) => void)[] | undefined; optional`
- **form** — `string | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **block** — `boolean | undefined; optional`: Render the button full width.
- **exactActiveClass** — `string | undefined; optional`: Class to apply when the link is exact active
- **viewTransition** — `boolean | undefined; optional`: Pass the returned promise of \`router.push()\` to \`document.startViewTransition()\` if supported.
- **autofocus** — `Booleanish | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`
- **activeColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **activeVariant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional`
- **square** — `boolean | undefined; optional`: Render the button with equal padding on all sides.
- **loadingAuto** — `boolean | undefined; optional`: Set loading state automatically based on the \`@click\` promise state
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.

### Slots

- **leading** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **reload** — `[event: MouseEvent]`
- **stop** — `[event: MouseEvent]`
