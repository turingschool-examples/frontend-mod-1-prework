var toOneHundred = [];
for (var i = 1; i <= 100; i++) {
  toOneHundred.push(i);
  if (toOneHundred[i - 1] % 3 == 0 && toOneHundred[i - 1] % 5 == 0) {
    toOneHundred[i - 1] = "FizzBuzz";
  }
  else if (toOneHundred[i - 1] % 5 == 0) {
    toOneHundred[i - 1] = "Buzz";
  }
  else if (toOneHundred[i - 1] % 3 == 0) {
    toOneHundred[i - 1] = "Fizz";
  }
  else {
     toOneHundred[i - 1];
}
};
console.log(toOneHundred);

//Bonus
var numberArray = [];
function rangeArray(start, stop) {
  for (var i = start; i <= stop; i++) {
    numberArray.push(i);
    if (numberArray[i - start] % 3 == 0 && numberArray[i - start] % 5 == 0) {
      numberArray[i - start] = "FizzBuzz";
    }
    else if (numberArray[i - start] % 5 == 0) {
      numberArray[i - start] = "Buzz";
    }
    else if (numberArray[i - start] % 3 == 0) {
      numberArray[i - start] = "Fizz";
    }
}
    return numberArray;
}
console.log(rangeArray(15, 35));
