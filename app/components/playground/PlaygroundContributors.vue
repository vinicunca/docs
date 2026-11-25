<script setup lang="ts">
const usernames = [
  'benjamincanac',
  'HugoRCD',
  'atinux',
  'romhml',
  'sandros94',
  'J-Michalek',
  'hywax',
  'maximepvrt',
  'malik-jouda',
  'genu',
];
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="flex items-start justify-between">
      <div>
        <p class="color-text-highlighted font-semibold">
          Contributors
        </p>
        <p class="text-sm color-text-muted">
          Built by the community.
        </p>
      </div>
      <PBadge
        color="neutral"
        variant="subtle"
      >
        312
      </PBadge>
    </div>

    <div class="flex flex-wrap gap-1.5">
      <PAvatar
        v-for="username in usernames"
        :key="username"
        :src="`https://github.com/${username}.png`"
        :alt="username"
        loading="lazy"
      />
      <PAvatar
        text="+300"
        class="text-xs"
      />
    </div>
  </div>
</template>
