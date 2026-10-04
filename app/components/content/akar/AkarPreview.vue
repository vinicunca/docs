<script setup lang="ts">
const props = defineProps<{
  /** Demo folder name, e.g. `Accordion`. */
  name: string
}>()

const demoModules = import.meta.glob('~/components/content/akar/demo/*/AkarDemo*.vue')
const vueSources = import.meta.glob('~/components/content/akar/demo/*/AkarDemo*.vue', {
  query: '?raw',
  import: 'default'
})
const cssSources = import.meta.glob('~/components/content/akar/demo/*/styles.css', {
  query: '?raw',
  import: 'default'
})

function demoKey(name: string) {
  return Object.keys(demoModules).find(path => path.includes(`/demo/${name}/`))
}

function cssKey(name: string) {
  return Object.keys(cssSources).find(path => path.includes(`/demo/${name}/`))
}

const match = demoKey(props.name)
const resolved = match ? defineAsyncComponent(demoModules[match] as any) : undefined

const { data: source } = await useAsyncData(`akar-demo-source-${props.name}`, async () => {
  const vuePath = demoKey(props.name)
  const cssPath = cssKey(props.name)
  const vue = vuePath ? String(await (vueSources[vuePath] as () => Promise<string>)()) : ''
  const css = cssPath ? String(await (cssSources[cssPath] as () => Promise<string>)()) : ''
  return { vue, css }
})

const markdown = computed(() => {
  const vue = source.value?.vue?.trim()
  if (!vue) return ''
  const css = source.value?.css?.trim()
  if (css) {
    return `::code-group\n\n\`\`\`vue [index.vue]\n${vue}\n\`\`\`\n\n\`\`\`css [styles.css]\n${css}\n\`\`\`\n\n::`
  }
  return `\`\`\`vue\n${vue}\n\`\`\``
})
</script>

<template>
  <div class="akar-preview my-5">
    <div
      v-if="resolved"
      class="relative z-1 overflow-auto rounded-t-md border border-border-muted"
    >
      <div class="flex min-h-40 items-center justify-center p-6 bg-background-muted/40">
        <component :is="resolved" />
      </div>
    </div>
    <p v-else class="color-text-muted text-sm border border-border-muted rounded-t-md p-4">
      No live demo for <code>{{ name }}</code>.
    </p>
    <DocsMarkdown
      v-if="markdown"
      :value="markdown"
      class="[&_pre]:rounded-t-none! [&_div.my-5]:mt-0! [&_.my-5]:mt-0!"
    />
  </div>
</template>
