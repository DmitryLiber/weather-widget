<script setup lang="ts">
import Container from '@shared/container'
import Typography from '@shared/typography'
import CityWeather from '@features/cityWeather'
import CurrentWeather from '@widgets/currentWeather'
import FutureWeather from '@widgets/futureWeather'
import { useWeatherStore } from '@shared/stores'

const weatherStore = useWeatherStore()
</script>

<template>
  <Container tag="main" mods="gap-top, gap-bottom">
    <Typography tag="h1" mods="title,xxl">Виджет погоды</Typography>
    <CityWeather />
    <CurrentWeather v-if="Object.keys(weatherStore.city).length !== 0" />
    <FutureWeather v-if="Object.keys(weatherStore.city).length !== 0" />
  </Container>
</template>
