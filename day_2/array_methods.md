"pop", "push", "shift", "unshift".
#Methods

If I understand this correctly, the following methods are all destructive methods because they change the original array.

`pop()` and `shift()` both return an element from the array, while `push()` and `unshift()` both return the length of the new array.

1. **pop()**
   * removes the last element of the array and returns that element
   * the length of the array is shortened

2. **push()**
   * adds items to the end of an array and returns the new length of the array
   * can push no element, one, or multiple

3. **shift()**
   * removes an element from the front of the array at the 0 index and returns that element
   * all the consecutive elements are shifted down and their indexes change accordingly

4. **unshift()**   
   * adds an element to the front of an array and returns the length of the new array
