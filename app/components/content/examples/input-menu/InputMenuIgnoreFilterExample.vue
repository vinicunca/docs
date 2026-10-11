<script setup lang="ts">
import type { AvatarProps } from 'pohon-ui';
import { refDebounced } from '@vueuse/core';

const searchTerm = ref('');
const searchTermDebounced = refDebounced(searchTerm, 200);

const { data: users, status, execute } = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'input-menu-users-search',
  params: { q: searchTermDebounced },
  transform: (data: Array<{ id: number; name: string }>) => {
    return data?.map((user) => ({
      label: user.name,
      value: String(user.id),
      avatar: { src: `https://i.pravatar.cc/120?img=${user.id}`, loading: 'lazy' as const },
    }));
  },
  immediate: false,
});

function onOpen() {
  if (!users.value?.length) {
    execute();
  }
}
</script>

<template>
  <PInputMenu
    v-model:search-term="searchTerm"
    :items="users"
    :loading="status === 'pending'"
    ignore-filter
    icon="i-lucide-user"
    placeholder="Select user"
    @update:open="onOpen"
  >
    <template #leading="{ modelValue, ui }">
      <PAvatar
        v-if="modelValue"
        v-bind="modelValue.avatar"
        :size="(ui.leadingAvatarSize() as AvatarProps['size'])"
        :class="ui.leadingAvatar()"
      />
    </template>
  </PInputMenu>
</template>
