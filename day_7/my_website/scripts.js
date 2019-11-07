//The Following runs verification on the form data and returns a roll number to the alert menu.
function dieRoll() {
  var dieSides = document.getElementById("dieSides").value;
  var dieRolled = 0;
  if (isNaN(dieSides)) {
    alert("Please Enter a number!")
  } else {
    dieRolled = Math.floor(Math.random() * dieSides + 1);
    if (dieRolled == dieSides) {
      alert("Crit Yeah! You Rolled a Natural: " + dieRolled);
      return false;
    } else {
      alert("Rolled: " + dieRolled);
      return false;
    }
  }
}
