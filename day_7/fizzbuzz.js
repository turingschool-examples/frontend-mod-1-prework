// create function with paramater too replace 100
function fizzbuzz(max) {
var array = [];
for (var i = 1; i <= max; i++) {
  array.push(i);
}
for (var i = 0; i < max; i ++) {
if (array[i] % 5 === 0 && array[i] % 3 === 0) {
array[i] = 'FizzBuzz'
}
  else if (array[i] % 3 === 0){
    array[i] = 'Fizz';
  } else if (array[i] % 5 === 0) {
    array[i] = 'Buzz'
}
}
console.log(array)
}
fizzbuzz(120);
