var monkeys = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]; //array with variables being used

for (i = 0; i < monkeys.length; i++) { //loop going through monkeys array
    console.log(monkeys[i] + " little monkeys jumping on the bed, \nOne fell off and bumped his head, \nMama called the doctor and the doctor said, \n'No more monkeys jumping on the bed!'\n")
  }; //prints through the array before moving on to the final paragraph
  {
    console.log("One little monkey jumping on the bed, \nHe fell off and bumped his head, \nMama called the doctor and the doctor said, \n'Get those monkeys right to bed!'")
}; //final paragraph

/* // <- DELETE "/*" TO SEE BONUS QUESTION OUTPUT
console.log("\nBONUS QUESTION: ")

// BONUS: The code I found for creating strings that act like integers (can
// be counted) was complex and difficult to manage, so I changed the strings
// to integers to get a result.

function monkeys(numberOfMonkeys) {
  for (var i = numberOfMonkeys; i >= 1; i--) {
    if(i > 1) {
      console.log(i + " little monkeys jumping on the bed, \nOne fell off and bumped his head, \nMama called the doctor and the doctor said, \n'No more monkeys jumping on the bed!'\n");
    } else if(i == 1) {
    console.log(i + " little monkey jumping on the bed, \nHe fell off and bumped his head, \nMama called the doctor and the doctor said, \n'Get those monkeys right to bed!'");
    } else {
      console.log();
    };
  };
};

monkeys(20)
*/
