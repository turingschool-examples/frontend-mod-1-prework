
function fizzBuzz(x, y) {
  for (var i = x; i <= y; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      console.log("Fizz");
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      console.log("Buzz");
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(1,100));
