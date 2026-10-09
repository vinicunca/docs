import { presetVinicunca } from '@vinicunca/unocss-preset';
import { defineConfig } from 'unocss';
import { BRANDS } from './app/designs/design.constants';

// eslint-disable-next-line no-template-curly-in-string
const COLOR_PLACEHOLDER = '${color}';
const TOKEN_PATTERN = /[^\s`]+/g;

// @keep-sorted
export default defineConfig({
  content: {
    pipeline: {
      include: [
        // official default — keep this
        /\.(vue|svelte|[jt]sx|vine.ts|mdx?|astro|elm|php|phtml|marko|html)($|\?)/,
        // Vite / Nuxt virtual + internal modules
        /(?:^|\0|\/)(?:virtual:|#build\/|#internal\/)/,
      ],
    },
  },

  extractors: [
    /**
     * In the theme files there are bunch of placeholders like ${color} that we need to extract and add to the safelist.
     */
    {
      name: 'pohon-colors-extractor',
      extract({ code }) {
        const matches = code
          .match(TOKEN_PATTERN)
          ?.filter((token) => token.includes(COLOR_PLACEHOLDER));

        if (matches !== undefined) {
          return matches.flatMap((match) => {
            return BRANDS.map((brand) => match.replace(COLOR_PLACEHOLDER, brand));
          });
        }
      },
    },
  ],

  layers: {
    // Below Pohon, above the default utilities, so `uno-layer-uv:` wins conflicts
    // in the UnoCSS Variants docs without overriding component themes.
    'uv': 10,
    'pohon': 100,
    'p-variant': 200,
  },

  outputToCssLayers: {
    allLayers: true,
  },

  presets: [
    presetVinicunca({
      extendedTheme: {
        keyframes: {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--akar-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--akar-accordion-content-height)' },
            to: { height: 0 },
          },
          'collapsible-down': {
            from: { height: 0 },
            to: { height: 'var(--akar-collapsible-content-height)' },
          },
          'collapsible-up': {
            from: { height: 'var(--akar-collapsible-content-height)' },
            to: { height: 0 },
          },
          'marquee': {
            from: { transform: 'translate3d(0, 0, 0)' },
            to: { transform: 'translate3d(calc(-100% - var(--gap)), 0, 0)' },
          },
          'marquee-rtl': {
            from: { transform: 'translate3d(0, 0, 0)' },
            to: { transform: 'translate3d(calc(100% + var(--gap)), 0, 0)' },
          },
          'marquee-vertical': {
            from: { transform: 'translate3d(0, 0, 0)' },
            to: { transform: 'translate3d(0, calc(-100% - var(--gap)), 0)' },
          },
          'elastic': {
            '0%, 100%': {
              width: '50%',
              left: '25%',
            },
            '50%': {
              width: '100%',
              left: '0%',
            },
          },
          'elastic-vertical': {
            '0%, 100%': {
              height: '50%',
              top: '25%',
            },
            '50%': {
              height: '100%',
              top: '0%',
            },
          },
          'carousel': {
            '0%, 100%': {
              width: '50%',
            },
            '0%': {
              transform: 'translateX(-100%)',
            },
            '100%': {
              transform: 'translateX(200%)',
            },
          },
          'carousel-rtl': {
            '0%, 100%': {
              width: '50%',
            },
            '0%': {
              transform: 'translateX(100%)',
            },
            '100%': {
              transform: 'translateX(-200%)',
            },
          },
          'carousel-inverse': {
            '0%, 100%': { width: '50%' },
            '0%': { transform: 'translateX(200%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          'carousel-inverse-rtl': {
            '0%, 100%': { width: '50%' },
            '0%': { transform: 'translateX(-200%)' },
            '100%': { transform: 'translateX(100%)' },
          },
          'carousel-vertical': {
            '0%, 100%': {
              height: '50%',
            },
            '0%': {
              transform: 'translateY(-100%)',
            },
            '100%': {
              transform: 'translateY(200%)',
            },
          },
          'carousel-inverse-vertical': {
            '0%, 100%': {
              height: '50%',
            },
            '0%': {
              transform: 'translateY(200%)',
            },
            '100%': {
              transform: 'translateY(-100%)',
            },
          },
          'swing': {
            '0%, 100%': {
              width: '50%',
              transform: 'translateX(-25%)',
            },
            '50%': {
              transform: 'translateX(125%)',
            },
          },

          'swing-vertical': {
            '0%, 100%': {
              height: '50%',
              transform: 'translateY(-25%)',
            },
            '50%': {
              transform: 'translateY(125%)',
            },
          },

          'toast-collapsed-closed': {
            from: { transform: 'var(--transform)' },
            to: { transform: 'translateY(calc((var(--before) - var(--height)) * var(--gap))) scale(var(--scale))' },
          },
          'toast-closed': {
            from: { transform: 'var(--transform)' },
            to: { transform: 'translateY(calc((var(--offset) - var(--height)) * var(--translate-factor)))' },
          },
          'toast-pulse-a': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '1.04' },
          },
          'toast-pulse-b': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '1.04' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'collapsible-down': 'collapsible-down 0.2s ease-in-out',
          'collapsible-up': 'collapsible-up 0.2s ease-in-out',
          'marquee': 'marquee var(--duration) linear infinite',
          'marquee-rtl': 'marquee-rtl var(--duration) linear infinite',
          'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
          'elastic': 'elastic 2s ease-in-out infinite',
          'elastic-vertical': 'elastic-vertical 2s ease-in-out infinite',
          'swing': 'swing 2s ease-in-out infinite',
          'swing-vertical': 'swing-vertical 2s ease-in-out infinite',
          'carousel': 'carousel 2s linear infinite',
          'carousel-rtl': 'carousel-rtl 2s linear infinite',
          'carousel-inverse': 'carousel-inverse 2s linear infinite',
          'carousel-inverse-rtl': 'carousel-inverse-rtl 2s linear infinite',
          'carousel-vertical': 'carousel-vertical 2s linear infinite',
          'carousel-inverse-vertical': 'carousel-inverse-vertical 2s linear infinite',
          'toast-collapsed-closed': 'toast-collapsed-closed 200ms ease-in-out',
          'toast-closed': 'toast-closed 200ms ease-in-out',
          'toast-pulse-a': 'toast-pulse-a 300ms ease-out',
          'toast-pulse-b': 'toast-pulse-b 300ms ease-out',
        },
      },
    }),
  ],

  safelist: [
    'isolate',
    'font-sans',
  ],

  theme: {
    font: {
      sans: 'Public Sans',
    },

    colors: {
      text: {
        dimmed: 'var(--ui-color-text-dimmed)',
        muted: 'var(--ui-color-text-muted)',
        toned: 'var(--ui-color-text-toned)',
        DEFAULT: 'var(--ui-color-text)',
        highlighted: 'var(--ui-color-text-highlighted)',
        inverted: 'var(--ui-color-text-inverted)',
      },
      background: {
        DEFAULT: 'var(--ui-color-bg)',
        muted: 'var(--ui-color-bg-muted)',
        elevated: 'var(--ui-color-bg-elevated)',
        accented: 'var(--ui-color-bg-accented)',
        inverted: 'var(--ui-color-bg-inverted)',
        border: 'var(--ui-color-border)',
        header: 'var(--ui-color-bg-header)',
      },
      border: {
        DEFAULT: 'var(--ui-color-border)',
        muted: 'var(--ui-color-border-muted)',
        accented: 'var(--ui-color-border-accented)',
        inverted: 'var(--ui-color-border-inverted)',
        bg: 'var(--ui-color-bg)',
      },
      ring: {
        DEFAULT: 'var(--ui-color-border)',
        muted: 'var(--ui-color-border-muted)',
        accented: 'var(--ui-color-border-accented)',
        inverted: 'var(--ui-color-border-inverted)',
        bg: 'var(--ui-color-bg)',
        offset: {
          DEFAULT: 'var(--ui-color-border)',
          muted: 'var(--ui-color-border-muted)',
          accented: 'var(--ui-color-border-accented)',
          inverted: 'var(--ui-color-border-inverted)',
          bg: 'var(--ui-color-bg)',
        },
      },
      divide: {
        DEFAULT: 'var(--ui-color-border)',
        muted: 'var(--ui-color-border-muted)',
        accented: 'var(--ui-color-border-accented)',
        inverted: 'var(--ui-color-border-inverted)',
      },
      outline: {
        DEFAULT: 'var(--ui-color-border)',
        inverted: 'var(--ui-color-border-inverted)',
      },
      stroke: {
        DEFAULT: 'var(--ui-color-border)',
        bg: 'var(--ui-color-bg)',
        inverted: 'var(--ui-color-border-inverted)',
      },
      fill: {
        DEFAULT: 'var(--ui-color-border)',
        bg: 'var(--ui-color-bg)',
        inverted: 'var(--ui-color-border-inverted)',
      },

      primary: 'var(--ui-color-primary)',
      secondary: 'var(--ui-color-secondary)',
      success: 'var(--ui-color-success)',
      info: 'var(--ui-color-info)',
      warning: 'var(--ui-color-warning)',
      error: 'var(--ui-color-error)',
    },

    containers: {
      center: true,
      padding: {
        'DEFAULT': '1.25rem',
        'sm': '2rem',
        'lg': '2rem',
        'xl': '4rem',
        '2xl': '4rem',
      },
      maxWidth: {
        'sm': '40rem',
        'md': '48rem',
        'lg': '64rem',
        'xl': '87.5rem',
        '2xl': '100rem',
      },
    },
  },

  variants: [
    (matcher) => {
      if (matcher.startsWith('uv:')) {
        return {
          matcher: matcher.replace('uv:', 'uno-layer-uv:'),
        };
      }

      if (matcher.startsWith('pohon:')) {
        return {
          matcher: matcher.replace('pohon:', 'uno-layer-pohon:'),
        };
      }

      if (matcher.startsWith('p-variant:')) {
        return {
          matcher: matcher.replace('p-variant:', 'uno-layer-p-variant:'),
        };
      }

      const prefix = 'list-no-indicator:';

      if (matcher.startsWith(prefix)) {
        return {
          matcher: matcher.slice(prefix.length),
          selector: (s) =>
            `[data-slot=list]:not(:has([data-slot=indicator])) ${s}`,
        };
      }
    },
  ],
});
