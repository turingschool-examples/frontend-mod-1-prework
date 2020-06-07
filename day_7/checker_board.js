function checkerBoard(size) {
  var checkerString = "";
  for (var x = 1; x <= size; x++) {
    if(x % 2 === 0) {
      for (var y = 1; y <= size; y++) {
        var oddEven = (y % 2 === 0);
        switch (oddEven) {
          case true:
          (checkerString += "X");
          if(y % size === 0) {
            checkerString += "\n";
          };
          break;
          case false:
          (checkerString += " ");
          if(y % size === 0) {
            checkerString += "\n";
          };
          break;
        };
      };
    }else {
    for (var y = 1; y <= size; y++) {
      var oddEven = (y % 2 === 0);
      switch (oddEven) {
        case true:
        (checkerString += " ");
        if(y % size === 0) {
          checkerString += "\n";
        };
        break;
        case false:
        (checkerString += "X");
        if(y % size === 0) {
          checkerString += "\n";
        };
        break;
      };
    };
  };
};
console.log(checkerString);
};

checkerBoard(28);
