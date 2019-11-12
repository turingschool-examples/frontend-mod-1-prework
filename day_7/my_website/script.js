(function() {
  'use strict';
let button = document.getElementById("creation-button");
let heroName = document.getElementById("hero-name");
let output = document.getElementById("output-div");
let select = document.getElementById("hero_type");
  function handleClick() {
    event.preventDefault();
    output.innerHTML = `${heroName.value}: ${select.value}`;
  }
  button.addEventListener("click", handleClick);

}());
