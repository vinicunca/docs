# Enter/exit animation utilities

Docs: https://vinicunca.dev/raw/unocss-preset/animations.md · [fade](https://vinicunca.dev/raw/unocss-preset/animations/fade.md) · [zoom](https://vinicunca.dev/raw/unocss-preset/animations/zoom.md) · [spin](https://vinicunca.dev/raw/unocss-preset/animations/spin.md) · [slide](https://vinicunca.dev/raw/unocss-preset/animations/slide.md) · [properties](https://vinicunca.dev/raw/unocss-preset/animations/animation-properties.md)

`animate-in` animates **from** the `--vin-enter-*` values to the element's natural state; `animate-out` animates **to** the `--vin-exit-*` values. Both reset their vars to `initial`, so only the modifiers you add take effect. The `-<value>` part of every modifier is optional.

## Value syntax

| Utility | Var | Default | Accepted values |
| --- | --- | --- | --- |
| `fade-in-<v>` / `fade-out-<v>` | `--vin-enter-opacity` / `--vin-exit-opacity` | `0` | `0`–`100` (`50` → `0.5`), `66.6%`, `$var` |
| `zoom-in-<v>` / `zoom-out-<v>` | `--vin-enter-scale` / `--vin-exit-scale` | `0` | number (`95` → `0.95`), `%`, fraction (`1/2` → `50%`), `full`, negatives, `$var` |
| `spin-in-<v>` / `spin-out-<v>` | `--vin-enter-rotate` / `--vin-exit-rotate` | `30deg` | number (deg), `<n>deg\|rad\|grad\|turn`, negatives, `$var` |
| `slide-in-<dir>-<v>` / `slide-out-<dir>-<v>` | `--vin-enter-translate-x\|y` / `--vin-exit-translate-x\|y` | `100%` | number (`4` → `1rem`, n/4 rem), `%`, fraction, `full`, `$var` |

- `<dir>` is `top`, `bottom`, `left`, or `right`. `top`/`left` negate the value (`slide-in-top-4` → `-1rem`). Combine one y and one x direction for diagonals: `slide-in-top-1/2 slide-in-left-4`.
- `slide-in-from-<dir>` and `slide-out-to-<dir>` are readable aliases.
- Prefer the opposite direction over negative values (`slide-in-bottom-4`, not `slide-in-top--4`). `$var` values are inserted without direction handling.
- `$my-var` → `var(--my-var)`.
- Avoid `[]` arbitrary values: `spin-in-[30]` emits a unitless `30` and invalidates `transform`.
- Short directions (`slide-in-t`) appear in autocomplete but emit no CSS.

## Timing modifiers (Wind4)

| tailwindcss-animate | This preset |
| --- | --- |
| `duration-300` | `animate-duration-300` |
| `delay-150` | `animate-delay-150` |
| `ease-in-out` | `animate-ease-in-out` |
| `direction-reverse` | `animate-reverse` / `animate-direction-reverse` |
| `fill-mode-both` | `animate-both` / `animate-fill-both` / `animate-mode-both` / `animate-fill-mode-both` |
| `repeat-2` / `repeat-infinite` | `animate-count-2` / `animate-iteration-infinite` / `animate-iteration-count-*` |
| `running` / `paused` | `animate-paused` / `animate-play-paused` / `animate-state-paused` / `animate-play-state-paused` |

Reduced motion: `motion-reduce:animate-none`, `motion-safe:animate-in`.

## Patterns

```html
<!-- dialog content -->
<div class="animate-in fade-in zoom-in-95 animate-duration-200">…</div>

<!-- toast leaving to the right, holding the last frame -->
<li class="animate-out fade-out slide-out-to-right animate-both">…</li>

<!-- data-state driven (Akar / Pohon components) -->
<div class="data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out">…</div>
```

Playground preset config for the UnoCSS interactive docs: https://vinicunca.dev/raw/unocss-preset/animations/interactive-documentation.md
