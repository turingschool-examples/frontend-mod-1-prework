
function fizzBuzz(start, stop) {
if (start < stop) {
  for (x = start; x <= stop; x++) {
  if (x % 3 === 0 && x % 5 === 0){
  console.log("FizzBuzz");
  } else if (x % 3 === 0) {
    console.log("Fizz");
  } else if (x % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(x);
  }
  }
} else if (start == stop) {
  console.log ("Those are the same numbers, ya FizzBuzz!")
} else {
  for (x = start; x >= stop; x--) {
  if (x % 3 === 0 && x % 5 === 0){
  console.log("FizzBuzz");
  } else if (x % 3 === 0) {
    console.log("Fizz");
  } else if (x % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(x);
  }
  }
}
}



fizzBuzz(1, 100);

console.log("This can run any range of numbers, forwards and backwards.");

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Pick two numbers, use a comma... ', (answer) => {
  // TODO: Log the answer in a database
  fizzBuzz(`${answer}`);
  rl.close();
});*/
