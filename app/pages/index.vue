<script setup lang="ts">
const versions = useRuntimeConfig().public.versions as Record<string, string>

const title = 'Vinicunca'
const description = 'Documentation for every @vinicunca package: a Vue component library, its primitives, a typed utility belt, an admin template and the tooling that holds them together.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

useCanonical('/raw/index.md')

if (import.meta.server) {
  defineOgImage('Home.takumi', {
    lead: 'Build with',
    accent: 'Vinicunca',
    description: 'Vue components, primitives, utilities and tooling, documented in one place.'
  })
}

const packages = DOCS_PACKAGES.filter(pkg => pkg.group === 'packages')
const guides = DOCS_PACKAGES.filter(pkg => pkg.group === 'guides')

const links = [{
  label: 'Get started with Pohon UI',
  to: '/pohon/getting-started',
  trailingIcon: 'i-lucide-arrow-right'
}, {
  label: 'Build a theme',
  to: '/theme',
  color: 'neutral' as const,
  variant: 'outline' as const,
  icon: 'i-lucide-palette'
}]
</script>

<template>
  <PMain>
    <PageHero
      lead="Build with"
      accent="Vinicunca"
      :description="description"
      :links="links"
      orientation="vertical"
    />

    <PContainer>
      <PPage>
        <PPageBody class="space-y-12">
          <section>
            <h2 class="text-2xl font-semibold color-text-highlighted mb-6">
              Packages
            </h2>

            <PPageGrid>
              <PPageCard
                v-for="pkg in packages"
                :key="pkg.id"
                :title="pkg.title"
                :description="pkg.description"
                :icon="pkg.icon"
                :to="pkg.to"
                spotlight
              >
                <template #footer>
                  <div class="flex items-center gap-2 text-xs color-text-muted">
                    <code v-if="pkg.npm">{{ pkg.npm }}</code>
                    <PBadge v-if="pkg.npm && versions[pkg.npm]" variant="subtle" size="sm">
                      v{{ versions[pkg.npm] }}
                    </PBadge>
                  </div>
                </template>
              </PPageCard>
            </PPageGrid>
          </section>

          <section>
            <h2 class="text-2xl font-semibold color-text-highlighted mb-6">
              Guides
            </h2>

            <PPageGrid>
              <PPageCard
                v-for="guide in guides"
                :key="guide.id"
                :title="guide.title"
                :description="guide.description"
                :icon="guide.icon"
                :to="guide.to"
                spotlight
              />
            </PPageGrid>
          </section>

          <section>
            <PPageCTA
              title="Built for people and agents"
              description="Every page is also served as Markdown. Append .md to any URL, or point your agent at llms.txt."
              variant="subtle"
              :links="[
                { label: 'llms.txt', to: '/llms.txt', target: '_blank', icon: 'i-lucide-bot' },
                { label: 'Markdown sitemap', to: '/sitemap.md', target: '_blank', color: 'neutral', variant: 'outline' }
              ]"
            />
          </section>
        </PPageBody>
      </PPage>
    </PContainer>
  </PMain>
</template>
