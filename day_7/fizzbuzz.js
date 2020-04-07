function fizzbuzz(startValue, endValue) {
  for (i = startValue; i <= endValue; i++) {
    if (startValue % 3 == 0 && startValue % 5 == 0) {
      console.log("FizzBuzz");
    } else if (startValue % 5 == 0) {
      console.log("Buzz");
    } else if (startValue % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(startValue);
    }
    startValue++;
  }
}

fizzbuzz(1, 100);
