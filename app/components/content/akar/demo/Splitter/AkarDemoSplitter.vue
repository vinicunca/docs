<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'akar';
</script>

<template>
  <div class="akar-demo akar-demo-Splitter">
    <div class="text-green9 text-sm font-medium px-8 h-64 w-full">
      <SplitterGroup
        id="splitter-group-1"
        direction="horizontal"
      >
        <SplitterPanel
          id="splitter-group-1-panel-1"
          :min-size="20"
          class="SplitterPanel"
        >
          Panel A
        </SplitterPanel>
        <SplitterResizeHandle
          id="splitter-group-1-resize-handle-1"
          class="SplitterResizeHandle"
        />
        <SplitterPanel
          id="splitter-group-1-panel-2"
          :min-size="20"
        >
          <SplitterGroup
            id="splitter-group-2"
            direction="vertical"
          >
            <SplitterPanel
              id="splitter-group-2-panel-1"
              :min-size="20"
              class="SplitterPanel"
            >
              Panel B
            </SplitterPanel>
            <SplitterResizeHandle
              id="splitter-group-2-resize-handle-1"
              class="SplitterResizeHandle"
            />
            <SplitterPanel
              id="splitter-group-2-panel-2"
              :min-size="20"
              class="SplitterPanel"
            >
              Panel C
            </SplitterPanel>
          </SplitterGroup>
        </SplitterPanel>
      </SplitterGroup>
    </div>
  </div>
</template>
