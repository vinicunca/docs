<script setup lang="ts">
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'akar';
import './styles.css';
</script>

<template>
  <div class="akar-demo akar-demo-Pagination">
    <PaginationRoot
      :total="100"
      :sibling-count="1"
      show-edges
      :default-page="2"
    >
      <PaginationList
        v-slot="{ items }"
        class="PaginationList"
      >
        <PaginationFirst class="Button">
          <PIcon name="i-lucide-chevrons-left" />
        </PaginationFirst>
        <PaginationPrev
          :style="{ marginRight: 16 }"
          class="Button"
        >
          <PIcon name="i-lucide-chevron-left" />
        </PaginationPrev>
        <template v-for="(page, index) in items">
          <PaginationListItem
            v-if="page.type === 'page'"
            :key="index"
            class="Button"
            :value="page.value"
          >
            {{ page.value }}
          </PaginationListItem>
          <PaginationEllipsis
            v-else
            :key="page.type"
            :index="index"
            class="PaginationEllipsis"
          >
            &#8230;
          </PaginationEllipsis>
        </template>
        <PaginationNext
          :style="{ marginLeft: 16 }"
          class="Button"
        >
          <PIcon name="i-lucide-chevron-right" />
        </PaginationNext>
        <PaginationLast class="Button">
          <PIcon name="i-lucide-chevrons-right" />
        </PaginationLast>
      </PaginationList>
    </PaginationRoot>
  </div>
</template>
