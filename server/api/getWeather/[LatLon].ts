export default defineEventHandler(async (event) => {
  const LatLon = getRouterParam(event, 'LatLon')

  const currentWeatherUrl = `${process.env.API_URL}/data/2.5/weather?lang=ru&units=metric&${LatLon}&appid=${process.env.API_KEY}`
  const futureWeatherUrl = `${process.env.API_URL}/data/2.5/forecast?lang=ru&cnt=32&units=metric&${LatLon}&appid=${process.env.API_KEY}`

  const currentWeather = (await $fetch(currentWeatherUrl)) as any
  const futureWeather = (await $fetch(futureWeatherUrl)) as any

  const response = await Promise.all([currentWeather, futureWeather])

  if (response) return response
})
