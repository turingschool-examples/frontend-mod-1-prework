var nameInput = document.querySelector(".name-input");
var emailInput = document.querySelector(".email-input");
var submitBtn = document.querySelector(".submit-btn");
var formContainer = document.querySelector(".form");

formContainer.addEventListener("input", enableSubmitBtn);
submitBtn.addEventListener("click", clearInput)

function enableSubmitBtn() {
  if (nameInput.value !== "" && emailInput.value !== "") {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function clearInput() {
  nameInput.value = "";
  emailInput.value = "";
}
