<script lang="ts" setup>
import CardWeather from './cardWeather.vue'

interface Props {
  data: [
    {
      date: string
      desc: string
      temp: number
      icon: string
      units: [
        {
          type: string
          title: string
          value: string
        }
      ]
    }
  ]
}

const { data } = defineProps<Props>()
</script>

<template>
  <div class="card-weather-list">
    <CardWeather v-for="(item, index) in data" :key="index" :data="item" />
  </div>
</template>

<style lang="scss" scoped>
@layer block {
  .card-weather-list {
    display: grid;
    gap: var(--gap-s);
    grid-template-columns: 1fr;

    @include mq($m) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
