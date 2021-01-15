function checkerBoard (checkers){
  for (var i = 1; i <= checkers; i++) {
    if (i % 2 === 0){
      console.log(" x x x ");
    }else {
      console.log("x x x ");
    }
  };
}
checkerBoard(10)
