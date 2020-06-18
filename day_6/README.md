# Day 6 - Classes

Today, you are going to be learning about Objects and Classes. In Javascript, Classes are one of the tools we use to group together specific Methods that are meant to work together, or on the same type of Object. Arriving at Turing with a strong understanding of how to build a class, and how to call Methods on that class will make your first couple of weeks go smoothly!

When you are all done with the lessons, exercises, and questions for today, you will once again use git to save your work, and then put it in the cloud on Github.

## Open your local copy of frontend-mod-1-prework

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the day_1 instructions.

## Classes

On day 5 you learned about Objects - what they look like, how they store data, how to access that data. Specifically, you learned about **Object Literal**, which allows you to create individual objects with multiple *properties*, made up of **key-value pairs**. There will be cases where you want to make duplicates of the same object. This is where Classes come in handy.

Objects are created from classes. Think of classes as molds and objects as the things you produce out of those molds. Individual objects will contain different information from other objects, yet they are instances of the same class. Creating an object using **Object Literal**, uses the Object class under the hood.

```javascript
var person = {
  firstName: "Sabrina",
  lastName: "Spellman"
}

// Is the same as:

var person = new Object();
person.firstName = "Sabrina";
person.lastName = "Spellman";
```

But what is the Object class? What even is a class?

Javascript defines the properties and methods of its objects in classes. You can think of classes as basic outlines of what an object should be made of and what it should be able to do. To define a class, we use the keyword `class` and use the CamelCase naming convention to create the name.

```javascript
class GoodDog {

};

var bolt = new GoodDog();
```

In the above example, we created an instance of our `GoodDog` class and stored it in the variable `bolt`. We now have an object. We say that `bolt` is an object or instance of class `GoodDog`. This entire workflow of creating a new object or instance from a class is called **instantiation**, so we can also say that we've instantiated an object called `bolt` from the class `GoodDog`. The terminology is something you'll eventually get used to, but the important fact here is that an object is returned by calling the class method new. Take a look at the figure below to visualize what we're doing.

