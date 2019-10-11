/*
// Get modal element

var modal = document.getElementById('simpleModal');

//Get close button

var closeButton = document.getElementsByClassName('closeButton')[0];

//Listen for closing click

closeButton.addEventListener('click', closeModal);

//Listen for outside click

window.addEventListener('click', clickOutside);

//Set timeout for modal to display

setTimeout(function() {
    modal.style.display = 'block';
}, 2000);

//Function to close modal

function closeModal(){
  modal.style.display = 'none';
}

//Function to close modal if outside click

function clickOutside(event){
  if(event.target == modal){
  modal.style.display = 'none';
  }
} */

/*

// Log email input

const modalEmailSubmission = document.getElementById('email-input')

const emailForm = document.getElementById('email-modal-form')

emailForm.addEventListener('submit', logEmailInput)

function logEmailInput(e) {
  e.preventDefault();
  console.log(modalEmailSubmission.value);
  modal.style.display = 'none';

}

// Hero form prevent Submit

const heroSubmitButton = document.getElementById('hero-form-submit')

heroSubmitButton.addEventListener('click', preventSubmit)

function preventSubmit (e) {
//  console.log("submitted")
  e.preventDefault();
}

// Autocomplete hero Search

// Get json file
const xhr = new XMLHttpRequest();
xhr.open('GET', "states-capitals.json", true);
xhr.send();

// Match json file with field input
xhr.onload = function() {
  obj = JSON.parse(xhr.responseText);
  let matches = obj.filter(state => {
  const regex = new RegExp(`^${search.value}`, 'gi');
  return state.name.match(regex) || state.capital.match(regex);
  })

// Don't display states on empty input


  if(search.value.length < 1){
  matches.length = 0
  }
    outputHtml(matches);
}


// Output results

const placesOutput = document.getElementById('places-output')

const outputHtml = matches => {
  if(matches.length > 0) {
    const html = matches.map(match => `
      <option value="${match.name} (${match.abbr})">
      `).join('')
        //console.log(html)
        placesOutput.innerHTML = html;
        console.log(matches)
  }
}


// Add listener for search input
const search = document.getElementById('where')

search.addEventListener('input', xhr.onload)

*/
