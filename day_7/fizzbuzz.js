//set range 1 - 100
//multiple of 3 = "Fizz"
//multiple of 5 = "Buzz"
//multiple of both = "FizzBuzz"
//others = console.log(number)

//Original Attempt:
for (testNumber = 1; testNumber <= 100; testNumber++) {

  if ((testNumber % 3 === 0) && (testNumber % 5 === 0)) {
    console.log("FizzBuzz");
  }

  if ((testNumber % 3 === 0) && (testNumber % 5 !== 0)) {
    console.log("Fizz");
  }

  if ((testNumber % 5 === 0) && (testNumber % 3 !== 0)) {
    console.log("Buzz");
  }

  if ((testNumber % 5 !== 0) && (testNumber % 3 !== 0)) {
    console.log(testNumber);
  }
}

//Attempt after Feedback:
//Goal is to use only one && statement and not to use "not equal to" in determining code
for (testNumber = 1; testNumber <= 100; testNumber++) {

  if ((testNumber % 3 === 0) && (testNumber % 5 === 0)) {
    console.log("FizzBuzz");
    } else if (testNumber % 3 === 0) {
      console.log("Fizz");
      } else if (testNumber % 5 === 0) {
        console.log("Buzz");
        } else {
          console.log(testNumber);
        }
      }
