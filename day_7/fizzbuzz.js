//FizzBuzz

 for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz, ");
  } else if (i % 5 == 0) {
    console.log("Buzz, ");
  } else if (i % 3 == 0) {
    console.log("Fizz, ");
  } else {
    console.log(i);
  }
};


//Bonus - Didn't leave enough time to solve the bonus.
/*anyNum(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz, ");
    } else if (i % 5 == 0) {
      console.log("Buzz, ");
    } else if (i % 3 == 0) {
      console.log("Fizz, ");
    } else {
      console.log(i);
    }
  }
};
anyNum(101);
*/
