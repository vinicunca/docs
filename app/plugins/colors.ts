const SHADES = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950,
];

/**
 * Pohon UI leaves `--ui-color-<alias>-*` to the app's CSS, but the docs switch palettes at runtime
 * (theme menu, studio), so this rebuilds them from `appConfig.ui.colors`. Each shade points at a
 * `--color-<palette>-<shade>` variable from uno.config.ts. The FOUC script in ./theme.ts rewrites
 * those palette names before first paint and useFaviconFromTheme watches this tag, both by its id.
 */
export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig();

  const css = computed(() => {
    const colors = appConfig.ui.colors as Record<string, string>;
    const brands = Object.keys(colors).filter((alias) => alias !== 'neutral');

    const shades = Object.entries(colors).flatMap(([alias, palette]) =>
      SHADES.map((shade) => `--ui-color-${alias}-${shade}: var(--color-${palette}-${shade});`),
    );
    const mode = (shade: number) => brands.map((alias) => `--ui-color-${alias}: var(--ui-color-${alias}-${shade});`);

    return `@layer theme {
  :root, :host { ${shades.join(' ')} }
  :root, :host, .light { ${mode(500).join(' ')} }
  .dark { ${mode(400).join(' ')} }
}`;
  });

  useHead({
    style: [
      {
        id: 'pohon-ui-colors',
        innerHTML: css,
        tagPriority: 'critical',
      },
    ],
  });
});
