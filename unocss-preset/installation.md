# UnoCSS Preset

Opinionated UnoCSS preset that includes built-in preset from [UnoCSS](https://unocss.dev/).

## Installation

::: code-group

```sh [npm]
$ npm add -D @vinicunca/unocss-preset-vinicunca
```

```sh [pnpm]
$ pnpm add -D @vinicunca/unocss-preset-vinicunca
```

```sh [bun]
$ bun add -D @vinicunca/unocss-preset-vinicunca
```

:::

## Usage

You can import the preset in your `uno.config.ts` file.

```ts
import { presetVinicunca } from '@vinicunca/unocss-preset-vinicunca';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca(),
  ],
});
```

By default this preset already includes the following:

- [Tailwind Compat](https://unocss.dev/guide/style-reset#tailwind-compat). Reset browser's styles
- [Icon preset](https://unocss.dev/presets/icons)

### Options

You can also pass options to the preset. The options accepts these properties:

```ts
type VinicuncaOptions = {
  /**
   * Enable reset styles
   * @default true
   */
  enableResetStyles: boolean;

  /**
   * Enable icons preset and the options of it
   * @default true
   */
  icons: IconsOptions | boolean;

  /**
   * Enable animations rules
   * @default true
   */
  enableAnimations: boolean;

  /**
   * Options for fluid rules
   */
  fluidOptions: FluidOptions;
};
```

For `fluidOptions` please refer to the [fluid usage](/unocss-preset/fluid/usage) page.
