// a few things come to mind right away for how I would acheive this
// the firt would be knowing I want to write a code what will print spaces and x
// both for a certain length (width of the board)
// and a for a certain number of lines (height of the board)
// I would also needing the starting spce or x to alternate by lines
// Luckily for me a checker board is square
// So I can make a board where height/length or length of line and number of lines
// actually equal the same input value from the user
// since that value is user input I would start with declaring that variable
// say var boardSize = ex. 6
// we would then want a loop that only runs for that number of times
// and produces that number of characters out of x and ' '
// this to me reads as an if else situation where x start could be odd
// and ' ' could be even times the loop has run
// and that way it won't matter if the input value is even or odd
