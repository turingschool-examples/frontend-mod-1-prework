var frogs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
var reverse = frogs.reverse();
var frogs2 = ["no more", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var reverse = frogs2.reverse();

var i = 0
var n = 0
while (i < frogs.length && i < frogs2.length) {
  console.log(frogs[i] + " speckled frogs sat on a log")
  console.log("eating some most delicious bugs.");
  console.log("One jumped in the pool where its nice and cool,");
  console.log("then there were " + frogs2[n] + " speckled frogs")
  i++
  n++
}


// I created two arrays for line 1 and line 2
// I used a reverse method for the array instead of numbering them backward, just so that I wouldn't mess up the numbering
// I created two variables for the while loop to make sure line 1 and line 4 loop as many times as the array length
// I created the condition in the while loop - if the frog array and frog2 array return the length of the array, then it is true
// and the following code will run.
// I then plugged in the frog array and string for all four lines.
