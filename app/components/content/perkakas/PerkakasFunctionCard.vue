<script setup lang="ts">
import type { PerkakasFunction, PerkakasSignature } from './catalog';

defineProps<{
  fn: PerkakasFunction;
}>();

function variantLabel(variant: PerkakasSignature['variant']) {
  if (variant === 'data-first') {
    return 'Data First';
  }
  if (variant === 'data-last') {
    return 'Data Last';
  }
  return null;
}

function hasDetails(signature: PerkakasSignature) {
  return Boolean(signature.params.length || signature.returns?.type || signature.returns?.description);
}
</script>

<template>
  <article class="border-default py-8 border-b last:border-b-0">
    <div class="mb-3 flex flex-wrap gap-2 items-center">
      <ProseH3
        :id="fn.name"
        class="scroll-mt-24 mb-0! mt-0!"
        :anchor="true"
      >
        {{ fn.name }}
      </ProseH3>
      <PBadge
        v-if="fn.tags.deprecated"
        color="error"
        variant="subtle"
        size="sm"
      >
        Deprecated
      </PBadge>
      <PBadge
        v-if="fn.tags.strict"
        color="warning"
        variant="subtle"
        size="sm"
      >
        Strict
      </PBadge>
      <PBadge
        v-if="fn.tags.indexed"
        color="info"
        variant="subtle"
        size="sm"
      >
        Indexed
      </PBadge>
      <PBadge
        v-if="fn.tags.lazy"
        color="success"
        variant="subtle"
        size="sm"
      >
        Lazy
      </PBadge>
      <PBadge
        v-if="fn.kind !== 'function'"
        color="neutral"
        variant="outline"
        size="sm"
      >
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

    <!-- Static text whose links are `#` anchors, so it never hydrates and its parse stays out of the payload. -->
    <LazyDocsMarkdown
      v-if="fn.summary"
      hydrate-never
      :value="fn.summary"
      class="color-text-toned [&_:first-child]:mt-0"
    />

    <div
      v-for="(signature, index) in fn.signatures"
      :key="index"
      class="mt-5"
    >
      <PBadge
        v-if="variantLabel(signature.variant)"
        color="neutral"
        variant="subtle"
        size="sm"
      >
        {{ variantLabel(signature.variant) }}
      </PBadge>

      <PerkakasCode
        v-if="signature.signature && signature.signatureHtml"
        :code="signature.signature"
        :html="signature.signatureHtml"
      />

      <PCollapsible
        v-if="hasDetails(signature)"
        class="mt-2"
      >
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
              <ProseTr
                v-for="param in signature.params"
                :key="param.name"
              >
                <ProseTd>
                  <ProseCode>{{ param.name }}</ProseCode>
                  <span
                    v-if="param.optional"
                    class="text-xs color-text-muted ms-1"
                  >optional</span>
                </ProseTd>
                <ProseTd>
                  <DocsMarkdown
                    v-if="param.description"
                    :value="param.description"
                    unwrap
                  />
                </ProseTd>
              </ProseTr>
            </ProseTbody>
          </ProseTable>
          <p
            v-if="signature.returns?.type || signature.returns?.description"
            class="text-sm color-text-toned mt-3"
          >
            <span class="color-text font-medium">Returns</span>
            <ProseCode
              v-if="signature.returns.type"
              class="ms-2"
            >
              {{ signature.returns.type }}
            </ProseCode>
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
