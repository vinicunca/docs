# Components and composables

Index of every Pohon UI component and composable in `pohon-ui@2.0.6`, grouped by the category the docs use. Before you use one, fetch its API page: `https://vinicunca.dev/raw/pohon/components/<kebab-name>.md` (e.g. `PInputMenu` → `input-menu.md`, `PPageCTA` → `page-cta.md`).

## Layout

| Component | Purpose |
|---|---|
| `PApp` | **Required** root wrapper: toasts, tooltips, programmatic overlays, `locale` |
| `PHeader` | Responsive site header; `#body` slot is the mobile menu |
| `PFooter` | Site footer with `#left`, `#default`, `#right`, `#top`, `#bottom` slots |
| `PMain` | Main element that fills the viewport height between header and footer |
| `PContainer` | Centered max-width wrapper (`--ui-container`) |
| `PSidebar` | Standalone collapsible sidebar with variants (`sidebar`, `floating`, `inset`) |
| `PSplitter` | Resizable panels separated by drag handles |
| `PError` | Error page with NuxtError support; `clear` button returns to `redirect` (`/`) |
| `PTheme` | Headless: overrides `ui` classes and prop defaults for all descendants |

## Element

| Component | Purpose |
|---|---|
| `PButton` | Button or link (`to`), with icons, loading state, `block` |
| `PBadge` | Status or category label |
| `PAvatar` / `PAvatarGroup` | Image with initials or icon fallback; stacked group with `max` |
| `PIcon` | Iconify icon by `name` (`i-lucide-sun`) |
| `PCard` | Container with `#header`, default, `#footer` slots |
| `PAlert` | Inline, persistent message with title, description, actions |
| `PBanner` | Dismissible announcement bar at the top of the site |
| `PChip` | Dot or count indicator over its child |
| `PKbd` | Keyboard key |
| `PSeparator` | Horizontal or vertical divider, optional label |
| `PSkeleton` | Loading placeholder |
| `PProgress` | Determinate or indeterminate progress bar |
| `PProgressGroup` | One bar split into segments that add up to a total |
| `PCalendar` | Single, multiple, or range date selection |
| `PCollapsible` | Show or hide one block of content |
| `PFieldGroup` | Attaches buttons and inputs into one control (button group, input + button) |

## Form

| Component | Purpose |
|---|---|
| `PForm` | Validation and submit wrapper (Standard Schema, Superstruct, or custom `validate`) |
| `PFormField` | Label, description, hint, help, and error around one input |
| `PInput` | Text, email, password, search input |
| `PTextarea` | Multi-line text, `autoresize` + `maxrows` |
| `PSelect` | Simple dropdown for short lists |
| `PSelectMenu` | Searchable dropdown, multiple selection, groups |
| `PInputMenu` | Autocomplete / combobox (free typing plus suggestions) |
| `PListbox` | Always-visible selectable list with search and virtualization |
| `PInputNumber` | Number with increment/decrement buttons |
| `PInputDate` | Date field (segmented), `range` for date ranges |
| `PInputTime` | Time field (12/24h) |
| `PInputTags` | Free-text tags |
| `PInputRating` | Star rating input or display |
| `PPinInput` | Fixed-length code (OTP) |
| `PCheckbox` / `PCheckboxGroup` | One boolean / several choices |
| `PRadioGroup` | One choice from visible options |
| `PSwitch` | On/off toggle |
| `PSlider` | Numeric value or range on a track |
| `PColorPicker` | Color selection |
| `PFileUpload` | File input as button or drop area |

## Overlay

| Component | Purpose |
|---|---|
| `PModal` | Centered dialog |
| `PSlideover` | Panel that slides in from a side |
| `PDrawer` | Swipeable sheet (bottom by default, `direction` prop) |
| `PPopover` | Non-modal floating panel on a trigger (or a `reference`) |
| `PTooltip` | Non-interactive hover/focus hint |
| `PDropdownMenu` | Action menu on click |
| `PContextMenu` | Action menu on right-click |
| `PToast` | Toast notification; create it with `useToast()`, not in templates |

## Navigation

| Component | Purpose |
|---|---|
| `PNavigationMenu` | Primary navigation, horizontal or vertical, nested items |
| `PTabs` | Tab panels in one page (`slot` / `content` per item) |
| `PBreadcrumb` | Location hierarchy |
| `PPagination` | Page buttons (`total` = item count) |
| `PStepper` | Multi-step progress / wizard |
| `PCommandPalette` | Fuse.js search over `groups` of items |
| `PLink` | NuxtLink/RouterLink wrapper with active state; no `ui` prop |
| `PFooterColumns` | Columns of links for `PFooter` |

