---
title: "AvatarGroup"
description: "Stack multiple avatars in a group."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/avatar-group.md"
---
## Usage

Wrap multiple [Avatar](/pohon/components/avatar) within an AvatarGroup to stack them.

```vue
<template>
  <UAvatarGroup>
    <PAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <PAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" />
    <PAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" />
  </UAvatarGroup>
</template>
```

### Size

Use the `size` prop to change the size of all the avatars.

```vue
<template>
  <UAvatarGroup size="xl">
    <PAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <PAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <PAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
  </UAvatarGroup>
</template>
```

### Max

Use the `max` prop to limit the number of avatars displayed. The rest is displayed as an `+X` avatar.

```vue
<template>
  <UAvatarGroup :max="2">
    <PAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <PAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <PAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
  </UAvatarGroup>
</template>
```

### Color

Use the `color` prop to change the color of all the avatars.

```vue
<template>
  <UAvatarGroup color="primary">
    <PAvatar alt="Benjamin Canac" />
    <PAvatar alt="Hugo Richard" />
    <PAvatar alt="Sébastien Chopin" />
  </UAvatarGroup>
</template>
```

## Examples

### With tooltip

Wrap each avatar with a [Tooltip](/pohon/components/tooltip) to display a tooltip on hover.

```vue [AvatarGroupTooltipExample.vue]
<template>
  <PAvatarGroup>
    <PTooltip text="benjamincanac">
      <PAvatar
        src="https://github.com/benjamincanac.png"
        alt="Benjamin Canac"
        loading="lazy"
      />
    </PTooltip>

    <PTooltip text="HugoRCD">
      <PAvatar
        src="https://github.com/HugoRCD.png"
        alt="Hugo Richard"
        loading="lazy"
      />
    </PTooltip>

    <PTooltip text="atinux">
      <PAvatar
        src="https://github.com/atinux.png"
        alt="Sébastien Chopin"
        loading="lazy"
      />
    </PTooltip>
  </PAvatarGroup>
</template>
```

### With chip

Wrap each avatar with a [Chip](/pohon/components/chip) to display a chip around the avatar.

```vue [AvatarGroupChipExample.vue]
<template>
  <PAvatarGroup>
    <PAvatar
      src="https://github.com/benjamincanac.png"
      alt="Benjamin Canac"
      loading="lazy"
      :chip="{ inset: true, color: 'success' }"
    />

    <PAvatar
      src="https://github.com/HugoRCD.png"
      alt="Hugo Richard"
      loading="lazy"
      :chip="{ inset: true, color: 'warning' }"
    />

    <PAvatar
      src="https://github.com/atinux.png"
      alt="Sébastien Chopin"
      loading="lazy"
      :chip="{ inset: true, color: 'error' }"
    />
  </PAvatarGroup>
</template>
```

### With link

Wrap each avatar with a [Link](/pohon/components/link) to make them clickable.

```vue [AvatarGroupLinkExample.vue]
<template>
  <PAvatarGroup>
    <PLink
      to="https://github.com/benjamincanac"
      target="_blank"
      class="hover:ring-primary transition"
      raw
    >
      <PAvatar
        src="https://github.com/benjamincanac.png"
        alt="Benjamin Canac"
        loading="lazy"
      />
    </PLink>

    <PLink
      to="https://github.com/HugoRCD"
      target="_blank"
      class="hover:ring-primary transition"
      raw
    >
      <PAvatar
        src="https://github.com/HugoRCD.png"
        alt="Hugo Richard"
        loading="lazy"
      />
    </PLink>

    <PLink
      to="https://github.com/atinux"
      target="_blank"
      class="hover:ring-primary transition"
      raw
    >
      <PAvatar
        src="https://github.com/atinux.png"
        alt="Sébastien Chopin"
        loading="lazy"
      />
    </PLink>
  </PAvatarGroup>
</template>
```

### With mask

Wrap an avatar with a CSS mask to display it with a custom shape.

```vue [AvatarGroupMaskExample.vue]
<template>
  <PAvatarGroup :ui="{ base: 'rounded-none squircle' }">
    <PAvatar
      src="https://github.com/benjamincanac.png"
      alt="Benjamin Canac"
      loading="lazy"
      class="rounded-none squircle"
    />

    <PAvatar
      src="https://github.com/HugoRCD.png"
      alt="Hugo Richard"
      loading="lazy"
      class="rounded-none squircle"
    />

    <PAvatar
      src="https://github.com/atinux.png"
      alt="Sébastien Chopin"
      loading="lazy"
      class="rounded-none squircle"
    />
  </PAvatarGroup>
</template>

<style>
.squircle {
  mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}
</style>
```

> [!WARNING]
> 
> The `chip` prop does not work correctly when using a mask. Chips may be cut depending on the mask shape.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    avatarGroup: {
      slots: {
        root: 'inline-flex flex-row-reverse justify-end',
        base: 'relative rounded-full ring-bg first:me-0'
      },
      variants: {
        size: {
          '3xs': {
            base: 'ring -me-0.5'
          },
          '2xs': {
            base: 'ring -me-0.5'
          },
          xs: {
            base: 'ring -me-0.5'
          },
          sm: {
            base: 'ring-2 -me-1.5'
          },
          md: {
            base: 'ring-2 -me-1.5'
          },
          lg: {
            base: 'ring-2 -me-1.5'
          },
          xl: {
            base: 'ring-3 -me-2'
          },
          '2xl': {
            base: 'ring-3 -me-2'
          },
          '3xl': {
            base: 'ring-3 -me-2'
          }
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        }
      },
      defaultVariants: {
        size: 'md',
        color: 'neutral'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/AvatarGroup.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/avatar-group.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/AvatarGroup.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[AvatarGroup source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/AvatarGroup.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **size** — `"2xl" | "md" | "3xs" | "2xs" | "xs" | "sm" | "lg" | "xl" | "3xl" | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **max** — `string | number | undefined; optional`: The maximum number of avatars to display.
- **ui** — `{ root?: SlotClass; base?: SlotClass; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
