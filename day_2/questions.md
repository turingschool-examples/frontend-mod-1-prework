## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.
  * var animals = ["zebra", "giraffe", "elephant"];

2. Using the array `animals`, how would you access `"giraffe"`?
  * console.log(animals[1]);

3. How would you add `"lion"` to the `animals` array?
  * animals.push("lion")

4. Name and describe two additional array methods.
  * the ``pop method`` removes the last element in an array, and when logged returns that element back to the user. In our ``animals array`` it would be the ``"lion"`` we just _added_
  * the ``shift method`` will do the same but to the element in the zeroeth index position. In the ``animals array`` that would remove and return ``"zebra"`` when logged.

5. What are the boolean values in JavaScript?
  * ``true`` and ``false``

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
  * ``console.log("2" == "25")`` would return ``false``

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
  * ``console.log("25" >= "2")`` would return ``true``
