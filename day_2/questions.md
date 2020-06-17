## Day 2 Questions
### by Mike W. (he, him) FE

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
  ['zebra', 'giraffe', 'elephant']

```

1. Save the array you created above to a variable `animals`.

```

  var animals = ['zebra', 'giraffe', 'elephant'];

```

1. using the array `animals`, how would you access `"giraffe"`?

```
  animals[1] // then = the reassign the array

```

1. How would you add `"lion"` to the `animals` array?
```
  animals.push('lion'); // adds lion to the end
  console.log(animals);

  //could also use console.log(animals.unshift ('lion'));

```
1. Name and describe two additional array methods.

 * unshift will add the array item to the beginning of the string instead of   the end

 * Pop will remove the array item from the end of the array list   

 * Reverse will switch the order of the arrays making the first array the last and the last the first

```
  var soda = ['Pepsi', 'RC', 'Coke'];
  var reversecoke = soda.reverse ();
  console.log('reverse: ', reversecoke); // this will flip coke to the front and  Pepsi to the back //reverse:  (3) ["Coke", "RC", "Pepsi"]
```
  * Slice this will show clip the array to only show what was specified from begging to end  
```
  console.log(animals.slice(2)); // this should only show elephant & lion
```

1. What are the boolean values in JavaScript?

  * The values of boolean can be 1 or 0 where 1 is the value of true and 0 is the value of false. Values can also show as truth and falsy such as var pizza = '0' is truly and falsy would be something like var pizza = ''; truthy still hold a value of 1 and falsy hold a value of 0


1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
```
console.log(2 == 25); //this would populate as false because they are not equal

```
1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
```
console.log(25 > 2); //this would return true because 25 is the bigger number
```
