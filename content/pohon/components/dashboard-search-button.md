---
title: "DashboardSearchButton"
description: "A pre-styled Button to open the DashboardSearch modal."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/dashboard-search-button.md"
---
## Usage

The DashboardSearchButton component is used to open the [DashboardSearch](/pohon/components/dashboard-search) modal.

```vue
<template>
  <UDashboardSearchButton />
</template>
```

It extends the [Button](/pohon/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UDashboardSearchButton variant="subtle" />
</template>
```

> [!NOTE]
> See: #collapsed
> 
> The button defaults to `color="neutral"` and `variant="outline"` when not collapsed, `variant="ghost"` when collapsed.

### Collapsed

Use the `collapsed` prop to hide the button's label and [kbds](#kbds). Defaults to `false`.

```vue
<template>
  <UDashboardSearchButton collapsed />
</template>
```

> [!TIP]
> See: /docs/components/dashboard-sidebar#slots
> 
> When using the button in the **DashboardSidebar** component, use the `collapsed` slot prop directly.

### Kbds

Use the `kbds` prop to display keyboard keys in the button. Defaults to `['meta', 'K']` to match the default shortcut of the [DashboardSearch](/pohon/components/dashboard-search#shortcut) component.

```vue
<template>
  <UDashboardSearchButton :collapsed="false" :kbds="[
  'alt',
  'O'
]" />
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> 
> This component also supports all native `<button>` HTML attributes.

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    dashboardSearchButton: {
      slots: {
        base: '',
        label: '',
        trailing: 'hidden lg:flex items-center gap-0.5 ms-auto'
      },
      variants: {
        collapsed: {
          true: {
            label: 'hidden',
            trailing: 'lg:hidden'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/DashboardSearchButton.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/dashboard-search-button.ts).

---

- [Button](/pohon/components/button)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardSearchButton.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[DashboardSearchButton source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardSearchButton.vue)

### Props

- **icon** — `any; optional`: The icon displayed in the button. Set to \`false\` to hide the icon.
- **label** — `string | undefined; optional`: The label displayed in the button.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "neutral"`: The color of the button.
- **variant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional`: The variant of the button. Defaults to 'outline' when not collapsed, 'ghost' when collapsed.
- **collapsed** — `boolean | undefined; optional; default: false`: Whether the button is collapsed.
- **tooltip** — `boolean | TooltipProps | undefined; optional; default: false`: Display a tooltip on the button when is collapsed with the button label. This has priority over the global \`tooltip\` prop.
- **kbds** — `(string | undefined)[] | KbdProps[] | undefined; optional; default: ["meta", "k"]`: The keyboard keys to display in the button. \`{ variant: 'subtle' }\`{lang="ts-type"}
- **ui** — `({ base?: SlotClass; label?: SlotClass; trailing?: SlotClass; } & { base?: SlotClass; label?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailingIcon?: SlotClass; }) | undefined; optional`
- **type** — `"button" | "reset" | "submit" | undefined; optional`: The type of the button when not a link.
- **disabled** — `boolean | undefined; optional`
- **as** — `any; optional`: The element or component this component should render as when not a link.
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **name** — `string | undefined; optional`
- **leadingIcon** — `any; optional`: Display an icon on the left side.
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

No events are declared.
