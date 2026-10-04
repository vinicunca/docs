# Component Selection

Decision matrices for choosing the right component. When in doubt, use the MCP `search-components` tool.

## Overlays

| Need | Component | Why |
|---|---|---|
| Confirmation dialog, focused task, form | `PModal` | Blocks page interaction, centered, draws focus |
| Detail panel, settings, secondary content | `PSlideover` | Slides from edge, doesn't feel as interruptive as modal |
| Mobile-first bottom sheet | `PDrawer` | Natural mobile pattern, swipe to dismiss |
| Contextual info attached to a trigger | `PPopover` | No backdrop, positioned relative to trigger |
| Simple hover hint | `PTooltip` | Non-interactive, hover/focus only |

### Rules
- Use `PModal` for destructive confirmations ("Are you sure you want to delete?")
- Use `PSlideover` for detail views in dashboards (email preview, user profile)
- Use `PDrawer` for mobile navigation or action sheets
- Use `PDashboardSidebar` with `mode="drawer"` for a drawer-based mobile menu; `PModal` and `PSlideover` don't expose a `mode` prop
- For programmatic overlays, use `useOverlay()` instead of `v-model:open`
- Never put interactive content (buttons, links) inside `PTooltip`

## Navigation

| Need | Component | Why |
|---|---|---|
| Primary site/app navigation | `PNavigationMenu` | Horizontal (header) or vertical (sidebar) |
| Switch between views on same page | `PTabs` | Content stays on page, no route change needed |
| Show current location in hierarchy | `PBreadcrumb` | Nested page structures |
| Search + keyboard-driven navigation | `PCommandPalette` | Power users, global search |
| Contextual actions on a trigger element | `PDropdownMenu` | Right-click menus, action buttons |
| Step-by-step process | `PStepper` | Multi-step forms, wizards |

### Rules
- Use `PNavigationMenu` with `orientation="vertical"` in sidebars, default horizontal in headers
- Use `PTabs` when switching views that don't need their own URL
- Use route-based navigation (`to` prop) when views should have shareable URLs
- `PCommandPalette` is typically opened via `Cmd+K` shortcut — use `defineShortcuts` to wire it up

## Inputs

| Need | Component | Why |
|---|---|---|
| Small fixed list (< 10 items) | `PSelect` | Native-like, simple, lightweight |
| Searchable list, multiple selection, groups | `PSelectMenu` | Rich dropdown with search, multi-select, grouped items |
| Autocomplete / combobox (type + select) | `PInputMenu` | User can type freely AND pick from suggestions |
| Free text entry | `PInput` | Plain text, email, password, search |
| Multi-line text | `PTextarea` | With `autoresize` and `maxrows` |
| Numeric value with +/- controls | `PInputNumber` | Min/max/step constraints |
| Date selection | `PInputDate` | Calendar dropdown, supports ranges |
| Time selection | `PInputTime` | Hour/minute picker, 12/24 hour |
| Tags / multi-value free text | `PInputTags` | Chip-style input with max limit |
| Verification code | `PPinInput` | Fixed-length code entry |
| Boolean toggle | `PSwitch` | On/off, enable/disable |
| Boolean checkbox | `PCheckbox` | Single option with label |
| Multiple choices from a list | `PCheckboxGroup` | Multiple selection, vertical or horizontal |
| Single choice from a list (visible) | `PRadioGroup` | All options visible, one selected |
| Range value | `PSlider` | Min/max with visual track |
| Color value | `PColorPicker` | Hex/RGB/HSL picker |
| File upload | `PFileUpload` | Button or drop area variants |

### Rules
- Use `PAuthForm` for login/signup pages — handles fields, social providers, validation, and layout out of the box
- Use `PSelect` for short, known lists (country, status, role)
- Use `PSelectMenu` when the list is long or needs search
- Use `PInputMenu` when the user might want to type a value that's not in the list
- Wrap all form inputs in `PFormField` for labels, descriptions, hints, and validation errors
- Group related inline inputs with `PFieldGroup`

## Feedback

| Need | Component | Why |
|---|---|---|
| Ephemeral notification after action | `useToast()` | Auto-dismisses, stacks, non-blocking |
| Inline persistent message | `PAlert` | Stays visible, in-page context |
| App-wide announcement | `PBanner` | Sticky top bar, dismissible |
| Loading state | `PSkeleton` | Placeholder shimmer while loading |
| Progress indicator | `PProgress` | Determinate or indeterminate progress |
| Breakdown of a total | `PProgressGroup` | One bar split into colored segments that add up to `max` |

### Rules
- Use `useToast()` for action feedback: "Item saved", "Email sent", "Error occurred"
- Use `PAlert` for contextual warnings in forms or sections
- Use `PBanner` for site-wide messages (maintenance, new feature)
- Never use a toast for information the user needs to act on — use an alert or modal instead

## Markdown

When rendering Markdown (for instance with Comark), **prefer Prose components** — they are styled and tuned for Markdown contexts. Generic Pohon UI components can also be used. `<ComarkRenderer>` (or `<Comark>`) auto-resolves `ProseX` components when `pohon-ui` is installed. In Markdown, the `Prose` prefix can be omitted (`::callout`, `::steps`, etc.).

| Need | Use | Not |
|---|---|---|
| Note / warning / tip | `Callout` | `PAlert` |
| Tabbed content | `Tabs` + `TabsItem` | `PTabs` |
| Step-by-step list | `Steps` | custom list |
| Content card grid | `Card` + `CardGroup` | `PCard` |
| Collapsible section | `Collapsible` / `Accordion` | `PCollapsible` / `PAccordion` |
| Tabbed code blocks | `CodeGroup` | manual tabs |

### Rules
- Prose components use native Vue slots — Comark maps named `#slot` blocks directly to `<slot name="..." />`
- Theme via `appConfig.ui.prose.<name>` using the same override pattern as other Pohon UI components
- `Callout` colors: `neutral` (default), `primary`, `secondary`, `info`, `success`, `warning`, `error`

## Layout containers

| Need | Component | Why |
|---|---|---|
| Grouped content with header/body/footer | `PCard` | Bordered/shadow container with slots |
| Rich content card with icon, badge, links | `PPageCard` | Extended card for grids — supports icon, badge, highlight, links |
| Marketing page section | `PPageSection` | Full-width section with headline, title, features |
| Page hero | `PPageHero` | Title + description + links + optional media |
| Call to action | `PPageCTA` | Highlighted section with action links |
| Feature grid | `PPageGrid` + `PPageCard` | Multi-column card grid |
| Centered content wrapper | `PContainer` | Max-width container |
| Collapsible section | `PCollapsible` | Animated expand/collapse |
| Accordion (multiple collapsibles) | `PAccordion` | FAQ, grouped collapsible content |
| Resizable side-by-side panes | `PSplitter` | IDE-style layouts, resizable sidebars |

### Rules
- Don't overuse `PCard` — plain content with spacing is often better than wrapping everything in cards
- Use `PPageCard` instead of `PCard` when you need icon, badge, highlight, or links — it's designed for feature grids and landing pages
- Use `PPageSection` for marketing/landing page sections, not for app UI
- Use `PContainer` inside `PDashboardPanel` body for consistent content width
