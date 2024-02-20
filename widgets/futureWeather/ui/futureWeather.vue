<script setup lang="ts">
import Section from '@shared/section'
import Typography from '@shared/typography'
import { CardWeatherList } from '@entities/cardWeather'
import { useWeatherStore } from '@shared/stores'

const weatherStore = useWeatherStore()
</script>

<template>
  <Section>
    <Typography tag="h2" mods="title, m">Прогноз на 3 дня</Typography>
    <CardWeatherList :data="weatherStore.getFuture()" />
  </Section>
</template>
