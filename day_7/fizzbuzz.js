// Create variable listing out array of numbers 1-100.
var array1 = Array.from(Array(100), (_, i) => i + 1);
var arrayLength = array1.length;
var i;

// Create a for loop & run if/else statements for each number
for (i = 0; i < arrayLength; i++) {
  if (((i + 1) % 3) === 0) {array1.splice(i, 1, "Fizz")}
}

for (i = 0; i < arrayLength; i++) {
  if (((i + 1) % 5) === 0) {array1.splice(i, 1, "Buzz")}
}

for (i = 0; i < arrayLength; i++) {
  if ((((i + 1) % 3) === 0) && (((i + 1) % 5) === 0)) {array1.splice(i, 1, "FizzBuzz")}
}

// Code desired output into final string
console.log(array1.toString());
