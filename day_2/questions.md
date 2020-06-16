## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

    `["zebra", "giraffe", "elephant"]`

1. Save the array you created above to a variable `animals`.

    `var animals = ["zebra", "giraffe", "elephant"];`

1. using the array `animals`, how would you access `"giraffe"`?

    `console.log(animals[1]);`

1. How would you add `"lion"` to the `animals` array?

    ```
    animals.push("lion");
    console.log(animals);
    ```

    Returns (4) ["zebra", "giraffe", "elephant", "lion"];

1. Name and describe two additional array methods.

    **The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.**

    ```
    var pets = ["Cat", "Dog", "Hamster"];
    console.log(pets.join());
    ```

    Expected output: "Cat,Dog,Hamster"

    This could also be written with a space string in the parameters to exclude commas, or with a hyphen to replace commas with hyphens.

    **The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.**

    ```
    var happyReactions = ["smile", "laugh", "grin", "hug"];

    console.log(happyReactions.slice(2));
    ```

    Expected output:  Array ["grin", "hug"]

    `console.log(happyReactions.slice(0, 3));`

    Expected output:  Array ["smile", "laugh", "grin"]

1. What are the boolean values in JavaScript?

    The JavaScript boolean values are true and false.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

    When checking only for equality in value, you can use == instead of ===.  The latter checks for equality in both value and data type.

    `(2 === 25);`

    Result is false

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

    `(25 > 2);`

    Result is true
