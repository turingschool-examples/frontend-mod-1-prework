// For values 1-100
for (var i = 1; i <= 100; i++)

if (i%3 == 0 && i%5 == 0) {
  console.log("FizzBuzz")
} else if (i%3 == 0) {
  console.log("Fizz")
} else if (i%5 == 0) {
  console.log("Buzz")
} else {
    console.log(i)
};


//Bonus:  For any number run fizzBuzzer(x)

function fizzBuzzer(x) {

for (var i = 1; i <= x; i++)

if (i%3 == 0 && i%5 == 0) {
  console.log("FizzBuzz")
} else if (i%3 == 0) {
  console.log("Fizz")
} else if (i%5 == 0) {
  console.log("Buzz")
} else {
    console.log(i)
}
};

fizzBuzzer(100)
