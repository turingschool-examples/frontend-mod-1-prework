# Array Methods

  - **Pop**
    The pop method allows you to remove the last element from an array and returns it. The array's length will be altered after using this method.
  ```javascript
         var exampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
         var omitNine = exampleArray.pop()
         console.log(omitNine)
         console.log(exampleArray)
         //the .pop should remove 9 from the array and return that value. (The
         //console.log's are there for my benefit.)
   ```
   - **Push**
     The push method allows you to add an element to the end of the array and
     returns the new length of the array.
     ```javascript
          var exampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
          var addTen = exampleArray.push(10)
          //the .push should add 10 at the end of our array, changing the length
          //of the array from 10 to 11.
      ```
   - **Shift**
     The shift method is similar to the pop method, except it allows you to remove
     the first element from the array instead of the last.
    ```javascript
          var exampleArray = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9]
          var omitZero = exampleArray.shift()
          //the .shift should remove 0 from the array and returns that value. the
          //array's length is altered after using this method.
    ```
  - **Unshift**
    The unshift method allows you to add an element to the beginning of an array, and then returns the array's new length.
    ```javascript
          var exampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
          var addNegativeOne = exampleArray.unshift(-1)
          //the .unshift should add -1 to the beginning of this array and then
          //return the array's new length of 11.
