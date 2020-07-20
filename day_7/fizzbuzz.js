// Create a file named `fizzbuzz.js` and within that file, write a
// program that logs the numbers from 1 to 100 with the following rules:
// * For any number that is a multiple of 3, log 'Fizz'
// * For any number that is a multiple of 5, log 'Buzz'
// * For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
// * For all other numbers, log the number.
//
// The output of you program will look something like this:
// ```
// => 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz
// ```
//
// ### Bonus
// Can you write the program so that it will run for any range of numbers?

for (var i = 1; i < 101; i++) {

if (i % 15 === 0) {
  console.log("FizzBuzz")
}
else if (i % 5 === 0) {
  console.log("Buzz")
}
else if (i % 3 === 0) {
  console.log("Fizz")
}
else {
  console.log([i])
}
}

console.log("*****BONUS ROUND*****");
console.log("*****BONUS ROUND*****");
// BONUS: You could simply change the initiation value 'i' and the continuation condition 'i < x',
// or to get a bit fancier we could try (at the bottom, plug in range of numbers)

function fizzBuzz(start, end) {
    for (let i = start; i <= end; i++) {

      if (i % 15 === 0) {
        console.log("FizzBuzz")
      }
      else if (i % 5 === 0) {
        console.log("Buzz")
      }
      else if (i % 3 === 0) {
        console.log("Fizz")
      }
      else {
        console.log([i])
      }
    }
}

fizzBuzz(33, 333);
