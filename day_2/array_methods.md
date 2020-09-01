## Methods to Remember

1. pop

    - The method 'pop' removes the *last* element of an array and returns that
    element. An example is provided below.

       ```javascript
      var fruits = ["apple","orange","strawberry"];
      console.log(fruits.pop());
      // Output: strawberry

      console.log(fruits);
      // Output: ["apple","orange"]
      ```

2. push

    - The method push adds one or more elements to the end of an array and
    returns the new length of the array.

    ```javascript
    var colors = ["blue","yellow","red"];
    var count = colors.push("purple");
    console.log(count);
    // Output: 4

    console.log(colors);
    //Output: ["blue","yellow","red","purple"]
    ```

3. shift

    - The method shift removes the *first* element from an array and returns
    that removed element.

    ```javascript
    var array1 = [1, 2, 3];
    var element1 = array1.shift();
    console.log(array1);
    //Output: [2, 3]

    console.log(element1);
    //Output: 1
    ```

4. unshift

    - The unshift method adds one or more elements to the *beginning* of an
    array and returns the new length of the array.

    ```javascript
    var array2 = [1, 2, 3];
    console.log(array2.unshift(4, 5));
    //Output: 5
    console.log(array2);
    //Output: [4, 5, 1, 2, 3]
    ```
