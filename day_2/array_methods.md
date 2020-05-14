The "pop" method takes the last element of a array and return it. For example:

```JavaScript
var arrayExample = [1, 3, 5, 7, 9];
console.log(arrayExample.pop()); //will return 9
```

This will effectively remove the number from the array going forward in the code. So, if arrayExample is called again, it will return [1, 3, 5, 7].

The inverse of this is the "push" method. Not to be confused with Git push, the "push" method will add an element to the end of an array. For example:

```JavaScript
var pushElement = arrayExample.push(11);
console.log(arrayExample[4]) //will return 11
```
