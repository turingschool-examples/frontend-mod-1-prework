var numbers = [];

for (var x = 1; x <= 100; x++) {
  numbers.push(x);
}
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// console.log(numbers);

// var fizzbuzz = numbers.map(function(number){
//   if (number % 5 == 0) {
//     number = "fizz"
//     // console.log("fizz");
//   } else if (number % 3 == 0) {
//     number = "buzz"
//       // console.log("buzz");
//   };
// });
//
// console.log(fizzbuzz);

var fizzbuzz = numbers.forEach((number, i) => {
  if (number % 5 == 0) {
    number = "fizz"
    // console.log("fizz");
  } else if (number % 3 == 0) {
    number = "buzz"
      // console.log("buzz");
  };
});

console.log(fizzbuzz);
