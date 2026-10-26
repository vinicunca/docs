# Deploy to a Cloudflare Worker

The site is generated as static files into `.output/public`. `wrangler.jsonc` serves that folder as Worker static assets, with `404.html` for unknown paths. No server code runs. `html_handling: "drop-trailing-slash"` serves each page at the URL the site links to (`/pohon/components/button`), not after a redirect to a trailing-slash URL.

`modules/cloudflare-assets.ts` writes `_redirects` (the `routeRules` redirects: `/pohon`, `/eslint`, the old Windows guide URLs, …) and `_headers` (cache rules and the agent-discovery `Link` headers) into the output on every generate.

Don't switch to Nitro's `cloudflare_pages_static` preset: it makes @nuxt/content use D1, which doesn't exist at build time. The prerender then finds about 400 pages instead of about 2,600.

## 1. Build

```bash
pnpm generate
```

Check the end of the output:

- The only 404 warnings are the images in `tasks/missing-images.md`.
- `Wrote 14 redirects and 12 header rules for Cloudflare` is printed.
- The file count stays under 20,000, the Workers free plan limit (about 4,600 today): `find .output/public -type f | wc -l`

## 2. Preview locally

```bash
npx wrangler dev
```

Open the printed URL and check:

- `/pohon` and `/eslint` redirect to their getting-started pages.
- An unknown path such as `/nope` shows the 404 page.
- A Pohon component page, for example `/pohon/components/button`, shows its example code.
- `/llms.txt`, `/raw/pohon/components/button.md` and `/.well-known/skills/index.json` load.

## 3. Deploy

```bash
npx wrangler login     # once
npx wrangler deploy
```

This publishes to `https://vinicunca-docs.<your-subdomain>.workers.dev`. Repeat the checks from step 2 there.

## 4. Point the domain at the Worker

A Worker custom domain needs the `vinicunca.dev` zone on Cloudflare. If its DNS is managed elsewhere today, move the nameservers to Cloudflare first.

1. In the Cloudflare DNS for `vinicunca.dev`, remove the records that point at Firebase Hosting (its `A` records, and `www` if used). Cloudflare refuses a custom domain while another record exists for that hostname.
2. Add the domain to the Worker, either in the dashboard (Workers & Pages → `vinicunca-docs` → Settings → Domains & Routes → Add → Custom domain) or in `wrangler.jsonc`, then `npx wrangler deploy` again:

   ```jsonc
   "routes": [
     { "pattern": "vinicunca.dev", "custom_domain": true }
   ]
   ```

3. Open `https://vinicunca.dev` and repeat the checks from step 2.

Between removing the Firebase records and the custom domain going live, the site is briefly unreachable: usually a minute or two.

## 5. Retire Firebase

Keep the Firebase site until the old URLs work on the Worker. Then:

1. Remove `vinicunca.dev` from Firebase Hosting (Firebase console → Hosting → the domain → Delete).
2. Optionally stop the old site: `firebase hosting:disable`.

## 6. After launch

- Submit `https://vinicunca.dev/sitemap.xml` in Google Search Console, if the domain is set up there.
- Later deploys are steps 1 and 3: `pnpm generate && npx wrangler deploy`.
