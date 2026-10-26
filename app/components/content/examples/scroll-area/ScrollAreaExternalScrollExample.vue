<script setup lang="ts">
const props = withDefaults(defineProps<{
  orientation?: 'vertical' | 'horizontal';
}>(), {
  orientation: 'vertical',
});

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

const { data: users } = useLazyFetch('https://dummyjson.com/users?limit=100&select=firstName,lastName,email,image', {
  key: 'scroll-area-external-scroll-users',
  transform: (data?: { users: Array<User> }) => data?.users ?? [],
  default: () => [] as Array<User>,
  server: false,
});

const isHorizontal = computed(() => props.orientation === 'horizontal');

// The container owns the scroll; the list virtualizes against it so the header and cards share one scrollbar.
const container = useTemplateRef('container');
const title = useTemplateRef('title');
const toolbar = useTemplateRef('toolbar');
const scrollArea = useTemplateRef('scrollArea');

// Item size along the scroll axis: card width when horizontal, row height when vertical.
const itemSize = computed(() => isHorizontal.value ? 256 : 88);
const getScrollElement = () => container.value;

// `scrollMargin` is the title's offset along the scroll axis: its width when it sits left of the cards, its height when it sits above them.
const { width: titleWidth, height: titleHeight } = useElementSize(title, undefined, { box: 'border-box' });
const { height: toolbarHeight } = useElementSize(toolbar, undefined, { box: 'border-box' });
const scrollMargin = computed(() => isHorizontal.value ? titleWidth.value : toolbarHeight.value + titleHeight.value);

// Find: jump through the items whose name matches the query (like a find toolbar).
const query = ref('');
const matches = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) {
    return [];
  }
  return users.value.reduce<Array<number>>((acc, user, index) => {
    if (`${user.firstName} ${user.lastName}`.toLowerCase().includes(q)) {
      acc.push(index);
    }
    return acc;
  }, []);
});
const cursor = ref(0);
const currentMatch = computed(() => matches.value[cursor.value] ?? -1);

function scrollToMatch() {
  if (currentMatch.value < 0) {
    return;
  }
  scrollArea.value?.virtualizer?.scrollToIndex(currentMatch.value, { align: 'center', behavior: 'smooth' });
}

function step(delta: number) {
  if (!matches.value.length) {
    return;
  }
  cursor.value = (cursor.value + delta + matches.value.length) % matches.value.length;
  scrollToMatch();
}

function scrollToStart() {
  container.value?.scrollTo(isHorizontal.value ? { left: 0, behavior: 'smooth' } : { top: 0, behavior: 'smooth' });
}

// Re-runs on a new query and when `users` resolves, so the first match centers as soon as results arrive.
watch(matches, () => {
  cursor.value = 0;
  scrollToMatch();
});
</script>

<template>
  <div
    ref="container"
    :class="isHorizontal ? 'w-full overflow-x-auto' : 'w-full h-128 overflow-y-auto'"
  >
    <!-- Vertical: the header sits above the toolbar and scrolls away as you scroll down. -->
    <div
      v-if="!isHorizontal"
      ref="title"
      class="p-6 bg-background-elevated/50 flex gap-4 items-end justify-between"
    >
      <div>
        <h2 class="text-2xl color-text-highlighted font-bold">
          Members
        </h2>
        <p class="color-text-muted">
          This header scrolls away with the cards, sharing one scrollbar.
        </p>
      </div>
      <PBadge
        color="neutral"
        variant="subtle"
        :label="`${users.length} members`"
      />
    </div>

    <div
      ref="toolbar"
      class="px-6 py-3 border-y border-border bg-background-elevated/50 flex items-center z-10 backdrop-blur"
      :class="isHorizontal ? 'sticky left-0' : 'sticky top-0'"
    >
      <PFieldGroup>
        <PInput
          v-model="query"
          placeholder="Find a member..."
          icon="i-lucide-search"
          aria-describedby="scroll-area-find-count"
          class="w-64"
          :ui="{ trailing: 'pointer-events-none' }"
        >
          <template #trailing>
            <span
              id="scroll-area-find-count"
              class="text-xs color-text-muted tabular-nums"
              aria-live="polite"
              role="status"
            >
              {{ matches.length ? cursor + 1 : 0 }}/{{ matches.length }}
            </span>
          </template>
        </PInput>
        <PButton
          :icon="isHorizontal ? 'i-lucide-chevron-left' : 'i-lucide-chevron-up'"
          color="neutral"
          variant="outline"
          aria-label="Previous match"
          :disabled="!matches.length"
          @click="step(-1)"
        />
        <PButton
          :icon="isHorizontal ? 'i-lucide-chevron-right' : 'i-lucide-chevron-down'"
          color="neutral"
          variant="outline"
          aria-label="Next match"
          :disabled="!matches.length"
          @click="step(1)"
        />
      </PFieldGroup>

      <PButton
        :icon="isHorizontal ? 'i-lucide-arrow-left-to-line' : 'i-lucide-arrow-up-to-line'"
        color="neutral"
        variant="outline"
        class="ms-auto"
        :label="isHorizontal ? 'Start' : 'Top'"
        @click="scrollToStart"
      />
    </div>

    <!-- Horizontal: the header sits left of the cards (in the row) so it scrolls away with them. -->
    <div :class="isHorizontal && 'flex'">
      <div
        v-if="isHorizontal"
        ref="title"
        class="p-6 border-r border-border bg-background-elevated/50 flex shrink-0 flex-col gap-4 w-72 justify-center"
      >
        <div>
          <h2 class="text-2xl color-text-highlighted font-bold">
            Members
          </h2>
          <p class="color-text-muted">
            This header scrolls away with the cards, sharing one scrollbar.
          </p>
        </div>
        <PBadge
          color="neutral"
          variant="subtle"
          class="self-start"
          :label="`${users.length} members`"
        />
      </div>

      <PScrollArea
        ref="scrollArea"
        v-slot="{ item, index }"
        :orientation="orientation"
        :items="users"
        :class="isHorizontal && 'h-48 shrink-0'"
        :virtualize="{ scrollMargin, getScrollElement, estimateSize: itemSize, skipMeasurement: isHorizontal }"
      >
        <PPageCard
          class="rounded-none h-full"
          :class="[isHorizontal && 'w-64', index === currentMatch && 'bg-primary/10']"
        >
          <div
            class="flex gap-3 h-full min-w-0"
            :class="isHorizontal ? 'flex-col items-center justify-center text-center' : 'items-center'"
          >
            <PAvatar
              :src="item.image"
              :alt="item.firstName"
              :size="isHorizontal ? '2xl' : 'lg'"
              loading="lazy"
            />
            <div class="min-w-0">
              <p class="color-text-highlighted font-medium truncate">
                {{ item.firstName }} {{ item.lastName }}
              </p>
              <p class="text-sm color-text-muted truncate">
                {{ item.email }}
              </p>
            </div>
          </div>
        </PPageCard>
      </PScrollArea>
    </div>
  </div>
</template>
