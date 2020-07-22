
for(var i=1; i<100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {//multiple of 3 and 5
    console.log("FizzBuzz");
  } else if(i % 3 == 0) { //multiple of 3
    console.log("Fizz");
  } else if (i % 5 == 0) {//multiple of 5
    console.log("Buzz");
  } else {
    console.log(i);
  }
};
