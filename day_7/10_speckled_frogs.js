// REQUIRED:
var verbTense = ""; // establish ending verb tense variable so it can be changed depending on number of frogs
var ending = ""; // establish ending wording & punctuation variable so it can be changed depending on number of frogs

for (i = 10; i > 0; i--) {{ // create for loop counting down from 10 to 0.
  var frogsStart = i // establish starting frog number
  var frogsEnd = i - 1 }{ // establish ending frog number
  if (i >= 3) // rules are the same for starting numbers 3-10
    ((verbTense1 = " speckled frogs") && (verbTense2 = "were") && (ending = "frogs."));
  if (i === 2)
    ((verbTense1 = " speckled frogs") && (verbTense2 = "was") && (ending = "frog."));
  if (i === 1)
    ((verbTense1 = " speckled frog") && (verbTense2 = "were") && (frogsEnd = "no more") && (ending = "frogs!"));
  }
  /* Console log output within for loop so that array is printed each time */
  console.log(frogsStart + verbTense1 + " sat on a log\neating some most delicious bugs.\nOne jumped in the pool where it's nice and cool,\nthen there "+ verbTense2 + " " + frogsEnd + " speckled " + ending + "\n")
}

// EXTENSION 1 -- IN PROGRESS
// var verbTense = "";
// var ending = "";
//
// for (i = 10; i > 0; i--) {{
//   var frogsStart = i
//   var frogsEnd = i - 1 }{
//   if (i >= 3)
//     ((verbTense1 = " speckled frogs") && (verbTense2 = "were") && (ending = "frogs."));
//   if (i === 2)
//     ((verbTense1 = " speckled frogs") && (verbTense2 = "was") && (ending = "frog."));
//   if (i === 1)
//     ((verbTense1 = " speckled frog") && (verbTense2 = "were") && (frogsEnd = "no more") && (ending = "frogs!"));
//   }
//   console.log(frogsStart + verbTense1 + " sat on a log\neating some most delicious bugs.\nOne jumped in the pool where it's nice and cool,\nthen there "+ verbTense2 + " " + frogsEnd + " speckled " + ending + "\n")
// }


// EXTENSION 2
// You can make Extension 2 work by setting i = any new number in the for loop
