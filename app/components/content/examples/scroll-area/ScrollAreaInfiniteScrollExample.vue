<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'

type User = {
  id: number
  firstName: string
  lastName: string
  username: string
  email: string
  image: string
}

type UserResponse = {
  users: User[]
  total: number
  skip: number
  limit: number
}

const skip = ref(0)

const { data, status } = useLazyFetch('https://dummyjson.com/users?limit=10&select=firstName,lastName,username,email,image', {
  key: 'scroll-area-users-infinite-scroll',
  params: { skip },
  transform: (data?: UserResponse) => {
    return data?.users
  },
  server: false
})

const users = ref<User[]>([])

watch(data, () => {
  users.value = [
    ...users.value,
    ...(data.value || [])
  ]
})

const scrollArea = useTemplateRef('scrollArea')

onMounted(() => {
  useInfiniteScroll(scrollArea.value?.$el, () => {
    skip.value += 10
  }, {
    distance: 200,
    canLoadMore: () => {
      return status.value !== 'pending'
    }
  })
})
</script>

<template>
  <PScrollArea
    ref="scrollArea"
    v-slot="{ item }"
    :items="users"
    :virtualize="{
      estimateSize: 88,
      skipMeasurement: true
    }"
    class="h-96 w-full"
  >
    <PPageCard
      orientation="horizontal"
      class="rounded-none"
    >
      <PUser
        :name="`${item.firstName} ${item.lastName}`"
        :description="item.email"
        :avatar="{ src: item.image, alt: item.firstName, loading: 'lazy' as const }"
        size="lg"
      />
    </PPageCard>
  </PScrollArea>

  <PProgress
    v-if="status === 'pending' || status === 'idle'"
    indeterminate
    size="xs"
    class="absolute top-0 inset-x-0 z-1"
    :ui="{ base: 'bg-background' }"
  />
</template>
