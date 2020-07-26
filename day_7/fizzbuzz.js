var startNum = 1
var endNum = 100

for (startNum; startNum < endNum; startNum++) {
  if (startNum % 5 === 0 && startNum % 3 === 0) {
    console.log("FizzBuzz");
  } else if (startNum % 5 === 0) {
    console.log("Buzz");
  } else if (startNum % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(startNum);
  }
};
