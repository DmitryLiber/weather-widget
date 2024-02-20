<script setup lang="ts">
// import { reactive } from 'vue'
import Section from '@shared/section'
import { CardWeather } from '@entities/cardWeather'
import { useWeatherStore } from '@shared/stores'

const weatherStore = useWeatherStore()
</script>

<template>
  <Section>
    <CardWeather :data="weatherStore.getToday()" />
  </Section>
</template>
