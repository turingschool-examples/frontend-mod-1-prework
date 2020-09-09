var mark = "X";
var space = " ";
var size = 6;

for (var a = 1; a <= size; a++) {
  var line = ' ';

for (var b = 1; b <= size; b++) {
  if (a % 2) {
    if (b % 2) {
      line = line + space;
    } else {
      line = line + mark;
    }
  } else {
    if (b % 2) {
      line = line + mark;
    } else {
      line = line + space;
    }
  }
}
console.log(line);
}
