![questions](https://citydadsgroup.com/nyc/wp-content/uploads/sites/2/2017/06/questions-scrabble.jpg)

# Day 3 Questions

#### 1. What is a conditional statement? Give three examples.

- A conditional statement in JavaScript is a type of statement that we use to figure out what code an interpreter will execute depending on the values of the variables that we have provided the interpreter
- "if" statements tell the interpreter what code to execute if a condition is met
- "if else" statements tell the interpreter what code to execute if a condition is met and give it another option if the condition is not met in the "if" statement
- "else if" statements tell the interpreter what code to execute if a condition is met and give it another option if the condition is not met in the "if" statement but after that it also gives the interpreter another option just in case neither of those have been met. "Else if" statements can be added as many times as needed so at the basic level an "else if" statement can have 3 options but you can give it as many options as you would like.

#### 2. Why might you want to use an if-statement?

- An "if statement" would be needed for very binary decisions our outcomes or very simple questions like "Am I older than 25 years old?" I would give an if statement a variable like `age` and give the "if statement" code like `if (age >= 25) {console.log("yes");}`

#### 3. What is the JavaScript syntax for an if statement?

```
if (age >= 25){
  console.log("yes");
}
```

#### 4. How do you add multiple conditions to an if statement?

- To add multiple conditions you add the "and operator" to the condition
- Example: `(cupsOfFlour < 2 && hasSauce == true)`

#### 5. What is the JavaScript syntax for an if/else or else/if statement?

##### If else:

```
if (conditionOne === 1) {
  // code
} else {
  // code
}
```

##### Else if:

```
if (conditionOne == 1){
  // code
} else if (conditionOne == 2){
  // code
} else if (conditionOne >= 3){
    // code
}
```

#### 6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

- Other than an if-statement we might want to use a conditional statement in an "if/else" or an "else/if" scenario
- If statements are good to use if you want to give your interpreter one set of code to execute but if you want to give the interpreter two sets of code you would use an "if/else" statement and for more than two options/sets of code you would use an "else/if" statement.

###### "If/else" statement example:

- Am I 25 or older?

```
var age = 12;

if (age >= 25){
  console.log("yes");
} else {
  console.log("no");
}
```

###### "Else/if" statement example:

- Is this shirt striped & v-neck?

```
var shirtDesign = "striped"
var cut = "v-neck"

if (shirtDesign == "striped" && cut == "v-neck"){
  console.log("yes");
} else if (shirtDesign == "striped" && cut == "crew"){
  console.log("no");
} else {
  console.log("no");
}
