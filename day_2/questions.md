## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the
   following strings: `"zebra", "giraffe", "elephant"`.

    ```JavaScript
    var animals = ["zebra", "giraffe", "elephant"];
    ```

2. Using the array `animals`, how would you access `"giraffe"`?

    ```JavaScript
    var tall = animals[1];
    console.log(tall);
    ```

3. How would you add `"lion"` to the `animals` array?

    ```JavaScript
    var simba = animals.push("lion");
    ```

4. Name and describe two additional array methods.

    - The `shift` method removes the *first* element of an array and then
      returns that removed array. Here is how it looks in action:

    ```javascript
    var array1 = [1, 2, 3];
    var element1 = array1.shift();
    console.log(array1);
    //Output: [2, 3]

    console.log(element1);
    //Output: 1
    ```

    - The `unshift` method adds one or more elements to the *beginning* of an
    array and returns the new length of the array. An example:

    ```javascript
    var array2 = [1, 2, 3];
    console.log(array2.unshift(4, 5));
    //Output: 5
    console.log(array2);
    //Output: [4, 5, 1, 2, 3]
    ```

5. What are the boolean values in JavaScript?

    - Boolean values in JavaScript are true and false. Booleans are helpful
    when determining which script should run, such as when to stop a loop.

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the
   result of this evaluation?

    ```javascript
    var number = 2;
    var number2 = 25;
    console.log(number === number2);
    ```
    - The output here should be 'false', since the code is testing whether 2 is
    equal to 25. You could also use the 'not equal' operator (!==) to determine
    if the two numbers were *not* equal to each other.

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is
   the result of this evaluation?

    ```javascript
    var bigNumber = 25;
    var smallNumber = 2;
    console.log(25 > 2);
    ```
    - The output here would be 'true' since here we are evaluating whether 25
    is greater than 2.
