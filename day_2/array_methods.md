The "pop" method takes the last element of a array and return it. For example:

```JavaScript
var arrayExample = [1, 3, 5, 7, 9];
console.log(arrayExample.pop()); //will return 9
```

This will effectively remove the number from the array going forward in the code. So, if arrayExample is called again, it will return [1, 3, 5, 7].

The opposite of this is the "push" method. Not to be confused with Git push, the "push" method will add an element to the end of an array. For example:

```JavaScript
var pushElement = arrayExample.push(11);
console.log(arrayExample[4]) //will return 11
```
The "push" method can also be used to combine two different arrays into array. For example:

```JavaScript
var cars = ["Mustang", "Explorer"];
var moreCars = ["Camry", "Rav4"];

Array.prototype.push.apply(cars, moreCars);

console.log(cars); //will return ["Mustang", "Explorer", "Camry", "Rav4"];
```
The inverse of "pop" is the "shift" method. The "shift" method will remove the first element from an array and reindex the remaining elements down one. Using our arrayExample as an example:

```JavaScript
var arrayExample = [1, 3, 5, 7, 9];
var shiftElement = arrayExample.shift();

console.log(arrayExample) //will return 3,5,7,9
console.log(arrayExample[0]) //will return 3
```

The final array method is, appropriately, the 'unshift' method. The 'unshift' method add an element to the front of an array at index 0 and will reindex the existing elements forward one index spot. For example:

```Javascript
var sandwichBuilding = ["Jelly", "Sandwich"];
sandwichBuilding.unshift("Peanut", "Butter");

console.log(sandwichBuilding); //will return ["Peanut", "Butter", "Jelly", "Sandwich"]
```
