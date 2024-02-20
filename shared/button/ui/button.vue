<script lang="ts" setup>
import modsJoin from '@shared/modsJoin'
import LoaderCircle from '@shared/loaderCircle'

interface Props {
  href?: string
  mods?: string
  loading?: boolean
}

const { href, mods = '', loading = false } = defineProps<Props>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="['btn', modsJoin(mods, 'btn'), { loading }]"
  >
    <slot v-if="!loading" />
    <LoaderCircle size="18px" v-else />
  </component>
</template>

<style lang="scss" scoped>
@layer block {
  .btn {
    --bg: #{cl(primary)};
    background-color: var(--bg);
    border-radius: 10px;
    padding: 11px 30px;
    color: #fff;
    line-height: 1;
    transition: opacity $time;

    &:hover {
      @include mq-hover() {
        opacity: 0.8;
      }
    }
  }
}

@layer state {
  .btn {
    &.loading {
      cursor: default;
      pointer-events: none;
      --bg: #{cl(bg-secondary)};
    }
  }
}
</style>
