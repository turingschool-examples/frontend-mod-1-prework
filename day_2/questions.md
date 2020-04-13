## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.   
```javascript
var myArray = ["zebra", "giraffe", "elephant"];
```
1. Save the array you created above to a variable `animals`.  
```javascript
var animals = myArray;
```
1. using the array `animals`, how would you access `"giraffe"`?  
```javascript
animals[1];
```

1. How would you add `"lion"` to the `animals` array?  
```javascript
animals.push("lion");
```

1. Name and describe two additional array methods.  

   The pop method, written `array.pop()`, removes the last item from an array changing its length down one.  

   The unshift method, written `array.unshift("New Item");`, adds a given item to the array at its start changing its length up one.

1. What are the boolean values in JavaScript?  

   A boolean is a data type in JavaScript that can be either true or false.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?  

   ```javascript
   console.log(2 == 25);
   ```
   The result would print false.

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?  

   ```javascript
   console.log(25 > 2);
   ```
   The result would print true.
