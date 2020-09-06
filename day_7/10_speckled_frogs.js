var numberOfFrogs = 10

var numberWords = ['zero','one','two','three','four',
'five','six','seven','eight','nine', 'ten']

for (var i = numberOfFrogs; i > 0; --i) {
    console.log(`${numberWords[i]} speckled frogs sat on a log 
    eating some most delicious bugs.
    One jumped in the pool where its nice and cool,
    then there were ${numberWords[i - 1]} speckled frogs.`)
}

//add if statement for 'one' to change to 'was' and 'frog'
//write code to include numberWords up to one thousand (more than one thousand, return 'that's too many frogs, you have a problem!')
//if number > 10 add "tens index" that converts to 'teen', 'twenty', 'thirty', etc.
//if number is > 99 add "hundred index"; 
//(`${hundoIndex[k]} hundred and ${tensIndex[j]} ${numberWord[i]} `)