import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ICity {
  [key: string]: any
}

export const useWeatherStore = defineStore('weatherStore', () => {
  let city = ref([]) as ICity

  function setCity(newCity: ICity) {
    city.value = newCity
  }

  function getToday() {
    if (Object.keys(city.value).length === 0) {
      return {}
    }

    const current = city.value[0] as any

    return {
      date: 'Сегодня',
      desc: current.weather[0].description,
      temp: Math.round(current.main.temp),
      icon: current.weather[0].icon,
      units: [
        {
          type: 'wind',
          title: 'Скорость ветра',
          value: current.wind.speed + ' м/с, Ю',
        },
        {
          type: 'humidity',
          title: 'Влажность',
          value: current.main.humidity + '%',
        },
      ],
    }
  }

  function getFuture() {
    const UnixToDate = (unix: number) => {
      const d = new Date(+unix * 1000)

      const mm = ('0' + (d.getMonth() + 1)).slice(-2)
      const dd = ('0' + d.getDate()).slice(-2)

      return [dd, mm].join('.')
    }

    if (Object.keys(city.value).length === 0) {
      return {}
    }

    const today = new Date().toLocaleDateString('ru-RU')
    const result = city.value[1]['list']
      .map((item: any) => {
        return {
          date: UnixToDate(item['dt']),
          desc: item.weather[0].description,
          temp: Math.round(item.main.temp),
          icon: item.weather[0].icon,
          units: [
            {
              type: 'wind',
              title: 'Скорость ветра',
              value: item.wind.speed + ' м/с, Ю',
            },
            {
              type: 'humidity',
              title: 'Влажность',
              value: item.main.humidity + '%',
            },
          ],
        }
      })
      .filter(
        (item: any, index: number, self: any) =>
          item.date !== today &&
          self.findIndex((t: any) => t.date === item.date) === index
      )
      .slice(1, 4)

    return result
  }

  function $reset() {
    city.value = []
  }

  return {
    city,
    setCity,
    getToday,
    getFuture,
    $reset,
  }
})
