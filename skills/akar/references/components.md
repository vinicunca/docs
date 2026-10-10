# Akar component index

The 60 documented primitives, grouped by job. Each name links to its raw Markdown page (anatomy, API tables, keyboard map). The notes cover parts and rules that are easy to miss; the page holds everything else.

Base URL: `https://vinicunca.dev/raw/akar/components/<page>.md`

## Overlays and menus

| Component | Notes |
|---|---|
| [Dialog](https://vinicunca.dev/raw/akar/components/dialog.md) | `modal` defaults to `true`. `DialogTitle` required. `DialogRoot` slot exposes `close` for closing after async work. |
| [Alert Dialog](https://vinicunca.dev/raw/akar/components/alert-dialog.md) | Confirmation dialog. `AlertDialogAction` / `AlertDialogCancel` instead of Close; outside clicks do not dismiss it. |
| [Drawer](https://vinicunca.dev/raw/akar/components/drawer.md) | Alpha. Edge panel with swipe-to-dismiss, snap points, nested drawers. `DrawerHandle`; CSS variables `--drawer-*`. |
| [Popover](https://vinicunca.dev/raw/akar/components/popover.md) | `modal` defaults to `false`. `PopoverAnchor` positions against an element other than the trigger. |
| [Hover Card](https://vinicunca.dev/raw/akar/components/hover-card.md) | Preview for sighted pointer users only; do not put essential content in it. |
| [Tooltip](https://vinicunca.dev/raw/akar/components/tooltip.md) | Needs one `TooltipProvider` ancestor (`delay-duration` 700 ms, `skip-delay-duration` 300 ms). |
| [Dropdown Menu](https://vinicunca.dev/raw/akar/components/dropdown-menu.md) | Items, `CheckboxItem`, `RadioGroup`/`RadioItem`, `Sub`/`SubTrigger`/`SubContent`, `DropdownMenuFilter` for searchable menus. |
| [Context Menu](https://vinicunca.dev/raw/akar/components/context-menu.md) | Same item parts as Dropdown Menu; opens on right-click or long-press of `ContextMenuTrigger`. |
| [Menubar](https://vinicunca.dev/raw/akar/components/menubar.md) | Desktop-style bar: `MenubarRoot` > `MenubarMenu` > `MenubarTrigger` + `MenubarContent`. |
| [Navigation Menu](https://vinicunca.dev/raw/akar/components/navigation-menu.md) | Site navigation with `NavigationMenuViewport` and `NavigationMenuIndicator`; sizes exposed as `--akar-navigation-menu-viewport-*`. |
| [Toast](https://vinicunca.dev/raw/akar/components/toast.md) | `ToastProvider` wraps everything; render toasts into `ToastViewport`. `ToastAction` requires `alt-text`. |

## Disclosure and layout

| Component | Notes |
|---|---|
| [Accordion](https://vinicunca.dev/raw/akar/components/accordion.md) | `type` is inferred from the value (array means `multiple`). `collapsible` lets a single item close. Animate with `--akar-accordion-content-height`. |
| [Collapsible](https://vinicunca.dev/raw/akar/components/collapsible.md) | One panel. Animate with `--akar-collapsible-content-height`. |
| [Tabs](https://vinicunca.dev/raw/akar/components/tabs.md) | `activation-mode` `automatic` (default) or `manual`. `TabsIndicator` exposes `--akar-tabs-indicator-size` / `-position`. |
| [Splitter](https://vinicunca.dev/raw/akar/components/splitter.md) | `SplitterGroup` > `SplitterPanel` + `SplitterResizeHandle`. |
| [Scroll Area](https://vinicunca.dev/raw/akar/components/scroll-area.md) | Give `ScrollAreaRoot` a bounded size; add one `ScrollAreaScrollbar` + `ScrollAreaThumb` per axis. |
| [Aspect Ratio](https://vinicunca.dev/raw/akar/components/aspect-ratio.md) | Single part, `ratio` prop. |
| [Separator](https://vinicunca.dev/raw/akar/components/separator.md) | `decorative` removes it from the accessibility tree. |
| [Toolbar](https://vinicunca.dev/raw/akar/components/toolbar.md) | Roving focus across `ToolbarButton`, `ToolbarLink`, `ToolbarToggleGroup`. |
| [Stepper](https://vinicunca.dev/raw/akar/components/stepper.md) | `data-state` is `active` / `inactive` / `completed`. `linear` enforces order. |
| [Pagination](https://vinicunca.dev/raw/akar/components/pagination.md) | `items-per-page` is required. `PaginationList` slot yields items to loop over. |

## Form controls

| Component | Notes |
|---|---|
| [Checkbox](https://vinicunca.dev/raw/akar/components/checkbox.md) | `v-model` accepts `true` / `false` / `'indeterminate'`. `CheckboxGroupRoot` holds an array of values. |
| [Radio Group](https://vinicunca.dev/raw/akar/components/radio-group.md) | `RadioGroupItem` + `RadioGroupIndicator`. |
| [Switch](https://vinicunca.dev/raw/akar/components/switch.md) | `SwitchRoot` + `SwitchThumb`. |
| [Toggle](https://vinicunca.dev/raw/akar/components/toggle.md) | Single part; `data-state` `on` / `off`. |
| [Toggle Group](https://vinicunca.dev/raw/akar/components/toggle-group.md) | `type` inferred from the value, like Accordion. |
| [Slider](https://vinicunca.dev/raw/akar/components/slider.md) | Value is `number[]`; render one `SliderThumb` per entry. |
| [Number Field](https://vinicunca.dev/raw/akar/components/number-field.md) | `NumberFieldInput` + `Increment` / `Decrement`; `format-options` uses `Intl.NumberFormat`. |
| [Pin Input](https://vinicunca.dev/raw/akar/components/pin-input.md) | Value is an array (`string[]`, or `number[]` with `type="number"`); render one `PinInputInput` per slot with `:index`. |
| [Rating](https://vinicunca.dev/raw/akar/components/rating.md) | Supports fractional values. |
| [Editable](https://vinicunca.dev/raw/akar/components/editable.md) | Inline edit: `EditableArea` > `EditablePreview` + `EditableInput`, with Submit, Cancel and Edit triggers. |
| [Tags Input](https://vinicunca.dev/raw/akar/components/tags-input.md) | Object values need `convert-value` (throws otherwise) and `display-value`. |
| [Tag Group](https://vinicunca.dev/raw/akar/components/tag-group.md) | Focusable, selectable, removable list of tags (not an input). |
| [Label](https://vinicunca.dev/raw/akar/components/label.md) | Single part; set `for`. |
| [Field](https://vinicunca.dev/raw/akar/components/field.md) / [Form](https://vinicunca.dev/raw/akar/components/form.md) | Validation and ARIA wiring. See [forms.md](forms.md). |

## Selection lists

| Component | Notes |
|---|---|
| [Select](https://vinicunca.dev/raw/akar/components/select.md) | No `value=""` items. `position="item-aligned"` by default. Render the label with `SelectValue` and each option with `SelectItemText`. |
| [Combobox](https://vinicunca.dev/raw/akar/components/combobox.md) | Selects an item. Built-in text filter (`ignore-filter` to opt out); search text is `v-model` on `ComboboxInput`. Has a Virtualizer. |
| [Autocomplete](https://vinicunca.dev/raw/akar/components/autocomplete.md) | Free-text input with suggestions: the value is the input text, not a chosen item. Has a Virtualizer. |
| [Listbox](https://vinicunca.dev/raw/akar/components/listbox.md) | Inline, always-visible list. `ListboxFilter` for search. Has a Virtualizer. |
| [Tree](https://vinicunca.dev/raw/akar/components/tree.md) | `get-key` is required. Loop the Root slot's `flattenItems` and spread `v-bind="item.bind"` on each `TreeItem`. Has a Virtualizer. |

Virtualizers (`ComboboxVirtualizer`, `ListboxVirtualizer`, `TreeVirtualizer`, `AutocompleteVirtualizer`) need a parent with a fixed height or max-height, an `estimate-size`, and `text-content` for typeahead. See the [virtualization guide](https://vinicunca.dev/raw/akar/guides/virtualization.md).

## Dates and times

[Calendar](https://vinicunca.dev/raw/akar/components/calendar.md), [Range Calendar](https://vinicunca.dev/raw/akar/components/range-calendar.md), [Date Field](https://vinicunca.dev/raw/akar/components/date-field.md), [Date Range Field](https://vinicunca.dev/raw/akar/components/date-range-field.md), [Time Field](https://vinicunca.dev/raw/akar/components/time-field.md), [Time Range Field](https://vinicunca.dev/raw/akar/components/time-range-field.md), [Date Picker](https://vinicunca.dev/raw/akar/components/date-picker.md), [Date Range Picker](https://vinicunca.dev/raw/akar/components/date-range-picker.md), [Month Picker](https://vinicunca.dev/raw/akar/components/month-picker.md), [Month Range Picker](https://vinicunca.dev/raw/akar/components/month-range-picker.md), [Year Picker](https://vinicunca.dev/raw/akar/components/year-picker.md), [Year Range Picker](https://vinicunca.dev/raw/akar/components/year-range-picker.md). All take `@internationalized/date` values. See [dates.md](dates.md).

## Color

[Color Area](https://vinicunca.dev/raw/akar/components/color-area.md), [Color Field](https://vinicunca.dev/raw/akar/components/color-field.md), [Color Slider](https://vinicunca.dev/raw/akar/components/color-slider.md), [Color Swatch](https://vinicunca.dev/raw/akar/components/color-swatch.md), [Color Swatch Picker](https://vinicunca.dev/raw/akar/components/color-swatch-picker.md). Color helpers (`parseColor`, `colorToHex`, `convertToHsl`, `getAreaGradient`, ...) are exported from `akar`.

## Display

[Avatar](https://vinicunca.dev/raw/akar/components/avatar.md) (`AvatarImage` + `AvatarFallback`, with `delay-ms` on the fallback), [Progress](https://vinicunca.dev/raw/akar/components/progress.md) (`data-state` `loading` / `complete` / `indeterminate`; pass `null` for indeterminate).

## Utilities

Components: [ConfigProvider](https://vinicunca.dev/raw/akar/utilities/config-provider.md), [FocusScope](https://vinicunca.dev/raw/akar/utilities/focus-scope.md), [Presence](https://vinicunca.dev/raw/akar/utilities/presence.md), [Primitive](https://vinicunca.dev/raw/akar/utilities/primitive.md), [Slot](https://vinicunca.dev/raw/akar/utilities/slot.md), [RovingFocus](https://vinicunca.dev/raw/akar/utilities/roving-focus.md), [VisuallyHidden](https://vinicunca.dev/raw/akar/utilities/visually-hidden.md).

Composables: [useForwardPropsEmits](https://vinicunca.dev/raw/akar/utilities/use-forward-props-emits.md), [useForwardProps](https://vinicunca.dev/raw/akar/utilities/use-forward-props.md), [useEmitAsProps](https://vinicunca.dev/raw/akar/utilities/use-emit-as-props.md), [useForwardExpose](https://vinicunca.dev/raw/akar/utilities/use-forward-expose.md), [useId](https://vinicunca.dev/raw/akar/utilities/use-id.md), [useFilter](https://vinicunca.dev/raw/akar/utilities/use-filter.md), [useDateFormatter](https://vinicunca.dev/raw/akar/utilities/use-date-formatter.md), [useDirection](https://vinicunca.dev/raw/akar/utilities/use-direction.md), [useLocale](https://vinicunca.dev/raw/akar/utilities/use-locale.md).
