
function checkerBoard(size) {
  var board = '';
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += 'X';
      } else {
        board += ' ';
      }
    }
    board += '\n';
  }
  console.log(board);
}

checkerBoard(13);

/*
I have been reading the Eloquent Javascript book for reinforcement as we've been
going through mod_0, and thus had already worked on this one at the end of the
2nd chapter before I got to it in the capstone. I needed some assistance on this
one, and so I referred to the solution while I was figuring it out. In order to
still submit something of worth with this problem, I added some modifications to
the code below so that the result is more square-like and visually pleasing, and
I wrote high-level notes on how it works as well. I hope that is acceptable given
the circumstances of unknowingly having already worked with the problem.

function checkerBoard(size) {
  var board = '';
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < (size * 2.5); x++) {
      if ((x + y) % 2 == 0) {
        board += '•';
      } else {
        board += ' ';
      }
    }
    board += '\n';
  }
  console.log(board);
}

checkerBoard(28);
*/
