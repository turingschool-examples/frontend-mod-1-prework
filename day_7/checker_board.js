var evenRow = " X";
var oddRow = "X ";
var rows = 6;
var pattern = Array.from(Array(rows), (_,i) => i+1);
function evens() {
 console.log(`${evenRow.repeat(rows/2)}`)
};
function odds() {
  console.log(`${oddRow.repeat(rows/2)}`)
};

for (var i = 0; i < pattern.length; (i++)) {
  if (pattern[i]%2 == 0) {
    (pattern[i] = evens());
  }
  else{
    (pattern[i] = odds());
  };
};

//First Way I did it but doesn't accomadate for simple changes
//Variables and strings changed to prevent clash and show differences

var columns = 6;
var layout = Array.from(Array(columns), (_,i) => i+1);
  for (var i = 0; i < layout.length; i++) {
  if (layout[i] % 2 == 0) {
    console.log(layout[i] = "X_X_X_");
  }
  else{
    console.log(layout[i] = "_X_X_X");
  }
}
