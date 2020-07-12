//I ended up using the eloquent Javascript tutorial to help me through this, I was so lost and every time I changed my code, I either built a square with repeating patterns or a triangle.
//I learned a lot, especially how to add characters to the board variable & also discovered how nested loops work in the process (and how complex they can be in building different patterns)
//I want to become more aware of what a nested loop will create BEFORE I code.
//I feel like I can only understand this through trial & error which is super frustrating as a beginner & I feel like I would get lost very easily when I would change my code & it wouldn't run

var board = ""
var num = 10    //user inputs number here

for (i = 0; i <= num; i++){
  for (j = 0; j <= num; j++) {
    if ((j + i) % 2 == 0){
      board += ("X")
  }
    else {
      board += (" ")
    }

  }board += "\n"
};
console.log(board)
