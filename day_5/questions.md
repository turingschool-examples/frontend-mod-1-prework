## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

*Objects are blocks of data that hold specific characteristics of real-world objects. The properties of an Object provide a specific description of the object in form of data that we can later reference, change or manipulate to obtain an existing or new piece of information.*

*Arrays are not that different from objects, since both of them hold a similar* **key/value** *pair, however in an array, the key for each value is the* **index number**.

*Objects represent "things" containing a multiplicity of properties while arrays store data in a single variable. Both objects and arrays create a list of values, however Objects list this values unordered while an array creates a list of ordered collections*.

Objects make a name distinction when talking about variables and functions. These terms adopt a different name. Variables are called **properties** and functions are called **methods**. Properties can refer to numbers , strings, arrays, functions and even an other object.

Properties are made of the **keys** and **values**, if a functions is part of the object is called a **method**. These keys hold values that later can be evoked by using the object's name, the dot notation and finally key name. *ex. hotel.name*. The *dot* used in between the object's name and the key is called, **dot notation**.

Examples of how we can create an object are, **literal notaitons** and **constructor notation**.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```JavaScript
var petStore = {
  dryFood: 10,
  wetFood: 20,
  treats: 5,
  toys: 100,
  beds: 40,
totalFood: function() {
  console.log(this.dryFood + this.wetFood)
  }
};
petStore.totalFood();
//expected output: 30
console.log(petStore.dryFood);
//expected output: 10
petStore.toys;
//expected output: 100
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```JavaScript

var states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"};
states["IA"];
//expected output: "Iowa"
//or
var states = {
    "CO": "Colorado",
    "IA": "Iowa",
    "OK": "Oklahoma"
};
console.log(states.IA);
//expected output: "Iowa"

```
1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
```JavaScript
var states = {
    "CO": "Colorado",
    "IA": "Iowa",
    "OK": "Oklahoma"
};
  states["MN"] = "Minnesota";
states["MN"]();
//expected ooutput: "Minnesota"
console.log(states.MN);
//expected output: Minnesota
```
1. What is another example of when we might use an object?  In this case, why is an object better than an array?

An other example on how we can use objects are when describing food and their calories content and we want to access the information in an unordered way.

```JavaScript

var food = {
  hamburger: 354,
  hotDog: 151,
  mashedPotatoes: 214,
  steamedVegetables: 46,
  beer: 154,
mealCalories: function() {
  console.log(this.hamburger + this.beer)
  }
};
food.mealCalories();
//expected output: 508
```

An object allows us to bring material objects found in our world to the  programming world. We achieve this by listing their properties in a way that we can access its characteristics. When we have multiple examples that share the same parameters or characteristics, then we can use Objects and save the parameters to use them as many times a as we need them. When we need to find a parameter given to an Object, we can reference it using the Key name instead of using an Index number. In the example above we can apply a method to obtain a new piece of data.

1. What questions do you still have about objects?
