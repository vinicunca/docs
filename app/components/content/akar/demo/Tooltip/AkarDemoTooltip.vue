<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'akar'
import './styles.css'
</script>

<template>
  <div class="akar-demo akar-demo-Tooltip">
    <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger
            class="IconButton"
          >
            <PIcon name="i-lucide-plus" />
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent
              as-child
              class="TooltipContent"
              :side-offset="5"
            >
              Add to library
              <TooltipArrow
                class="TooltipArrow"
                :width="8"
              />
            </TooltipContent>
          </TooltipPortal>
        </TooltipRoot>
      </TooltipProvider>
  </div>
</template>
