<script lang="ts" setup>
import { uv } from 'unocss-variants';

const props = defineProps<{
  styles?: {
    base?: string;
    avatar?: string;
    wrapper?: string;
    description?: string;
    infoWrapper?: string;
    name?: string;
    role?: string;
  };
}>();

const card = uv({
  slots: {
    base: 'md:flex bg-background-muted rounded-xl p-8 md:p-0',
    avatar: 'w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto drop-shadow-lg',
    wrapper: 'flex-1 pt-6 md:p-8 text-center md:text-left space-y-4',
    description: 'text-md font-medium',
    infoWrapper: 'font-medium',
    name: 'text-sm color-sky-500 dark:color-sky-400',
    role: 'text-sm color-slate-700 dark:color-slate-500',
  },
});

const { base, avatar, wrapper, description, infoWrapper, name, role } = card();
</script>

<template>
  <figure :class="base({ class: props.styles?.base })">
    <img
      src="/images/intro-avatar.png"
      alt=""
      :class="avatar({ class: props.styles?.avatar })"
      height="512"
      width="385"
    >

    <div :class="wrapper({ class: props.styles?.wrapper })">
      <blockquote>
        <p :class="description()">
          UnoCSS Variants lets you reuse recipes instead of copying class strings, and keeps every variant typed.
        </p>
      </blockquote>

      <div :class="infoWrapper({ class: props.styles?.infoWrapper })">
        <div :class="name({ class: props.styles?.name })">
          Ketut Gabler
        </div>
        <div :class="role({ class: props.styles?.role })">
          Full-stack developer
        </div>
      </div>
    </div>
  </figure>
</template>
