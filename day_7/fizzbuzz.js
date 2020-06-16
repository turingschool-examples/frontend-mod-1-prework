var numbers = [];
var range = 100

for (var i = 1; i <= range; i++) {
  numbers.push(i);
  if (i % 15 === 0) {
    numbers[i] = 'FizzBuzz'
  } else if (i % 5 === 0) {
    numbers[i] = 'Buzz'
  } else if (i % 3 === 0) {
    numbers[i] = 'Fizz'
  } else {
    numbers[i] = i
  }
};

numbers.shift();

console.log(numbers);
