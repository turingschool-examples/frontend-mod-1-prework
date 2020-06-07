# Checker Board

Create a file called `checker_board.js` and within that file, write a program that will log a checkerboard based on the size *indicated by the user*.  On this board, the black spaces will be represented with 'X' and the white spaces will be represented with ' '. And example of the output for a size 6 board would look like this:

```
X X X  
 X X X  
X X X  
 X X X  
X X X  
 X X X
 ```

### Objective

To achieve this output, the goal is to create a string of "X", " ", and line breaks (\n), that will print the pattern the user is asking for. The simplest way for the user to input this information is through a function with a size parameter.

### Code Walk-through

1. Create a function with a size parameter, and create a blank string to add to within the function.

```javascript
function checkerBoard(size) { //function creation
  var checkerString = ""; //string creation

```
2. Set a loop within the function for the number of lines called for (x).

```javascript
  for (var x = 1; x <= size; x++)
  // line begins at value of 1
  // loops while line value is <= to parameter (size)
  // adds 1 to line value after every loop
```

3. The pattern created will not be the same for odd and even lines, so **if statements** are used depending on whether the line value is odd or even. Each of these statements will affect the characters within a line, so new loops are added to each **if statement** in reference to character value (y).

```javascript
    if(x % 2 === 0) { //if the line is an even number
      for (var y = 1; y <= size; y++) {
    }else { // if the line is not an even number
    for (var y = 1; y <= size; y++) {
```

4. Certain characters and line breaks will be added to the checkerString depending on whether the character value (y) is odd or even. This is run through each **if statement** from the previous step using a **conditional** statement based on a boolean value of true (shown below) and false. String additions will be "X" or " " depending on each statement.

```javascript
        var oddEven = (y % 2 === 0); //boolean determining if character is odd or even
        switch (oddEven) { //conditional statement
          case true: //if oddEven == true
          (checkerString += "X"); //add "X" to string
          if(y % size === 0) { //if character value is equal to the input (size) value
            checkerString += "\n"; //add line break to the string
          };
          break; //break the loop and continue
```

5. Once complete, the final string is printed

```javascript
console.log(checkerString);
};

checkerBoard(6);
/*expected output:
X X X
 X X X
X X X
 X X X
X X X
 X X X
*/
```
