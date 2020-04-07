### Types of Array Methods
- **Array Pop:** This method is used to remove the LAST element within an array and return the new length.

ex: ```var trucks = ['F150', 'Ram 1500', 'Tacoma', 'Silverado'];

trucks.pop();

console.log(trucks);

// expected output: Array ['F150', 'Ram 1500', 'Tacoma']```

- **Array Push:** This method will do the opposite of "Pop". This will add one or more elements to the END of an array and returns the new length.

ex: ```var clothing = ['shirt', 'shorts', 'sweaters'];

clothing.push('pants', 'leggings');

console.log(clothing);

// expected output: Array ['shirt', 'shorts', 'sweaters', 'pants', 'leggings']```

**Array Shift** This method is used to remove the FIRST element in an array and will return the new length.

ex: ```var boardGames = ['Clue', 'Life', 'Sorry'];

boardGames.shift();

console.log(boardGames);

// expected output: Array ["Life", "Sorry"]```

**Array Unshift** This method will work opposite to "Shift". This method will add one or more elements to the front of the array and will return the new length.

ex: ```var computerComponents = ['Mouse', 'Keyboard'];

computerComponents.unshift('Tower', 'Monitor');

console.log(computerComponents);

// expected output: Array ["Tower", "Monitor", "Mouse", "Keyboard"]```
