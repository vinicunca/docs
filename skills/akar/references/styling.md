# Styling and animating Akar

Akar renders no styles. You style every part through `class` and the attributes Akar sets on it. Each component page lists its exact attributes under "Data attributes" in the API tables.

## State attributes

Boolean attributes are present with an empty value (`data-disabled=""`), so select them with `[data-disabled]`.

| Attribute | Values | Set on |
|---|---|---|
| `data-state` | `open` / `closed` | Overlays, Accordion, Collapsible, menus, Select, Combobox |
| `data-state` | `delayed-open` / `instant-open` / `closed` | Tooltip content and trigger |
| `data-state` | `checked` / `unchecked` / `indeterminate` | Checkbox, Switch, Radio, menu CheckboxItem/RadioItem |
| `data-state` | `active` / `inactive` | Tabs trigger and content, Stepper (plus `completed`) |
| `data-state` | `on` / `off` | Toggle, ToggleGroup item |
| `data-state` | `loading` / `complete` / `indeterminate` | Progress |
| `data-disabled` | present | Any disabled part |
| `data-highlighted` | present | Keyboard or pointer highlight in menus, Select, Listbox, Combobox |
| `data-orientation` | `horizontal` / `vertical` | Accordion, Tabs, Slider, Separator, Toolbar, ... |
| `data-side`, `data-align` | `top`/`right`/`bottom`/`left`, `start`/`center`/`end` | Popper content (Popover, Tooltip, menus, Select with `position="popper"`) |
| `data-placeholder` | present | `SelectTrigger` / `SelectValue` with no value |
| `data-swipe` | `start` / `move` / `cancel` / `end` | Toast root during a swipe |
| `data-invalid`, `data-valid`, `data-dirty`, `data-touched`, `data-filled`, `data-focused` | present | Field parts and the controls inside a `FieldRoot` |

Calendar cell triggers add `data-selected`, `data-today`, `data-outside-view`, `data-unavailable`, `data-focused`; range calendars also set `data-selection-start`, `data-selection-end`, `data-highlighted`.

UnoCSS / Tailwind variants: `data-[state=open]:rotate-180`, `data-[disabled]:opacity-50`, `data-[highlighted]:bg-gray-100`, `data-[side=top]:origin-bottom`.

## CSS variables

| Variable | Use |
|---|---|
| `--akar-accordion-content-height` / `-width` | Animate accordion open and close |
| `--akar-collapsible-content-height` / `-width` | Animate collapsible open and close |
| `--akar-<popper>-trigger-width` / `-height` | Match the content width to the trigger |
| `--akar-<popper>-content-available-width` / `-height` | Cap the size to the space left in the viewport |
| `--akar-<popper>-content-transform-origin` | Scale-in from the trigger side |
| `--akar-navigation-menu-viewport-width` / `-height` | Animate the shared viewport between items |
| `--akar-tabs-indicator-size` / `-position` | Slide a `TabsIndicator` under the active tab |
| `--akar-toast-swipe-move-x` / `-y`, `--akar-toast-swipe-end-x` / `-y` | Follow and finish a toast swipe |
| `--drawer-swipe-movement-x` / `-y`, `--drawer-swipe-progress`, `--drawer-snap-point-offset` | Drawer drag (note the `--drawer-` prefix) |

`<popper>` is one of `popover`, `tooltip`, `hover-card`, `dropdown-menu`, `context-menu`, `menubar`, `select`, `combobox`.

```css
.AccordionContent { overflow: hidden; }
.AccordionContent[data-state='open'] { animation: slideDown 300ms ease-out; }
.AccordionContent[data-state='closed'] { animation: slideUp 300ms ease-out; }
@keyframes slideDown { from { height: 0 } to { height: var(--akar-accordion-content-height) } }
@keyframes slideUp { from { height: var(--akar-accordion-content-height) } to { height: 0 } }

.PopoverContent { width: var(--akar-popover-trigger-width); max-height: var(--akar-popover-content-available-height); }
```

## Teleported parts

`*Portal` parts teleport to `body` (or `ConfigProvider`'s `teleport-to`, or the Portal's own `to`). In `<style scoped>`, reach them with `:deep(.DropdownMenuContent)`, or use global classes and utilities.

You own functional styles too: `DialogOverlay` needs `position: fixed; inset: 0`, content needs positioning, and `ScrollAreaRoot` needs a size.

## Animation

Pick one approach per part.

1. **CSS keyframes on `data-state`** (simplest). Akar delays the unmount until the exit animation ends, so the closing keyframes play.
2. **Vue `<Transition>`**. Wrap the part (for example `DialogOverlay`, `DialogContent`) in `<Transition>` inside the Portal. Akar's presence logic and the Transition hooks cooperate.
3. **Motion Vue (`motion-v`)**, recommended for JS animation: put `<AnimatePresence>` inside the Portal, set `as-child` on the part, and make `<Motion>` the child with `initial` / `animate` / `exit`.
4. **Other JS libraries**: set `force-mount` on the parts and mount them conditionally yourself (`v-if` on the Portal) based on the library's animation state.

`force-mount` on Accordion, Collapsible, Tabs and NavigationMenu content renders inactive content too. Hide it yourself (for example `:hidden="modelValue !== 'tab1'"`).

Details and full examples: [animation guide](https://vinicunca.dev/raw/akar/guides/animation.md), [styling guide](https://vinicunca.dev/raw/akar/guides/styling.md), [Presence](https://vinicunca.dev/raw/akar/utilities/presence.md).
