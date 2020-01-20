window.onload= function (){
var nickname = document.querySelector('.nickname');
var nicknameBTN = document.querySelector('.nickname-button');
var dogSelector = document.querySelector('.dogSelector');
var changeEstes = document.querySelector('.changeEstes');
var changePeaches = document.querySelector('.changePeaches');
var changeZeke = document.querySelector('.changeZeke');
document.nickname.required = true;


nicknameBTN.addEventListener('click', updateNickname);

function updateNickname() {
  if (dogSelector.value === "Estes") {
    changeEstes.innerText = nickname.value;
  } else if (dogSelector.value === "Peaches") {
    changePeaches.innerText = nickname.value;
  } else if (dogSelector.value === "Zeke") {
    changeZeke.innerText = nickname.value;
  } else {
    console.log('Invalid Dog Selection');
  }
  }
}
