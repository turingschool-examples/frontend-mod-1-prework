var lowEnd = 1
var highEnd = 100

for ( i = lowEnd; i <= highEnd; i++) {

  if (i % 15 === 0) {
    console.log("Fizzbuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }

}
