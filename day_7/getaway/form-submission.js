// Get hero form data

//Get top search bar data
const locationData = document.getElementById('where')
locationData.addEventListener('input', getLocationData)

function getLocationData() {
  console.log(locationData.value)
}

// Get checkin data
const checkinData = document.getElementById('checkin')

checkinData.addEventListener('input', getCheckinData)

function getCheckinData() {
console.log(checkinData.value)
}

// Get checkout data
const checkOutData = document.getElementById('checkout')

checkOutData.addEventListener('input', getCheckOutData)

function getCheckOutData() {
console.log(checkOutData.value)
}

// Get gear data
const gearData = document.getElementById('gear-search')

gearData.addEventListener('input', getGearData)

function getGearData() {
console.log(gearData.value)
}

// Log form data values when submit is clicked

const heroButton = document.getElementById('hero-form-submit')

// heroButton.addEventListener('click', logHeroFormData)

function logHeroFormData(e) {
  e.preventDefault();
  console.log(localStorage.getItem('locationDataStorage'))
  //console.log(locationData.value, checkinData.value, checkOutData.value, gearData.value)
}

// Push values to local localStorage
