function checkerBoard(size) {
  for (i = 1; i <= size; i++) {
    var checkers = "";
    for (x = 1; x <= size; x++) {
      (x + i) % 2 === 0 ? checkers += "#" : checkers += " ";
    }
    console.log(checkers)
  }
}

checkerBoard(6);
