<script lang="ts" setup>
import modsJoin from '@shared/modsJoin'

interface Props {
  mods?: string
  required?: boolean
  placeholder?: string
  value?: string
  type?: string
}

const {
  mods = '',
  required = false,
  type = 'text',
  value = '',
} = defineProps<Props>()
</script>

<template>
  <input
    :type="type"
    :class="['field', modsJoin(mods, 'field')]"
    :required="required"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', ($event.target as HTMLInputElement).value as string)"
  />
</template>

<style lang="scss" scoped>
@layer base {
  .field {
    @include font(16px, 1, 400);

    color: cl(text);
    border-radius: var(--radius-xs);
    padding: var(--gap-xs);
    border: 1px solid cl(bg-secondary);
    outline: none;
    transition: border-color $time-2;

    &::placeholder {
      color: cl(text);
    }

    &:focus {
      border: 1px solid cl(blck);
    }
  }
}
</style>
