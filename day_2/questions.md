## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

  -  ["zebra","giraffe","elephant"];

2. Save the array you created above to a variable `animals`.

  - var animals = ["zebra","giraffe","elephant"];


3. using the array `animals`, how would you access `"giraffe"`?

  - console.log(animals[1])


4. How would you add `"lion"` to the `animals` array?

  - animals.unshift('lion')
  //this should add lion to the animal array//

5. Name and describe two additional array methods.

  - slice() is a way to enter in which array elements you would like to use for a new array set. slice() can remove the beginning of an array or slice off the end it just depends which array item you tell it to start and end with

  - push() is a way to insert a value or item onto the end of an array, you can push() and add to the array or pop() to remove an item.

6. What are the boolean values in JavaScript?

  - boolean values are true or false values.

7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

  - 2 == 25
  //this evaluates to false

  - 2 === 25
  //this is also evaluates to false but more strictly lol

8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

    - 25 > 2
  //this evaluates to true
