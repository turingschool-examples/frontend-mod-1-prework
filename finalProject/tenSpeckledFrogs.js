function tenSpeckledFrogsRhyme(numberOfFrogs) {
  for (var i = numberOfFrogs; i > 3; i--) {
  let frogTotal = i;
  let oneLessFrog = i - 1;
  let twoLessFrog = i - 2;

  console.log(frogTotal + ' speckled frogs sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were ' + (oneLessFrog) + ' speckled frogs.\n\n' + (oneLessFrog) + ' speckled frogs sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there was ' + (twoLessFrog) + ' speckled frog.\n\n' + (twoLessFrog) + ' speckled frog sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were no more speckled frogs!');
  }

};

tenSpeckledFrogsRhyme(6);


//make it so the number of stanzas matches number of frogs ie 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
