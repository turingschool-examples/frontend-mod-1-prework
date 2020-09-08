function fizzBuzz() {
  for(i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i);
    }
  }
}

// Call function to get output:
fizzBuzz();

// Bonus program for any range of numbers:

function fizzBuzz(number) {
  for(i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i);
    }
  }
}

// Call function to get output:
fizzBuzz(28); //insert number in parentheses for desired range from 1
fizzBuzz(123);
fizzBuzz(75);
