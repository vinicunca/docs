// The semantic token defaults the docs render on, the library's own
// (src/runtime/index.css) minus the --ui-<alias> tokens the colors plugin
// generates. Restated whole into the .light/.dark blocks whenever a mode
// carries an override, so every entry must match the library or the page
// would silently diverge from the export, which diffs against the engine's
// LIBRARY_TOKEN_DEFAULTS.
export const cssVariableDefaults = {
  light: {
    '--ui-color-text-dimmed': 'var(--ui-color-neutral-400)',
    '--ui-color-text-muted': 'var(--ui-color-neutral-500)',
    '--ui-color-text-toned': 'var(--ui-color-neutral-600)',
    '--ui-color-text': 'var(--ui-color-neutral-700)',
    '--ui-color-text-highlighted': 'var(--ui-color-neutral-900)',
    '--ui-color-text-inverted': 'white',
    '--ui-color-bg': 'white',
    '--ui-color-bg-muted': 'var(--ui-color-neutral-50)',
    '--ui-color-bg-elevated': 'var(--ui-color-neutral-100)',
    '--ui-color-bg-accented': 'var(--ui-color-neutral-200)',
    '--ui-color-bg-inverted': 'var(--ui-color-neutral-900)',
    '--ui-color-border': 'var(--ui-color-neutral-200)',
    '--ui-color-border-muted': 'var(--ui-color-neutral-200)',
    '--ui-color-border-accented': 'var(--ui-color-neutral-300)',
    '--ui-color-border-inverted': 'var(--ui-color-neutral-900)'
  },
  dark: {
    '--ui-color-text-dimmed': 'var(--ui-color-neutral-500)',
    '--ui-color-text-muted': 'var(--ui-color-neutral-400)',
    '--ui-color-text-toned': 'var(--ui-color-neutral-300)',
    '--ui-color-text': 'var(--ui-color-neutral-200)',
    '--ui-color-text-highlighted': 'white',
    '--ui-color-text-inverted': 'var(--ui-color-neutral-900)',
    '--ui-color-bg': 'var(--ui-color-neutral-900)',
    '--ui-color-bg-muted': 'var(--ui-color-neutral-800)',
    '--ui-color-bg-elevated': 'var(--ui-color-neutral-800)',
    '--ui-color-bg-accented': 'var(--ui-color-neutral-700)',
    '--ui-color-bg-inverted': 'white',
    '--ui-color-border': 'var(--ui-color-neutral-800)',
    '--ui-color-border-muted': 'var(--ui-color-neutral-700)',
    '--ui-color-border-accented': 'var(--ui-color-neutral-700)',
    '--ui-color-border-inverted': 'white'
  }
} as const
