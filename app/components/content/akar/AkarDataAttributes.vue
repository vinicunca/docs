<script setup lang="ts">
defineProps<{
  /** `values` is a list of the attribute's values, or a sentence when it has none (`Present when disabled`). */
  data: Array<{ attribute: string; values: string | Array<string> }>;
}>();

function union(values: Array<string>) {
  return values.map((value) => `"${value}"`).join(' | ');
}
</script>

<template>
  <ProseTable>
    <ProseThead>
      <ProseTr>
        <ProseTh class="w-[45%]">
          Data attribute
        </ProseTh>
        <ProseTh>Value</ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr
        v-for="item in data"
        :key="item.attribute"
      >
        <ProseTd>
          <ProseCode>{{ item.attribute }}</ProseCode>
        </ProseTd>
        <ProseTd>
          <HighlightInlineType
            v-if="Array.isArray(item.values)"
            :type="union(item.values)"
          />
          <DocsMarkdown
            v-else
            :value="item.values"
            unwrap
          />
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
