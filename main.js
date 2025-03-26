const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()

async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")

  // Brad says this is plain text that we're parsing with json() method
  const weatherData = await weatherPromise.json()
  const ourTemperature = weatherData.properties.periods[0].temperature

  document.querySelector("#tempOutput").textContent = ourTemperature
}

start()

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  petsData = await petsPromise.json()

  petsData.forEach((pet, index) => {
    const clone = template.content.cloneNode(true)

    clone.querySelector(".pet-card").dataset.species = pet.species

    clone.querySelector("h3").textContent = pet.name
    clone.querySelector(".pet-description").textContent = pet.description
    clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear)

    if (!pet.photo) pet.photo = "images/fallback.jpg"
    clone.querySelector(".pet-card-photo img").src = pet.photo
    clone.querySelector(".pet-card-photo img").alt = `A ${pet.species} named ${pet.name}`

    wrapper.appendChild(clone)
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
buttons.forEach(btn => btn.addEventListener("click", handleButtonClick))

function handleButtonClick(e) {
  // remove active class from any and all buttons
  buttons.forEach(el => el.classList.remove("active"))

  // add active class to the button that just got clicked
  e.target.classList.add("active")

  // actually filter the pets
  const currentFilter = e.target.dataset.filter
  console.log(e.target.dataset)

  document.querySelectorAll(".pet-card").forEach(el => {
    // console.log(currentFilter)
    // console.log(el.dataset.species)
    if (currentFilter == el.dataset.species || currentFilter == "all") {
      el.style.display = "grid"
    } else {
      el.style.display = "none"
    }
  })
}
