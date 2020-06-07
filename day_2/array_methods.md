#Array methods:

+ **pop = removes the last element from an array and returns that element. This method changes the length of the array**

    ```
    var varName = [array];

    console.log(varName.pop());
    ```

    Output is last item in the array


+ **push = adds one or more elements to the end of an array and returns the new length of the array.**

    ```
    var varName = [array];

    var count = varName.push(newArrayItem);

    console.log(count);
    ```

    Output would be original number of array items + 1


    `console.log(varName);`

    Output would be new array including new item added

+ **shift = removes the first element from an array and returns that removed element. This method changes the length of the array**

    ```
    var array1 = [1, 2, 3];

    var firstElement = array1.shift();

    console.log(array1);
    ```

    Output should be Array [2, 3]

    `console.log(firstElement);`

    Output should be 1, for the array item that was shifted out

+ **unshift = adds one or more elements to the beginning of an array and returns the new length of the array**

    ```
    let array1 = [1, 2, 3];

    console.log(array1.unshift(4, 5));
    ```

    Output would be 5 (length of array)

    `console.log(array1);`

    Output would be Array [4, 5, 1, 2, 3]

+ **join = creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator**

    ```
    var pets = ["Cat", "Dog", "Hamster"];

    console.log(pets.join());
    ```

    Expected output: "Cat,Dog,Hamster"

    This could also be written with a space string in the parameters to exclude commas, or with a hyphen to replace commas with hyphens

+ **slice = returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.**

    ```
    var happyReactions = ["smile", "laugh", "grin", "hug"];

    console.log(happyReactions.slice(2));
    ```

    Expected output:  Array ["grin", "hug"]

    `console.log(happyReactions.slice(0, 3));`

    Expected output:  Array ["smile", "laugh", "grin"]
