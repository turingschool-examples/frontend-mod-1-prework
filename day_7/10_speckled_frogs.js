var numberOfFrogs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for ( i = numberOfFrogs.length - 1; i > 0; i--) {

 var numberOfSit = (numberOfFrogs[i] - 1)

  console.log( `${numberOfFrogs[i]} speckled frogs sat on a log \neating some most delicious bugs. \nOne jumped in the pool where its nice and cool,`);


if (numberOfSit > 1){
  console.log(`then there were ${numberOfSit} speckled frogs.\n`)
} else if (numberOfSit === 1) {
  console.log(`then there was ${numberOfSit} speckled frog.\n`)
} else {
  console.log(`then there were no more speckled frogs!\n`);
}




}
