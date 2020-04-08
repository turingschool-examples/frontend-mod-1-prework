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
  zebra: 12,
  giraffe: 20,
  hipopotamus: 12,
  tiger: 5,
  inventoryOfAnimals: function(){
    console.log(this.zebra + this.giraffe + this.hipopotamus + this.tiger)
  }
};
zoo.inventoryOfAnimals();
//expected output: 49
console.log(zoo);
//
// // Using the zoo that you created above, print all the keys in the object.
var zoo = {
  zebra: 12,
  giraffe: 20,
  hipopotamus: 12,
  tiger: 5

};
console.log(Object.keys(zoo));
//expected output: ["zebra", "giraffe", "hipopotamus", "tiger"]

// // Using the zoo that you created above, print all the values in the object.
var zoo = {
  zebra: 12,
  giraffe: 20,
  hipopotamus: 12,
  tiger: 5

};
console.log(Object.values(zoo));
//expected output: [12, 20, 12, 5]
//
// // Using the zoo that you created above, print the value of the first item in
// // the object
var zoo = {
  zebra: 12,
  giraffe: 20,
  hipopotamus: 12,
  tiger: 5

};
console.log(Object.values(zoo)[0]);
//expected outcome: 12

//
// // Add an animal to the zoo object and print the updated object.
var zoo = {
  zebra: 12,
  giraffe: 20,
  hipopotamus: 12,
  tiger: 5
};

 zoo.lion = 2;
console.log(zoo[4]);
 console.log(zoo);
//  //expected ouotput: {zebra: 12, giraffe: 20, hipopotumus: 12, tiger: 5, lion: 2}
