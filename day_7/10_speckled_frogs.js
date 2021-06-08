//10 speckled frogs need a for loop to iterate through 10 speckled frogs
//number of frogs (index) needs to change for each iteration
//break entire paragraph into pieces in one single for loop??? maybe...
//how to change parts of the last two paragraphs without modifying the first 8 iterations


var numberOfFrogs = 10

var numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

for (var i = numberOfFrogs; i > 0; i--) {
    if (i >= 3) console.log(i + ` speckled frogs sat on a log
    eating some most delicious bugs.
    One jumped in the pool where its nice and cool,
    then there were ` + (i - 1) + ` speckled frogs.`);
    if (i == 2) {
    console.log(i + ` speckled frogs sat on a log
    eating some most delicious bugs.
    One jumped in the pool where its nice and cool,
    then there was ` + (i - 1) + ` speckled frog.`);
  } if (i == 1) {
    console.log(i + ` speckled frog sat on a log
    eating some most delicious bugs.
    One jumped in the pool where its nice and cool,
    then there were no more speckled frogs!`)
  }
}

/*CODE ABOVE WORKS FOR THE REQUIRED TASK AS WELL AS EXTENSION 2. THE VARIABLE CAN CHANGE
TO ANY NUMBER AND THE ABOVE PROGRAM WILL RUN*/

//CODE HERE FOR EXTENSION 1 REPLACING NUMBERS WITH WORDS FOR NUMBERS

for (var i = numberOfFrogs; i > 0; i--) {
    if (i >= 3) console.log(numWords[i] + ` speckled frogs sat on a log
    eating some most delicious bugs.
    One jumped in the pool where its nice and cool,
    then there were ` + (i - 1) + ` speckled frogs.`);
    if (i == 2) {
    console.log(numWords[i] + ` speckled frogs sat on a log
    eating some most delicious bugs.
    One jumped in the pool where its nice and cool,
    then there was ` + (i - 1) + ` speckled frog.`);
  } if (i == 1) {
    console.log(numWords[i] + ` speckled frog sat on a log
    eating some most delicious bugs.
    One jumped in the pool where its nice and cool,
    then there were no more speckled frogs!`)
  }
}
