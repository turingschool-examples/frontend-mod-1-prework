## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
  var animals = ["zebra", "giraffe", "elephant"];

1. Save the array you created above to a variable `animals`.

1. using the array `animals`, how would you access `"giraffe"`?
  animals[1]

1. How would you add `"lion"` to the `animals` array?
  animals.unshift("lion")
  or
  animals.push("lion")

1. Name and describe two additional array methods.
  shift-Removes the first element (the zeroth indexed element) from the array and returns the removed element. This method changes the length of the array, shifting the indexes of the remaining elements down.
  pop- Removes the last element from the end of an array and returns the removed element. This does not specify a value instead used with an empty (). If the array is empty undefined will be the return value. This method does modify the length of the array.  

1. What are the boolean values in JavaScript?
  true or false

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
  2 === 25
  result: false

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
25 > 2
result: true
