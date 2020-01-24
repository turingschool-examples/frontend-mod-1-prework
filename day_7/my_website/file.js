window.onload= function (){
var nickname = document.querySelector('.nickname');
var nicknameBTN = document.querySelector('.nickname-button');
var dogSelector = document.querySelector('.dogSelector');
var changeEstes = document.querySelector('.changeEstes');
var changePeaches = document.querySelector('.changePeaches');
var changeZeke = document.querySelector('.changeZeke');
var errorMessage = document.querySelector('.error-message');

nicknameBTN.addEventListener('click', updateNickname);

function clearNickname() {
  document.querySelector('.nickname').value = '';
}

function clearErrorMessage() {
  errorMessage.innerText = '';
}

function updateNickname(event) {
  event.preventDefault();
  if (dogSelector.value === "Estes" && nickname.value !== '') {
    changeEstes.innerText = nickname.value;
    clearNickname();
    clearErrorMessage();
  } else if (dogSelector.value === "Peaches" && nickname.value !== '') {
    changePeaches.innerText = nickname.value;
    clearNickname();
    clearErrorMessage();
  } else if (dogSelector.value === "Zeke" && nickname.value !== '') {
    changeZeke.innerText = nickname.value;
    clearNickname();
    clearErrorMessage();
  } else if (nickname.value == '') {
    errorMessage.innerText = 'Please input a nickname';
  } else {
    return;
    }
  }

  var toDogForm = document.getElementById('to-dog-form');
  var toResources = document.getElementById('to-resources');
  var toTop = document.getElementById('back-to-top');

  toDogForm.addEventListener('click', jump(toDogForm));
  toResources.addEventListener('click', jump(toResources));
  toTop.addEventListener('click', jump(toTop));

  function jump (className) {
    var top = document.querySelector(className).offsetTop;
    return window.scrollTo(0, top);
  }
}
