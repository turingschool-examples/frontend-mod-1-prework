1. *If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?* `sayHello` references the function itself while `sayHello()` calls and executes the function.
2. *What is the difference between function parameters and arguments?* Parameters are words used as variables within a function. Arguments are numerical values used as variables in a function.  
3. *What is the keyword `return` used for?* Return stops the execution of a function and produces a value if required.
4. *How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?* Local variables are preferable because global variables remain in the browser's memory until the page is refreshed, so it can take longer for the page to load. Additionally, local variables can have the same name without causing naming conflicts. However, global variables can be preferable if the same variable and value will be reused several times throughout your code.

```
function tellFortune(numChildren, jobTitle, partnerName, place) {
var futureLife = "You will be a " + jobTitle + " in " + place + ", and married to " + partnerName + " with " + numChildren + " kids.";
}
undefined
tellFortune(0, "software engineer", "Jae", "Europe");
undefined
tellFortune();
undefined
tellFortune(0, "software engineer", "Jae", "Europe");
undefined
console.log(future);
VM2904:1 Uncaught ReferenceError: future is not defined
    at <anonymous>:1:13
(anonymous) @ VM2904:1
console.log(futureLife);
VM2974:1 Uncaught ReferenceError: futureLife is not defined
    at <anonymous>:1:13
(anonymous) @ VM2974:1
function tellFortune(numChildren, jobTitle, partnerName, place) {
var futureLife = "You will be a " + jobTitle + " in " + place + ", and married to " + partnerName + " with " + numChildren + " kids.";
return futureLife;
}
undefined
tellFortune(0, "software engineer", "Jae", "Europe");
"You will be a software engineer in Europe, and married to Jae with 0 kids."
function tellFortune(numChildren, jobTitle, partnerName, place) {
var futureLife = "You will be a " + jobTitle + " in " + place + ", and married to " + partnerName + " with " + numChildren + " kids.";
console.log(futureLife);
}
undefined
tellFortune(0, "software engineer", "Jae", "Europe");
VM3072:3 You will be a software engineer in Europe, and married to Jae with 0 kids.
undefined
tellFortune(2, "motorcyclist", "Rick," "Australia");
VM3214:1 Uncaught SyntaxError: missing ) after argument list
tellFortune(2, "motorcyclist", "Mick", "Australia");
VM3072:3 You will be a motorcyclist in Australia, and married to Mick with 2 kids.
undefined
calculateAge(birth_year,current_year) {
var age1 =  current_year - birth_year;
var age2 = (current_year - birth_year) - 1;
var currentAge = "You are either" + age1 " or " + age2 ".";}
VM3646:1 Uncaught SyntaxError: Unexpected token '{'
function calculateAge(birth_year,current_year) {
var age1 =  current_year - birth_year;
var age2 = (current_year - birth_year) - 1;
var currentAge = "You are either" + age1 " or " + age2 ".";}
VM3667:4 Uncaught SyntaxError: Unexpected string
calculateAge(birth_year,current_year) {
var age1 =  current_year - birth_year;
var age2 = (current_year - birth_year) - 1;
var currentAge = "You are either " + age1 + " or " + age2 ".";
return currentAge;
}
VM3698:1 Uncaught SyntaxError: Unexpected token '{'
function calculateAge(birth_year,current_year) {
var age1 =  current_year - birth_year;
var age2 = (current_year - birth_year) - 1;
var currentAge = "You are either " + age1 + " or " + age2 ".";
return currentAge;
}
VM3720:4 Uncaught SyntaxError: Unexpected string
function calculateAge(birth_year,current_year) {
var age1 =  current_year - birth_year;
var age2 = (current_year - birth_year) - 1;
var currentAge = "You are either " + age1 + " or " + age2 + ".";
return currentAge;
}
undefined
calculateAge(1994,2020)
"You are either 26 or 25."
function calculateAge(birth_year,current_year) {
var age1 =  current_year - birth_year;
var age2 = (current_year - birth_year) - 1;
var currentAge = "You are either " + age2 + " or " + age1 ".";
return currentAge;
}
VM3811:4 Uncaught SyntaxError: Unexpected string
function calculateAge(birth_year,current_year) {
var age1 =  current_year - birth_year;
var age2 = (current_year - birth_year) - 1;
var currentAge = "You are either " + age2 + " or " + age1 + ".";
return currentAge;
}
undefined
calculateAge(2000,2020)
"You are either 19 or 20."
calculateAge(1980,2020)
"You are either 39 or 40."
calculateAge(1900,2020)
"You are either 119 or 120."
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentge) * perDay) + " to last you until the ripe old age of " + maxAge + ".";
return lifetimeSupply;}
undefined
calculateSupply(20,10);
VM4489:3 Uncaught ReferenceError: currentge is not defined
    at calculateSupply (<anonymous>:3:52)
    at <anonymous>:1:1
calculateSupply @ VM4489:3
(anonymous) @ VM4563:1
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * perDay) + " to last you until the ripe old age of " + maxAge + ".";
return lifetimeSupply;}
undefined
calculateSupply(20,10);
"You will need 400 to last you until the ripe old age of 60."
calculateSupply(25,5)
"You will need 175 to last you until the ripe old age of 60."
calculateSupply(30,10)
"You will need 300 to last you until the ripe old age of 60."
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * (perDay * 365) + " to last you until the ripe old age of " + maxAge + ".";
return lifetimeSupply;}
VM4716:3 Uncaught SyntaxError: Unexpected token ';'
function calculateSupply(currentAge, perDay) {
var maxAge = 60
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * (perDay * 365) + " to last you until the ripe old age of " + maxAge + "."
return lifetimeSupply;}
VM4723:4 Uncaught SyntaxError: Unexpected token 'return'
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * (perDay * 365) + " to last you until the ripe old age of " + maxAge + ".";
return lifetimeSupply;
}
VM4728:3 Uncaught SyntaxError: Unexpected token ';'
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * (perDay * 365) + " to last you until the ripe old age of " + maxAge + "." ;
return lifetimeSupply;}
VM4733:3 Uncaught SyntaxError: Unexpected token ';'
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * (perDay * 365) + " to last you until the ripe old age of " + maxAge + "."
return lifetimeSupply;}
VM4738:4 Uncaught SyntaxError: Unexpected token 'return'
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * (perDay * 365) + " to last you until the ripe old age of " + maxAge + ".";
return lifetimeSupply;}
VM4744:3 Uncaught SyntaxError: Unexpected token ';'
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * perDay) + " to last you until the ripe old age of " + maxAge + ".";
return lifetimeSupply;}
undefined
calculateSupply(30,10)
"You will need 300 to last you until the ripe old age of 60."
function calculateSupply(currentAge, perDay) {
var maxAge = 60;
var lifetimeSupply = "You will need " + ((maxAge - currentAge) * (perDay *365)) + " to last you until the ripe old age of " + maxAge + ".";
return lifetimeSupply;}
undefined
calculateSupply(30,10)
"You will need 109500 to last you until the ripe old age of 60."
calculateSupply(25,5)
"You will need 63875 to last you until the ripe old age of 60."
calculateSupply(20,10);
"You will need 146000 to last you until the ripe old age of 60."
```
