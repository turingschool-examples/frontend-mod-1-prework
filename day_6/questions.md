## Day 5 Questions

1. In your own words, what is a Class?
>A class is used to group together specific methods that are meant to work together on a a chunk of values/data.

1. In relation to a Class, what is a property?
> A property is a specific attribute of a class, something that every instance of the class has. A person class has properties like name, age, height, etc. Properties are defining attributes that can be assigned unique data.

1. In relation to a Class, what is a method?
> A method is an action that can either use or modify a property. Methods are functions that can be applied to a class and its properties.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
> class Car() { <br>
    constructor(make, model, sold, clean) {<br>
>      this.make = make;<br>
>      this.model = model;<br>
>      this.sold = false;<br>
>      this.clean = true;<br>
>  }<br>
>    makeSale() {<br>
>      this.sold = true;<br>
>  }<br>
>    driveOffRoad() {<br>
>      this.clean = false;<br>
>  }<br>
>};

1. What is the syntax to create an instance of a class?
> class Car{ }; <br>
> var carOne = new Car(); <br>
><br>
> carOne will be a new instance of the Car class.

1. What questions do you still have about classes in JavaScript?
> I need to practice a bit more with the syntax and get a bit more familiar with calling methods.
