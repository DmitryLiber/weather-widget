<script lang="ts" setup>
import Section from '@shared/section'
import Field from '@shared/field'
import Button from '@shared/button'
import { useWeatherStore } from '@shared/stores'
import Typography from '@shared/typography'

const weatherStore = useWeatherStore()
const isLoading = ref(false)
const futureCity = ref('')
const errorMessage = ref('')

const onInput = (e: string) => {
  if (typeof e !== 'string') return
  futureCity.value = e
}

const onSubmit = async () => {
  errorMessage.value = ''
  isLoading.value = true

  const getWeatherCity = async (city: any) => {
    const weatherCity = await $fetch(
      `/api/getWeather/lat=${city.lat}&lon=${city.lon}`
    ).then((res) => res)

    if (weatherCity) {
      isLoading.value = false
      weatherStore.setCity(weatherCity)
    }
  }

  const detectedCity = await $fetch(`/api/cityInfo/${futureCity.value}`).then(
    (res) => res
  )

  if (detectedCity.length > 0) {
    getWeatherCity(detectedCity[0])
  } else {
    errorMessage.value = 'Город не найден или указан неправильно'
    weatherStore.$reset()
    isLoading.value = false
  }

  // weatherStore.setCity(detectedCity)
}
</script>

<template>
  <Section tag="form" @submit.prevent @submit="() => onSubmit()">
    <div class="city-weather">
      <Field
        required
        :value="futureCity"
        placeholder="Укажите город"
        @input="(e: any) => onInput(e)"
      />
      <Button :loading="isLoading">Узнать погоду</Button>
    </div>
  </Section>
  <Typography v-if="errorMessage !== ''" tag="p">{{ errorMessage }}</Typography>
</template>

<style lang="scss" scoped>
@layer block {
  .city-weather {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--gap-xs);

    .btn {
      min-width: 192px;
    }
  }
}
</style>
