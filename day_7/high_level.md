### High Level Explanation - checker_board

For my high level explanation, I will tackle the checker_board.md exercise. This is one that really intrigues me because in order to eventually solve it, you will have to do a loop within a loop. Let's start breaking it down piece by piece and give explanations along the way.

### Declaring Variables

When starting with a project, it is always a good idea and broken down the fundamentals of how the project will work. The main part of this exercise is to make a checkboard where one color (x) one tile and alternates with another color (y) which represents blank space. Reading the project from left to right first (x-axis) each row will have 6 characters long. This is represented by a X followed by a space. Each alternate row will then do the opposite, starting with a blank alternated by an X. Breaking it down, here are the variables I would declare.

```javascript
var size = 6;
var checkerBoard = "";
```
With these two variables declared, we now have the starting foundation. The `size` can be used for both the rows and the columns, so we don't have to declare a separate variable for those. This also allows us to expand or decrease the size of the `checkerBoard`. The `checkerBoard` variable will be used to build and display the final output.

### Building the loops

As explained above, we will have to have a loop within a loop. This will ensure that the `checkerBoard` will have both rows and columns. In order to do this, we will declare an (x) and (y) variable inside of the loops for iteration.

```javascript
for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {

  }
}
```

This will be the central beginning for our loops. We will want to use the `size` as the limit and that is why we declared it before in the beginning. You can set the number inside of the for loop if you would like, however it makes the `checkerBoard` less flexible as if changes have to be made, you would have to change each number individually rather than just changing the variable. Now that we have this, let's start breaking down the board.

### Designing the board

In order to build the board, we will have to make sure that the (x) and (y) coordinate that we loop through should be an (X) or a blank space ( ). We can do this with a simple math equation.

```javascript
for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {
      checkerBoard += "X";
    } else {
      checkerBoard += " ";
    }
  }
}
```

With the above code, it will check for a couple of things. It's important to know that the inner loop will run many more times than the outer loop. Let's break it down below and see what is happening.

1. The first thing it will do is check the current number of x and y and add them together and then get the module for it compared to 2. The module is the remainer after x and y have been added together.
- EX: (0 + 0) = 0. 0 % 2 = 0.
1. Now that it knows that the answer from the module is 0, it will now check to see if it is equal to 0. If it is 0, it will put a `"X"` in that spot. If the answer to the module is not 0, it will add a `" "`.
1. The double loop works like this. It will first check the current number of `x` (x is representing the rows) and stay within that row. `y` represents the columns. The inner loop will run through each number of size while the x will only stay within that row number until each column has been checked. Here is the pattern of how it will run.
- X = 0, Y = 0, 1, 2, 3, 4, 5
- X = 1, Y = 0, 1, 2, 3, 4, 5
1. Depending on whether it needs to put a `X` or a `" "` there, it will do it based on the module calculation and move on until each row and column has been completed.
1. It is important to note that we want the `checkerBoard` variable to be one large string, thus the reason why each time it completes a step within the loop, we do `checkerBoard +=`. Missing this step will only doing `checkerBoard =` will always overwrite the previous line that you just made.

### Finishing the checkerBoard

At this point, while it may seem like the exercise has been finished, we will want to add 2 more lines of code to ensure that it breaks to a new row and prints the board to be shown.

```javascript
var size = 6;
var checkerBoard = "";

for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {
      checkerBoard += "X";
    } else {
      checkerBoard += " ";
    }
  }
  checkerBoard += "\n";
}

console.log(checkerBoard);
```

1. The first line to be added is the `checkerBoard += "\n"`. We want to add this _AFTER_ the end of the y loop and _BEFORE_ the end of the x loop. This will make sure that it add a newline before the start of the next row, otherwise the `checkerBoard` will just be one large string.
1. The second line to be added is `console.log(checkboard)`. We want to print what the board looks like after both loops have finished so we can see the finished product!
