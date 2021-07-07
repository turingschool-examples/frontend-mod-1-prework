var yourName = {
    name: "Gabrielle Joyce",
    age: 27,
    alive: true,
    homeTown: "Carlisle",
  };
  
// yourName.name();

// when trying to print, recieve error message of "not a function" no matter what was input after the dot notation. 

var myName = yourName.name;
var myAge = yourName.age;
var myStatus = yourName.alive;
var myHomeTown = yourName.homeTown; 

// I was using the wrong notation and rushing ahead! Remember, take your time, gather all the information. Manipulation only comes **after** fluency. 

console.log(myName);

// adding properties to an object w/ dot notation.

yourName.currentLocation = "Carlisle, PA";

console.log(yourName);

// reassigning a value 

yourName.homeTown = "Pittsburgh";

console.log(yourName);

// creating a method

yourName.birthStory = function() {
    return "I was born on August 9 in the morning, right on time."
}

var myStory = yourName.birthStory;

console.log(myStory);

// tried to put in a function, but got a return of a ...function?