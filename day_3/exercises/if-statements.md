*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/if-statements.js`
example, using the weather variable below, determine what you need to take
with you to be prepared based on the following conditions:

 /*
  if it is sunny, log "sunscreen"
 
  if it is rainy, log "umbrella"
  
  if it is snowy, log "coat"
  
  if it is icy, log "yak traks"
*/
  
> var weather = 'snowy';

> if (weather == 'sunny') {
  
>  console.log("sunscreen");
  
> } else if (weather == 'rainy') {
  
>  console.log("umbrella");
  
> } else if (weather == 'snowy') {
  
>  console.log("coat");
  
> } else if (weather == 'icy') {
  
>  console.log("yak traks");
  
> } else{
  
> console.log("good to go!");
  
> }

/*
Manipulate the variable 'weather' to see if you can print something other
than 'coat'
*/

var weather = 'sunny';

if (weather == 'sunny') {
  console.log("sunscreen");
} else if (weather == 'rainy') {
  console.log("umbrella");
} else if (weather == 'snowy') {
  console.log("coat");
} else if (weather == 'icy') {
  console.log("yak traks");
} else{
  console.log("good to go!");

will print sunscreen.

/* ----------------------------
Using the numQuarters variable defined below, determine
if you have enough money to buy a gumball. A gumball costs
two quarters. Right now, the program will log
out both "I have enough money for a gumball" and
"I don't have enough money for a gumball". Write
a conditional statement that only logs one or the
other.

You should be able to change num_quarters and achieve these outputs:
When numQuarters = 0, program should log "I don't have enough money for a gumball"
When numQuarters = 1, program should log "I don't have enough money for a gumball"
When numQuarters = 2, program should log "I have enough money for a gumball"
When numQuarters = 3, program should log "I have enough money for a gumball"
*/
____

var numQuarters = 0;

if (numQuarters >= 1) {
  console.log("I have enough money for a gumball");
} else {
console.log("I don't have enough money for a gumball");
}

I don't have enough money for a gumball

____

var numQuarters = 1;

if (numQuarters >= 1) {
  console.log("I have enough money for a gumball");
} else {
console.log("I don't have enough money for a gumball")
}

I don't have enough money for a gumball

____

var numQuarters = 2;

if (numQuarters >= 2) {
  console.log("I have enough money for a gumball");
} else {
  console.log("I don't have enough money for a gumball")
}

I have enough money for a gumball

____

var numQuarters = 3;

if (numQuarters >= 1) {
  console.log("I have enough money for a gumball");
} else {
  console.log("I don't have enough money for a gumball")
}

I have enough money for a gumball

____

***FULL STATEMENT:***

var numQuarters = 0;

if (numQuarters >= 0) {
  console.log("I don't have enough money for a gumball");
} else if (numQuarters >= 1){
console.log("I don't have enough money for a gumball");
} else if (numQuarters >= 2){
console.log("I have enough money for a gumball");
} else if (numQuarters >= 3){
console.log("I have enough money for a gumball");

I don't have enough money for a gumball

***FULL STATEMENT:***

var numQuarters = 88;

if (numQuarters == 0) {
  console.log("I don't have enough money for a gumball");
} else if (numQuarters == 1){
console.log("I don't have enough money for a gumball");
} else if (numQuarters == 2){
console.log("I have enough money for a gumball");
} else if (numQuarters == 3){
console.log("I have enough money for a gumball");
} else {
  console.log("I'd rather have a piece of chocolate.")
}

I'd rather have a piece of chocolate.

/* ----------------------------
Using the variables defined below, determine if you have the
ingredients to make a pizza. A pizza requires at least two cups
of flour and sauce.

You should be able to change the variables to achieve the following outputs:
When cupsOfFlour = 1 and hasSauce = true, your program should log "I cannot make pizza";
When cupsOfFlour = 1 and hasSauce = false, your program should log "I cannot make pizza";
When cupsOfFlour = 2 and hasSauce = true, your program should log "I can make pizza";
When cupsOfFlour = 3 and hasSauce = true, your program should log "I can make pizza";
*/

var cupsOfFlour = 1;
var hasSauce = true;

if (cupsOfFlour >= 2 && hasSauce == true) {
  console.log("I can make pizza");
} else {
console.log("I cannot make pizza");
}

I cannot make pizza

____

var cupsOfFlour = 1;
var hasSauce = false;

if (cupsOfFlour >= 2 && hasSauce == true) {
  console.log("I can make pizza");
} else {
console.log("I cannot make pizza");
}

I cannot make pizza

____

var cupsOfFlour = 2;
var hasSauce = true;

if (cupsOfFlour >= 2 && hasSauce == true) {
  console.log("I can make pizza");
} else {
console.log("I cannot make pizza");
}

I can make pizza

____

if (cupsOfFlour >= 2 && hasSauce == true) {
  console.log("I can make pizza");
} else {
console.log("I cannot make pizza");
}

I can make pizza

____

***FULL STATEMENT:***

var cupsOfFlour = 2;
var hasSauce = true;

if (cupsOfFlour == 1 && hasSauce == true){
  console.log("I cannot make pizza");
} else if (cupsOfFlour == 1 && hasSauce == false){
  console.log("I cannot make pizza");
} else if (cupsOfFlour == 2 && hasSauce == true){
  console.log("I can make pizza");
} else if (cupsOfFlour == 3 && hasSauce == true){
  console.log("I can make pizza");
}

I can make pizza

***FULL STATEMENT:***

var cupsOfFlour = -15;
var hasSauce = true;

if (cupsOfFlour == 1 && hasSauce == true){
  console.log("I cannot make pizza");
} else if (cupsOfFlour == 1 && hasSauce == false){
  console.log("I cannot make pizza");
} else if (cupsOfFlour == 2 && hasSauce == true){
  console.log("I can make pizza");
} else if (cupsOfFlour == 3 && hasSauce == true){
  console.log("I can make pizza");
} else {
  console.log("Let's order sushi again instead.")
}

Let's order sushi again instead.
