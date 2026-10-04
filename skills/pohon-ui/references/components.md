# Components

Quick-reference index of all 125+ components. For full API docs (props, slots, events, examples), use the MCP `get-component` or `get-component-metadata` tools.

## Layout

| Component | Purpose |
|---|---|
| `PApp` | **Required** root wrapper — toasts, tooltips, overlays, i18n |
| `PHeader` | Responsive header with mobile menu |
| `PFooter` | Footer with left/right/top/bottom slots |
| `PFooterColumns` | Multi-column footer with link groups |
| `PMain` | Main content area |
| `PContainer` | Centered max-width container |
| `PSplitter` | Resizable panels separated by draggable handles |
| `PLink` | Enhanced link — NuxtLink/RouterLink with active states |

## Element

| Component | Purpose |
|---|---|
| `PButton` | Buttons — links, actions, icons, loading states |
| `PBadge` | Labels, tags, status indicators |
| `PAvatar` | User photos, initials, icons |
| `PAvatarGroup` | Stacked avatars with `max` limit |
| `PIcon` | Iconify icons (`i-{collection}-{name}`) |
| `PCard` | Bordered container with header/body/footer |
| `PAlert` | Inline messages — info, warning, error, success |
| `PBanner` | App-wide sticky announcement bar |
| `PChip` | Notification dot overlay on children |
| `PKbd` | Keyboard key display |
| `PSeparator` | Divider line with optional label |
| `PSkeleton` | Loading placeholder |
| `PProgress` | Progress bar |
| `PProgressGroup` | Segmented progress bar with a list of items |
| `PToast` | Toast notification (shown via `useToast`) |
| `PCalendar` | Date calendar (single, range, multiple) |
| `PCollapsible` | Animated expand/collapse |
| `PFieldGroup` | Group form inputs horizontally |
| `PMarquee` | Scrolling content ticker |
| `PCarousel` | Image/content carousel with autoplay |
| `PEmpty` | Empty state placeholder with icon, title, actions |
| `PError` | Error display with retry action |
| `PScrollArea` | Scrollable area with custom scrollbar |
| `PTimeline` | Timeline display for events and activity |
| `PUser` | User display — avatar + name + description |
| `PTheme` | Scoped `ui` class overrides and prop defaults for a subtree |

## Form

| Component | Purpose |
|---|---|
| `PAuthForm` | Pre-built auth form with social providers |
| `PInput` | Text input — text, email, password, search |
| `PTextarea` | Multi-line text with autoresize |
| `PSelect` | Native-like dropdown for small lists |
| `PSelectMenu` | Rich searchable dropdown, multi-select, groups |
| `PInputMenu` | Autocomplete / combobox |
| `PInputNumber` | Numeric input with +/- controls |
| `PInputDate` | Date picker with calendar |
| `PInputTime` | Time picker (12/24h) |
| `PInputTags` | Tag/chip input |
| `PPinInput` | Verification code input |
| `PCheckbox` | Single boolean checkbox |
| `PCheckboxGroup` | Multiple checkboxes |
| `PRadioGroup` | Radio button group |
| `PSwitch` | Toggle switch |
| `PSlider` | Range slider |
| `PColorPicker` | Color picker (hex/rgb/hsl) |
| `PFileUpload` | File upload (button or drop area) |
| `PForm` | Validation wrapper with Standard Schema |
| `PFormField` | Field wrapper with label, hint, errors |

## Overlay

| Component | Purpose |
|---|---|
| `PModal` | Centered dialog — confirmations, forms |
| `PSlideover` | Side panel — details, editing |
| `PDrawer` | Bottom sheet — mobile actions |
| `PPopover` | Contextual popup attached to trigger |
| `PTooltip` | Hover/focus hint (non-interactive) |
| `PContextMenu` | Right-click menu |
| `PCommandPalette` | Search + keyboard navigation (Cmd+K) |

## Navigation

| Component | Purpose |
|---|---|
| `PSidebar` | Standalone sidebar with header/body/footer |
| `PNavigationMenu` | Primary nav — horizontal or vertical |
| `PTabs` | Tab switcher within a page |
| `PBreadcrumb` | Location hierarchy |
| `PDropdownMenu` | Action menu on a trigger |
| `PPagination` | Page navigation |
| `PStepper` | Multi-step wizard |
| `PAccordion` | Collapsible sections |

## Data

| Component | Purpose |
|---|---|
| `PTable` | Data table (TanStack Table) with sorting, selection, pinning |
| `PTree` | Hierarchical tree view |

## Dashboard

| Component | Purpose |
|---|---|
| `PDashboardGroup` | Root dashboard wrapper |
| `PDashboardSidebar` | Resizable, collapsible sidebar |
| `PDashboardPanel` | Content panel with header/body/footer |
| `PDashboardNavbar` | Panel header bar |
| `PDashboardToolbar` | Filter/action bar below navbar |
| `PDashboardResizeHandle` | Resize handle between panels |
| `PDashboardSidebarToggle` | Mobile sidebar toggle button |
| `PDashboardSearchButton` | Search button for sidebar |
| `PDashboardSearch` | Dashboard-level search overlay |
| `PDashboardSidebarCollapse` | Collapse button for sidebar |

## Page (marketing)

