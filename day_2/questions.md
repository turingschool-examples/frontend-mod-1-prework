## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

# var animals = ["Zebra", "Giraffe", "Elephant"];

1. Save the array you created above to a variable `animals`.

# var animals = ["Zebra", "Giraffe", "Elephant"];

1. using the array `animals`, how would you access `"giraffe"`?

# console.log(animals[1]);

1. How would you add `"lion"` to the `animals` array?

# var newLength = animals.push("Lion");

1. Name and describe two additional array methods.

# pop -> removes an item from the end of the array
ex. var last = animals.pop(); // outputs Zebra, giraffe

# indexOf -> notes where a certain item is in the array
ex. var pos = animals.indexOf(Zebra); // outputs 0

1. What are the boolean values in JavaScript?

# TRUE / FALSE

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

# console.log(2 == 25); // returns false

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

# console.log(25 > 2); // returns true
