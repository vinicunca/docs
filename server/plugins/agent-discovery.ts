import { rawUrl } from '#agent-discovery';
import { DOCS_PACKAGES } from '../../app/utils/packages';

/**
 * What `nuxt-agent-discovery` cannot know on its own.
 *
 * `agent-discovery:document` turns the MDC components in a documentation page
 * into plain markdown before the minimark tree is stringified for `/raw/**.md`.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('agent-discovery:document', async (event, page) => {
    await transformMDC(event, page as any);
  });

  // The homepage is a Vue page, so the module has no document to build
  // `/raw/index.md` from: this hook writes it.
  nitroApp.hooks.hook('agent-discovery:index', async (event, index) => {
    index.title = 'Vinicunca';
    index.description = 'Documentation for every @vinicunca package.';

    index.body.push([
      renderLlmsSection(WHEN_TO_USE_SECTION, (href) => rawUrl(event, href)),
      `## Packages\n\n${DOCS_PACKAGES.map((pkg) => `- [${pkg.title}](${rawUrl(event, pkg.to)}): ${pkg.description}`).join('\n')}`,
      `## Links

- Website: <${SITE_URL}>
- GitHub: <https://github.com/vinicunca>`,
    ].join('\n\n'));
  });
});
