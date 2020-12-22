// console.log("3 speckled frogs sat on a log\n"
// +"eating some most delicious bugs.\n"
// +"One jumped in the pool where its nice and cool,\n"
// +"then there were 2 speckled frogs.\n"
// +"\n"
// +"2 speckled frogs sat on a log\n"
// +"eating some most delicious bugs.\n"
// +"One jumped in the pool where its nice and cool,\n"
// +"then there were 1 speckled frogs.\n"
// +"\n"
// +"1 speckled frog sat on a log\n"
// +"eating some most delicious bugs.\n"
// +"One jumped in the pool where its nice and cool,\n"
// +"then there were no more speckled frogs!");


// Range can be only from 1 to 20
var startRange = prompt("Enter a num for starting range: ");
var endRange = prompt("Enter a num for ending range:");
var words = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];

for (i=(endRange-1); i>=(startRange-1); i--){
  if (i === 0) {
    console.log(words[i+1] + " speckled frogs sat on a log\n"
    +"eating some most delicious bugs.\n"
    +"One jumped in the pool where its nice and cool,\n"
    +"then there were no more speckled frogs.\n"
    +"\n");
  }
  else {
    console.log(words[i+1] + " speckled frogs sat on a log\n"
    +"eating some most delicious bugs.\n"
    +"One jumped in the pool where its nice and cool,\n"
    +"then there were " + words[i].toLowerCase() + " speckled frogs.\n"
    +"\n");
  }

}
