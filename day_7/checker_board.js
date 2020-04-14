for (var i = 1; i <= 6; i++) {
  if (i % 2 === 0){
    console.log(" X X X");
  }else {
    console.log("X X X ");
  }
}; // works and can adjust condition to change size of it.


function drawBoxesLine1() {
    var b = 'X';
    var w = ' ';
console.log(b, w, b, w, b, w);
} function drawBoxesLine2() {
    var b = 'X';
    var w = ' ';
console.log(w, b, w, b, w, b);
}


function drawBoxesLine1() {
    var b = 'X';
    var w = ' ';
console.log(b, w, b, w, b, w, "\n", w, b, w, b, w, b);
