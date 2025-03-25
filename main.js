const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()
console.log(template)
console.log(template.content.cloneNode(true))
// console.log(wrapper)

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

  petsData.forEach((pet, index) => {
    const clone = template.content.cloneNode(true)

    clone.querySelector("h3").textContent = pet.name

    wrapper.appendChild(clone)

    // const petsArea = document.querySelector(".list-of-pets")
    // const card = `<div class="pet-card">
    //         <div class="pet-card-text">
    //           <h3>${pet.name}</h3>
    //           <p class="pet-description">${pet.description}</p>
    //           <p class="pet-age">${pet.birthYear}</p>
    //         </div>
    //         <div class="pet-card-photo">
    //           <img src="images/barksalot.jpg" alt="${pet.description}" />
    //         </div>
    //       </div>`
    // petsArea.innerHTML += card
  })

  const petsArea = document.querySelector(".list-of-pets")
  petsArea.appendChild(wrapper)
}

petsArea()
