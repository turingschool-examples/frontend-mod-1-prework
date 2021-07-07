
// Add listeners for results page buttons
const dateButton = document.getElementById('date-button');
const locationButton = document.getElementById('location-button');
const gearButton = document.getElementById('gear-button');
const pricingButton = document.getElementById('pricing-button');

dateButton.addEventListener('click', openDateMenu);
locationButton.addEventListener('click', openLocationMenu);
gearButton.addEventListener('click', openGearMenu);
pricingButton.addEventListener('click', openPricingMenu)

function openDateMenu() {
  console.log("date")
}

function openLocationMenu() {
  console.log("location")
}

function openGearMenu() {
  console.log("gear")
}

function openPricingMenu() {
  console.log("pricing")
}
