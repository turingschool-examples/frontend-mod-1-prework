If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?

    Entering sayHello just returns the definition of the function as defined.

    Entering sayHello() actually runs the function and returns Hello!

What is the difference between function parameters and arguments?


    Parameter is a placeholder for the variable. Argument is the value of the variable.

What is the keyword return used for?

    To return a value to the code that called the function.

How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

    Local variables are only remembered as long as the function is being executed, so your load times will be faster. I think  you'd want to use global variables if you will use them in multiple functions.

Console exercises:

```
function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.'; console.log(future);
}
undefined
tellFortune
ƒ tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.'; con…
tellFortune('dog walker', 'Spain', 'Orion', 20);
VM877:3 You will be a dog walker in Spain and married to Orion  with 20 kids.
undefined
tellFortune('Professional Trail Runner', 'Moab', 'Zod', 0');
VM2665:1 Uncaught SyntaxError: missing ) after argument list
tellFortune('Professional Trail Runner', 'Moab', 'Zod', 0);
VM877:3 You will be a Professional Trail Runner in Moab and married to Zod  with 0 kids.
undefined
tellFortune('Casa Bonita Cliff Diver', 'Denver', 'Henry Cavill', 3);
VM877:3 You will be a Casa Bonita Cliff Diver in Denver and married to Henry Cavill  with 3 kids.
undefined
funtion calculateAge(birthYear, currentYear) {
VM3076:1 Uncaught SyntaxError: Unexpected identifier
funtion calculateAge(birthYear, currentYear) {var age = currentYear - birthYear;	console.log('You are either' + age +'or ' + (age -1));
VM3317:1 Uncaught SyntaxError: Unexpected identifier
funtion calculateAge(birthYear, currentYear)
VM3335:1 Uncaught SyntaxError: Unexpected identifier
funtion calculateAge(birthYear, currentYear) {var age = currentYear - birthYear;	console.log('You are either' + age +'or ' + (age -1));}
VM3347:1 Uncaught SyntaxError: Unexpected identifier
function calculateAge(birthYear, currentYear) {
    var age = currentYear - birthYear;
    console.log('You are either' + age + ' or ' + (age - 1));
}
undefined
calculateAge(1990, 2019);
VM3818:3 You are either29 or 28
undefined
calculateAge(1980, 2019);
VM3818:3 You are either39 or 38
undefined
calculateAge(1919, 2019);
VM3818:3 You are either100 or 99
undefined
function calculateSupply(age, dailyAmount) {
    var age = currentYear - birthYear;
    var maxAge = 100;
    var totalAmount = (dailyAmount * 365) * (maxAge - age);
    console.log('You will need ' + totalAmount + ' pounds of guacamole to last umtil the ripe age of' + maxAge;
VM4991:5 Uncaught SyntaxError: missing ) after argument list
function calculateSupply(age, dailyAmount) {
    var age = currentYear - birthYear;
    var maxAge = 100;
    var totalAmount = (dailyAmount * 365) * (maxAge - age);
    console.log('You will need ' + totalAmount + ' pounds of guacamole to last umtil the ripe age of' + maxAge);
}
undefined
calculateSupply(29, 1)
VM5024:2 Uncaught ReferenceError: currentYear is not defined
    at calculateSupply (<anonymous>:2:15)
    at <anonymous>:1:1
calculateSupply @ VM5024:2
(anonymous) @ VM5063:1
function calculateSupply(age, dailyAmount) {
    var maxAge = 100;
    var totalAmount = (dailyAmount * 365) * (maxAge - age);
    console.log('You will need ' + totalAmount + ' pounds of guacamole to last umtil the ripe age of' + maxAge);
}
undefined
calculateSupply(29,1)
VM5076:4 You will need 25915 pounds of guacamole to last umtil the ripe age of100
undefined
calculateSupply(35, 2)
VM5076:4 You will need 47450 pounds of guacamole to last umtil the ripe age of100
undefined
calculateSupply(40,1.5)
VM5076:4 You will need 32850 pounds of guacamole to last umtil the ripe age of100
undefined
```
w3 exercises

10.
```
function multiplication(num1, num2) {
	return num1* num2
}
console.log(multiplication(2,3))
```
