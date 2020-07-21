// write a program that logs the numbers from 1 to 100 with the following rules:
// For any number that is a multiple of 3, log 'Fizz'
// For any number that is a multiple of 5, log 'Buzz'
// For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
// For all other numbers, log the number.

var numbers = []

for (var i = 1; i <= 100; i++) {
   numbers.push(i)
 }

console.log(numbers.length)
console.log(numbers)

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    console.log("FizzBuzz");
   } else if (numbers[i] % 5 === 0) {
     console.log("Buzz");
   } else if (numbers[i] % 3 === 0) {
     console.log("Fizz");
   } else {
     console.log(numbers[i]);
   }
 }
