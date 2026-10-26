import { writeFile } from 'node:fs/promises';
import { defineNuxtModule } from '@nuxt/kit';
import { join } from 'pathe';

/**
 * Writes Cloudflare's `_redirects` and `_headers` into the generated site from `routeRules`, so the
 * redirects and headers a static host can't run still apply on the Worker. Nitro's Cloudflare
 * presets write them too, but they also switch @nuxt/content to D1, which leaves the prerender
 * without content: the site builds with the static preset instead.
 */
export default defineNuxtModule({
  meta: {
    name: 'cloudflare-assets',
  },
  setup(_options, nuxt) {
    nuxt.hook('nitro:init', (nitro) => {
      nitro.hooks.hook('prerender:done', async () => {
        const rules = Object.entries(nitro.options.routeRules);
        const toPattern = (path: string) => path.replace('/**', '/*');

        const redirects = rules
          .filter(([, rule]) => rule.redirect)
          .map(([path, rule]) => `${toPattern(path)} ${rule.redirect!.to} ${rule.redirect!.statusCode}`);

        const headers = rules
          .filter(([, rule]) => rule.headers)
          .map(([path, rule]) => [
            toPattern(path),
            ...Object.entries(rule.headers!).map(([name, value]) => `  ${name}: ${value}`),
          ].join('\n'));

        const { publicDir } = nitro.options.output;
        await writeFile(join(publicDir, '_redirects'), `${redirects.join('\n')}\n`);
        await writeFile(join(publicDir, '_headers'), `${headers.join('\n')}\n`);
        nitro.logger.info(`Wrote ${redirects.length} redirects and ${headers.length} header rules for Cloudflare`);
      });
    });
  },
});
