var array = [];

for (var i = 1; i <= 100; i++) {
  array.push(i);
  if ((i % 3 == 0) && (i % 5 == 0)) {
  console.log("Fizzbuzz")
} else if (i % 3 == 0) {
  console.log("Fizz")
} else if (i % 5 == 0) {
  console.log("Buzz")
} else {
  console.log(i)
}
}


// if i * 5 is equal to or less than 100
//else if i = a number divisible by 5
