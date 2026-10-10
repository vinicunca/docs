# Fluid utilities

Docs: https://vinicunca.dev/raw/unocss-preset/fluid.md · [utilities](https://vinicunca.dev/raw/unocss-preset/fluid/utilities.md) · [examples](https://vinicunca.dev/raw/unocss-preset/fluid/examples.md)

Output for `fluid-pt-32/64` (defaults: `px`, 320–1920):

```css
--fluid-pt-min: 32; --fluid-pt-max: 64;
padding-top: clamp(32px, <linear interpolation over 100vw>, 64px);
```

Unset min/max fall back to `16`. All parts are custom properties named `--{prefix}{utility}-{min|max|min-container|max-container|unit|container}`, so they inherit: a parent can set `fluid-pt-min-container-480` for its children.

## Modifiers

For any utility `<u>` (examples use `pt`):

| Class | Effect |
| --- | --- |
| `fluid-pt-32/64` | Shortcut for `fluid-pt fluid-pt-min-32 fluid-pt-max-64` |
| `fluid-pt` | Apply the clamp with the current min/max vars |
| `fluid-pt-min-32` / `fluid-pt-max-64` | Set min / max size |
| `fluid-pt-min-container-480` / `fluid-pt-max-container-1440` | Set where scaling starts / stops |
| `fluid-pt-base-rem` | Unit for this utility: `px`, `rem`, `em`, `vw`, `vh`, `vmin`, `vmax`, `fr` (`percent` emits nothing) |
| `fluid-pt-lg` | Theme shortcut (see below) |

All numbers are integers (`\d+`); decimals do not match.

### CSS-variable form (`$`)

| Class | Effect |
| --- | --- |
| `fluid-$name-8/12` | Writes the clamp to `--fluid-name`; if `name` is a built-in utility, also sets its properties |
| `fluid-$name-min-8` / `-max-12` / `-min-container-480` / `-max-container-1440` / `-base-rem` | As above, per variable |
| `fluid-$name-container` | Use `100cqw` (container query width) instead of `100vw` |

`name` matches `\w+` (no hyphens). Use custom ones in CSS: `--other: calc(var(--fluid-myvar) * 1.5)`.

Container query width on a plain utility: `fluid-pt-container` writes `--fluid-undefined-container` in 2.4.0. Use the `$` form or an arbitrary property:

```html
<div class="@container">
  <div class="fluid-pt-16/48 [--fluid-pt-container:100cqw]">…</div>
</div>
```

## Built-in utilities

| Group | Utilities (CSS property) |
| --- | --- |
| Type | `text` (font-size), `leading` (line-height), `tracking` (letter-spacing), `indent` (text-indent) |
| Margin | `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml` |
| Padding | `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` |
| Size | `w`, `h`, `size` (w+h), `min-w`, `min-h`, `max-w`, `max-h`, `min-size`, `max-size`, `basis` (flex-basis) |
| Position | `top`, `right`, `bottom`, `left` (aliases `t`, `r`, `b`, `l`), `inset`, `inset-x`, `inset-y` |
| Gap | `gap` / `flex-gap`, `gap-x` / `flex-gap-x` (column-gap), `gap-y` / `flex-gap-y` (row-gap), `column-gap` |
| Border | `rounded` (border-radius), `border`, `border-x`, `border-y`, `border-t`, `border-r`, `border-b`, `border-l` (widths) |
| Outline / ring | `outline` (outline-width), `outline-offset`, `ring` (`--un-ring-width`), `ring-offset` (`--un-ring-offset-width`) |
| Effects | `shadow` (box-shadow), `blur` (`--un-blur`), `backdrop-blur` (`--un-backdrop-blur`) |
| Translate | `translate`, `translate-x`, `translate-y`, `translate-z` (`--un-translate-*`; add Wind4 `transform`) |
| Scroll | `scroll-p`, `scroll-px`, `scroll-py`, `scroll-pt/pr/pb/pl`, `scroll-m`, `scroll-mx`, `scroll-my`, `scroll-mt/mr/mb/ml` |

Add more with `fluid: { utilities: [['stroke', ['stroke-width']]] }`.

## Theme shortcuts

`fluid-<u>-<name>` → `fluid-<u>-<min>/<max>`. Disable with `themeShortcuts: false` or `disableTheme: true`.

Spacing — every utility except `text` and `rounded`:

| `2xs` | `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8/12 | 12/16 | 16/24 | 24/32 | 32/48 | 48/72 | 72/96 | 96/128 | 128/144 | 144/200 |

Font size — `fluid-text-<name>`:

| `3xs` | `2xs` | `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9/11 | 10/12 | 12/14 | 14/16 | 16/16 | 16/18 | 18/22 | 22/26 | 26/32 | 32/44 |

Radius — `fluid-rounded-<name>`:

| `xs` | `sm` | `md` | `lg` | `xl` | `2xl` |
| --- | --- | --- | --- | --- | --- |
| 2/4 | 4/6 | 6/8 | 8/12 | 12/16 | 16/24 |

Values are in the base unit (`px` by default).
