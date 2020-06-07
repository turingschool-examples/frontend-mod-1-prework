function fizzBuzz(start, end) {
  for (var i = start; i <= end; i++) {
    if(i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if(i % 5 == 0) {
      console.log("Buzz");
    } else if(i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    };
  };
};

fizzBuzz(1, 100)

console.log("\nBONUS QUESTION: ")
// BONUS: any range of numbers can be called into the function with `start`
// being the starting number, and `end` being the ending number.
fizzBuzz(-25, 0)
