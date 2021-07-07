// var name = "Elvis";

// console.log(this.name);

// At this moment, when trying to log to the console, we are returned a value of "undefined"

var human = new Object();
human.name = "Georgia";

// console.log(human); All looks good, stored a new property.

// var name = "Georgia";

var sayName = function() {
    console.log("Hello! My name is " + this.name);
};

// sayName();

// this.name was stored at the global level when the name variable was set to Georgia. 

human.getName = sayName;
console.log(human);

human.getName();

// this.name in this conext implies that it exists at the object instance level. 

var age = 5;
human.age = age;

var getAge = function() {
    console.log("I am " + this.age +" years old.");
};
console.log(human);

human.sayAge = getAge;

human.sayAge();