## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.  
```javascript
var animals = ["zebra", "giraffe", "elephant"];
```

1. Save the array you created above to a variable `animals`.

1. Using the array `animals`, how would you access `"giraffe"`?  
```javascript
console.log(animals[1]);
```
"1" is the index number of the giraffe.

1. How would you add `"lion"` to the `animals` array?  
```javascript
animals.push("lion");
console.log(animals);
```

1. Name and describe two additional array methods.
**Reverse Method** - The reverse method reverses the array.   
Example: var animals = ["zebra", "giraffe", "elephant"]; would become ["elephant", "giraffe", "zebra"];  
**isArray Method** - The isArray method determines whether or not the passed value is actually an array.  
Example:  var animals = ["zebra", "giraffe", "elephant"]; // true  

1. What are the boolean values in JavaScript?  

Boolean values are a data type that can only have one of two values -  "true" or "false". It is like an on/off switch. It helps determine which part of the script should run when you add boolean values (ex: if its true then do this OR if its false then do this).  

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?  

I would first create two variables to store both numbers. I would then use the comparison operator (==) to check to see if 2 is equal to 25. 2 is not equal to 25, so the result would be false.

Example:
```javascript
var firstNum = 25;
var secondNum = 2;

console.log(secondNum == firstNum) // the result would be false. 2 is not equal to 25.
```  

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?  

I would first create two variables to store both numbers. I would then use the comparison operator (>) to check to see if 25 is greater than 2. 25 is greater than 2, so the result would be true.

Example:
```javascript
var firstNum = 25;
var secondNum = 2;

console.log(firstNum > secondNum) // the result would be true. 25 is greater than 2.
```  
