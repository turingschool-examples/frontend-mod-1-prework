# Array Methods

1. **pop**
* This method removes the last element from an array, decreasing the length of the array.
* `var birds = ["Nuthatch", "Eagle", "Warbler", "Duck"];
console.log(birds.pop());
// expected output: "Duck"
// length of variable birds is now 3 rather than 4.`
2. **push**
* This method adds one or more elements to the end of an array, increasing the length of the array.
* `birds.push("Woodpecker", "Seagull");
console.log(birds);
// expected output is Nuthatch, Eagle, Warbler, Woodpecker, and Seagull.`
3. **shift**
* This methods removes the first element from an array, decreasing the length of the array.
* `birds.shift();
console.log(birds);
// expected outcome of the array is now Eagle, Warbler, Woodpecker, and Seagull.`
4. **unshift**
* This method adds one or more elements to the beginning of an array, increasing the length of the array. 
* `birds.unshift("Crow", "Goose");
console.log(birds);
// expected array is now Crow, Goose, Eagle, Warbler, Woodpecker, and Seagull.`