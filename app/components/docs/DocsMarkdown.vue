<script setup lang="ts">
import type { Ref } from 'vue';
import type { MarkdownDoc } from '../../utils/markdown';
import { MarkdownDocument } from '@comark/vue';
import { hash } from 'ohash';

/**
 * Markdown rendered at runtime, through the parser the whole site shares:
 * Comark's own component builds one per instance, and a props table mounts a
 * hundred of these. It resolves the same prose components the content
 * pipeline does.
 */
const props = defineProps<{
  /** Markdown to parse, or a document already parsed (the release notes). */
  value?: string | MarkdownDoc;
  /** Drop the block the parser wraps a single line in, `p` unless named. */
  unwrap?: boolean | string;
}>();

// Loaded on demand: the parser, the highlighter and its grammars stay out of
// every page's own chunks, the client only needs them once a value changes.
async function parse(value: string): Promise<MarkdownDoc> {
  try {
    const { parseMarkdownDoc } = await import('../../utils/markdown');
    return await parseMarkdownDoc(value);
  } catch (error) {
    console.warn('[markdown] could not parse', error);
    // the source as plain text, so a broken string never fails the page
    return {
      frontmatter: {},
      meta: {},
      nodes: [
        ['p', {}, value],
      ],
    } as unknown as MarkdownDoc;
  }
}

function unwrapDoc(doc: MarkdownDoc | null | undefined) {
  if (!doc || !props.unwrap) {
    return doc ?? null;
  }

  const tags = props.unwrap === true
    ? ['p']
    : String(props.unwrap).split(' ');
  const nodes = doc.nodes.flatMap((node) => (Array.isArray(node) && tags.includes(node[0] as string)
    ? node.slice(2)
    : [node]));

  return { ...doc, nodes } as MarkdownDoc;
}

// The server parses and the payload carries the result, keyed by the source
// so a description repeated down a table is stored once: hydrating a page
// would otherwise parse and highlight every block on it a second time.
let initial: Ref<MarkdownDoc | null | undefined>;
if (typeof props.value === 'string' && props.value) {
  const source = props.value;
  const asyncData = useAsyncData(`docs-markdown-${hash(source)}`, () => parse(source), { deep: false });
  // Awaited only in the browser, where the page waits on it. The server waits
  // through the `onServerPrefetch` useAsyncData registers: an `await` here
  // leaves this instance current while its siblings render, and every slot
  // they call warns it was invoked outside of the render function.
  if (import.meta.client) {
    await asyncData;
  }
  initial = asyncData.data;
} else {
  initial = shallowRef(props.value as MarkdownDoc | undefined);
}

// a value that has changed since setup, parsed in the browser
const updated = shallowRef<MarkdownDoc | null>();

const doc = computed(() => unwrapDoc(updated.value === undefined
  ? initial.value
  : updated.value));

// the last change wins: a parse for a value that has moved on is dropped
let version = 0;
async function update() {
  const current = ++version;
  const value = props.value;
  const parsed = typeof value === 'string' && value
    ? await parse(value)
    : value;
  const next = typeof parsed === 'string'
    ? null
    : parsed ?? null;
  if (current === version) {
    updated.value = next;
  }
}

watch(() => props.value, update);
</script>

<template>
  <MarkdownDocument
    v-if="doc"
    :value="doc"
  />
</template>
