Methods
1. pop: the **```pop()```** method removes the **last element** from an array and returns that element. This method changes the length of the array

Example:
```JavaScript
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
//expected output: "kale"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

```


2. push: the **```push()```** method adds one or more elements to the end of an array & returns the new length of the Array

```JavaScript
var animals = ['pigs', 'goats', 'sheep'];

var addCow = animals.push('cows');
//created a variable to add cows
console.log(addCow);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

```


3. shift: the **```shift()```** method removes the **first** element from an array & returns that removed element. This method changes the length of the Array

Example:
```JavaScript
var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

```


4. unshift: the **```unshift()```** method adds one or more elements to the beginning of an array & returns the new length of the array

Example:
```JavaScript
var array1 = [1, 2, 3];

console.log(array1.unshift(4,5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

```
