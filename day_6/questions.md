## Day 5 Questions

1. In your own words, what is a Class?

A class is a category of a thing or a specific type of object. As referenced in class, we can use classes as factories to make multiple objects that have the same properties, but different values.

1. In relation to a Class, what is a property?

A property is an attribute that has been associated with a class.

1. In relation to a Class, what is a method?

A method is a behavior, it's something that utilizes, changes, and or modifies the properties of the class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```JavaScript
class Car {
constructor (miles, style) {
this.totalMiles = miles
this.style = style
}
drive (miles) {
this.totalMiles = this.totalMiles + miles  
}
newTires (style) {
  console.log("Off-road")   
 }
}

```

1. How do you create an instance of a class?

You can create an instance of a class by using `new`
```
var dansWrangler = new Car ("100k", "Off-road")
```

1. What questions do you still have about classes in JavaScript?

I'm still a tad confused on what can and can't go inside of the constructors parentheses.
