// @ts-expect-error - virtual module without types
import { listComponentExamples } from '#component-example/nitro';

/**
 * The names of every Pohon UI example component, prerendered as
 * `/api/mcp/pohon-examples.json`, with each example's source pulled into the
 * static output as `/api/component-example/<name>.json`.
 */
export default defineEventHandler((event) => {
  const names = listComponentExamples() as Array<string>;

  // ~370 URLs exceed Node's 16 KB header limit and stall the dev proxy, and
  // the header is only read by the prerenderer anyway.
  if (import.meta.prerender) {
    appendHeader(event, 'x-nitro-prerender', names.map((name) => `/api/component-example/${name}.json`).join(','));
  }

  return names;
});
