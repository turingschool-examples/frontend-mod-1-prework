## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object is a collect of key/value pairs, as well as functions. Objects are used to group together related pieces of code by state(info) and method(function). Where as an Array is just a collection of data. 

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
    kibble: 20,
    bits: 7,
    fishbowls: 342,
    leashes: 12
    function: feedAnimal(animal) {
        console.log(`I am going to feed the ${animal}`)
    }
}
petStore.feedAnimal(piranha);

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states["IA"];

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

states["MN"] = "Minnesota";

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

We would use an object would be better when modeling a school. Each piece of data will have a value that needs a key. For example:
```
var school = {
    numberOfTeachers: teachersArray.length,
    teachers: teachersArray,
    numberOfStudents: studentsArray.length,
    students: studentsArray
}
```
But a school also has functions that it carries out.
```
var school = {
    numberOfTeachers: teachersArray.length,
    teachers: teachersArray,
    numberOfStudents: studentsArray.length,
    students: studentsArray 
    function: dismissStudents(numberOfStudents) {
        console.log(`All ${numberOfStudents} students have left the building!`)
    }
}
```

6. What questions do you still have about Objects?
