

// Get modal element

var modal = document.getElementById('simpleModal');

//Get close button

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for closing click

closeBtn.addEventListener('click', closeModal);

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
}
