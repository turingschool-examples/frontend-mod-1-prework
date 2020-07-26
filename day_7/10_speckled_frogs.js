//Main Task - 10 Speckled Frogs
var num1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var num2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, "no more"]

for (var i = 0; i < 10; i++) {
  if (num1[i] === 1) {
    console.log("1 speckled frog sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were " + num2[i] + " speckled frogs.");
  } else if (num2[i] === 1) {
    console.log(num1[i] +" speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where it's nice and cool, then there was 1 speckled frog.");
  } else {
  console.log(num1[i] + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were " + num2[i] + " speckled frogs.");
  }
};

//Extension 1

// var num1 = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"];
// var num2 = ["nine", "eight", "seven", "six", "five", "four", "three", "two", "one", "no more"]
//
// for (var i = 0; i < 10; i++) {
//   if (num1[i] === "One") {
//     console.log("One speckled frog sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were " + num2[i] + " speckled frogs.");
//   } else if (num2[i] === "one") {
//     console.log(num1[i] +" speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where it's nice and cool, then there was one speckled frog.");
//   } else {
//   console.log(num1[i] + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were " + num2[i] + " speckled frogs.");
//   }
// };

//Extension 2

// function countingFrogs(startingNumber) {
//   for (var i = startingNumber; i > 0; i--) {
//     if (i === 1) {
//       console.log("1 speckled frog sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were no more speckled frogs.");
//     } else if (i === 2) {
//       console.log(i + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where it's nice and cool, then there was 1 speckled frog.");
//     } else {
//      console.log(i + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were " + (i - 1) + " speckled frogs.");
//      }
//    }
// };

//countingFrogs(20);
//insert any number here for argument
