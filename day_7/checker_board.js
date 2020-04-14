function checkerBoard(size) {
  for (var i = 1; i <= size; i++) {
    if (i % 2 === 0){
      console.log(' X X X');
    } else {
      console.log('X X X ');
    }
  }
}

// User input in parentheses() to determine size of board:
checkerBoard(8);
