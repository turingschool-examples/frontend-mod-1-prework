## Day 3 Questions

1. What is a conditional statement? Give three examples.

Cause and Effect might be a pretty good way of describing what a conditional statement is. I see it this way, a conditional is put together by  `if` statements (cause and effect), IF this happens THEN this happens. This is influenced by the statement being true or false. So, if my car was gassed, (true) then I could go to the store. If my car was not gassed, (false) then I could ***NOT*** go to the store. If I have gas and money, I can drive the car to go buy a new (ISH) car! If I don't have gas or money, then I can't go anywhere and I can't buy a new car.


1. Why might you want to use an if-statement?

I might want to use an if-statement when i'm trying to iterate a cause and effect. It's a good way of logging multiple variables of code, and getting them to only come up when the time is right. I would  use an if-statement if i wanted to control what happens in my code during more specific circumstances.

1. What is the JavaScript syntax for an if statement?
```JavaScript
var cashMoney = 3999
var gassedCar = false
if (cashMoney >= 4000 && gassedCar == true) {
  console.log("I have cash, and I can go buy a new (ISH) car")
} else if (cashMoney < 4000 && gassedCar == true) {
  console.log("I can go somewhere, but I can't buy a new (ISH) car")
} else if (cashMoney >= 4000 && gassedCar == false) {
  console.log("I have the cash, but I dont have gas to go buy a new (ISH) car")
} else if (cashMoney < 4000 && gassedCar == false) {
  console.log("Im totally broke, and I can't go anywhwere")
}

```


1. How do you add multiple conditions to an if statement?

If I were to add another condition in my if-statement, id have to first start it:

```JavaScript
var cashMoney = 3999
var gassedCar = false
if (cashMoney >= 4000 && gassedCar == true) {
console.log("I have cash, and I can go buy a new (ISH) car")
}
```

After each closing curly brace at the end, to simply add another condition I would insert: `else if` and input the desired amount of conditions.  


1. What is the JavaScript syntax for an if/else if/else statement?

```JavaScript
else if (cashMoney < 4000 && gassedCar == true) {
  console.log("I can go somewhere, but I can't buy a new (ISH) car")
} else if (cashMoney >= 4000 && gassedCar == false) {
  console.log("I have the cash, but I dont have gas to go buy a new (ISH) car")
} else if (cashMoney < 4000 && gassedCar == false) {
  console.log("Im totally broke, and I can't go anywhwere")
}

```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
