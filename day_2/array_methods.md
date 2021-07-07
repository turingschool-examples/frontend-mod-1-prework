#Creating an array:
```
var fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2
```

#Pop
Pop *removes* the **last** element in the array, and then returns it. It shortens the array as well.
```
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"
```
#Push
*Adds* new element to the end of the array, and then returns the array's new length.
```
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```
#Shift
Like `pop` but for the beginning of the array. *Removes* the **first** element in the array and returns the removed element.
```
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```
#Unshift
Like `push` but for the beginning of the array. *Adds* one or more elements to the beginning of the array, and returns the new length of the array.
```
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```