![class_instance_diagram](https://user-images.githubusercontent.com/28467245/76000500-08597180-5ec1-11ea-9cf6-274a4de89051.jpg)

Conceptually, the class is our blueprint to create individual objects. `GoodDog` is our class, which is our blueprint for creating new instances of that class - our individual dog objects. `bolt`, `sparky`, and `fido` are all instances of the `GoodDog class`, which were created by using the `new GoodDog();` technique.

Making objects is all well and good, but why would we make objects without any information? Objects are useful for storing data, so we should add some information. A **constructor** is like a cookie-cutter for making multiple objects with the same properties and methods. The constructor method gets called every time you create a new object.

```javascript
class GoodDog {
  constructor() {
  };
};

var bolt = new GoodDog();
```

When defining a class, we typically focus on two things: state and behavior. State tracks properties for individual objects. Behavior is what objects are capable of doing. Let's modify our GoodDog class to contain state by giving our dog a name.

```javascript
class GoodDog {
  constructor() {
    this.name = "Bolt";
  }
};

var bolt = new GoodDog();
```

You'll notice something new here. The `this.name` variable looks different because it has `this` in front of it. ``this`` refers to the object that ``this`` is contained in. We create a **_property_**, `name`, on our new instance of `GoodDog`. `this.name` is a variable that exists as long as the object instance exists and it is one of the ways we tie data to objects. It does not "die" after the constructor method is executed. It "lives on", to be referenced, until the object instance is destroyed. The object `bolt` that is created from the `GoodDog` constructor looks like this:

```javascript
var bolt = {
  name: "Bolt";
}

console.log(bolt.name); // logs "Bolt"
```

Every time we create a new instance of the `GoodDog class`, the dog object that is made will have a `name` property of `"Bolt"`. We can change the `GoodDog class` so that we can create multiple dog objects with different names.

```javascript
class GoodDog {
  constructor(name) {
    this.name = name;
  }
};

var bolt = new GoodDog("Bolt");
var sparky = new GoodDog("Sparky");
```

In the above example, our constructor method takes a parameter called name. You can pass arguments into the constructor method through the new method. The keyword `new` creates a new object instance of the `GoodDog class`. We made two GoodDog objects: one named "Bolt" and one named "Sparky". They are both `GoodDog objects`, but may contain different information, such as `name`, `weight`, and `height`. We use our object's **_state_** to track this information. This should tell you that **_state_** is scoped at the object instance level, and are how objects keep track of their **_properties_**.

```javascript
class GoodDog {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
};

var bolt = new GoodDog("Bolt", "50lbs", "20in");
var sparky = new GoodDog("Sparky", "66", "24in");
```

 The objects `bolt` and `sparky` will look like this:

```javascript
var bolt = {
  name: "Bolt",
  weight: "50lbs",
  height: "20in"
}

var sparky = {
  name: "Sparky",
  weight: "50lbs",
  height: "24in"
}
```

Even though they're two different objects, both are still object instances of class `GoodDog`. Since `bolt` and `sparky` are dogs, they should both have behavior that dogs would have. For example, both GoodDog objects should be able to bark, run, fetch, and perform other common methods of good dogs. **_Methods_** defined in a class are available to object instances of that class. For this next example, the `weight` and `height` properties have been removed for simplicity.

```javascript
class GoodDog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("Arf!");
  }
};

var bolt = new GoodDog("Bolt");

console.log(bolt.bark()); // logs "Arf!"
```

We call the **_method_** `bark` on our object instance of `bolt`. This logs the output of `Arf` in the console. Let's try it with a new dog!

```javascript
var sparky = new GoodDog("Sparky");

console.log(sparky.bark()); // logs "Arf!"
```

Our second `sparky object` can also perform `GoodDog` behaviors. Again, all objects of the same class have the same behaviors, though they contain different states; here, the differing state is the `name`.

What if we wanted to not just say "Arf!", but say "Sparky says arf!"? In our methods we have access to our instance object's properties. So, we can use string concatination and change our speak method to this:

```javascript
class GoodDog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(this.name + " says arf!");
  }
};

var bolt = new GoodDog("Bolt");

console.log(bolt.bark()); // logs "Bolt says arf!"
```

**_Methods_** can not only reference our object's properties, but they can also modify them or even add new properties. Let's create a **_method_** that walks our dog. The **_method_** will add a new **_property_** of `walked` to our object instance of `GoodDog`.

```javascript
class GoodDog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(this.name + " says arf!");
  }

  takeForAWalk() {
    this.walked = true;
  }
};

var bolt = new GoodDog("Bolt");
```

Before we call the `takeForAWalk` **_method_**, the `bolt` object looks like this:

```javascript
var bolt = {
  name: "Bolt"
}
```

Now, let's call the `takeForAWalk` **_method_** and see how the `bolt` object changes.

```javascript
bolt.takeForAWalk();

var bolt = {
  name: "Bolt",
  walked: true
}
```

Now, the `takeForAWalk` **_method_** added a **_property_** of `walked`, which is assigned to `true`, on our `bolt` object.

**_Methods_** can also modify existing **_properties_** on our objects. Let's change our `GoodDog` class to contain an array of `bones` as a **_property_**.

```javascript
class GoodDog {
  constructor(name) {
    this.name = name;
    this.bones = [];
  }

  bark() {
    console.log(this.name + " says arf!");
  }

  takeForAWalk() {
    this.walked = true;
  }

  giveABone(bone) {
    this.bones.push(bone);
  }
};

var bolt = new GoodDog("Bolt");
```

Before we call the `giveABone` **_method_**, the `bolt` object looks like this:

```javascript
var bolt = {
  name: "Bolt",
  bones: []
}
```

Now, let's call the `giveABone` **_method_** and see how the `bolt` object changes.

```javascript
bolt.giveABone("rawhide");

var bolt = {
  name: "Bolt",
  bones: ["rawhide"]
}
```

In summary, classes are blueprints that are used to create instances of objects. In our example, the `GoodDog class` itself doesn’t represent a dog, it’s the idea of what a dog is like. To represent an actual dog we created an instance of the `GoodDog class`, which was our good dog `bolt`. An object's **_properties_** keep track of state, and it's **_methods_** expose behavior for objects.

1. Read and work through the [Classes, `this`, & Object Instances lesson plan](https://frontend.turing.io/lessons/module-1/object-instances-classes.html).

1. Work through the files in the day_6/exercises directory.

1. Answer the questions in the questions.md file in the day_6 directory.

## Save your work in Git

When you are finished with all of the day_6 activities, use your terminal to run the following commands in order to save your work to your local git repository.

1. `$ git add day_6/exercises`
1. `$ git add day_6/questions.md`
1. Use `git add day_6/<filename>` to add all additional files that you created today
1. `$ git status` - you should see only green filenames - if you see any that are red, continue to `git add` those files until `git status` shows all green files.
1. `$ git commit -m "Add Day 6 Work"`

## Push to Github

You've save your work to git on your **local** machine, but it is not yet accessible through your **remote** Github repository. Updating our **remote** Github repository with our **local** changes is called **pushing**. Push your code with the following command:

```
git push origin master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!
