//I would go about solving this by making a function where when the value is odd, it prints one set of the checkerboards (X X X ) and when it's even,
// it prints the other( X X X). I would then ask for a value from the user and set it to a variable, where the function will run until that value is met.

function checkerboard(a) {
  for (i = 1; i <= a; i++) {
    if (i % 2 == 0) {
    console.log(" X X X")
  } else {
    console.log("X X X ")
  }
}
};
var size = window.prompt("Enter size for checkerboard");
checkerboard(size);

//This function runs in the Javascript console, but not in the terminal.
