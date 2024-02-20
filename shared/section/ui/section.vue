<script lang="ts" setup>
import modsJoin from '@shared/modsJoin'

interface Props {
  tag?: 'section' | 'div'
  mods?: string
}

const { tag = 'section', mods = '' } = defineProps<Props>()
</script>

<template>
  <component
    :is="tag || 'section'"
    :class="['section', modsJoin(mods, 'section')]"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@layer block {
  .section {
    background-color: cl(whte);
    padding: var(--gap-xs);
    border-radius: var(--gap-s);

    @include mq($m) {
      padding: var(--gap-s);
    }

    &:not(:last-child) {
      margin-bottom: var(--gap-s);

      @include mq($m) {
        margin-bottom: var(--gap-m);
      }
    }
  }
}

@layer mod {
  .section {
  }
}
</style>
