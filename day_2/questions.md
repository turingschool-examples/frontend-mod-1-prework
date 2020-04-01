## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

["zebra", "giraffe", "elephant"]

1. Save the array you created above to a variable `animals`.

var animals = ["zebra", "giraffe", "elephant"]

1. using the array `animals`, how would you access `"giraffe"`?

alert(animals[1])

1. How would you add `"lion"` to the `animals` array?

var count = animals.push("lion")

1. Name and describe two additional array methods.

The 'fill' method fills an array from one specified point to another with a single element. Ex;

var dndPartyRaces = ["human", "elf", "dwarf", "halfling", "dragonborn"];
console.log(dndPartyRaces.fill("tiefling", 2, 5));

The expected output of the array is ;

["human", "elf", "tiefling", "tiefling", "tiefling"]

1. What are the boolean values in JavaScript?

They are statements that are either true or false.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

var firstVar = 2
var secondVar = 25

console.log(firstVar == secondVar)

The result would read false.

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

Gonna go by the var values I assined them to above.

console.log(secondVar > firstVar)

The result is true! 
