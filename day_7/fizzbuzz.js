//Steps
// 1. create a loop that runs from 1-100
// 2. inside of the loop create a series of if/else statements with the conditions below
// 3. if statement - if i is divisible by 3 and i is divisible by 5 then it will log FizzBuzz, if not it will go on to the next line of code
// 4. if i is divisible by 3 log Fizz, if not, it will go on to the next line of code
// 5. if i is divisibly by 5 log Buzz, if not it will go on to the next line of code
// 6. if the number doesn't meet any of the statements above, it will just print the number

for (var i=1; i <=100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0){
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
 }
