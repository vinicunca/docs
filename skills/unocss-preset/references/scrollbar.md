# Scrollbar utilities

Docs: https://vinicunca.dev/raw/unocss-preset/scrollbar.md · options: [references/options.md](options.md#scrollbar-unopresetscrollbaroption)

Enable with `presetVinicunca({ scrollbar: true })` or an options object.

## Shortcuts

| Class | Effect |
| --- | --- |
| `scrollbar` | `overflow: auto`, sets `--scrollbar-track/thumb/width/height/track-radius/thumb-radius` to the option defaults, styles `::-webkit-scrollbar` size and track/thumb colors |
| `scrollbar-rounded` | Track and thumb `border-radius` from the radius vars |
| `scrollbar-thin` | `--scrollbar-width/height: 8px`; `scrollbar-width: thin` only when `noCompatible: false` |
| `scrollbar-none` | `scrollbar-width: none` and `::-webkit-scrollbar { display: none }` |

## Utilities

| Class | Sets |
| --- | --- |
| `scrollbar-thumb-color-<color>` / `scrollbar-track-color-<color>` | `--scrollbar-thumb` / `--scrollbar-track` from theme colors (`scrollbar-thumb-color-gray-400`) |
| `scrollbar-w-<n>` / `scrollbar-h-<n>` | `--scrollbar-width` / `--scrollbar-height` |
| `scrollbar-radius-<n>` | Track and thumb radius |
| `scrollbar-track-radius-<n>` / `scrollbar-thumb-radius-<n>` | One radius |

`<n>` is an integer, optionally followed by a unit: `scrollbar-w-4` → `1rem` via `numberToUnit` (n/4 rem); `scrollbar-w-4px` → `4px`.

## Variants

`scrollbar:`, `scrollbar-track:`, `scrollbar-thumb:` rewrite the selector to `::-webkit-scrollbar`, `::-webkit-scrollbar-track`, `::-webkit-scrollbar-thumb`. Use them with any utility:

```html
<div class="scrollbar scrollbar-thumb:bg-gray-400 scrollbar-thumb:rounded-full">…</div>
```

## Firefox (`noCompatible`)

Default `true`: Firefox gets no `scrollbar-color` / `scrollbar-width` (except `none`), so only WebKit/Blink are styled, and UnoCSS warns `unmatched utility "scrollbar-width-auto"` / `"scrollbar-color-[…]"` while expanding `scrollbar`. The warnings are harmless.

`noCompatible: false` emits `scrollbar-color` and `scrollbar-width`. Browsers that support `scrollbar-color` then ignore `::-webkit-scrollbar` styling, so `scrollbar-rounded`, `scrollbar-w-*`, and `scrollbar-h-*` stop applying there.
