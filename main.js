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
  console.log("Hello from JS!")
}

start()

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  petsData = await petsPromise.json()

  //   console.log(petsPromise)
  console.log(petsData)

  petsData.forEach(pet => {
    const card = `<div class="pet-card">
            <div class="pet-card-text">
              <h3>${pet.name}</h3>
              <p class="pet-description">${pet.description}</p>
              <p class="pet-age">${pet.birthyear}</p>
            </div>
            <div class="pet-card-photo">
              <img src="images/barksalot.jpg" alt="A white fluffy dog named Barskalot" />
            </div>
          </div>`
    console.log(card)
    document.body.append(card)
  })
}

petsArea()
