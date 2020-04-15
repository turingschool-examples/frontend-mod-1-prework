Describe what each method does:

*The pop () method removes the last element from an array and returns that element. This method changes the length of the array.*

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


*The push () method adds one or more elements to the end of an array and returns the new length of the array.*

var animals = ['pigs', 'goats', 'sheep'];

var count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


*The shift () method removes the first element from an array and returns that removed element. This method changes the length of the array. The return value is of the removed element for the array; undefined if the array is empty.*

var array1;
var array1 = [1, 2, 3];

var firstElement;
var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

*The unshift () method adds one or more elements to the beginning of an array and returns the new length of the array.*

var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
