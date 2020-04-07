#Array methods

##pop
-Removes the last element from an array.
-Returns that element.
-Changes the length of the array.
```JavaScript
var veggies = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"]

console.log(veggies.pop());
// expected output: "tomato"
console.log(veggies);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

veggies.pop();
console.log(veggies);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

##push
-Adds one or more elements to the end of an array.
-Returns the new length of the array.

```JavaScript
var animals = ["pigs", "goats", "sheep"];

var count = animals.push("cows");
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals)
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

##shift
-Removes the first element from an array
-Returns that element.
-Changes the length of the array.

```JavaScript
var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

##unshift
-Adds one or more elements to the beginning of an array.
-Returns the new length of the array.
