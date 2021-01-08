class TrickyProgram {
  constructor(x, y)
  {
  this.x = x
  this.y = y
}
fizzBuzz() {
  console.log("running " + this.x + ", " + this.y + " iteration.")
 for (var i = 1; i <= 100; i++) {
  if (i % this.x && i % this.y) {
  console.log(i);
} else {
if (i % this.x == 0) {
  console.log("Fizz");
} if (i % this.y == 0) {
  console.log("Buzz");
  }
}
}
}
}
var fizzBuzz1 = new TrickyProgram(3, 5)
var fizzBuzz2 = new TrickyProgram(7,10) // test for different values

fizzBuzz1.fizzBuzz();


/*
for (var i = 0; i <= 100; i++) {
 if (i % this.x && i % this.y) {
 console.log("FizzBuzz");
} if (i % this.x == 0) {
 console.log("Fizz");
} if (i % this.y == 0) {
 console.log("Buzz");
 } else {
 console.log(i);
 }

 */
