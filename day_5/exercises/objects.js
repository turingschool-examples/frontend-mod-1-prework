/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/objects.js`
*/

// example: Write code below to print an object that holds grocery store inventory
var foods = {
  apples: 23,
  grapes: 507,
  eggs: 48
};

console.log(foods);

// Write code below that will print an object of animals and their number
// at the zoo. (an inventory of animals)
var zoo = {
  tiger: 4,
  elephants: 10,
  lions: 3,
};            // YOUR CODE HERE
console.log(zoo);

// Using the zoo that you created above, print all the keys in the object.
var tigersObject = {
  name: 'Joey',
  age: '10',
  weight: '1 ton',
}
var elephantsObject = {
  name: 'Lily',
  age: '5',
  weight: '7 tons',
}
var lionsObject = {
  name: 'Suko',
  age: '2',
  weight: '1.5 tons'
}
// YOUR CODE HERE

// Using the zoo that you created above, print all the values in the object.
console.log(tigersObject, elephantsObject, lionsObject);// YOUR CODE here

// Using the zoo taht you created above, print the value of the first item in
// the object
var tigersObject = ['Joey','10','1 ton'];
console.log(tigersObject[0]);// YOUR CODE HERE

// Add an animal to the zoo object and print the updated object.
zoo.gorilla = 6; //dot notation
zoo["gorilla"]= 6; //bracket notation 
console.log(zoo);// YOUR CODE HERE
