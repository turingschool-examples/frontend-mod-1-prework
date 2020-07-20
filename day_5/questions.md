## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?  

An Object is a collection of related data consisting of variables and functions. Objects can represent real world things in computer programming. Objects can be anything that is defined by a set of characteristics (properties).
Variables and functions are called properties and methods when they are inside of an object.  

An Object is different from an Array because an Array stores an "ordered list" of data. In order to access data in an array, you have to access items by their numerical order in the list. Objects can not only store numbers, but they can also store strings, making it more of a database.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.  

var petStore = {
  blueBuffaloDogFood = 100;
  zukesChickenTreats = 50;
  kongToys = 25,
};

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?  

states = {
  CO: "Colorado"
  IA: "Iowa"
  OK: "Oklahoma"
};

 var statesIA = states.IA;
 console.log(statesIA);

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?  

states.MN = "Minnesota";
console.log(states);

1. What is another example of when we might use a object?  In this case, why is a object better than an array?  

We might use an object when we need to store data on a website. Objects are better than arrays because arrays only let you store data into one variable, where objects allow as many variables (properties) as needed.



1. What questions do you still have about objects?  
How they are used in the "real world". What else can you add to objects to make it more dynamic?
