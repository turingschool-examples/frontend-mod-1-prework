## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

    * ```var animals = ["Zebra", "Giraffe", "Elephant"]```

1. Save the array you created above to a variable `animals`.

    * ```console.log(animals);```

1. using the array `animals`, how would you access `"giraffe"`?

    * ```console.log(animals[1]);```

1. How would you add `"lion"` to the `animals` array?

    * ```console.log(animals.push("Lion"));```

1. Name and describe two additional array methods.

    * pop will remove an item from an array variable.

      + To remove "elephant":

          ```console.log(animals.pop());```

    * unshift will add items to the front of the array variable.

      + To add "gorilla" and "crocodile":

          ```console.log(animals.unshift("gorilla", "crocodile"));```

1. What are the boolean values in JavaScript?

    * booleans are true/false. They are helpful when code can take more than one path (I don't fully understand this yet, but I think I am grasping the general idea of it.)

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

    ```console.log(2 == 25);```

    false

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

    ```console.log( 25 > 2);```

    true
