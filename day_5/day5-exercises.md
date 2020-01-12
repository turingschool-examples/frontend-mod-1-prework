#### How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
Use the keyword `var` to declare a variable.  The `=` in JS is called an assignment  operator.  It tells the computer that you are assigning a value to the variable. `var example` followed by `example = assignedValue`

#### There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
Numbers are: 100 , -1000 or .02392 Used for counting or calculating sums.
stings are 'used when adding text to a page, and they can use HTML markup.'
Boolean is true or false, yes/no, can be used in code blocks for specific parts of scripts.

#### What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
```JavaScript
<p>6 rules for naming variables</p>
<ol>
  <li>Name cannot start with a number</li>
  <li>You cannot use as a - or .</li>
  <li>You cannot use a reserved keyword, such as var as the variable name.</li>
  <li>variables are case sensitive, so Melissa is a different variable than melissa. </li>
  <li>Use a descriptive variable name, like firstName or petName</li>
  <li>When using multiple words as a variable, use camelCaseForReadability</li>
</ol>
```
A few reserved keywords are `var`, `let`, `null`, `function`
#### How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
An array is fantastic to use with a list for a variable.  The list is not definite, you can change items or add to the array at a later time if needed.

```JavaScript
var transportation;
transportation = ['airplane',
        'car',
        'train',
        'lightrail',
        'bike',
        'scooter'];
transportation[3] = 'bus';
```

#### What is the difference between an expression and a statement?
Expressions evaluates into a single value:
`var dogName = 'Oscar';` and
`var area = 4 * 2`;


A statement is a series of information that computer can follow for a result, like the steps in a recipe.
```JavaScript
var a;
var b;
var c;
a = 3;
b = 4;
//and so on
```

#### What are three types of operators and how are they used?
operators work with expressions, and they all programmers to calculate a single value from one or more values.
Three types of operators are:

1. Assignment `color = purple;` value is now purple
2. Arithmetic `area = 3 * 2;` area is now 6
3. String `greeting  = 'Hello, ' + 'World!';` value of greeting is now Hello, World!

<hr>
<h3> Console.log practice </h3>
1.

``` JavaScript
var numberOfChildren;
var partnersName;
var geographicLocation;
var jobTitle;
numberOfChildren = 15;
partnersName = "Taylor";
geographicLocation = "Mexico";
jobTitle = "CTO";
"CTO"
fortune = ("You will be a " + jobTitle + " in " + geographicLocation + ", " + "and married to " + partnersName + " with " + numberOfChildren + " kids.")
"You will be a CTO in Mexico, and married to Taylor with 15 kids."
console.log(fortune)
VM2562:1 You will be a CTO in Mexico, and married to Taylor with 15 kids.
```


2.
``` JavaScript
var currentYear;
var birthYear;
currentYear = 2020;
birthYear = 1979;
1979
var age1 = currentYear - birthYear;
undefined
console.log('You are either ' + age1 + ' or ' + (age1 + 20));
VM3124:1 You are either 41 or 61
```

3.
```JavaScript
var currentAge;
var maximumAge;
var amountPerDay;
currentAge = 40;
maximumAge = 95;
amountPerDay = 12;
amountNeeded = (maximumAge - currentAge) * (12 * 365);
240900
console.log('You will need ' + amountNeeded + ' to last you until the ripe old age of ' + maximumAge + '.');
VM3715:1 You will need 240900 to last you until the ripe old age of 95.
```
