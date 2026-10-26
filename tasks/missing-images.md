# Missing images

Found by `pnpm generate` (IPX_FILE_NOT_FOUND). Each file below is referenced but doesn't exist in `public/`.

| File to add | Size | Used by |
| --- | --- | --- |
| `public/components/light/drawer-provider.png` | 768×432 (16:9) | DrawerProvider card on `/pohon/components`; OG image for `/pohon/components/drawer-provider` (`app/components/og-image/Component.takumi.vue:215`) |
| `public/components/dark/drawer-provider.png` | 768×432 (16:9) | Same card in dark mode |
| `public/assets/templates/nuxt/dashboard-dark.png` | Wide landscape, ~1600px wide | `content/pohon/4.typography/4.images-and-embeds.md` lines 13, 18, 43, 48, 58, 63 (full width, without zoom, and at `width="300"`) |

Notes:

- The 768×432 size matches the existing component screenshots, such as `public/components/light/drawer.png`.
- `public/assets/` doesn't exist yet: create `public/assets/templates/nuxt/`.
- After adding them, `pnpm generate` should report no 404s.
