async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")

  // Brad says this is plain text that we're parsing with json() method
  const weatherData = await weatherPromise.json()
  const ourTemperature = weatherData.properties.periods[0].temperature

  document.querySelector("#tempOutput").textContent = ourTemperature

  //   console.log(weatherData.properties.periods[0])
  //   console.log(weatherData.properties.periods[0].detailedForecast)
  //   console.log(weatherData.properties.periods[0].shortForecast)
  //   console.log(weatherData.properties.periods[0].windDirection)
  //   console.log(weatherData.properties.periods[0].windSpeed)
  //   console.log(weatherData.properties.periods[0].temperature)
}

start()
