//Speckled Frogs//

var line1 = " speckled frogs sat on a log"
var line2 = "\neating some most delicious bugs."
var line3 = "\nOne jumped in the pool where its nice and cool,"

function passFrogs(start) {
  for (var i = start; i >= 1; i--) {
    if (i > 2) {
      console.log(i + line1 + line2 + line3 + " \nthen there were" + " " + (i - 1) + " speckled frogs.")
    } else if (i === 1){
      console.log(i + " speckled frog sat on a log" + line2 + line3 + " \nthen there were no speckled frogs.")
    } else if (i === 2){
      console.log(i + line1 + line2 + line3 + " \nthen there was one speckled frog.");
    }
  }
}
passFrogs(10);
