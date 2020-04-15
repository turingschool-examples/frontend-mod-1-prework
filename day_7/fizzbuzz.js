for (i = 1; i <= 100; i++)
{
 if ((i%3) === 0 && (i%5) === 0) {
   console.log('Fizzbuzz');
 }
 else if (i % 3 === 0) {
   console.log('Fizz');
 }
 else if (i % 5 === 0) {
   console.log('Buzz');
 }
 else {
   console.log(i);
 }
}

// Bonus:
// I've written the program as a function that takes two parameters, lowerLimit and upperLimit, so it can run for any range of numbers that are passed as arguments.

function fizzBuzz(lowerLimit, upperLimit) {
  for (i = lowerLimit; i <= upperLimit; i++)
{
 if ((i%3) === 0 && (i%5) === 0) {
   console.log('Fizzbuzz');
 }
 else if (i % 3 === 0) {
   console.log('Fizz');
 }
 else if (i % 5 === 0) {
   console.log('Buzz');
 }
 else {
   console.log(i);
 }
}
}
fizzBuzz(500, 520);
