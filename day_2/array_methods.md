For the explanation of below methods, the following array will be used.

var names = ['Brett', 'Blake', 'Brianne', 'Mia'];


## Pop (Array.prototype.pop())

  * Pop is used to remove an item from the end of an Array
  
  * "Pop OUT" a value from the end of an array

  ```
  let last = names.pop(); // this will remove the 'Mia' (last) string from the names array, and reassign it to  the last variable
  
  names.pop();  // this will remove the 'Mia' (last) string from the names array, and call on it

  //expected log from console.log(last);
  ['Mia']

  //expected log from console.log(names);
  ['Brett', 'Blake', 'Brianne']
  ```
  
## Push (Array.prototype.push())

  * Push is used to add an item to the end of an Array
  
  * "Push IN" a value to the end of an array
  
```
  names.push('John');   // used to add John to the end of the names array

  //expected log from console.log(names);
  ['Brett', 'Blake', 'Brianne', 'Mia', 'John']

  //expected log from console.log(names); assuming the pop method was executed
  ['Brett', 'Blake', 'Brianne', 'John']
```

## Shift (Array.prototype.shift())

  * Shift is similar to the Pop method but is used to take an item from the beginning of an Array
  
  * "Shift OUT" a value from the beginning of an array
  
```
  var first = names.shift(); // this will remove the 'Brett' string from the names array, and reassign it to  the first variable
  
  names.shift();   // this will remove the 'Brett' string and call on it

  //expected log from console.log(first);
  ['Brett']

  //expected log from console.log(names);
  ['Blake', 'Brianne']
```

## Unshift (Array.prototype.unshift())

  * Unshift is used to add an item to the beginning of an array
  
  * "Unshift IN" a value to the beginning of an array

```
  var newerNames = names.unshift('Marianne');
  names.unshift('Marianne');   // can also be used to just adjust the names array
  // This will add the value 'Marianne' to the beginning of the names Array

  //expected log from console.log(names);
  ['Marianne', 'Brett', 'Blake,' 'Brianne']
  ```
