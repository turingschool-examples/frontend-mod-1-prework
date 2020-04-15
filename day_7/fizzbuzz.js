for (var i = 1; i < 100; i++) {
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  }else if (i % 5 === 0) {
    console.log("Buzz");
  }else {
    console.log(i);
  }
}

function fizzBuzz(num1, num2) {
  for (var i = num1; i < num2; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    }else if (i % 5 === 0) {
      console.log("Buzz");
    }else {
      console.log(i);
    }
  }
}

fizzBuzz(5, 75);
