# presetVinicunca nested options

Source of truth: https://vinicunca.dev/raw/unocss-preset/getting-started/options.md

An options object is deep-merged over the defaults; `true` uses the defaults as-is.

## `animation: AnimationOptions`

These become the base CSS of `animate-in` / `animate-out`. Every field except `unit` has no default and is omitted from the CSS when unset.

| Field | Type | Effect |
| --- | --- | --- |
| `unit` | `'ms' \| 's'` | Default `'ms'`. Appended to `duration` and `delay` |
| `duration` | `number` | `animation-duration: ${duration}${unit}`. Unset → hardcoded `150ms` |
| `delay` | `number` | `animation-delay` (a `0` value is ignored) |
| `direction` | `'normal' \| 'reverse' \| 'alternate' \| 'alternate-reverse'` | `animation-direction` |
| `fillMode` | `'none' \| 'forwards' \| 'backwards' \| 'both'` | `animation-fill-mode`; `'both'` is the usual choice |
| `iterationCount` | `number \| 'infinite'` | `animation-iteration-count` |
| `playState` | `'running' \| 'paused'` | `animation-play-state` |
| `timingFunction` | `string` | `animation-timing-function` |

```ts
presetVinicunca({ animation: { duration: 200, fillMode: 'both' } })
```

`fillMode` and friends belong under `animation`, never at the top level.

## `fluid: FluidOptions`

| Field | Default | Effect |
| --- | --- | --- |
| `prefix` | `'fluid-'` | Utility and custom-property prefix. The in-package fluid README still shows `f-`; that is not the default |
| `minContainerWidth` | `320` | Width (in base-unit count) where scaling starts |
| `maxContainerWidth` | `1920` | Width where scaling stops |
| `defaultBaseUnit` | `'px'` | `px`, `rem`, `em`, `vw`, `vh`, `vmin`, `vmax`, `fr`. `'percent'` is typed but resolves to no unit and produces broken CSS in 2.4.0 |
| `utilities` | `[]` | Extra `[name, cssProperties[]]` pairs; a built-in name is replaced |
| `themeShortcuts` | `true` | `false` keeps numeric utilities, drops `fluid-p-lg`-style names |
| `disableTheme` | `false` | `true` also drops named shortcuts |
| `attributify` | `false` | Adds `pt-fluid-32/64`-style aliases (and `pt-fluid-lg`) |
| `expandCSSVariables` | `false` | Splits the clamp into `--fluid-<u>-range-width`, `-factor`, `-range-size`, `-fluid`, `-size` |
| `commentHelpers` | `false` | Accepted by the type; emits nothing |

```ts
presetVinicunca({
  fluid: {
    defaultBaseUnit: 'rem',
    utilities: [['stroke', ['stroke-width']]] // fluid-stroke-1/3
  }
})
```

## `scrollbar: UnoPresetScrollbarOption`

| Field | Default | Effect |
| --- | --- | --- |
| `scrollbarWidth` / `scrollbarHeight` | `'8px'` | Initial `--scrollbar-width` / `--scrollbar-height` |
| `scrollbarTrackRadius` / `scrollbarThumbRadius` | `'4px'` | Initial radius vars |
| `scrollbarTrackColor` | `'#f5f5f5'` | Initial `--scrollbar-track` |
| `scrollbarThumbColor` | `'#ddd'` | Initial `--scrollbar-thumb` |
| `prefix` | `''` | UnoCSS preset prefix for every scrollbar utility and shortcut |
| `varPrefix` | `''` | Vars become `--<varPrefix>-scrollbar-*` |
| `numberToUnit` | `n => \`${n / 4}rem\`` | Converts unitless `scrollbar-w-4` etc. |
| `noCompatible` | `true` | Skips Firefox `scrollbar-color` / `scrollbar-width` (except `none`). Set `false` to emit them; Firefox then ignores webkit sizing and radius |

## `alias: TransformerAliasOptions`

| Field | Default | Effect |
| --- | --- | --- |
| `prefix` | `'*'` | `*name` is replaced by the expansion of shortcut `name` |
| `keep` | `'+'` | `+name` keeps `name` and appends the expansion. A string means `{ prefix, block: true }` |
| `keep.block` | `true` | Adds `name` to `uno.config.blocklist` |

Only names found in your UnoCSS `shortcuts` (static or regex) expand; nested shortcuts expand up to 5 levels.

## Other presets

- `wind4`: `PresetWind4Options`, merged over `{ preflights: { reset: false } }`.
- `icons`: `IconsOptions` from `@unocss/preset-icons`.
- `typography`: `TypographyOptions`; `webFonts`: `WebFontsOptions` (no provider is set by this preset, so UnoCSS's default applies).
- `directives` / `variantGroup`: the UnoCSS transformer options.
