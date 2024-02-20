<script lang="ts" setup>
import modsJoin from '@shared/modsJoin'

interface Props {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label'
  mods?: string
}

const { tag, mods = '' } = defineProps<Props>()
</script>

<template>
  <component :is="tag" :class="['typography', modsJoin(mods, 'typography')]">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@layer block {
  .typography {
    @include font(18px, 1, 400);

    @each $weight in (300, 400, 500, 600, 700) {
      &--#{$weight} {
        font-weight: $weight;
      }
    }
  }
}

@layer mod {
  .typography {
    &--title {
      @include font(24px, 1, 800);
    }

    &--xs {
      font-size: 14px;
    }

    &--s {
      font-size: 16px;
    }

    &--m {
      font-size: 18px;
    }

    &--l {
      font-size: 20px;
    }

    &--xl {
      font-size: 24px;
    }

    &--xxl {
      font-size: 32px;
    }
  }
}
</style>
