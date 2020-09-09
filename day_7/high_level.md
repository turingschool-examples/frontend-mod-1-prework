# checker_board

* Create a function with variables `'X '` and `' X'`
* Take value inputed and make it run in a `for` loop the amount of times asked of it *(let's say 6)*
* Assign each of these variables to odd or even numbers
* Repeat `X ` the indicated number of times
* Send program to next line, but instead input ` X` 6 times
* Alternate between these two until the limit is hit (which is still 6 times)
*This can be acheived by using odd and even `i` values to alternate what input is used for what line*
*Use `%` operator in order to signify odd or even numbers*
* Output to a string

I have created a `checker_board.js` file with my attempt at this!

* After finalizing my script, I realized there are is a special case (1x1) to account for, as well as working around odd numbered grid sizes. To work around this, I set the if/else statements to run conditionally around both the grid size and the current `i` value
