function checkerboard(size) {
    for (let i = 1; i <= size; i++) {

      if (i % 2 === 0) {
        console.log("X X X ")
      }
      else {
        console.log(" X X X")
      }
    }
}

checkerboard(7)
