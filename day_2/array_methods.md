#### Array methods

1. **pop:** remove last element of an array - will change the length of the array

    ```JavaScript
    var flowers = ['daisy', 'rose', 'tulip'];
    console.log(flowers);
      // log: ['daisy', 'rose', 'tulip']
    flowers.pop();
      // log: 'tulip'
    console.log(flowers);
      // log: [ 'daisy', 'rose' ]

1. **push:** add element(s) to the end of an array

    ```JAVASCRIPT
    var flavors = ['vanilla', 'chocolate', 'strawberry']
    console.log(flavors);
      // log: ['vanilla', 'chocolate', 'stawberry']
    console.log(flavors.push('mint'));
      //log 4
    console.log(flavors);
      // log: [ 'vanilla', 'chocolate', 'strawberry', 'mint' ]
    ```
1. **shift:** remove the element at the beginning of an array
    ```JavaScript˚
    var toppings = ['sprinkles', 'cherry', 'whippedCream']
    var editOrder = toppings.shift();
    console.log(editOrder);
      // log: sprinkles

1. **unshift:** add element(s) to the beginning of an array

    ```JavaScript
    var tea = ['puerh', 'mate', 'mint']
    console.log(array.unshift(green, oolong));
      //log: 5
    console.log(tea);
      //log: [ 'green', 'oolong', 'puerh', 'mate', 'mint' ]
