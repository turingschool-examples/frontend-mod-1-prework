## Array Methods

_The following examples assume that we have created an array called `myStuff`._

        var myStuff = ["records", "guitars", "skis"];


  _For the following examples, I have omitted some steps that allow you store the removed or added items, preview change in count, or change in values for brevity._

`pop()`;    removes the last value in the array.

            To execute: `myStuff.pop();`

            To log:     `consle.log(myStuff);`

            Return:     `["records", "guitars"]`



`push()`:   will add elements to the end your array with the consecutive index values
            and return the new length

            To execute: `myStuff.push("Cookbooks", "Art");`

            To log:     `console.log(myStuff)`;

            Return:     `["records", "guitars", "Cookbooks", "Art"]`



`shift()`:  removes element from the beginning (0 index) of the array and shifts the remaining values down one

            To execute: `myStuff.shift()`;

            To log: `console.log(myStuff)`;

            Return: `("guitars", "Cookbooks", "Art")`

`unshift()`: adds one or more elements to the beginning or 0 index.

            To execute: `myStuff.unshift("bicycle")`;

            To log: `console.log(myStuff)`;

            Return: `("bicycle", "guitars", "Cookbooks", "Art")`
