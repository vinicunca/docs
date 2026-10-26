<script setup lang="ts">
const versions = useRuntimeConfig().public.versions as Record<string, string>;

const title = 'Vinicunca';
// Markdown for the hero, plain text for the meta tags
const description = 'Documentation for every `@vinicunca` package: a Vue component library, its primitives, a typed utility belt, an admin template and the tooling that holds them together.';
const plainDescription = description.replaceAll('`', '');

useSeoMeta({
  title,
  description: plainDescription,
  ogTitle: title,
  ogDescription: plainDescription,
});

useCanonical('/raw/index.md');

if (import.meta.server) {
  defineOgImage('Home.takumi', {
    lead: 'Build with',
    accent: 'Vinicunca',
    description: 'Vue components, primitives, utilities and tooling, documented in one place.',
  });
}

const groups = DOCS_GROUPS.map((group) => ({ ...group, packages: docsPackagesIn(group.id) }));

const links = [
  {
    label: 'Get started with Pohon UI',
    to: '/pohon/getting-started',
    trailingIcon: 'i-lucide-arrow-right',
  },
  {
    label: 'Build a theme',
    to: '/theme',
    color: 'neutral' as const,
    variant: 'outline' as const,
    icon: 'i-lucide-palette',
  },
];
</script>

<template>
  <PMain>
    <PageHero
      lead="Build with"
      accent="Vinicunca"
      :description="description"
      :links="links"
    >
      <template #description>
        <MDC
          :value="description"
          unwrap="p"
        />
      </template>

      <NuxtImg
        src="/images/illustration.webp"
      />
    </PageHero>

    <PContainer>
      <PPage :ui="{ center: 'lg:col-start-2' }">
        <PPageBody class="space-y-12">
          <section
            v-for="group in groups"
            :key="group.id"
          >
            <h2 class="text-2xl color-text-highlighted font-semibold mb-6">
              {{ group.title }}
            </h2>

            <PPageGrid>
              <PPageCard
                v-for="pkg in group.packages"
                :key="pkg.id"
                :title="pkg.title"
                :description="pkg.description"
                :icon="pkg.icon"
                :to="pkg.to"
                spotlight
              >
                <template #footer>
                  <div class="text-xs color-text-muted flex gap-2 items-center">
                    <code v-if="pkg.npm">{{ pkg.npm }}</code>
                    <PBadge
                      v-if="pkg.npm && versions[pkg.npm]"
                      variant="subtle"
                      size="sm"
                    >
                      v{{ versions[pkg.npm] }}
                    </PBadge>
                  </div>
                </template>
              </PPageCard>
            </PPageGrid>
          </section>

          <section>
            <PPageCTA
              title="Built for people and agents"
              description="Every page is also served as Markdown. Append .md to any URL, or point your agent at llms.txt."
              variant="subtle"
              :links="[
                { label: 'llms.txt', to: '/llms.txt', target: '_blank', icon: 'i-lucide-bot' },
                { label: 'Markdown sitemap', to: '/sitemap.md', target: '_blank', color: 'neutral', variant: 'outline' },
              ]"
            />
          </section>
        </PPageBody>
      </PPage>
    </PContainer>
  </PMain>
</template>
