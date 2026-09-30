# Cloudflare hosting proposal

The documentation hub is generated to `.output/public` and does not need a running Nuxt server. Use [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) for the new host. Cloudflare recommends this path for new static sites, and the checked-in [`wrangler.jsonc`](../wrangler.jsonc) points at the existing output without a Worker script or runtime binding.

The current build contains 1,631 files, with no file above 20 MiB. It includes HTML, `/raw/*.md`, `/llms.txt`, `/llms-full.txt`, and 520 prerendered JSON files under `/api/`. This is within Cloudflare's documented [static asset limits](https://developers.cloudflare.com/workers/platform/limits/). API files have `.json` extensions so the static host can assign their MIME type from the filename, as described in the [headers documentation](https://developers.cloudflare.com/workers/static-assets/headers/).

## Cutover sequence

1. Keep the current tagged import workflow: it updates one package's docs bundle and lock, then runs `pnpm run generate` for the whole site. No source checkout or component metadata generation occurs for unrelated packages.
2. Create a Cloudflare API token scoped to deploy this Worker and provide its account ID to CI. Pin Wrangler as a dev dependency before using it in CI.
3. In the docs release workflow, replace the Firebase deploy step with `wrangler deploy` after generation. Keep the existing Firebase step until the Cloudflare preview serves the home page, representative package pages, `/llms.txt`, raw Markdown, and component JSON.
4. Attach `vinicunca.dev` to the Worker and switch traffic only after the preview is accepted. Keep the Firebase project available for rollback during the cutover window.

The configuration is intentionally static-only. Pohon's separate `/mcp` service remains on its own deployment. A future hub MCP can be added as a Worker route if the documentation access pattern justifies it; it is not needed to make the Markdown and JSON available to agents.

Cloudflare's [static asset routing](https://developers.cloudflare.com/workers/static-assets/routing/) serves matching files without invoking Worker code. Its [HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/) supports the generated `index.html` routes. The `404-page` setting uses the generated `404.html` for missing paths.
