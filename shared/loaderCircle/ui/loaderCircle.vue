<script lang="ts" setup>
interface Props {
  size?: string
}

const { size } = defineProps<Props>()
</script>

<template>
  <span class="loader"></span>
</template>

<style lang="scss">
.loader {
  width: v-bind(size);
  aspect-ratio: 1;
  border: 3px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation $time-10 linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
