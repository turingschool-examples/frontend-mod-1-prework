## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
["zebra", "giraffe", "elephant"]
```
1. Save the array you created above to a variable `animals`.
```
var animals = ["zebra", "giraffe", "elephant"];
```
1. using the array `animals`, how would you access `"giraffe"`?
```
giraffe = animals.indexOf ("giraffe");
//1
console.log (animals [1]);
```
1. How would you add `"lion"` to the `animals` array?
```
animals.unshift ("lion");
```
1. Name and describe two additional array methods.

> The `.splice` method is used to **remove** or **replace** items in an array. Define the index position to start from and a number of items to be removed (starting with the specified index position). *Define the number of items to be removed as 0 to insert a value at the indicated position without removing any others.* A new value to insert can also be defined (*optional - if no new value is defined, the indicated values will just be removed from the array without replacement*).
```
var peppers = ["jalapeño", "habanero", "anajeim", "molé"];
peppers.splice (2, 2);
console.log (peppers);
// ["jalapeño", "habanero"]

peppers.splice (1, 0, "serrano");
console.log (peppers);
// ["jalapeño", "serrano", "habanero"]
```
> The `.slice` method is used to **extract** and return a shallow / partial copy from an array *into a new array*. Define the index position to start from. An index position to end at can also be defined but is *optional*. If an index end position is defined, the copy will include everything from the index start *through but not including* the index end. If an index end is not defined, the copy will include everything from the start position through the end of the array.
```
var citrus = ["lemon", "lime", "grapefruit", "tangerine"];
console.log (citrus.slice (0, 2));
// ["lemon", "lime"]

otherCitrus = citrus.slice (2);
console.log (otherCitrus);
// ["grapefruit", "tangerine"]
```

1. What are the boolean values in JavaScript?

> Boolean values are either **true** or **false**. To extend the applicability, and through *type coercion*, every value in JavaScript can essentially be treated as having an equivalency to a boolean value. (i.e. `0 = false`, `1 = true`, *undefined* variables are considered **false**, and the *presence of content* in a string (or on a page) evaluates to **true**.)

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

> I would use the **strict equals** operand `===` to compare both the data type and values of `2` and `25`. They are the same (numeric) data type, but the values are unequal, so the returned result is the boolean value `false`.
```
console.log ( 2 === 25 );
// false
```

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

> I would use the **greater than** operand `>` to compare the values of `25` and `2`. (This does not compare the data types, but...) Because the value of `25` is greater than `2`, the returned result is the boolean value `true`.
```
console.log ( 25 > 2 );
// true
```
