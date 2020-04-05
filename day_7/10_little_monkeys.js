var index = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]

function nurseryRhyme() {
  for (i = index.length - 1; i >= 0; i--) {
  if (i === 0) {
    console.log(index[i] + " little monkey jumping on the bed\nOne fell off and bumped his head\nMama called the doctor and the doctor said\n'No more monkeys jumping on the bed!'")
  }
  else {
    console.log(index[i] + " little monkeys jumping on the bed\nOne fell off and bumped his head\nMama called the doctor and the doctor said\n'No more monkeys jumping on the bed!'")
  }
}
}

nurseryRhyme();


/*
### Bonus
Can you write the program so that it will run for any number of monkeys?
*/
