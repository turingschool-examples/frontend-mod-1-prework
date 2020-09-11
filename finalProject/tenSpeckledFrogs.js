/*
console.log the nursery rhyme
keep the line breaks
have the number of stanzas be the number of frogs-1
change number of frogs within
last 2 stanzas are different ending lines


I could not figure out a clean way to do the change to text numbers, it seems like installing a package would be easiest; at least for ANY number of frogs.
*/

function frogRhyme(numberOfFrogs) {
  let rhyme = ''
  for (let i = numberOfFrogs; i > 0; i--) {
    let number = i
    let oneLessNumber = i - 1
    let frogText = ' speckled frog sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there '

    if (i >= 3) {
      let stanza = number + frogText + 'were ' + oneLessNumber + ' speckled frogs!\n\n';
      rhyme += stanza
    } else if (i === 2) {
      let secondLastStanza = number + frogText + 'was ' + oneLessNumber + ' speckled frogs!\n\n';
      rhyme += secondLastStanza
    } else if (i === 1) {
      let lastStanza = number + frogText +  'were no more speckled frogs!';
      rhyme += lastStanza
    }
  };
  console.log(rhyme)
};

frogRhyme(10);
