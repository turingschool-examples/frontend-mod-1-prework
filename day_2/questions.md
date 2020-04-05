## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
["zebra", "giraffe", "elephant"];
```

2. Save the array you created above to a variable `animals`.
```
var animals = ["zebra", "giraffe", "elephant"];
```

3. using the array `animals`, how would you access `"giraffe"`?
```
console.log(animals.slice(1, 2));
```

4. How would you add `"lion"` to the `animals` array?
```
animals.push("lion");
console.log(animals);
```

5. Name and describe two additional array methods.
* `concat()`
This method can be used to merge two or more arrays.  It is important to note that it does not change the existing array(s), but returns a new array instead.
###### Example:
```
var letters = ["a", "b", "c"];
var numbers = [1, 2, 3];
var combine = letters.concat(numbers);
console.log(combine);
// returns ["a", "b", "c", 1, 2, 3];
```
* `indexOf()`
This method returns the index at which an element can be found in an array.  If the element is not in the array, it will return `-1`.  This can be used if there is a long list of elements and you are searching for one in particular.  A real life example that comes to mind is if you had an array called `registeredStudents` and you wanted to see if Michelle registered yet.
###### Example:
```
var registeredStudents = ["Brian", "Elliot", "Erin", "Caitlyn"];
console.log(registeredStudents.indexOf("Michelle"));
// returns -1
```

6. What are the boolean values in JavaScript?
* Boolean values are `true` and `false`.  Sometimes you can think of these values as `on/off` or `0/1`.

7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
  ```
  console.log(2 == 25)
  // returns false
  ```
  
8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

  ```
  console.log(25 > 2)
  // returns true
  ```
