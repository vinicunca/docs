<script setup lang="ts">
defineProps<{
  /** Each key is shown as its own `<kbd>`; a combination is written `Shift + Tab`. */
  data: { keys: string[], description: string }[]
}>()
</script>

<template>
  <ProseTable>
    <ProseThead>
      <ProseTr>
        <ProseTh class="w-[30%]">
          Key
        </ProseTh>
        <ProseTh>Description</ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr v-for="(item, index) in data" :key="index">
        <ProseTd>
          <span class="inline-flex flex-wrap items-center gap-1">
            <template v-for="(key, keyIndex) in item.keys" :key="key">
              <span v-if="keyIndex" class="color-text-muted">/</span>
              <PKbd :value="key" />
            </template>
          </span>
        </ProseTd>
        <ProseTd>
          <DocsMarkdown :value="item.description" unwrap />
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
