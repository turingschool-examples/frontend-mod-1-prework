#Array Methods
*from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array*

## Array.prototype.pop()
The pop() method removes & returns the last element in an array.
+ Also changes the length of the array.

*Example*
```
var flowers = ["rose", "daisy", "tulip", "lavender", "sunflower"];

console.log(flowers.pop());
// expected output: "sunflower"

console.log (flowers);
// expected output: Array ["rose, "daisy", "tulip", "lavender"]

flowers.pop();

console.log(flowers);
// expected output: Array["rose", "daisy", "tulip"]
```

## Array.prototype.push()
The push() method adds one or more elements to the end of an array.
+ Returns the new length of the array.

*Example*
```
var days = ["Monday", "Tuesday", "Wednesday", "Thursday"];

var lengthWeek = days.push("Friday");
console.log(lengthWeek);
// expected output: 5
console.log(days);
// expected output: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

days.push("Saturday", "Sunday");
console.log(days);
// expected output: Array ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
```

## Array.prototype.shift()
The shift() method removes & returns the first element in an array.
+ Also changes the length of the array.

*Example*
```
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

var onlyEvenPrime = primeNumbers.shift();

console.log(array1);
// expected output: Array [3, 5, 7, 11, 13, 17, 19, 23, 29]

console.log(onlyEvenPrime);
//expected output: 2
```

## Array.prototype.unshift()
The unshift() method adds one or more elements to the beginning of an array.
+ Changes & returns the new length of the array

*Example*
```
var reindeer = ["Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

console.log(reindeer.unshift("Rudolph", "Dasher", "Dancer"));
//expected output: 9

console.log(reindeer);
// expected output: Array ["Rudolph", "Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
```
