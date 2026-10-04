/**
 * Canonical site URL, shared by every server route that bakes absolute links
 * into a response (sitemaps, `llms.txt`, the raw Markdown index).
 *
 * `nuxt-agent-discovery` is configured with the same value through
 * `agentDiscovery.siteUrl`, so its own documents agree with these.
 */
export const SITE_URL = 'https://vinicunca.dev'
