
var numberOfFrogs = 10

var numberWords = ['zero','one','two','three','four',
'five','six','seven','eight','nine', 'ten']

for (var i = numberOfFrogs; i > 0; --i) {
  console.log(`${numberWords[i]} speckled frogs sat on a log
  eating some most delicious bugs.
  One jumped in the pool where its nice and cool,
  then there were ${numberWords[i - 1]} speckled frogs.`)
}
