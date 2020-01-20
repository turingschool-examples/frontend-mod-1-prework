window.onload= function (){
var nickname = document.querySelector('.nickname');
var nicknameBTN = document.querySelector('.nickname-button');
var dogSelector = document.querySelector('.dogSelector');
var changeEstes = document.querySelector('.changeEstes');
var changePeaches = document.querySelector('.changePeaches');
var changeZeke = document.querySelector('.changeZeke');

nicknameBTN.addEventListener('click', updateNickname);

function updateNickname() {
  if (dogSelector.value === "Estes" && document.querySelector('.nickname').value !== '') {
    changeEstes.innerText = nickname.value;
  } else if (dogSelector.value === "Peaches" && document.querySelector('.nickname').value !== '') {
    changePeaches.innerText = nickname.value;
  } else if (dogSelector.value === "Zeke" && document.querySelector('.nickname').value !== '') {
    changeZeke.innerText = nickname.value;
  } else {
    console.log('error');
  }
    document.querySelector('.nickname').value = '';
  }
}
