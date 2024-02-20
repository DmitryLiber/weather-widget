export default defineEventHandler(async (event) => {
  const city = getRouterParam(event, 'city')
  const url = `${process.env.API_URL}/geo/1.0/direct?q=${city}&appid=${process.env.API_KEY}`

  try {
    const response = (await $fetch(url)) as any

    if (!response[0]['local_names']['ru']) {
      return []
    }

    return response
  } catch (error) {
    return []
  }
})
