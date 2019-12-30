# JavaScript & JQuery Chapter 2 Questions

1. **How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?**


You declare a variable in JavaScript using the `var` keyword as follows: `var dog = "Peaches"` The equals sign is called an assignment operator, and it assigns the value of *Peaches* to the dog variable.


1. **There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.**

- *integers:* Integers are numbers. They are used for counting or calculating sums. They can also be used for calculating measurements, moving elements on a page, or used to measure time.
- *strings:* Strings are comprised of letter or other characters. They are typically used when adding new content to a page and they can contain HTML markup.
- *booleans:* Booleans can return either true or false. They can be used to toggle settings, or to determine which part of a script should run.


1. **What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?**

- variable names should being with a letter, $, or underscore. They should *NOT* begin with a number
- variable names can contain letters, numbers, $, or underscore. They should *NOT* contain dashes or periods
- variables *CAN NOT* use **keywords** such as *for*, *case*, *function*, or **reserved words** such as *let*, *static*, *interface*
- variables are case sensitive, `exampleOne` is *NOT* the same as `ExampleOne`
- variable names should be clear so that your code is not confusing. `firstName` and `lastName` vs `nameOne` and `nameTwo`
- if variable names are more than one word then camel case should be used. `dogName` vs `DogName`


1. **How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?**

Arrays can be useful if you are unsure of how many items that a list will contain or when you have a long list of related values. When you have a long list of related items you can use an array instead of declaring each value as an independent variable. To change the value of an array you call the variable name followed by brackets that contain the index of the value that you would like to change, followed by the assignment operator and the new value.
```JavaScript
var dogs = ["Peaches", "Estes", "Bruce"];
dogs[2] = "Zeke";
// the array is now changed to ["Peaches", "Estes", "Zeke"]
```

1. **What is the difference between an expression and a statement?**

- **expressions** are a piece of code that results in a single value `10 - 3 = 7` or `2 + 2 = 4`.
- **statements** are actions or instructions, however they do not become values. An *if else* statement would be an example of a statement as it does not return a value.

1. **What are three types of operators and how are they used?**

- *string operators:* are used to combine two or more strings. `"firstName " + "lastName"`
- *assignment operators:* assign a value to a variable. `var firstName = "Joe";`
- *arithmetic operators:* perform basic math. `2 + 2 = 4`
