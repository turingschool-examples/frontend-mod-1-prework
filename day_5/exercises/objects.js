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
  lions: 4,
  tigers: 6,
  bears: 2,
  wingedMonkeys: 20,
};

console.log(zoo);

// Using the zoo that you created above, print all the keys in the object.

console.log(Object.keys(zoo));

/*
This prints the names in the list with Object.key()
this will print [ 'lions', 'tigers', 'bears', 'wingedMonkeys' ]
*/

// Using the zoo that you created above, print all the values in the object.

console.log(Object.values(zoo));

/*
by switching the word after Objects. to values this has updated what would be printed
in the last questions we printed only the keys with the .values we are only printing the values
*/

// Using the zoo taht you created above, print the value of the first item in
// the object

console.log(zoo.lions); //This will take the key lions and print the value for lions which is 4

// Add an animal to the zoo object and print the updated object.
zoo.terrierDog = 1;
zoo ['lonesomeDuck'] = 1;

console.log(zoo);

/* I found 2 ways to add a property to the list one uses the dot notation and the other
uses bracket. I added toto the terrierDog using the dot notation and the lonesomeDuck of oz
using the bracket notation the updated log prints
{
  lions: 4,
  tigers: 6,
  bears: 2,
  wingedMonkeys: 20,
  terrierDog: 1,
  lonesomeDuck: 1
}
*/
