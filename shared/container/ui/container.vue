<script lang="ts" setup>
import modsJoin from '@shared/modsJoin'

interface Props {
  tag?: 'section' | 'div' | 'main'
  mods?: string
}

const { tag = 'section', mods = '' } = defineProps<Props>()
</script>

<template>
  <component
    :is="tag || 'section'"
    :class="['container', modsJoin(mods, 'container')]"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@layer block {
  .container {
    --pad: var(--gap-s);
    --pad-neg: var(--gap-s-neg);

    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 var(--pad);

    @include mq($m) {
      --pad: var(--gap-m);
      --pad-neg: var(--gap-m-neg);
    }

    @include mq($l) {
      --pad: var(--gap-l);
      --pad-neg: var(--gap-l-neg);
    }

    @include mq($xl) {
      --pad: var(--gap-xl);
      --pad-neg: var(--gap-xl-neg);
    }
  }
}

@layer mod {
  .container {
    &--gap-top {
      padding-top: var(--gap-m);

      @include mq($m) {
        padding-top: var(--gap-l);
      }
    }
    &--gap-bottom {
      padding-bottom: var(--gap-m);

      @include mq($m) {
        padding-bottom: var(--gap-l);
      }
    }
  }
}
</style>
