function numToWords (num){
  var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
  return words[num-1]
}
// the numToWords function only works for numbers between 1 and 10.
// the frogRhyme function can work for any number but numbers above 10 will be represented by number characters and not words.

function frogRhyme(totalFrogs){
  var verbTense = "were"
  var frogTense = "frogs"
  var endingPunc = "."
  for (i=totalFrogs; i>0; i--){
    if ((i-1)==1){
      verbTense = "was"
      frogTense = "frog"
    }
    if (i<=10){
      j = numToWords(i).charAt(0).toUpperCase()+numToWords(i).slice(1)
      n = numToWords(i-1)
    }
    if (i==1){
      verbTense = "were"
      frogTense = "frogs"
      n = "no more"
      endingPunc = "!"
    }
    if (i>10){
      j = i
      n = (i-1)
    }
    console.log(j+" speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where it's nice and cool,\nthen there "+verbTense+" "+n+" speckled "+frogTense+endingPunc+"\n")
  }
}

console.log(frogRhyme(15))
