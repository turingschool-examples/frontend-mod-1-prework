## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```javascript
var animals = ["zebra", "giraffe", "elephant"];
```

1. Save the array you created above to a variable `animals`.

1. using the array `animals`, how would you access `"giraffe"`?
var itemTwo = animals[1];

1. How would you add `"lion"` to the `animals` array?
animals.push("lion");

1. Name and describe two additional array methods.
Pop Method - The Pop method removes the last item in the array. Ex: animals.pop(); would remove "Lion" from the above array.
Shift Method -  The Shift method removes the first item in the array. Ex: animals.shift(); would remove "Zebra" from the above array.
Unshift Method - The Unshift method adds one or more items to the beginning of the array. Ex: animals.unshift("polar bears", "tigers"); would add polar bears and tigers to the beginning of the above array.

1. What are the boolean values in JavaScript?
Boolean values are a data type that can only have one of two values -  "true" or "false". It is like an on/off switch. It helps determine which part of the script should run when you add boolean values (ex: if its true then do this OR if its false then do this).

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
I would first create a variable to store both numbers. I would then use a comparison operator (==) to check to see if 2 is equal to 25. 2 is not equal to 25, so the result would be false.

Example:
var firstNum = 25;
var secondNum = 2;

console.log(secondNum == firstNum) = the result would be false. 2 is not equal to 25.


1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
I would first create a variable to store both numbers. I would then use a comparison operator (>) to check to see if 25 is greater than 2. 25 is greater than 2, so the result would be true.

Example:
var firstNum = 25;
var secondNum = 2;

console.log(firstNum > secondNum) = the result would be true. 25 is greater than 2.
