<script setup lang="ts">
interface AkarMetaEntry {
  source: string;
  description: string;
  props: Array<{ name: string; type: string; required: boolean; default: string | null; description: string }>;
  emits: Array<{ name: string; type: string; description: string }>;
  slots: Array<{ name: string; type: string; description: string }>;
  methods: Array<{ name: string; type: string; description: string }>;
}

const props = withDefaults(defineProps<{
  /** Component name as exported by Akar, e.g. `AccordionRoot`. */
  name: string;
  /** Tables to render. */
  only?: Array<'props' | 'emits' | 'slots' | 'methods'>;
}>(), {
  only: () => ['props', 'emits', 'slots', 'methods'],
});

// Only the entry this page needs ends up in the payload; the client never
// downloads the whole generated file on a direct visit.
const { data: meta } = await useAsyncData(`akar-meta-${props.name}`, async () => {
  const { components } = (await import('~/data/akar-meta.json')).default as { components: Record<string, AkarMetaEntry> };
  return components[props.name] ?? null;
});

function payload(type: string) {
  // `[value: string]` -> `value: string`, the tuple Vue declares emits with
  return type.replace(/^\[(.*)\]$/s, '$1');
}
</script>

<template>
  <div
    v-if="meta"
    class="akar-api my-5 flex flex-col gap-4"
  >
    <ProseTable v-if="only.includes('props') && meta.props.length">
      <ProseThead>
        <ProseTr>
          <ProseTh>Prop</ProseTh>
          <ProseTh>Default</ProseTh>
          <ProseTh>Type</ProseTh>
        </ProseTr>
      </ProseThead>
      <ProseTbody>
        <ProseTr
          v-for="prop in meta.props"
          :key="prop.name"
        >
          <ProseTd>
            <ProseCode>{{ prop.name }}{{ prop.required ? '*' : '' }}</ProseCode>
          </ProseTd>
          <ProseTd>
            <HighlightInlineType
              v-if="prop.default"
              :type="prop.default"
            />
          </ProseTd>
          <ProseTd>
            <HighlightInlineType
              v-if="prop.type"
              :type="prop.type"
            />
            <DocsMarkdown
              v-if="prop.description"
              :value="prop.description"
              class="color-text-toned mt-1"
            />
          </ProseTd>
        </ProseTr>
      </ProseTbody>
    </ProseTable>

    <ProseTable v-if="only.includes('emits') && meta.emits.length">
      <ProseThead>
        <ProseTr>
          <ProseTh>Event</ProseTh>
          <ProseTh>Payload</ProseTh>
        </ProseTr>
      </ProseThead>
      <ProseTbody>
        <ProseTr
          v-for="emit in meta.emits"
          :key="emit.name"
        >
          <ProseTd>
            <ProseCode>{{ emit.name }}</ProseCode>
          </ProseTd>
          <ProseTd>
            <HighlightInlineType
              v-if="payload(emit.type)"
              :type="payload(emit.type)"
            />
            <DocsMarkdown
              v-if="emit.description"
              :value="emit.description"
              class="color-text-toned mt-1"
            />
          </ProseTd>
        </ProseTr>
      </ProseTbody>
    </ProseTable>

    <ProseTable v-if="only.includes('slots') && meta.slots.length">
      <ProseThead>
        <ProseTr>
          <ProseTh>Slot (default)</ProseTh>
          <ProseTh>Payload</ProseTh>
        </ProseTr>
      </ProseThead>
      <ProseTbody>
        <ProseTr
          v-for="slot in meta.slots"
          :key="slot.name"
        >
          <ProseTd>
            <ProseCode>{{ slot.name }}</ProseCode>
          </ProseTd>
          <ProseTd>
            <HighlightInlineType
              v-if="slot.type"
              :type="slot.type"
            />
            <DocsMarkdown
              v-if="slot.description"
              :value="slot.description"
              class="color-text-toned mt-1"
            />
          </ProseTd>
        </ProseTr>
      </ProseTbody>
    </ProseTable>

    <ProseTable v-if="only.includes('methods') && meta.methods.length">
      <ProseThead>
        <ProseTr>
          <ProseTh>Method</ProseTh>
          <ProseTh>Type</ProseTh>
        </ProseTr>
      </ProseThead>
      <ProseTbody>
        <ProseTr
          v-for="method in meta.methods"
          :key="method.name"
        >
          <ProseTd>
            <ProseCode>{{ method.name }}</ProseCode>
          </ProseTd>
          <ProseTd>
            <HighlightInlineType
              v-if="method.type"
              :type="method.type"
            />
            <DocsMarkdown
              v-if="method.description"
              :value="method.description"
              class="color-text-toned mt-1"
            />
          </ProseTd>
        </ProseTr>
      </ProseTbody>
    </ProseTable>

    <p class="text-xs color-text-muted text-right -mt-2">
      <a
        :href="meta.source"
        target="_blank"
        rel="noopener"
        class="hover:color-text-highlighted"
      >
        {{ name }}.vue source
      </a>
    </p>
  </div>
  <p
    v-else
    class="text-sm color-text-muted"
  >
    No API metadata for <code>{{ name }}</code>.
  </p>
</template>
