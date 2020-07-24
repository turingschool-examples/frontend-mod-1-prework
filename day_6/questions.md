## Day 6 Questions

1. In your own words, what is a Class?
A class is a "mold" that can be used to create instances of objects that have the same set of properties and/or methods.

2. In relation to a Class, what is a property?
A property is a characteristic of the object its describing. The value of a property in a class is also known as the key in a key-value pair.

3. In relation to a Class, what is a method?
A method is something that the object does or something that can be done to the object.

4. In the space below, create a Car class with at least 2 attributes and 2 methods.

```
class car {
  constructor(make, model, color){
    this.make = make;
    this.model = model;
    this.color = color;
    this.drive = false;
  }
  paintJob(newColor){
    this.color = newColor;
  }
  testDrive(){
    this.drive = true;
  }
}
```

5. What is the syntax to create an instance of a class?
`var car1 = new car ("Jeep", "Cherokee", "White");`
You first create a new variable (var <name>) and then use new + the name of the class followed by the properties of the object are given in parentheses (based on the constructor format).

6. What questions do you still have about classes in JavaScript?

No questions but I wanted to share that classes are awesome!! I had so much fun building these - this day in the pre work is where I really felt things coming together and making more sense.
