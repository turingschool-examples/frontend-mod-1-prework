## Day 6 Questions

#### 1. In your own words, what is a Class?

A class is a blueprint or template for object instances, allowing for easily transferring a property(key) to an object belonging to that class.

---

#### 2. In relation to a Class, what is a property?
In a class the property is the key portion of the key-value pair.

__For Example :__

```javascript
class className {
  constructor(){
    this.property = "value";
  }
}

```
---

#### 3. In relation to a Class, what is a method?

In relation to a class a method is a function specific to the object instances of that class. Similar to any other method just localized to that class and its instances.


---

#### 4. In the space below, create a Car class with at least 2 attributes and 2 methods

```javascript
class car {
  constructor(brand, model){
    this.brand = brand;
    this.model = isNew;
  }
  makeJeep() {
    this.brand = 'Jeep';
  }
  makeWrangler() {
    this.model = 'Wrangler';
  }
}

```

---

#### 5. How do you create an instance of a class?

Create a new variable with the value being __new__ and the class name and of course ending with a semi-colon.   

__For Example:__

```javascript
var jeep = new car;
```

---

#### 6. What questions do you still have about classes in JavaScript?

The lesson covered a ton, I guess the only things I had a couple problems with was incorporating some functions into the class but with more practice it will come quickly. Things just function a bit different in a class. Thanks it was a really fun lesson.


---
