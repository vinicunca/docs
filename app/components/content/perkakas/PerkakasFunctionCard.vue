<script setup lang="ts">
import type { PerkakasFunction, PerkakasSignature } from './catalog'

defineProps<{
  fn: PerkakasFunction
}>()

function variantLabel(variant: PerkakasSignature['variant']) {
  if (variant === 'data-first') return 'Data First'
  if (variant === 'data-last') return 'Data Last'
  return null
}

function hasDetails(signature: PerkakasSignature) {
  return Boolean(signature.params.length || signature.returns?.type || signature.returns?.description)
}
</script>

<template>
  <article class="border-b border-default py-8 last:border-b-0">
    <div class="mb-3 flex flex-wrap items-center gap-2">
      <ProseH3 :id="fn.name" class="mt-0! mb-0! scroll-mt-24" :anchor="true">
        {{ fn.name }}
      </ProseH3>
      <PBadge v-if="fn.tags.deprecated" color="error" variant="subtle" size="sm">
        Deprecated
      </PBadge>
      <PBadge v-if="fn.tags.strict" color="warning" variant="subtle" size="sm">
        Strict
      </PBadge>
      <PBadge v-if="fn.tags.indexed" color="info" variant="subtle" size="sm">
        Indexed
      </PBadge>
      <PBadge v-if="fn.tags.lazy" color="success" variant="subtle" size="sm">
        Lazy
      </PBadge>
      <PBadge v-if="fn.kind !== 'function'" color="neutral" variant="outline" size="sm">
        {{ fn.kind }}
      </PBadge>
      <PButton
        v-if="fn.sourceUrl"
        :to="fn.sourceUrl"
        target="_blank"
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        size="xs"
        class="ms-auto"
        aria-label="View source on GitHub"
      />
    </div>

    <DocsMarkdown v-if="fn.summary" :value="fn.summary" class="color-text-toned [&_:first-child]:mt-0" />

    <div v-for="(signature, index) in fn.signatures" :key="index" class="mt-5">
      <PBadge v-if="variantLabel(signature.variant)" color="neutral" variant="subtle" size="sm" class="mb-2">
        {{ variantLabel(signature.variant) }}
      </PBadge>

      <PerkakasCode
        v-if="signature.signature && signature.signatureHtml"
        :code="signature.signature"
        :html="signature.signatureHtml"
      />

      <PCollapsible v-if="hasDetails(signature)" class="mt-2">
        <PButton
          color="neutral"
          variant="ghost"
          size="xs"
          trailing-icon="i-lucide-chevron-down"
          :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
          class="group"
        >
          Parameters
        </PButton>
        <template #content>
          <ProseTable v-if="signature.params.length">
            <ProseThead>
              <ProseTr>
                <ProseTh>Name</ProseTh>
                <ProseTh>Description</ProseTh>
              </ProseTr>
            </ProseThead>
            <ProseTbody>
              <ProseTr v-for="param in signature.params" :key="param.name">
                <ProseTd>
                  <ProseCode>{{ param.name }}</ProseCode>
                  <span v-if="param.optional" class="color-text-muted ms-1 text-xs">optional</span>
                </ProseTd>
                <ProseTd>
                  <DocsMarkdown v-if="param.description" :value="param.description" unwrap />
                </ProseTd>
              </ProseTr>
            </ProseTbody>
          </ProseTable>
          <p v-if="signature.returns?.type || signature.returns?.description" class="color-text-toned mt-3 text-sm">
            <span class="font-medium color-text">Returns</span>
            <ProseCode v-if="signature.returns.type" class="ms-2">{{ signature.returns.type }}</ProseCode>
            <span v-if="signature.returns.description"> — {{ signature.returns.description }}</span>
          </p>
        </template>
      </PCollapsible>

      <PerkakasCode
        v-if="signature.example && signature.exampleHtml"
        :code="signature.example"
        :html="signature.exampleHtml"
      />
    </div>
  </article>
</template>
