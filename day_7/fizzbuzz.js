// FizzBuzz
for (i = 1; i < 100; i++) {
  if (i % 3 === 0 ) {
    console.log("Fizz");
  }
  else if (i % 5 === 0 ) {
    console.log("Buzz");
  }
  else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else {
    console.log(i);
  }
}

// to change the range of numbers, alter to i = n. n being the number you want to start with, the change the i < range to the range you desire
