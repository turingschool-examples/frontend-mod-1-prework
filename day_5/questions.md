## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
* An ``object`` is way to store data, more specifically it is a bundle of states and behaviors.
* an ``object`` is different from an ``array`` in that its ``values`` can hold ``strings``, ``booleans``, ``numbers`` and ``methods`` aka ``functions`` as opposed to an ``array`` whos ``values`` are only tied to an ``index`` number, and _cannot_ perform ``functions``

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
  *
  ```javaScript
var petStore = {
name: "More Than Cat Food!",
dogs: ["golden retriever", "german shephard", "dachshund", "poodle", "springer spaniel"],
numDogs: function() {
  return this.dogs.length;
},
sellsCatFood: true,
cansIamsCatFood: 100
};
  ```


3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
* ``states.IA``

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
  * ``states.MN = "Minnesota";``

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
  * Literally _anything_ that has characteristics you want to list more in depth.
  * you can have an array of teachers, listing all of the teachers in your school, have a total, add & subtract as they come and go, thats handy.
  * You can also turn every teacher into an object and input useful information rather than just how many of a lot they are.
  *
  ```Javascript
  teachers = ["ryan", "danielle", "rickie", "alex", "kiran"];

  var ryan = {
    graduated: "Drexel University",
    subjects: ["math", "typing", "history"],
    yearsTeaching: 10,
    yearsEmployed: 3,
  };

  ```


6. What questions do you still have about Objects?
  * This bit seemed different than all of the others, I suppose it's dated, as it referenced a lesson from mod 0 that we did not have.
  * My question is: is there a way to view my object that will return a function rather than just returning ``key: [Function: reference]``?
  I'm currently using ``console.log``, or ``object.key``. Thanks!
