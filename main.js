const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()
// console.log(template)
// console.log(template.content.cloneNode(true))
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
}

start()

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  petsData = await petsPromise.json()

  //   console.log(petsPromise)
  //   console.log(petsData)

  petsData.forEach((pet, index) => {
    const clone = template.content.cloneNode(true)

    clone.querySelector("h3").textContent = pet.name
    clone.querySelector(".pet-description").textContent = pet.description
    clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear)

    if (!pet.photo) pet.photo = "images/fallback.jpg"
    clone.querySelector(".pet-card-photo img").src = pet.photo
    clone.querySelector(".pet-card-photo img").alt = `A ${pet.species} named ${pet.name}`

    // if (!pet.photo) {
    //   clone.querySelector(".pet-card-photo img").src = "/images/fallback.jpg"
    //   clone.querySelector(".pet-card-photo img").alt = `no photo yet for a ${pet.species} named ${pet.name}`
    // } else {
    //   clone.querySelector(".pet-card-photo img").src = pet.photo
    //   clone.querySelector(".pet-card-photo img").alt = `A ${pet.species} named ${pet.name}`
    // }

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

function createAgeText(birthYear) {
  const currentYear = new Date().getFullYear()
  const age = currentYear - birthYear
  if (age > 1) {
    return age + " years old"
  }
  if (age < 1) {
    return "less than a year old"
  }
}

// pet filter button code
const buttons = document.querySelectorAll(".pet-filter button")
buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick)
  // e => {
  // console.log(e.target.classList.value)

  // if (e.target.classList.value == "") {
  //   e.target.classList.add("active")
  //   buttons.forEach(b => {
  //     b.classList.remove("active")
  //   })
  // } else {
  //   e.target.classList.remove("active")
  // }
  //   })
})

function handleButtonClick(e) {
  // remove active class from any and all buttons
  buttons.forEach(el => el.classList.remove("active"))

  // add active class to the button that just got clicked
  e.target.classList.add("active")

  // actually filter the pets
}
