async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/SLC/101,175/forecast")
  //   const weatherData = await weatherPromise
  // Brad says this is plain text that we're parsing with json() method
  const weatherData = await weatherPromise.json()
  const ourTemperature = weatherData.properties.periods[0].temperature

  console.log(ourTemperature)

  console.log(weatherData.properties.periods[0])
  console.log(weatherData.properties.periods[0].detailedForecast)
  console.log(weatherData.properties.periods[0].shortForecast)
  console.log(weatherData.properties.periods[0].windDirection)
  console.log(weatherData.properties.periods[0].windSpeed)
  console.log(weatherData.properties.periods[0].temperature)
}

start()
