/**
 * The theme's wire format: `generateCSS`/`generateConfig` emit the
 * `main.css` + `app.config.ts` pair for a doc. Pohon UI ships no color CSS,
 * so `main.css` always carries every alias's shades and every semantic token;
 * the rest stays a minimal diff. `explicit` writes the remaining headline
 * settings (the body font) even at their defaults, for a pane that shows the
 * theme rather than a diff to paste.
 */
import type { ColorAlias, ThemeDoc } from './types';
import json5 from 'json5';
import { themeIcons } from '../icons';
import {
  DEFAULT_COLORS,
  LIBRARY_TOKEN_DEFAULTS,
  mergeUi,
  resolveAlias,
  resolveShade,
  SHADES,
  styleComponents,
  styleTokens,
  THEME_DEFAULTS,
} from './types';

export interface SerializeOptions {
  explicit?: boolean;
}

/* ======================================================== emit (export) == */

/** Generate the minimal `main.css`, the doc only holds overrides, so everything present is emitted. */
export function generateCSS(doc: ThemeDoc, framework: string = 'nuxt', { explicit = false }: SerializeOptions = {}): string {
  const lines: Array<string> = [];

  // Nuxt resolves the `--font-*` variables below through @nuxt/fonts and
  // self-hosts the faces, so an import there would load each one twice. The
  // Vite plugin ships no fonts integration, so that export fetches them from
  // Google. The families are not the doc's verbatim: `--font-sans` is only
  // named when it differs from the default or the export is explicit, while
  // serif and mono are emitted whatever they are, so the default face still
  // needs importing when it is one of those.
  if (framework === 'vue') {
    const sans = doc.font?.sans ?? THEME_DEFAULTS.font;
    const families = [
      ...new Set([
        explicit || sans !== THEME_DEFAULTS.font
          ? sans
          : undefined,
        doc.font?.serif,
        doc.font?.mono,
      ].filter((name): name is string => !!name)),
    ];
    for (const family of families) {
      lines.push(`@import url("https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@300;400;500;600;700;800&display=swap");`);
    }
  }

  const themeLines: Array<string> = [];
  if (explicit || (doc.font?.sans && doc.font.sans !== THEME_DEFAULTS.font)) {
    themeLines.push(`  --font-sans: '${doc.font?.sans ?? THEME_DEFAULTS.font}', sans-serif;`);
  }
  if (doc.font?.serif) {
    themeLines.push(`  --font-serif: '${doc.font.serif}', serif;`);
  }
  if (doc.font?.mono) {
    themeLines.push(`  --font-mono: '${doc.font.mono}', monospace;`);
  }
  // Keep custom weight choices as CSS variables for the exported theme.
  for (const step of ['normal', 'medium', 'semibold', 'bold'] as const) {
    const weight = doc.font?.weights?.[step];
    if (weight !== undefined) {
      themeLines.push(`  --font-weight-${step}: ${weight};`);
    }
  }
  if (themeLines.length) {
    lines.push('', ':root {', ...themeLines, '}');
  }

  for (const step of ['normal', 'medium', 'semibold', 'bold'] as const) {
    if (doc.font?.weights?.[step] !== undefined) {
      lines.push(`.font-${step} { font-weight: var(--font-weight-${step}); }`);
    }
  }

  // Custom palettes stay addressable as `--color-*`, which token overrides
  // may reference; the alias shades below resolve them to literals anyway.
  const colorLines: Array<string> = [];
  for (const [name, palette] of Object.entries(doc.palettes || {})) {
    for (const [shade, color] of Object.entries(palette.shades)) {
      colorLines.push(`  --color-${name}-${shade}: ${color};`);
    }
  }

  for (const alias of Object.keys(DEFAULT_COLORS) as Array<ColorAlias>) {
    const palette = resolveAlias(doc, alias);
    for (const shade of SHADES) {
      const color = resolveShade(doc, palette, shade);
      if (color) {
        colorLines.push(`  --ui-color-${alias}-${shade}: ${color};`);
      }
    }
  }

  lines.push('', ':root {', ...colorLines, '}');

  if (doc.fontSize !== undefined && doc.fontSize !== THEME_DEFAULTS.fontSize) {
    lines.push('', '@layer base {', '  html {', `    font-size: ${doc.fontSize}px;`, '  }', '}');
  }

  // Classless text has no utility to dereference the weight variable, and
  // case/tracking/leading are inherited properties. These element rules ride
  // `@layer base`: unlayered CSS outranks every layer, so a bare rule here
  // would beat the utilities too and `<h1 class="font-mono">` could not
  // override the heading family. In base they still beat preflight (same
  // layer, later source order) while utilities keep winning.
  const bodyLines: Array<string> = [];
  if (doc.font?.weights?.normal !== undefined) {
    bodyLines.push(`  font-weight: ${doc.font.weights.normal};`);
  }
  if (doc.font?.uppercase) {
    bodyLines.push('  text-transform: uppercase;');
  }
  if (doc.font?.italic) {
    bodyLines.push('  font-style: italic;');
  }
  if (doc.font?.letterSpacing !== undefined) {
    bodyLines.push(`  letter-spacing: ${doc.font.letterSpacing}em;`);
  }
  if (doc.font?.lineHeight !== undefined) {
    bodyLines.push(`  line-height: ${doc.font.lineHeight};`);
  }
  if (bodyLines.length) {
    lines.push('', '@layer base {', '  body {', ...bodyLines.map((line) => `  ${line}`), '  }', '}');
  }

  if (doc.font?.sans) {
    lines.push('', '@layer base {', '  body { font-family: var(--font-sans); }', '}');
  }

  // Headings consume the optional serif stack directly.
  if (doc.font?.serif) {
    lines.push('', '@layer base {', '  h1, h2, h3, h4, h5, h6 {', '    font-family: var(--font-serif);', '  }', '}');
  }

  // No library default to fall back on: the components read `--ui-radius` directly.
  lines.push('', ':root {', `  --ui-radius: ${doc.radius ?? THEME_DEFAULTS.radius}rem;`, '}');

  // Semantic token shades behind the style choices.
  const style = styleTokens(doc.style || {});
  // Library baseline, then the style expansion, then explicit overrides, so
  // every token is written once with the value that wins.
  const light: Record<string, string> = {
    ...LIBRARY_TOKEN_DEFAULTS.light,
    ...style.light,
    ...(doc.blackAsPrimary
      ? { '--ui-color-primary': 'black' }
      : {}),
    ...doc.tokens?.light,
  };

  const dark: Record<string, string> = {
    ...LIBRARY_TOKEN_DEFAULTS.dark,
    ...style.dark,
    ...(doc.blackAsPrimary
      ? { '--ui-color-primary': 'white' }
      : {}),
    ...doc.tokens?.dark,
  };

  lines.push('', ':root, .light {', ...Object.entries(light).map(([key, val]) => `  ${key}: ${val};`), '}');
  lines.push('', '.dark {', ...Object.entries(dark).map(([key, val]) => `  ${key}: ${val};`), '}');

  return lines.join('\n');
}

