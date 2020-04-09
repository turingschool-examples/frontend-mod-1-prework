# Checkerboard walk through

For this problem, we would first need to declare two variables: one variable would relate to the size of the board (10x10, 12x12 etc) and the other would equate to an empty string to where either `X` , `' '`, or a new line is entered into the console. For example, the first part of the code might look like:
```javascript
var boardSize = 20; // or whatever number chosen by user
var boardInterface = "" // this would refer the spots on the board coded "white", "black" or new line.
```
We would then need to use a `for` iteration to form the dimension of the x and y axis relative to the `boardSize` entered by the user:
```javaScript
for (var y = 0; y < boardSize; y++) { // this is where a new line or row is being added to the y axis
  for (var x = 0; x < boardSize; x++) { // this is where a new column is created and where "X" and " " are added to the string
  }
}
```
After we determine the dimension of the board, we can now loop a string that alternates and "prints" the `X` and " " onto the boardInterface. Since we know that all index numbers in our array are either odd or even we can create a if/else command to create the pattern of the board. Finally once our pattern is created we must determine where to add a new line on our y axis.
```javaScript
    if ((x + y) % 2 == 0)}
      boardInterface += " ";
    else
      boardInterface += "X";
  }
  boardInterface += "\n"
}
```
Based on variable entered by the user, the code should be create a rectangle, along the x and y axis, equal to the value of boardSize. In this example we will set the value of `boardSize = 15` and `console.log` our results below:
```javaScript
console.log(boardInterface);
