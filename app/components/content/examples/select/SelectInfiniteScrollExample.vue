<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core';

interface User {
  firstName: string;
}

interface UserResponse {
  users: Array<User>;
  total: number;
  skip: number;
  limit: number;
}

const skip = ref(0);

const { data, status, execute } = await useLazyFetch('https://dummyjson.com/users?limit=10&select=firstName', {
  key: 'select-users-infinite-scroll',
  query: { skip },
  transform: (data?: UserResponse) => {
    return data?.users.map((user) => user.firstName);
  },
  immediate: false,
});

const users = ref<Array<string>>([]);

watch(data, () => {
  users.value = [
    ...users.value,
    ...(data.value || []),
  ];
});

function onOpen() {
  if (!users.value?.length) {
    execute();
  }
}

const select = useTemplateRef('select');

onMounted(() => {
  useInfiniteScroll(() => select.value?.viewportRef, () => {
    skip.value += 10;
  }, {
    canLoadMore: () => {
      return status.value !== 'pending';
    },
  });
});
</script>

<template>
  <PSelect
    ref="select"
    placeholder="Select user"
    :items="users"
    @update:open="onOpen"
  />
</template>
