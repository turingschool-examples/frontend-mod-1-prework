## Day 6 Questions

### 1. In your own words, what is a Class?

A class is a parent template for objects. They can categorize groups of objects that have many of the same attributes and similar instances. The primary reason for them is to allow the creation of object instances which are essentially "things" that are totally singular.

### 2. In relation to a Class, what is a property?

If a class holds an object, an object holds a property which defines it's attributes or states. Properties are a form of keys which reference the value of the object's attributes and are one half of the `key-value pairing` way of organizing objects.

### 3. In relation to a Class, what is a method?

Similarly to properties, methods are also "grandfathered" by classes within objects. Methods define the behavior of the object by changing the values of properties.

### 4. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class car {
  constructor(owned, price) {
    this.owned = owned;
    this.price = price;
  }

  acquire() {
    this.owned = true;
  }

  setPrice() {
    price = 12000;
  }

};
```

### 5. How do you create an instance of a class?

You need to create a variant of the class. You can do that by using the `var` keyword, assigning it to whatever you want to call it and then setting that equal to the `new` keyword assigned that to the class. See example below pertaining to the car class above.

`var JP's 2007 Silver Subaru Forrester = new car;`

### 6. What questions do you still have about classes in JavaScript?

I am a bit confused on how I would create a method for a class? Is that just a function instead? Are methods only used on objects?
