Describe what each method does:

*The pop() method removes the last element from an array and returns that element. This method changes the length of the array.*

var plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// an array of plants

plants.pop();
// 4

console.log(plants);
// ["broccoli", "cauliflower", "cabbage", "kale"]


*The push() method adds one or more elements to the end of an array and returns the new length of the array.*

var animals = ["pigs", "goats", "sheep"];

animals.push("chickens", "cats", "dogs");
//6

console.log(animals);
// "pigs", "goats", "sheep", "chickens", "cats", "dogs"


*The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. The return value is of the removed element for the array; undefined if the array is empty.*

var numbers = [1, 2, 3];
numbers.shift();
// 1

console.log(array);
// [2, 3]


*The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.*

var numbers = [2, 3];

numbers.unshift(1);

console.log(numbers);
// [1, 2, 3]


 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
