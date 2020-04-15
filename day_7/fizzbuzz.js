// * For any number that is a multiple of 3, log 'Fizz'
// * For any number that is a multiple of 5, log 'Buzz'
// * For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
// * For all other numbers, log the number.

function fizzBuzz (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz')
  } else if (num % 3 === 0) {
    console.log('Fizz')
  } else if (num % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(num)
  }
}

for (var i = 1; i <= 100; i++) {
  fizzBuzz (i)
}