/** Serialize to JS object-literal source, like the docs' code panes do. */
function toObjectSource(value: Record<string, any>): string {
  return json5.stringify(value, { space: 2, quote: '\'' }).replace(/,([ \t\n]+[}\]])/g, '$1');
}

/** The `app.config.ts` / `vite.config.ts` side of the export. */
export function generateConfig(doc: ThemeDoc, framework: string = 'nuxt', _options: SerializeOptions = {}): string {
  const config: Record<string, any> = {};

  // Colors live in main.css (generateCSS); Pohon UI no longer reads `ui.colors` for them.

  if (doc.icons && doc.icons !== THEME_DEFAULTS.icons && Object.hasOwn(themeIcons, doc.icons)) {
    config.ui = config.ui || {};
    config.ui.icons = themeIcons[doc.icons as keyof typeof themeIcons];
  }

  // Explicit components merge INTO the style expansion (classes concatenate,
  // explicit last), a spread would drop one side wholesale.
  const componentOverrides = mergeUi(doc.style
    ? styleComponents(doc.style)
    : undefined, doc.components);
  if (Object.keys(componentOverrides).length) {
    config.ui = config.ui || {};
    Object.assign(config.ui, componentOverrides);
  }

  const configString = toObjectSource(config);

  if (framework === 'vue') {
    const pluginConfig = config.ui
      ? toObjectSource({ ui: config.ui })
      : '{}';
    return [
      'import { defineConfig } from \'vite\'',
      'import vue from \'@vitejs/plugin-vue\'',
      'import ui from \'pohon-ui/vite\'',
      '',
      'export default defineConfig({',
      '  plugins: [',
      '    vue(),',
      `    ui(${pluginConfig.split('\n').map((line, i) => i === 0
        ? line
        : `    ${line}`).join('\n')})`,
      '  ]',
      '})',
    ].join('\n');
  }

  return `export default defineAppConfig(${configString})`;
}
