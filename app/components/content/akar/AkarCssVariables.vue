<script setup lang="ts">
defineProps<{
  data: Array<{ cssVariable: string; description: string }>;
}>();
</script>

<template>
  <ProseTable>
    <ProseThead>
      <ProseTr>
        <ProseTh class="w-[45%]">
          CSS variable
        </ProseTh>
        <ProseTh>Description</ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr
        v-for="item in data"
        :key="item.cssVariable"
      >
        <ProseTd>
          <ProseCode>{{ item.cssVariable }}</ProseCode>
        </ProseTd>
        <ProseTd>
          <DocsMarkdown
            :value="item.description"
            unwrap
          />
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