## Data

| Component | Purpose |
|---|---|
| `PTable` | TanStack Table: sorting, selection, pagination, pinning, virtualization |
| `PTree` | Hierarchical tree with selection and expansion |
| `PAccordion` | Stacked collapsible panels |
| `PCarousel` | Embla carousel with autoplay, arrows, dots |
| `PMarquee` | Infinite scrolling content |
| `PTimeline` | Sequence of events with dates, icons, or avatars |
| `PUser` | Avatar + name + description |
| `PEmpty` | Empty state with icon, title, description, actions |
| `PScrollArea` | Scroll container with virtualization |

## Dashboard

| Component | Purpose |
|---|---|
| `PDashboardGroup` | Root of a dashboard layout; persists sidebar/panel sizes |
| `PDashboardSidebar` | Resizable, collapsible sidebar; mobile `mode`: `modal`, `slideover`, `drawer` |
| `PDashboardPanel` | Resizable content panel with `#header`, `#body`, `#footer` |
| `PDashboardNavbar` | Panel header bar with built-in mobile toggle |
| `PDashboardToolbar` | Bar under the navbar for filters and actions |
| `PDashboardResizeHandle` | Handle to resize a sidebar or panel |
| `PDashboardSidebarCollapse` | Button that collapses the sidebar on desktop |
| `PDashboardSidebarToggle` | Button that opens the sidebar on mobile |
| `PDashboardSearch` | Ready-made CommandPalette modal for dashboards |
| `PDashboardSearchButton` | Button that opens `PDashboardSearch` |

## Page (marketing and content)

| Component | Purpose |
|---|---|
| `PPage` | Grid with `#left`, default, `#right` columns |
| `PPageHeader` | Page title, description, headline, links |
| `PPageBody` | Main page content area |
| `PPageAside` | Sticky side column (shown from `lg`) |
| `PPageHero` | Hero: title, description, `links`, media in default slot |
| `PPageSection` | Section with headline, title, `features`, `orientation`, `reverse` |
| `PPageCTA` | Call-to-action block |
| `PPageGrid` / `PPageColumns` / `PPageList` | Responsive grid / multi-column layout / stacked list |
| `PPageCard` | Card with icon, title, description, link, `highlight` |
| `PPageFeature` | Single feature item |
| `PPageLogos` | Logo wall |
| `PPageAnchors` / `PPageLinks` | Anchor list / related links list |
| `PAuthForm` | Login, register, or reset form with providers |
| `PBlogPosts` / `PBlogPost` | Blog grid / article card |
| `PChangelogVersions` / `PChangelogVersion` | Changelog timeline / entry |
| `PPricingPlans` / `PPricingPlan` | Pricing cards (`plans` prop) / one plan |
| `PPricingTable` | Tiered plans with a feature comparison |

## Content (`@nuxt/content`, Nuxt only)

Registered when `@nuxt/content` is installed or `ui.content: true`.

| Component | Purpose |
|---|---|
| `PContentNavigation` | Accordion navigation from `queryCollectionNavigation` |
| `PContentToc` | Sticky table of contents with active highlighting |
| `PContentSurround` | Previous / next links |
| `PContentSearch` | Ready-made CommandPalette over content (`navigation`, `files`) |
| `PContentSearchButton` | Button that opens `PContentSearch` |

## Chat (AI SDK)

| Component | Purpose |
|---|---|
| `PChatMessages` | Message list with auto-scroll, `#content` slot per message |
| `PChatMessage` | One message (`side`, `variant`, avatar, actions) |
| `PChatReasoning` | Collapsible reasoning block, opens while streaming |
| `PChatTool` | Tool call status (`variant`: `inline`, `card`), approval `actions` |
| `PChatShimmer` | Text shimmer for streaming states |
| `PChatPrompt` | Prompt textarea with `submitOnEnter`, `#header`, `#footer` |
| `PChatPromptSubmit` | Submit button that switches to stop/reload by `status` |
| `PChatPalette` | Chat layout for overlays (default + `#prompt` slots) |

## Editor (TipTap)