| Component | Purpose |
|---|---|
| `PPage` | Multi-column layout with left/right sidebars |
| `PPageHero` | Hero section — title, description, links, media |
| `PPageSection` | Content section with features grid |
| `PPageCTA` | Call to action block |
| `PPageHeader` | Page title and description |
| `PPageBody` | Main content area |
| `PPageGrid` | Card grid layout |
| `PPageColumns` | Multi-column layout |
| `PPageCard` | Content card for grids |
| `PPageFeature` | Feature item |
| `PPageLogos` | Logo cloud |
| `PPageAside` | Sticky sidebar wrapper |
| `PPageAnchors` | Simple anchor links |
| `PPageLinks` | Related resource links |
| `PPageList` | List layout for page items |

## Blog & Changelog

| Component | Purpose |
|---|---|
| `PBlogPosts` | Blog post grid |
| `PBlogPost` | Individual post card |
| `PChangelogVersions` | Changelog list |
| `PChangelogVersion` | Individual changelog entry |

## Pricing

| Component | Purpose |
|---|---|
| `PPricingPlans` | Pricing plan cards |
| `PPricingPlan` | Individual pricing plan card |
| `PPricingTable` | Feature comparison table |

## Prose — Base Typography

Standard Markdown elements auto-resolved by Comark/Content/MDC. No `::` prefix needed — they map directly from markdown syntax (`# Heading` → `ProseH1`, `**bold**` → `ProseStrong`, etc.). Themed via `appConfig.ui.prose.<name>`.

| Component | Renders | Notable |
|---|---|---|
| `H1` `H2` `H3` `H4` | Headings | H1–H3 get anchor links + TOC entries |
| `P` | Paragraph | |
| `A` | Link | External links get target/rel handling |
| `Strong` | Bold | |
| `Em` | Italic | |
| `Blockquote` | Blockquote | |
| `Hr` | Horizontal rule | |
| `Ul` `Ol` `Li` | Lists | Supports nesting and mixed lists |
| `Table` `Thead` `Tbody` `Tr` `Th` `Td` | Tables | |
| `Img` | Image | Zoom on click (`:zoom="false"` to disable), `@nuxt/image` support |
| `Pre` | Code block | Copy button, filename + icon, line highlighting (`{2,4-6}`), diff |
| `Code` | Inline code | `color` and `lang` props |

## Prose — Feature Components

Pohon UI-specific Prose components. In markdown files they are used **without the `Prose` prefix** (e.g. `::callout`, `::steps`). In Vue they are referenced as `ProseCallout`, `ProseSteps`, etc. Comark resolves them automatically when `pohon-ui` is installed.

Pohon UI also registers shorthand aliases for `Callout`: `::note`, `::tip`, `::warning`, `::caution` (preset `color` + `icon`).

| Component | Purpose |
|---|---|
| `Callout` | Highlighted note/warning/tip (`color`, `icon`, `to`) |
| `Badge` | Inline badge/tag |
| `Kbd` | Keyboard key |
| `Icon` | Inline Iconify icon |
| `Prompt` | Terminal prompt block |
| `Card` `CardGroup` | Content card and card grid |
| `Steps` | Numbered step list (`level` prop sets heading depth) |
| `Tabs` `TabsItem` | Tabbed content (`sync` for localStorage, `hash` for scroll-on-change) |
| `Accordion` `AccordionItem` | Collapsible accordion sections |
| `Collapsible` | Single collapsible section |
| `Field` `FieldGroup` | Form field display |
| `CodeGroup` | Tabbed code blocks |
| `CodeCollapse` | Collapsible code block |
| `CodeIcon` | File-type icon in code headers |
| `CodePreview` | Code + live rendered preview side by side |
| `CodeTree` | File tree display |
| `Script` | Script injection |

## Content (Nuxt Content)

| Component | Purpose |
|---|---|
| `PContentNavigation` | Sidebar navigation from content |
| `PContentToc` | Table of contents |
| `PContentSurround` | Prev/next navigation |
| `PContentSearch` | Search command palette |
| `PContentSearchButton` | Trigger for content search |

## Chat (AI)

| Component | Purpose |
|---|---|
| `PChatMessages` | Scrollable message list |
| `PChatMessage` | Individual message bubble |
| `PChatReasoning` | Collapsible AI reasoning block |
| `PChatTool` | Tool invocation status |
| `PChatShimmer` | Streaming text animation |
| `PChatPrompt` | Enhanced textarea for prompts |
| `PChatPromptSubmit` | Submit button with status |
| `PChatPalette` | Chat layout for overlays |

## Editor

| Component | Purpose |
|---|---|
| `PEditor` | Rich text editor (JSON/HTML/Markdown) |
| `PEditorToolbar` | Toolbar (fixed/bubble/floating) |
| `PEditorDragHandle` | Block drag-and-drop |
| `PEditorSuggestionMenu` | Slash command menu |
| `PEditorMentionMenu` | @ mention menu |
| `PEditorEmojiMenu` | Emoji picker |

## Color Mode

| Component | Purpose |
|---|---|
| `PColorModeButton` | Toggle button (light/dark) |
| `PColorModeSwitch` | Toggle switch (light/dark) |
| `PColorModeSelect` | Dropdown (light/dark/system) |
| `PColorModeAvatar` | Avatar that changes with color mode |
| `PColorModeImage` | Image that changes with color mode |
