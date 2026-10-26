import { SITE_URL } from './site.ts';

/**
 * "When to use" guidance for agents, rendered as the first section of
 * `/llms.txt`, prepended to `/llms-full.txt` and repeated on `/raw/index.md`.
 *
 * Shaped like a `nuxt-llms` section: the `description` is written straight into
 * the document under the `##` heading, so the Markdown below is what agents
 * read. Kept dependency-free so `nuxt.config.ts` can import it natively.
 */
export const WHEN_TO_USE_SECTION = {
  title: 'How to use these docs',
  description: [
    'Vinicunca is a set of open source packages for building Vue and TypeScript applications. Each package has its own section on this site.',
    '',
    '- **Pohon UI** (`pohon-ui`): styled, accessible Vue and Nuxt components built on Akar and UnoCSS. Use it for application UI: forms, tables, overlays, dashboards, docs and chat layouts.',
    '- **Akar** (`akar`): unstyled, accessible Vue primitives (a fork of Reka UI). Use it to build your own design system, or when Pohon UI is too opinionated.',
    '- **Perkakas** (`@vinicunca/perkakas`): typed data-first and data-last utility functions (a fork of Remeda). Use it instead of lodash or ramda.',
    '- **Taman** (`create-taman`, `@vinicunca/taman-*`, `@vinicunca/request`): a full-stack Vue admin template with oRPC, better-auth, Drizzle and Cloudflare Workers.',
    '- **ESLint Config** (`@vinicunca/eslint-config`): a flat ESLint config that also formats code. Use `vinicuncaESLint()` in `eslint.config.js`.',
    '- **UnoCSS Preset** (`@vinicunca/unocss-preset`): `presetVinicunca()`, the UnoCSS preset every Vinicunca project uses, with fluid sizing, animations and scrollbars.',
    '- **UnoCSS Variants** (`unocss-variants`): `uv()` for variants, slots and compound styles with UnoCSS, a port of Tailwind Variants.',
    '',
    'How an agent should read this site:',
    '',
    `- Read any documentation page as Markdown: append \`.md\` to its URL (\`${SITE_URL}/pohon/components/button.md\`) or send \`Accept: text/markdown\`.`,
    `- Start from the Markdown sitemap at ${SITE_URL}/sitemap.md, or the full documentation at ${SITE_URL}/llms-full.txt.`,
    `- For Pohon UI conventions and component selection, load the agent skill at ${SITE_URL}/.well-known/skills/pohon-ui/SKILL.md.`,
    `- For ESLint Config setup and the style rules it enforces, load the agent skill at ${SITE_URL}/.well-known/skills/eslint-config/SKILL.md.`,
    `- For Taman project layout and the add-a-feature checklist, load the agent skill at ${SITE_URL}/.well-known/skills/taman/SKILL.md.`,
    `- For UnoCSS Preset setup, fluid utilities and theme tokens, load the agent skill at ${SITE_URL}/.well-known/skills/unocss-preset/SKILL.md.`,
    `- For Perkakas imports, pipe, and data-first versus data-last, load the agent skill at ${SITE_URL}/.well-known/skills/perkakas/SKILL.md.`,
    `- For Akar composition (Root/Trigger/Content, asChild, data attributes), load the agent skill at ${SITE_URL}/.well-known/skills/akar/SKILL.md.`,
    `- For UnoCSS Variants (\`uv\`, slots, compound variants, no class merging), load the agent skill at ${SITE_URL}/.well-known/skills/unocss-variants/SKILL.md.`,
    `- For setting up or troubleshooting a Windows (WSL) dev machine, load the agent skill at ${SITE_URL}/.well-known/skills/windows-dev/SKILL.md.`,
    '',
    'Entry points:',
  ].join('\n'),
  // Plain page paths: `nuxt-agent-discovery` maps them to their `/raw/**.md`
  // twins wherever this section is rendered.
  links: [
    { title: 'Pohon UI installation (Nuxt)', description: 'Add Pohon UI to a Nuxt application', href: '/pohon/getting-started/installation/nuxt' },
    { title: 'Pohon UI installation (Vue)', description: 'Add Pohon UI to a Vue application with Vite', href: '/pohon/getting-started/installation/vue' },
    { title: 'Pohon UI agent skill', description: 'Conventions, component selection and layout recipes', href: '/.well-known/skills/pohon-ui/SKILL.md' },
    { title: 'ESLint Config', description: 'Install vinicuncaESLint and set up the editor', href: '/eslint/getting-started' },
    { title: 'ESLint Config agent skill', description: 'Factory options and the style conventions it enforces', href: '/.well-known/skills/eslint-config/SKILL.md' },
    { title: 'Taman', description: 'Create a Taman project and run it locally', href: '/taman/getting-started' },
    { title: 'Taman agent skill', description: 'Where code goes and the add-a-feature checklist', href: '/.well-known/skills/taman/SKILL.md' },
    { title: 'UnoCSS Preset agent skill', description: 'presetVinicunca options, fluid utilities and theme tokens', href: '/.well-known/skills/unocss-preset/SKILL.md' },
    { title: 'Perkakas', description: 'Install Perkakas and the function reference', href: '/perkakas/getting-started' },
    { title: 'Perkakas agent skill', description: 'Data-first and data-last, pipe, and common functions', href: '/.well-known/skills/perkakas/SKILL.md' },
    { title: 'Akar', description: 'Install Akar and the component anatomy', href: '/akar/overview' },
    { title: 'Akar agent skill', description: 'When to use Akar, composition, and data attributes', href: '/.well-known/skills/akar/SKILL.md' },
    { title: 'UnoCSS Variants', description: 'uv() variants, slots, and the no-merge layer setup', href: '/unocss-variants/getting-started' },
    { title: 'UnoCSS Variants agent skill', description: 'uv API, slots, compound variants, and the no-merge caveat', href: '/.well-known/skills/unocss-variants/SKILL.md' },
    { title: 'Markdown sitemap', description: 'Every page on the site, as Markdown links', href: '/sitemap.md' },
  ],
};

/**
 * Renders a `nuxt-llms` section the way `/llms.txt` does, so the same content
 * can be reused in other Markdown documents.
 */
export function renderLlmsSection(
  section: { title: string; description?: string; links?: Array<{ title: string; description?: string; href: string }> },
  resolveHref: (href: string) => string = (href) => href,
): string {
  const parts = [`## ${section.title}`];

  if (section.description) {
    parts.push(section.description);
  }

  if (section.links?.length) {
    // `/llms.txt` gets its links rewritten to the raw twins by the module.
    // Anywhere else has to resolve them, which is what `resolveHref` is for.
    parts.push(section.links.map((link) => {
      const href = resolveHref(link.href);
      return link.description
        ? `- [${link.title}](${href}): ${link.description}`
        : `- [${link.title}](${href})`;
    }).join('\n'));
  }

  return parts.join('\n\n');
}