| Component | Purpose |
|---|---|
| `PEditor` | Rich text editor; `v-model` as JSON, HTML, or Markdown (`content-type`) |
| `PEditorToolbar` | Toolbar from `items`; `layout`: `fixed`, `bubble`, `floating` |
| `PEditorDragHandle` | Drag handle to move and select blocks |
| `PEditorSuggestionMenu` | `/` command menu from `items` |
| `PEditorMentionMenu` | `@` mention menu from `items` |
| `PEditorEmojiMenu` | `:` emoji menu from `items` (needs the TipTap `Emoji` extension) |

## Color mode and i18n

| Component | Purpose |
|---|---|
| `PColorModeButton` | Light/dark toggle button |
| `PColorModeSwitch` | Light/dark switch |
| `PColorModeSelect` | System / light / dark select |
| `PColorModeAvatar` / `PColorModeImage` | Different `light` / `dark` source per mode |
| `PLocaleSelect` | Locale picker (extends `PSelectMenu`), takes `locales` |

## Composables and utilities

All are auto-imported (Nuxt and the Vite plugin). Docs: `https://vinicunca.dev/raw/pohon/composables/<kebab-name>.md`.

| Name | Purpose |
|---|---|
| `useToast()` | `add`, `update`, `remove`, `clear`, `toasts` |
| `useOverlay()` | `create(Component, { props, defaultOpen, destroyOnClose })` → instance with `open(props)` (awaitable), `close`, `patch`; plus `closeAll`, `isOpen` |
| `defineShortcuts(config, options?)` | Keyboard shortcuts: `meta_k`, chained `g-d`, `{ handler, usingInput }` |
| `extractShortcuts(items)` | Builds a shortcuts config from items with `kbds` + `onSelect` |
| `defineLocale(options)` / `extendLocale(locale, overrides)` | Custom or extended locale for `PApp` |
| `useTour(steps)` | Guided tour that re-anchors one `PPopover`: bind `open` and `reference`, drive with `start`, `next`, `prev`, `goTo`, `finish` |
| `useScrollShadow()` | Fade masks on the edges of a scrollable element |

Also exported but undocumented: `useFormField`, `useFileUpload`, `useKbd`, `useResizable`, `useScrollspy`, `useContentSearch`. Import paths for non-auto-imported helpers:

- `pohon-ui/locale`: built-in locales (`en`, `fr`, `de`, `ja`, `zh_cn`, … 60+)
- `pohon-ui/utils/ai`: `isPartStreaming`, `isToolStreaming`, `isReasoningStreaming`, `isToolApprovalPending`, `getTextFromMessage`
- `pohon-ui/utils/content`: `mapContentNavigation`
- `pohon-ui/composables`: explicit composable imports when `autoImport: false`
- Types from `pohon-ui`: `FormSubmitEvent`, `FormError`, `TableColumn`, `NavigationMenuItem`, `DropdownMenuItem`, `CommandPaletteGroup`, `AuthFormField`, `EditorToolbarItem`, `Messages`, …

## Prose components (Markdown)

Registered in Nuxt when `@nuxt/content` or `@nuxtjs/mdc` is installed, or with the `prose: true` option (set it when you only use `@comark/nuxt`). Vue projects set `ui({ prose: true })` and pass them to Comark's `<Markdown :components>` from `pohon-ui/components/prose`. Theme them under `ui.prose.<name>` (e.g. `ui.prose.callout`). Docs: [typography](https://vinicunca.dev/raw/pohon/typography.md).

**Base elements** map from plain Markdown syntax (`# Title` → `ProseH1`): `H1`–`H4` (anchor links), `P`, `A`, `Strong`, `Em`, `Blockquote`, `Hr`, `Ul`, `Ol`, `Li`, `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, `Img` (zoom on click, `:zoom="false"` to disable), `Pre` (copy button, filename, line highlights), `Code` (inline; `color`, `lang`), `Script`.

**Block components** are written without the `Prose` prefix in Markdown (`::callout`) and with it in Vue (`ProseCallout`):

| Component | Purpose |
|---|---|
| `callout` | Highlighted note (`color`, `icon`, `to`); shorthands `note`, `tip`, `warning`, `caution` |
| `badge`, `kbd`, `icon` | Inline badge, key, icon |
| `card`, `card-group` | Card and card grid |
| `steps` | Numbered steps from headings (`level`) |
| `tabs`, `tabs-item` | Tabbed content (`sync` saves the choice, `hash`) |
| `accordion`, `accordion-item`, `collapsible` | Collapsible content |
| `field`, `field-group` | Property documentation |
| `code-group`, `code-collapse`, `code-preview`, `code-tree`, `code-icon` | Code block layouts |
| `prompt` | Pre-built AI prompt with one-click copy |
