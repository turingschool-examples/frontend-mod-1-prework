window.onload= function (){
var nickname = document.querySelector('.nickname');
var nicknameBTN = document.querySelector('.nickname-button');
var dogSelector = document.querySelector('.dogSelector');
var changeEstes = document.querySelector('.changeEstes');
var changePeaches = document.querySelector('.changePeaches');
var changeZeke = document.querySelector('.changeZeke');
var errorMessage = document.querySelector('.error-message');

nicknameBTN.addEventListener('click', updateNickname);

function updateNickname(event) {
  event.preventDefault();
  if (dogSelector.value === "Estes" && nickname.value !== '') {
    changeEstes.innerText = nickname.value;
    document.querySelector('.nickname').value = '';
    errorMessage.innerText = '';
  } else if (dogSelector.value === "Peaches" && nickname.value !== '') {
    changePeaches.innerText = nickname.value;
    document.querySelector('.nickname').value = '';
    errorMessage.innerText = '';
  } else if (dogSelector.value === "Zeke" && nickname.value !== '') {
    changeZeke.innerText = nickname.value;
    document.querySelector('.nickname').value = '';
    errorMessage.innerText = '';
  } else if (nickname.value == '') {
    errorMessage.innerText = 'Please input a nickname';
  } else {
    }
  }
}
