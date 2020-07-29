**High Level Notes:**




*Checker Board
Create a file called checker_board.js and within that file, write a program that will log a checkerboard based on the size indicated by the user. On this board, the black spaces will be represented with 'X' and the white spaces will be represented with ' '. And example of the output for a size 6 board would look like this:*



``X X X  
 X X X  
X X X  
 X X X  
X X X  
 X X X``


**High Level Notes:**

* Create variable of size and assign the value to a number of your choosing (per instructions).

* Create a variable of board and assign the value to zero.

* Create your columns by using a loop.

* Assign spacing for the board by using an if/else statement. Here, we tell it to print a # if the numbers are odd and a " " (blank space) if the numbers are even.

* Tell it to drop down after each X or " " (whichever will be at the end of the row)

* Finally, have the console log print out your board!

Code I tried after Googling for a few hours:

``var size = 16;``

 ``var space = " ";``

``for (var y = 2; y < size; y++) {``

 ``for (var x = 2; x < size; x++) {``

    if ((x + y) % 2 == 0) {
      space += " ";
    } else {
      space += "#";``
      
    ``}``
    
  ``}``
  
 ``space += "\n";``
 
``}``

``console.log(space);``

//This was a wee bit challenging in comparison to the rest for me. I've reviewed a ton of practice on these kinds of problems and while I know it probably isn't exactly on point, I do hope that it encompasses the general idea!
