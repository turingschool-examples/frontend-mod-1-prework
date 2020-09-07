## Day 5 Questions

1. In your own words, what is a Class?7
> Classes allow us to group data into meaningful collections when working with an object that contains idential key properties, but differening values.   

1. In relation to a Class, what is a property?
> Properties are our ability to see what's happening at an object instance level. Properties can be shared across an object's class, but the values will differ.  

1. In relation to a Class, what is a method?
> Methods show us what a class can _do_. Methods also allow us to change (add, subtract, modify) an object's properties.  

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class car {
    constructor(color, accidentFree, miles){
        this.color = color;
        this.accidentFree = true;
        this.miles = miles;

    }
    carAccident() {
        this.accidentFree = false;
    }

    honk() {
        console.log("Beep-Beep!");
    }
}
```

1. What is the syntax to create an instance of a class?
```
class spectacularBirds {
    
};

var greatBlueHeron = new spectacularBirds();
```

1. What questions do you still have about classes in JavaScript?
>  When using a method to modify a class and its instances, when does the method need to have a name reassigned? (in example below, I'm confused about the "newLocation"/between parathesis role)
``` 
...
move(newLocation) {
    this.location.replace (this.location, newLocation);
}
...
```