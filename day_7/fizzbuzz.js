function fizzBuzzSolo(number) {
  if ((number % 3 == 0) && (number % 5 == 0)) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
};


function rangeBonus(lowExtreme, upExtreme) {
  for (i = lowExtreme; i <= upExtreme; i++) {
    fizzBuzzSolo(i);
  }
}

rangeBonus(1, 100);

/* for (i = 1; i <= 100; i++) {
  FizzBuzz(i);
}
*/
