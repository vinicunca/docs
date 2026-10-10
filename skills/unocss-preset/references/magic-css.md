# Magic CSS animations

Docs: https://vinicunca.dev/raw/unocss-preset/magic-css.md

Enable with `presetVinicunca({ magicCss: true })` (boolean only). Use as `animate-<name>`; each sets `animation-fill-mode: both` and defaults to `1s linear 1`. Tune with Wind4 modifiers:

```html
<div class="animate-swash-in animate-duration-500 animate-ease-in-out">Hello</div>
```

| Category | Names |
| --- | --- |
| Bling | `puff-in`, `puff-out`, `vanish-in`, `vanish-out` |
| Boing | `boing-in-up`, `boing-out-down` |
| Bomb | `bomb-left-out`, `bomb-right-out` |
| Magic Effects | `magic`, `swap`, `twister-in-down`, `twister-in-up` |
| Math | `foolish-in`, `foolish-out`, `hole-out`, `swash-in`, `swash-out` |
| Space | `space-in-{down,left,right,up}`, `space-out-{down,left,right,up}` |
| Perspective | `perspective-{down,left,right,up}`, `perspective-{down,left,right,up}-return` |
| Rotate | `rotate-down`, `rotate-left`, `rotate-right`, `rotate-up` |
| Slide | `slide-{down,left,right,up}`, `slide-{down,left,right,up}-return` |
| Static Effects | `open-{down,up}-{left,right}`, `open-{down,up}-{left,right}-return` |
| Static Effects Out | `open-{down,up}-{left,right}-out` |
| Tin | `tin-{down,left,right,up}-in`, `tin-{down,left,right,up}-out` |

Braces are shorthand for this table only; write each class in full (`animate-space-in-left`). These `slide-*` keyframes are separate from the enter/exit `slide-in-*` / `slide-out-*` utilities.
