## Day 6 Questions

1. In your own words, what is a Class?

A blueprint that allows up to make multiple instances of that class

1. In relation to a Class, what is a property?

A property is the key in a key/value pair. It holds data for an object instance, which is found within a class

1. In relation to a Class, what is a method?

A method is a function that is found within an object. The object, in turn, is found within a class

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
var car = {
fuelCapacity: 15
miles: 0

calculateMpg: function () {
  return this.miles / this.fuelCapacity;
}
drivenMiles: function () {
  return this.miles +1;    //per mile
}
};
```

1. How do you create an instance of a class?

```
var car = {
  make: "Toyota",
  model: "Tacoma"
}
```

1. What questions do you still have about classes in JavaScript?

Classes seem to make a fair amount of sense to me. At this time I can't think of any questions regarding classes.
