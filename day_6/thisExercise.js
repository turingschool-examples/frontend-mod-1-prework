// Declare a global variable of name and assign the value of 'Elvis'
var name = "Elvis";

// What do you get when you run console.log(this.name) right now?
console.log(this.name);

// Declare another global variable of human and assign it to an object with a property of name that stores a different value.
var human = {
  name: "Santa",
}
// The line below creates a function like we did before (refer to the the GLOBAL VARIABLES example where we created a function called showWidth to log an object's width with "this.width" to the console), but this time leverage the context of `this` to print a name.
function sayName() {
  console.log("Hello! My name is " + this.name);
}

// Call the sayName function now
sayName();

// Based on your results, what is the context of 'this'?
//this is a local aspect; it's only referencing something within in the object. With the function outside of the object,
// name is undefined.

// The line below adds a property called getName to our human object and assign it the value of our sayName function
human.getName = sayName;

// What does the human object look like now? Print it to the console to check!
console.log(human);

// The line below calls the getName method on the human object
human.getName();

// What do your results tell you about the context of this now?
//By adding getName to the object, the sayName function is added to the object and this.name now has something it can
//refer to.

// Create a second object with a different name value and use the same getName/sayName key value pair.

var puppy = {
  name: "Satan",
}
function sayName() {
  console.log("Hello! My name is " + this.name);
}
puppy.getName = sayName;
console.log(puppy);
